"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const organization = String(data.get("organization") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Business Link inquiry — ${interest || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nInterest: ${interest}\n\n${message}`,
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-white p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-black">Name</span>
          <input
            required
            name="name"
            className="mt-1.5 w-full rounded-md border border-border px-3 py-2.5 outline-none transition focus:border-navy"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-black">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-1.5 w-full rounded-md border border-border px-3 py-2.5 outline-none transition focus:border-navy"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm">
        <span className="font-medium text-black">Organization</span>
        <input
          name="organization"
          className="mt-1.5 w-full rounded-md border border-border px-3 py-2.5 outline-none transition focus:border-navy"
        />
      </label>

      <label className="mt-4 block text-sm">
        <span className="font-medium text-black">I am interested in</span>
        <select
          name="interest"
          className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 outline-none transition focus:border-navy"
          defaultValue="New market development"
        >
          <option>New market development</option>
          <option>Product distribution</option>
          <option>Strategic sourcing</option>
          <option>Partnership inquiry</option>
          <option>Other</option>
        </select>
      </label>

      <label className="mt-4 block text-sm">
        <span className="font-medium text-black">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1.5 w-full resize-y rounded-md border border-border px-3 py-2.5 outline-none transition focus:border-navy"
          placeholder="Tell us about the product, market, or partnership you want to explore."
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-hover"
      >
        Send inquiry
      </button>

      {submitted ? (
        <p className="mt-3 text-sm text-muted">
          Your email client should open with the inquiry drafted. If it does not, email{" "}
          {company.email} directly.
        </p>
      ) : null}
    </form>
  );
}
