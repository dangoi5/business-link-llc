import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Manufacturers, brands, distributors and logistics partners working with Business Link LLC across international markets.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Selected manufacturers, brands, and strategic partners."
        description="We work with partners whose capabilities complement the markets and opportunities we develop—building commercially sustainable relationships that create value for manufacturers, distribution partners and customers."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {partners.map((partner) => (
            <Reveal key={partner.type}>
              <div className="border-t border-border pt-5">
                <h2 className="text-lg font-semibold tracking-[-0.02em] text-black">
                  {partner.type}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                  {partner.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">
            Featured brands & partners
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Selected manufacturers and brands whose capabilities align with the markets we develop.
            Partner marks appear here as commercial relationships and brand approvals allow.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex h-24 items-center justify-center rounded-md border border-border bg-surface text-xs text-muted/60"
              >
                Logo
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-col gap-6 rounded-lg bg-navy p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">
              Become a distribution partner
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              Importers and distributors with established local coverage can explore product
              opportunities aligned to their channels and market demand.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-white/90"
          >
            Partner with us
          </Link>
        </Reveal>
      </section>
    </>
  );
}
