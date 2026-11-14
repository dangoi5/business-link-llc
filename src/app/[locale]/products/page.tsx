import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCatalogSection } from "@/components/ProductCatalogSection";
import { PageHero } from "@/components/ui";
import { isLocale, localeAlternates, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";

export async function generateMetadata({ params }: PageProps<"/[locale]/products">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.catalog.metaTitle),
    description: t(locale, ui.catalog.metaDescription),
    alternates: localeAlternates("/products"),
  };
}

export default async function ProductsPage({ params }: PageProps<"/[locale]/products">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.catalog.heroLabel)}
        title={t(locale, ui.catalog.heroTitle)}
        description={t(locale, ui.catalog.heroDescription)}
      />

      <section className="bg-[#f6f4ef]">
        <div className="mx-auto max-w-[96rem] px-5 py-10 md:px-8 md:py-14">
          <ProductCatalogSection locale={locale} />
        </div>
      </section>
    </>
  );
}
