import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { GhostButton, PrimaryButton, SectionHeading, TextLink } from "@/components/ui";
import {
  activeMarkets,
  capabilities,
  company,
  portfolioCategories,
  processSteps,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 md:px-8 md:py-24 lg:py-28">
            <p className="text-sm font-medium text-navy">{company.subtitle}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-black md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Developing businesses.
              <br />
              Building markets.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
              {company.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/capabilities">What we do</PrimaryButton>
              <GhostButton href="/portfolio">View portfolio</GhostButton>
            </div>
          </div>
          <div className="relative min-h-[280px] bg-navy md:min-h-full">
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white md:p-10">
              <p className="text-sm text-white/70">Business Link LLC</p>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                  International food & beverage trade
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                  Connecting manufacturers, brands, and distributors across the Americas, Caribbean,
                  Africa, Europe, and Asia-Pacific.
                </p>
              </div>
              <div className="flex gap-6 text-sm text-white/60">
                <span>12+ markets</span>
                <span>5 product categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="We go beyond market introductions."
            description="Business Link takes an active role in identifying opportunities, developing markets, structuring commercial relationships, and supporting their execution and growth."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {capabilities.map((item) => (
            <Reveal key={item.slug}>
              <div className="border-t border-border pt-5">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                  {item.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <TextLink href="/capabilities">Learn more about our capabilities →</TextLink>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="From opportunity to market"
              description="Business Link approaches each opportunity as a business to be developed—not simply a transaction."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <Reveal key={step.step}>
                <div>
                  <p className="text-xs font-medium text-muted">{step.step}</p>
                  <h3 className="mt-2 text-base font-semibold text-black">{step.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Portfolio"
              title="International food categories"
              description="Established manufacturers, selected brands, and sourcing capabilities for retail, distribution, foodservice, and institutional markets."
            />
            <TextLink href="/portfolio">Explore portfolio →</TextLink>
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {portfolioCategories.map((category) => (
            <Reveal key={category.slug}>
              <Link
                href={`/portfolio#${category.slug}`}
                className="group flex flex-col gap-3 py-5 transition md:flex-row md:items-center md:justify-between md:py-6"
              >
                <div className="max-w-xl">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-black group-hover:text-navy">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{category.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {category.channels.map((channel) => (
                    <span
                      key={channel}
                      className="rounded bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Markets"
              title="Active commercial footprint"
              description="Local market knowledge plus import, distribution, warehousing, and logistics resources activated by opportunity."
            />
          </Reveal>

          <Reveal className="mt-10">
            <div className="flex flex-wrap gap-2">
              {activeMarkets.map((market) => (
                <span
                  key={market.name}
                  className="rounded-md border border-border px-3 py-1.5 text-sm text-black"
                >
                  {market.name}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <TextLink href="/markets">View markets & distribution →</TextLink>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Ready to evaluate an opportunity?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              Manufacturers seeking new markets, distributors looking for products, or organizations
              with sourcing requirements—we want to hear from you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-white px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-white/90"
            >
              Contact us
            </Link>
            <Link
              href="/partners"
              className="inline-flex rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/60"
            >
              Our partners
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
