import type { Metadata } from "next";
import Image from "next/image";
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
        label="Portfolio"
        title="Food categories built for international distribution."
        description="Categories prepared for retail, foodservice, food industry and international trade, with a focus on B2B supply and commercial response."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8">
          {portfolioCategories.map((category, index) => (
            <Reveal key={category.slug}>
              <article
                id={category.slug}
                className="scroll-mt-28 grid overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-2"
              >
                <div className={`relative min-h-[240px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="text-xs font-bold tracking-wider text-orange uppercase">
                    Category {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">{category.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-slate">{category.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.channels.map((channel) => (
                      <span
                        key={channel}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-2xl bg-teal p-8 text-white md:p-10">
          <h3 className="text-2xl font-bold">Looking for a specific product range?</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Share your category, volume profile and target markets. We evaluate sourcing and
            distribution opportunities against our network and active routes to market.
          </p>
          <div className="mt-6">
            <TextLink href="/contact">
              <span className="text-orange hover:underline">Discuss a portfolio opportunity →</span>
            </TextLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
