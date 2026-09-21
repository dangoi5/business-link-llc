import { Resend } from "resend";
import { company } from "@/lib/content";

export const runtime = "nodejs";

const MAX = {
  name: 120,
  email: 200,
  organization: 160,
  phone: 80,
  product: 160,
  destination: 160,
  volume: 120,
  message: 5000,
  role: 40,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ROLES = new Set(["manufacturer", "buyer", "other"]);
const ROLE_LABELS: Record<string, string> = {
  manufacturer: "Manufacturer",
  buyer: "Buyer",
  other: "Other",
};

function asString(value: unknown, max: number) {
  return String(value ?? "")
    .replaceAll("\u0000", "")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  if (asString(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = asString(body.name, MAX.name);
  const email = asString(body.email, MAX.email);
  const organization = asString(body.organization, MAX.organization);
  const phone = asString(body.phone, MAX.phone);
  const product = asString(body.product, MAX.product);
  const destination = asString(body.destination, MAX.destination);
  const volume = asString(body.volume, MAX.volume);
  const message = asString(body.message, MAX.message);
  const role = asString(body.role, MAX.role);
  const locale = asString(body.locale, 8);

  if (!name || !EMAIL_RE.test(email) || !message || !ROLES.has(role)) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || company.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Business Link LLC <onboarding@resend.dev>";
  const roleLabel = ROLE_LABELS[role] ?? role;

  const fields: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Organization", organization || "—"],
    ["Phone", phone || "—"],
    ["I am a", roleLabel],
    ["Product", product || "—"],
    ["Destination", destination || "—"],
    ["Volume", volume || "—"],
    ["Form language", locale || "en"],
  ];

  const text = `${fields.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\n${message}`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5;color:#111">
      <p>New inquiry from the Business Link website.</p>
      <table style="border-collapse:collapse">
        ${fields
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>
    </div>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Business Link inquiry — ${roleLabel} — ${name}`,
    text,
    html,
  });

  if (error) {
    console.error("contact email failed", error.name);
    return Response.json({ error: "send_failed" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
