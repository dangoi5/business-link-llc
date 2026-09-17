import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionLabel } from "@/components/ui";
import { buyerServices, capabilities, manufacturerServices, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Master distribution, export, Fresh Elements own brand, market development and sourcing from Business Link LLC.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        label="Capabilities"
        title="Master distribution, export and market development."
        description="Business Link operates as a master distributor and exporter—supporting partner brands and our own Fresh Elements line with market development, distribution and sourcing."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <Reveal key={item.slug} delay={index * 50}>
              <article className="h-full rounded-2xl border border-line bg-white p-7 md:p-8">
                <p className="text-xs font-bold text-orange">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-xl font-bold text-ink md:text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">{item.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate/80">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>How we work</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              From opportunity to market
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <Reveal key={step.step}>
                <div className="rounded-2xl border border-line bg-white p-5">
                  <p className="text-xs font-bold text-orange">{step.step}</p>
                  <h3 className="mt-2 font-bold text-ink">{step.label}</h3>
                  <p className="mt-2 text-sm text-slate">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-line p-8">
              <h3 className="text-xl font-bold text-ink">For manufacturers</h3>
              <ul className="mt-5 space-y-4">
                {manufacturerServices.map((s) => (
                  <li key={s.title}>
                    <p className="font-semibold text-teal">{s.title}</p>
                    <p className="mt-1 text-sm text-slate">{s.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-line p-8">
              <h3 className="text-xl font-bold text-ink">For buyers</h3>
              <ul className="mt-5 space-y-4">
                {buyerServices.map((s) => (
                  <li key={s.title}>
                    <p className="font-semibold text-teal">{s.title}</p>
                    <p className="mt-1 text-sm text-slate">{s.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-10 text-center">
          <Link href="/contact" className="text-sm font-semibold text-orange hover:underline">
            Talk through an opportunity →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
