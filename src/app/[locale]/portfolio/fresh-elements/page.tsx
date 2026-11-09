import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductGroups } from "@/components/ProductGroups";
import { Reveal } from "@/components/Reveal";
import { PageHero, TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import {
  freshElementsBrand,
  freshElementsProductsForLine,
  type FreshElementsLineId,
} from "@/lib/brands";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/fresh-elements">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.freshElements.metaTitle),
    description: t(locale, ui.freshElements.metaDescription),
    alternates: localeAlternates("/portfolio/fresh-elements"),
  };
}

export default async function FreshElementsCatalogPage({
  params,
}: PageProps<"/[locale]/portfolio/fresh-elements">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  // A line only appears once it has products, so visitors never land on an empty one.
  const lines = freshElementsBrand.productLines
    .map((line) => ({
      line,
      products: line.id ? freshElementsProductsForLine(line.id as FreshElementsLineId) : [],
    }))
    .filter(({ products }) => products.length > 0);

  return (
    <>
      <PageHero
        label={t(locale, ui.freshElements.heroLabel)}
        title={t(locale, ui.freshElements.heroTitle)}
        description={t(locale, ui.freshElements.heroDescription)}
        logoSrc={freshElementsBrand.logo}
        logoAlt={freshElementsBrand.name}
      />

      <section className="mx-auto max-w-7xl px-5 pt-6 pb-12 md:px-8 md:pt-8 md:pb-16">
        <TextLink href={localizedHref(locale, "/portfolio")}>
          {t(locale, ui.freshElements.backToPortfolio)}
        </TextLink>

        <ProductGroups
          className="mt-4 sm:mt-6"
          label={t(locale, ui.categoryPage.productGroups)}
          groups={lines.map(({ line, products }) => {
            return {
              id: line.label.en,
              label: t(locale, line.label),
              count: products.length,
              content: (
              <Reveal>
                <section>
                  <p className="text-xs font-bold tracking-wider text-gold-ink uppercase">
                    {t(locale, ui.common.ownBrand)}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {t(locale, line.label)}
                  </h2>
                  {line.detail ? (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
                      {t(locale, line.detail)}
                    </p>
                  ) : null}

                  <ProductGrid products={products} locale={locale} />
                </section>
              </Reveal>
              ),
            };
          })}
        />
      </section>
    </>
  );
}
