import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionLabel } from "@/components/ui";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Business Link LLC to discuss market development, distribution, sourcing and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's build your next market opportunity."
        description="Tell us what product, volume and destination you need—or which markets you want to enter. We will evaluate the opportunity and respond."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
        <Reveal>
          <SectionLabel>Why reach out</SectionLabel>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">
            Manufacturers, buyers and partners
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate md:text-base">
            <li className="rounded-xl border border-line bg-surface p-4">
              Manufacturers and brands seeking structured international market access
            </li>
            <li className="rounded-xl border border-line bg-surface p-4">
              Distributors and importers looking for curated product opportunities
            </li>
            <li className="rounded-xl border border-line bg-surface p-4">
              Organizations with defined sourcing or supply-chain requirements
            </li>
          </ul>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-line p-4">
              <p className="text-xs font-bold tracking-wide text-orange uppercase">Response</p>
              <p className="mt-1 text-sm font-semibold text-ink">Commercial follow-up</p>
            </div>
            <div className="rounded-xl border border-line p-4">
              <p className="text-xs font-bold tracking-wide text-orange uppercase">Focus</p>
              <p className="mt-1 text-sm font-semibold text-ink">Food & beverage trade</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-ink p-6 text-white">
            <p className="text-sm font-medium text-white/60">Email</p>
            <a href={`mailto:${company.email}`} className="mt-2 block text-lg font-semibold text-orange hover:underline">
              {company.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
