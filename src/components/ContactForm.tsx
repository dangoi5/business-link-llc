"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { company } from "@/lib/content";

export function ContactForm() {
  const searchParams = useSearchParams();
  const audience = searchParams.get("audience");
  const [submitted, setSubmitted] = useState(false);

  const defaultInterest = useMemo(() => {
    if (audience === "manufacturer") return "New market development";
    if (audience === "buyer") return "Product distribution";
    return "New market development";
  }, [audience]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const organization = String(data.get("organization") || "");
    const phone = String(data.get("phone") || "");
    const interest = String(data.get("interest") || "");
    const product = String(data.get("product") || "");
    const destination = String(data.get("destination") || "");
    const volume = String(data.get("volume") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Business Link inquiry — ${interest || "General"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization}`,
        `Phone: ${phone}`,
        `Interest: ${interest}`,
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
      <p className="text-sm font-semibold text-teal">
        {audience === "manufacturer"
          ? "Manufacturer / brand inquiry"
          : audience === "buyer"
            ? "Buyer / distributor inquiry"
            : "Request pricing or availability"}
      </p>
      <p className="mt-1 text-sm text-slate">
        The more precise the information, the faster the commercial evaluation.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
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

      <label className="mt-4 block text-sm">
        <span className="font-medium text-ink">I am interested in</span>
        <select
          key={defaultInterest}
          name="interest"
          className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none transition focus:border-teal"
          defaultValue={defaultInterest}
        >
          <option>New market development</option>
          <option>Product distribution</option>
          <option>Strategic sourcing</option>
          <option>Partnership inquiry</option>
          <option>Other</option>
        </select>
      </label>

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
          placeholder="Example: shelf-stable proteins, Caribbean destination, distributor partnership"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
      >
        Request a quote
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
