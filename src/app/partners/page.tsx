import type { Metadata } from "next";
import Link from "next/link";
import { BrandsWeRepresent } from "@/components/BrandsWeRepresent";
import { Reveal } from "@/components/Reveal";
import { PageHero, PrimaryButton } from "@/components/ui";
import { ownBrand, partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Brands we represent—including AmeriQual, Star Grocery, Tronix, Lasco and Camagüey—plus Fresh Elements and strategic partners working with Business Link LLC.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Partners & brands"
        title="Our brand, manufacturers and strategic partners."
        description="Business Link is a master distributor and exporter. We market our own Fresh Elements line and work with partners whose capabilities complement the markets we develop."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="rounded-2xl border border-line bg-teal p-8 text-white md:flex md:items-center md:justify-between md:gap-10 md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-orange">{ownBrand.tagline}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">{ownBrand.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                {ownBrand.description}
              </p>
            </div>
            <div className="mt-6 shrink-0 md:mt-0">
              <PrimaryButton href="/portfolio">View portfolio</PrimaryButton>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {partners
            .filter((partner) => partner.type !== "Fresh Elements")
            .map((partner, index) => (
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

        <div className="mt-16 border-t border-line pt-16">
          <BrandsWeRepresent />
        </div>

        <Reveal className="mt-16 flex flex-col gap-6 rounded-2xl bg-ink p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold">Become a distribution partner</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              Importers and distributors with established local coverage can explore Fresh Elements
              and partner-brand opportunities aligned to their channels and market demand.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
          >
            Partner with us
          </Link>
        </Reveal>
      </section>
    </>
  );
}
