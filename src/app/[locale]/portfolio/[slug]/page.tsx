import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { PrimaryButton, TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, locales, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { getCategoryBySlug, portfolioCategories } from "@/lib/content";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    portfolioCategories.map((category) => ({ locale, slug: category.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/[slug]">): Promise<Metadata> {
  const { slug, locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const category = getCategoryBySlug(slug);
  if (!category) return { title: t(locale, ui.categoryPage.fallbackTitle) };
  return {
    title: t(locale, category.title),
    description: t(locale, category.summary),
    alternates: localeAlternates(`/portfolio/${slug}`),
  };
}

export default async function PortfolioCategoryPage({
  params,
}: PageProps<"/[locale]/portfolio/[slug]">) {
  const { slug, locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const otherCategories = portfolioCategories.filter((item) => item.slug !== category.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={t(locale, category.title)}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12">
          <p className="eyebrow text-orange">
            <span>{t(locale, ui.portfolioPage.heroLabel)}</span>
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t(locale, category.title)}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {t(locale, category.summary)}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {category.channels.map((channel) => (
              <span
                key={channel.en}
                className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate"
              >
                {t(locale, channel)}
              </span>
            ))}
          </div>
          <TextLink href={localizedHref(locale, "/portfolio")}>
            {t(locale, ui.categoryPage.allCategories)}
          </TextLink>
        </div>

        {slug === "foodservice-institutional" ? (
          <Link
            href={localizedHref(locale, "/portfolio/ameriqual-military")}
            className="mt-10 block overflow-hidden rounded-2xl border border-line bg-white transition hover:shadow-lg hover:shadow-ink/5"
          >
            <div className="grid md:grid-cols-[minmax(0,14rem)_1fr]">
              <div className="relative min-h-40 bg-ink">
                <Image
                  src="/ameriqual-military/us-flag-bg.jpg"
                  alt=""
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 224px"
                />
                <div className="absolute inset-0 bg-ink/40" />
                <div className="relative flex h-full items-center justify-center p-6">
                  <div className="relative h-24 w-40">
                    <Image
                      src="/ameriqual-military/us-military-seals.png"
                      alt=""
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-bold tracking-wider text-orange uppercase">AmeriQual Foods</p>
                <h2 className="mt-2 text-xl font-bold text-ink md:text-2xl">
                  {t(locale, ui.ameriqualMilitary.bannerTitle)}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
                  {t(locale, ui.ameriqualMilitary.bannerBody)}
                </p>
                <p className="mt-4 text-sm font-semibold text-teal">
                  {t(locale, ui.ameriqualMilitary.bannerCta)}
                </p>
              </div>
            </div>
          </Link>
        ) : null}

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {t(locale, ui.categoryPage.products)}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            {t(locale, ui.categoryPage.productsIntro)}
          </p>
        </div>

        {category.products.length > 0 ? (
          <ProductGrid products={category.products} locale={locale} />
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-line bg-surface p-8 md:p-10">
            <h3 className="text-lg font-bold text-ink">{t(locale, ui.categoryPage.comingSoonTitle)}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate">
              {t(locale, ui.categoryPage.comingSoonBody)}
            </p>
            <div className="mt-6">
              <PrimaryButton href={localizedHref(locale, "/contact")}>
                {t(locale, ui.categoryPage.inquire)}
              </PrimaryButton>
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-line pt-10">
          <h3 className="text-lg font-bold text-ink">{t(locale, ui.categoryPage.otherCategories)}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherCategories.map((item) => (
              <Link
                key={item.slug}
                href={localizedHref(locale, `/portfolio/${item.slug}`)}
                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:border-teal hover:text-teal"
              >
                {t(locale, item.title)}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
