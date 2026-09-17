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
        label="Partners"
        title="Selected manufacturers, brands and strategic partners."
        description="We work with partners whose capabilities complement the markets and opportunities we develop—building commercially sustainable relationships."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2">
          {partners.map((partner, index) => (
            <Reveal key={partner.type} delay={index * 50}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <p className="text-xs font-bold text-orange">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-xl font-bold text-ink">{partner.type}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                  {partner.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-ink">Featured brands & partners</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            Partner marks appear here as commercial relationships and brand approvals allow.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex h-24 items-center justify-center rounded-xl border border-line bg-surface text-xs font-medium text-slate/50"
              >
                Logo
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-col gap-6 rounded-2xl bg-ink p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold">Become a distribution partner</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              Importers and distributors with established local coverage can explore product
              opportunities aligned to their channels and market demand.
            </p>
          </div>
          <Link
            href="/contact?audience=buyer"
            className="inline-flex shrink-0 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
          >
            Partner with us
          </Link>
        </Reveal>
      </section>
    </>
  );
}
