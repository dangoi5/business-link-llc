import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHero, TextLink } from "@/components/ui";
import { capabilities, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "International business development, market development, distribution execution and strategic sourcing from Business Link LLC.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Active market development—not introductions alone."
        description="Business Link takes an active role in identifying opportunities, developing markets, structuring commercial relationships and supporting their execution and growth."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="divide-y divide-border border-y border-border">
          {capabilities.map((item, index) => (
            <Reveal key={item.slug}>
              <article className="grid gap-4 py-10 md:grid-cols-12 md:gap-10 md:py-12">
                <div className="md:col-span-4">
                  <p className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-black md:text-2xl">
                    {item.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base leading-relaxed text-muted md:text-lg">{item.summary}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <Reveal>
            <p className="text-sm font-medium text-navy">Process</p>
            <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-black md:text-3xl">
              From opportunity to market
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Each engagement is evaluated across product, market, commercial structure, and route
              to market.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <Reveal key={step.step}>
                <p className="text-xs font-medium text-muted">{step.step}</p>
                <h3 className="mt-2 text-base font-semibold text-black">{step.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <TextLink href="/contact">Talk through an opportunity →</TextLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
