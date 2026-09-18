"use client";

import { FormEvent, useState } from "react";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";
import { company } from "@/lib/content";

const roleKeys = ["manufacturer", "buyer", "other"] as const;

export function ContactForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<(typeof roleKeys)[number]>("manufacturer");
  const roleLabels = {
    manufacturer: t(locale, ui.form.manufacturer),
    buyer: t(locale, ui.form.buyer),
    other: t(locale, ui.form.other),
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const organization = String(data.get("organization") || "");
    const phone = String(data.get("phone") || "");
    const product = String(data.get("product") || "");
    const destination = String(data.get("destination") || "");
    const volume = String(data.get("volume") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`${t(locale, ui.form.mailSubject)} ${roleLabels[role]}`);
    const body = encodeURIComponent(
      [
        `${t(locale, ui.form.mailName)}: ${name}`,
        `${t(locale, ui.form.mailEmail)}: ${email}`,
        `${t(locale, ui.form.mailOrganization)}: ${organization}`,
        `${t(locale, ui.form.mailPhone)}: ${phone}`,
        `${t(locale, ui.form.mailRole)}: ${roleLabels[role]}`,
        `${t(locale, ui.form.mailProduct)}: ${product}`,
        `${t(locale, ui.form.mailDestination)}: ${destination}`,
        `${t(locale, ui.form.mailVolume)}: ${volume}`,
        "",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold text-teal">{t(locale, ui.form.sendInquiry)}</p>
      <p className="mt-1 text-sm text-slate">{t(locale, ui.form.intro)}</p>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">{t(locale, ui.form.iAmA)}</legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {roleKeys.map((option) => {
            const selected = role === option;
            return (
              <label
                key={option}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-sm font-semibold transition ${
                  selected
                    ? "border-teal bg-teal/10 text-teal"
                    : "border-line text-slate hover:border-teal/40"
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
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.email)}</span>
          <input
            required
            type="email"
            name="email"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.organization)}</span>
          <input
            name="organization"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.phone)}</span>
          <input
            name="phone"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.product)}</span>
          <input
            name="product"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.destination)}</span>
          <input
            name="destination"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">{t(locale, ui.form.volume)}</span>
          <input
            name="volume"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm">
        <span className="font-medium text-ink">{t(locale, ui.form.message)}</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1.5 w-full resize-y rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          placeholder={t(locale, ui.form.placeholder)}
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
      >
        {t(locale, ui.form.submit)}
      </button>

      {submitted ? (
        <p className="mt-3 text-sm text-slate">
          {t(locale, ui.form.submitted)} {company.email} {t(locale, ui.form.submittedAfter)}
        </p>
      ) : null}
    </form>
  );
}
