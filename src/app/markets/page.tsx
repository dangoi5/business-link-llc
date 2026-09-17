import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
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
        eyebrow="Markets"
        title="Commercial relationships activated by opportunity."
        description="Business Link has developed a network of commercial relationships and strategic partners across the Americas, Caribbean, Africa, Europe and Asia-Pacific."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            Our footprint provides access to local market knowledge and commercial, import,
            distribution, warehousing and logistics resources that can be activated according to the
            requirements of each opportunity.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {byRegion.map(({ region, markets }) =>
            markets.length ? (
              <Reveal key={region}>
                <h2 className="text-sm font-medium text-navy">{region}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {markets.map((market) => (
                    <span
                      key={market.name}
                      className="rounded-md border border-border px-3 py-1.5 text-sm text-black"
                    >
                      {market.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            ) : null,
          )}
        </div>

        <Reveal className="mt-14 border-t border-border pt-10">
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">
            Markets in development
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Active evaluation where commercial structure, compliance, and logistics pathways are
            being established.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {marketsInDevelopment.map((market) => (
              <span
                key={market.name}
                className="rounded-md border border-dashed border-border bg-surface px-3 py-1.5 text-sm text-muted"
              >
                {market.name}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <Reveal>
            <p className="text-sm font-medium text-navy">Distribution</p>
            <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-black md:text-3xl">
              Not every market requires the same distribution model.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {distributionPoints.map((point) => (
              <Reveal key={point.title}>
                <h3 className="text-base font-semibold text-black">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link href="/contact" className="text-sm font-medium text-navy hover:underline">
              Discuss a market opportunity →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
