"use client";

import { FormEvent, useId, useState } from "react";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";
import { PhoneField } from "@/components/PhoneField";

const roleKeys = ["manufacturer", "buyer", "other"] as const;

const MAX = {
  name: 120,
  email: 200,
  organization: 160,
  phone: 80,
  product: 160,
  destination: 160,
  volume: 120,
  message: 5000,
} as const;

export function ContactForm({
  locale,
  defaultRole = "manufacturer",
}: {
  locale: Locale;
  defaultRole?: (typeof roleKeys)[number];
}) {
  const statusId = useId();
  const [phoneKey, setPhoneKey] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [role, setRole] = useState<(typeof roleKeys)[number]>(defaultRole);
  const roleLabels = {
    manufacturer: t(locale, ui.form.manufacturer),
    buyer: t(locale, ui.form.buyer),
    other: t(locale, ui.form.other),
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          organization: String(data.get("organization") || ""),
          phone: String(data.get("phone") || ""),
          product: String(data.get("product") || ""),
          destination: String(data.get("destination") || ""),
          volume: String(data.get("volume") || ""),
          message: String(data.get("message") || ""),
          role,
          locale,
          website: String(data.get("website") || ""),
        }),
      });

      if (!response.ok) {
        throw new Error("send_failed");
      }

      form.reset();
      setPhoneKey((key) => key + 1);
      setRole(defaultRole);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="relative rounded-xl border border-line bg-white p-6 shadow-sm shadow-ink/5 md:p-8"
      aria-describedby={status !== "idle" ? statusId : undefined}
    >
      <p className="text-sm font-semibold text-brand">{t(locale, ui.form.sendInquiry)}</p>
      <p className="mt-1 text-sm text-slate">{t(locale, ui.form.intro)}</p>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
      />

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">{t(locale, ui.form.iAmA)}</legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {roleKeys.map((option) => {
            const selected = role === option;
            return (
              <label
                key={option}
                className={`cursor-pointer rounded-lg border px-3 py-3 text-center has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/40 text-sm font-semibold transition ${
                  selected
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-line text-slate hover:border-brand/40"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value={option}
                  checked={selected}
                  onChange={() => setRole(option)}
                  className="sr-only"
                />
                {roleLabels[option]}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.name)}</span>
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={MAX.name}
            minLength={2}
            disabled={status === "sending"}
            className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/25 disabled:opacity-70"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.email)}</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={MAX.email}
            disabled={status === "sending"}
            className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/25 disabled:opacity-70"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.organization)}</span>
          <input
            name="organization"
            autoComplete="organization"
            maxLength={MAX.organization}
            disabled={status === "sending"}
            className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/25 disabled:opacity-70"
          />
        </label>
        <PhoneField
          key={phoneKey}
          locale={locale}
          disabled={status === "sending"}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.product)}</span>
          <input
            name="product"
            maxLength={MAX.product}
            disabled={status === "sending"}
            className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/25 disabled:opacity-70"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.destination)}</span>
          <input
            name="destination"
            maxLength={MAX.destination}
            disabled={status === "sending"}
            className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/25 disabled:opacity-70"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.volume)}</span>
          <input
            name="volume"
            maxLength={MAX.volume}
            disabled={status === "sending"}
            className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/25 disabled:opacity-70"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm">
        <span className="font-medium text-ink">{t(locale, ui.form.message)}</span>
        <textarea
          required
          name="message"
          rows={5}
          minLength={10}
          maxLength={MAX.message}
          disabled={status === "sending"}
          className="mt-1.5 w-full resize-y rounded-lg border border-line px-3 py-2.5 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/25 disabled:opacity-70"
          placeholder={t(locale, ui.form.placeholder)}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
        className="mt-6 inline-flex rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-ink transition duration-200 hover:bg-gold-hover active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? t(locale, ui.form.sending) : t(locale, ui.form.submit)}
      </button>

      <div id={statusId} aria-live="polite" aria-atomic="true" role="status">
        {status === "sent" ? (
          <p className="mt-3 text-sm font-medium text-brand">{t(locale, ui.form.success)}</p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-sm font-medium text-red-700">{t(locale, ui.form.error)}</p>
        ) : null}
      </div>
    </form>
  );
}
