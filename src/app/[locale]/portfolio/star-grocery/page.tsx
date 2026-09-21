import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { PageHero, TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { starGroceryFamilyCovers } from "@/lib/star-grocery-catalog";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/star-grocery">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.starGrocery.metaTitle),
    description: t(locale, ui.starGrocery.metaDescription),
    alternates: localeAlternates("/portfolio/star-grocery"),
  };
}

export default async function StarGroceryCatalogPage({
  params,
}: PageProps<"/[locale]/portfolio/star-grocery">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.starGrocery.heroLabel)}
        title={t(locale, ui.starGrocery.heroTitle)}
        description={t(locale, ui.starGrocery.heroDescription)}
        logoSrc="/brands/star-grocery.png"
        logoAlt="Star Grocery LLC"
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            {t(locale, ui.starGrocery.intro)}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <TextLink href={localizedHref(locale, "/portfolio")}>
              {t(locale, ui.starGrocery.backToPortfolio)}
            </TextLink>
            <a
              href="/catalogs/star-grocery-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-teal transition hover:text-teal-deep"
            >
              {t(locale, ui.starGrocery.viewPdf)} →
            </a>
          </div>
        </div>

        <ProductGrid products={starGroceryFamilyCovers} locale={locale} />
      </section>
    </>
  );
}
