import { Resend } from "resend";
import { z } from "zod";
import { company } from "@/lib/content";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 50_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const ROLE_LABELS = {
  manufacturer: "Fabricante / Manufacturer",
  buyer: "Comprador / Buyer",
  other: "Otro / Other",
} as const;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  organization: z.string().trim().max(160).optional().default(""),
  phone: z.string().trim().max(80).optional().default(""),
  product: z.string().trim().max(160).optional().default(""),
  destination: z.string().trim().max(160).optional().default(""),
  volume: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10).max(5000),
  role: z.enum(["manufacturer", "buyer", "other"]),
  locale: z.enum(["en", "es", "it"]).optional().default("en"),
  website: z.string().max(200).optional().default(""),
});

type RateBucket = { count: number; resetAt: number };

const rateBuckets = new Map<string, RateBucket>();

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count += 1;
  return true;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function dash(value: string) {
  return value.trim() ? value : "—";
}

function localeLabel(locale: string) {
  if (locale === "es") return "Español (/es/contact)";
  if (locale === "it") return "Italiano (/it/contact)";
  return "English (/en/contact)";
}

function buildEmail(payload: z.infer<typeof contactSchema>, submittedAt: string) {
  const roleLabel = ROLE_LABELS[payload.role];
  const fields: [string, string][] = [
    ["Fecha y hora / Submitted", submittedAt],
    ["Nombre / Name", payload.name],
    ["Empresa / Company", dash(payload.organization)],
    ["Correo / Email", payload.email],
    ["Teléfono / WhatsApp", dash(payload.phone)],
    ["Motivo / Contact reason", roleLabel],
    ["Producto de interés / Product", dash(payload.product)],
    ["País / mercado destino / Destination", dash(payload.destination)],
    ["Volumen estimado / Volume", dash(payload.volume)],
    ["Idioma / página / Locale", localeLabel(payload.locale)],
  ];

  const text = [
    "Nueva consulta desde el sitio web de Business Link LLC",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Mensaje / Message:",
    payload.message,
  ].join("\n");

  const rows = fields
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e6ebe8;color:#5b6b63;font-size:13px;width:38%;vertical-align:top">${escapeHtml(label)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e6ebe8;color:#10241c;font-size:14px;font-weight:600;vertical-align:top">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="es">
<body style="margin:0;padding:0;background:#f4f7f5;font-family:Arial,Helvetica,sans-serif;color:#10241c">
  <div style="max-width:640px;margin:0 auto;padding:28px 16px">
    <div style="background:#10241c;border-radius:16px 16px 0 0;padding:22px 24px">
      <p style="margin:0;color:#f97316;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">Business Link LLC</p>
      <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3">Nueva consulta web</h1>
    </div>
    <div style="background:#ffffff;border:1px solid #d7e0db;border-top:0;border-radius:0 0 16px 16px;overflow:hidden">
      <p style="margin:0;padding:18px 24px 8px;color:#5b6b63;font-size:14px;line-height:1.5">
        Se recibió una nueva consulta desde el sitio web. Puede responder directamente a este correo (Reply-To = email del visitante).
      </p>
      <table style="width:100%;border-collapse:collapse;margin:8px 0 0">${rows}</table>
      <div style="padding:18px 24px 24px">
        <p style="margin:0 0 8px;color:#0f766e;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Mensaje</p>
        <div style="white-space:pre-wrap;background:#f4f7f5;border:1px solid #d7e0db;border-radius:12px;padding:14px 16px;color:#10241c;font-size:14px;line-height:1.55">${escapeHtml(payload.message)}</div>
      </div>
    </div>
    <p style="margin:16px 8px 0;color:#7a8a82;font-size:12px;line-height:1.4">
      Enviado automáticamente por el formulario de contacto de BusinessLink Website.
    </p>
  </div>
</body>
</html>`;

  return { text, html, roleLabel };
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "payload_too_large" }, { status: 413 });
  }

  if (!checkRateLimit(clientIp(request))) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  if (typeof raw !== "object" || raw === null) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: pretend success so bots do not retry.
  const website = String((raw as Record<string, unknown>).website ?? "").trim();
  if (website) {
    return Response.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || company.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !fromEmail) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const submittedAt = new Intl.DateTimeFormat("es-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(new Date());

  const { text, html, roleLabel } = buildEmail(parsed.data, submittedAt);
  const from = `BusinessLink Website <${fromEmail}>`;
  const subject = `Nueva consulta web — ${parsed.data.name} — ${roleLabel}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: parsed.data.email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("contact email failed", error.name);
      return Response.json({ error: "send_failed" }, { status: 500 });
    }
  } catch {
    console.error("contact email failed");
    return Response.json({ error: "send_failed" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
