"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/content";

const roles = ["Manufacturer", "Buyer", "Other"] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<(typeof roles)[number]>("Manufacturer");

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

    const subject = encodeURIComponent(`Business Link inquiry — ${role}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization}`,
        `Phone: ${phone}`,
        `I am a: ${role}`,
        `Product: ${product}`,
        `Destination: ${destination}`,
        `Volume: ${volume}`,
        "",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold text-teal">Send an inquiry</p>
      <p className="mt-1 text-sm text-slate">
        The more precise the information, the faster the commercial evaluation.
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">I am a</legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {roles.map((option) => {
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
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">Name</span>
          <input
            required
            name="name"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Email</span>
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
          <span className="font-medium text-ink">Organization</span>
          <input
            name="organization"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">WhatsApp / Phone</span>
          <input
            name="phone"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="font-medium text-ink">Product of interest</span>
          <input
            name="product"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Destination market</span>
          <input
            name="destination"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Estimated volume</span>
          <input
            name="volume"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm">
        <span className="font-medium text-ink">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1.5 w-full resize-y rounded-xl border border-line px-3 py-2.5 outline-none transition focus:border-teal"
          placeholder="Tell us about the product, market, or partnership you want to explore."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
      >
        Send inquiry
      </button>

      {submitted ? (
        <p className="mt-3 text-sm text-slate">
          Your email client should open with the inquiry drafted. If it does not, email{" "}
          {company.email} directly.
        </p>
      ) : null}
    </form>
  );
}
