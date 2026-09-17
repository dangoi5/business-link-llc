import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
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
        eyebrow="Contact"
        title="Let's develop the opportunity."
        description="Whether you are a manufacturer seeking new markets, a distributor looking for new products, or an organization with a specific sourcing requirement—we evaluate opportunities where our network and execution can create sustainable business."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">
            Who typically reaches out
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <li className="border-l-2 border-navy pl-4">
              Manufacturers and brands seeking structured international market access
            </li>
            <li className="border-l-2 border-navy pl-4">
              Distributors and importers looking for curated product opportunities
            </li>
            <li className="border-l-2 border-navy pl-4">
              Organizations with defined sourcing or supply-chain requirements
            </li>
          </ul>
          <div className="mt-10 rounded-lg border border-border bg-surface p-5">
            <p className="text-sm font-medium text-black">Email</p>
            <a
              href={`mailto:${company.email}`}
              className="mt-2 block text-base text-navy hover:underline"
            >
              {company.email}
            </a>
            <p className="mt-2 text-xs text-muted">
              Update this address in site content when you have the preferred inbox ready.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
