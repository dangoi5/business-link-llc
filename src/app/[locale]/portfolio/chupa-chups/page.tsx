import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { PageHero, TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { chupaChupsProducts } from "@/lib/chupa-chups-catalog";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/chupa-chups">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.chupaChups.metaTitle),
    description: t(locale, ui.chupaChups.metaDescription),
    alternates: localeAlternates("/portfolio/chupa-chups"),
  };
}

export default async function ChupaChupsCatalogPage({
  params,
}: PageProps<"/[locale]/portfolio/chupa-chups">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.chupaChups.heroLabel)}
        title={t(locale, ui.chupaChups.heroTitle)}
        description={t(locale, ui.chupaChups.heroDescription)}
        logoSrc="/brands/chupa-chups-logo.png"
        logoAlt="Chupa Chups"
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            {t(locale, ui.chupaChups.intro)}
          </p>
          <TextLink href={localizedHref(locale, "/portfolio")}>
            {t(locale, ui.chupaChups.backToPortfolio)}
          </TextLink>
        </div>

        <ProductGrid products={chupaChupsProducts} locale={locale} />
      </section>
    </>
  );
}
