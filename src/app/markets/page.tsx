import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionLabel } from "@/components/ui";
import {
  activeMarkets,
  distributionPoints,
  marketsInDevelopment,
  regions,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Business Link LLC's international market footprint across the Americas, Caribbean, Africa, Europe and Asia-Pacific.",
};

export default function MarketsPage() {
  const byRegion = regions.map((region) => ({
    region,
    markets: activeMarkets.filter((market) => market.region === region),
  }));

  return (
    <>
      <PageHero
        label="Markets"
        title="Commercial relationships activated by opportunity."
        description="Business Link has developed a network of commercial relationships and strategic partners across the Americas, Caribbean, Africa, Europe and Asia-Pacific."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="max-w-3xl text-base leading-relaxed text-slate md:text-lg">
            Our footprint provides access to local market knowledge and commercial, import,
            distribution, warehousing and logistics resources that can be activated according to the
            requirements of each opportunity.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {byRegion.map(({ region, markets }) =>
            markets.length ? (
              <Reveal key={region}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <h2 className="text-lg font-bold text-teal">{region}</h2>
                  <ul className="mt-4 space-y-2">
                    {markets.map((market) => (
                      <li key={market.name} className="flex items-center gap-2 text-sm text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                        {market.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null,
          )}
        </div>

        <Reveal className="mt-12 rounded-2xl border border-dashed border-line bg-surface p-6 md:p-8">
          <SectionLabel>Markets in development</SectionLabel>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
            Active evaluation where commercial structure, compliance and logistics pathways are being
            established.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {marketsInDevelopment.map((market) => (
              <span
                key={market.name}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink border border-line"
              >
                {market.name}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel light>Distribution</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Not every market requires the same distribution model.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {distributionPoints.map((point) => (
              <Reveal key={point.title}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <h3 className="text-lg font-bold text-orange">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/contact" className="text-sm font-semibold text-orange hover:underline">
              Discuss a market opportunity →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
