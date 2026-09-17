import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHero, TextLink } from "@/components/ui";
import { portfolioCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Business Link LLC's international food portfolio across shelf-stable foods, oils & fats, foodservice, grocery and snacks.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Food categories built for international distribution."
        description="Our growing international food portfolio combines established manufacturers, selected brands and sourcing capabilities serving retail, distribution, foodservice and institutional markets."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="divide-y divide-border border-y border-border">
          {portfolioCategories.map((category, index) => (
            <Reveal key={category.slug}>
              <article id={category.slug} className="scroll-mt-24 grid gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-12">
                <div className="md:col-span-4">
                  <p className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-black">
                    {category.title}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.channels.map((channel) => (
                      <span key={channel} className="rounded bg-surface px-2.5 py-1 text-xs text-muted">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base leading-relaxed text-muted md:text-lg">{category.summary}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Developed according to destination-market demand, regulatory fit, logistics
                    profile, and the commercial structure required for sustainable distribution.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-lg border border-border bg-surface p-8 md:p-10">
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">
            Looking for a specific product range?
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Share your category, volume profile, and target markets. We evaluate sourcing and
            distribution opportunities against our network and active routes to market.
          </p>
          <div className="mt-5">
            <TextLink href="/contact">Discuss a portfolio opportunity →</TextLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
