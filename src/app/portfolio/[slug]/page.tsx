import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PrimaryButton, TextLink } from "@/components/ui";
import { getCategoryBySlug, portfolioCategories } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.title,
    description: category.summary,
  };
}

export default async function PortfolioCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const otherCategories = portfolioCategories.filter((item) => item.slug !== category.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12">
          <p className="eyebrow text-orange">
            <span>Portfolio</span>
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            {category.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {category.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {category.channels.map((channel) => (
              <span
                key={channel}
                className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate"
              >
                {channel}
              </span>
            ))}
          </div>
          <TextLink href="/portfolio">← All categories</TextLink>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Products</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            Selected products in this category. Ask us for availability, packaging options, and
            destination-market fit.
          </p>
        </div>

        {category.products.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 50}>
                <article className="overflow-hidden rounded-2xl border border-line bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={product.imageFit === "contain" ? "object-contain bg-[#f7f4ee]" : "object-cover"}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-ink">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{product.description}</p>
                    {product.details && product.details.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.details.map((detail) => (
                          <span
                            key={detail}
                            className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-slate"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-line bg-surface p-8 md:p-10">
            <h3 className="text-lg font-bold text-ink">Products coming soon</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate">
              Product names, images, and descriptions for this category will appear here as they are
              added. Contact us in the meantime to discuss sourcing or distribution opportunities.
            </p>
            <div className="mt-6">
              <PrimaryButton href="/contact">Inquire about this category</PrimaryButton>
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-line pt-10">
          <h3 className="text-lg font-bold text-ink">Other categories</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:border-teal hover:text-teal"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
