import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { PageHero, PrimaryButton, TextLink } from "@/components/ui";
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

  return (
    <>
      <PageHero
        label={t(locale, ui.freshElements.heroLabel)}
        title={t(locale, ui.freshElements.heroTitle)}
        description={t(locale, ui.freshElements.heroDescription)}
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            {t(locale, ui.freshElements.intro)}
          </p>
          <TextLink href={localizedHref(locale, "/portfolio")}>
            {t(locale, ui.freshElements.backToPortfolio)}
          </TextLink>
        </div>

        <div className="mt-12 grid gap-14">
          {freshElementsBrand.productLines.map((line) => {
            const lineId = line.id as FreshElementsLineId;
            const products = lineId ? freshElementsProductsForLine(lineId) : [];

            return (
              <Reveal key={line.label.en}>
                <section>
                  <p className="text-xs font-bold tracking-wider text-orange uppercase">
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

                  {products.length > 0 ? (
                    <ProductGrid products={products} locale={locale} />
                  ) : (
                    <div className="mt-6 rounded-2xl border border-dashed border-line bg-surface p-6 md:p-8">
                      <p className="text-sm leading-relaxed text-slate">
                        {t(locale, ui.freshElements.lineComingSoon)}
                      </p>
                      <div className="mt-5">
                        <PrimaryButton href={localizedHref(locale, "/contact")}>
                          {t(locale, ui.freshElements.inquireLine)}
                        </PrimaryButton>
                      </div>
                    </div>
                  )}
                </section>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
