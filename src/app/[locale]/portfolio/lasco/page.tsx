import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { PageHero, TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { lascoGroups } from "@/lib/lasco-catalog";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/lasco">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.lasco.metaTitle),
    description: t(locale, ui.lasco.metaDescription),
    alternates: localeAlternates("/portfolio/lasco"),
  };
}

export default async function LascoCatalogPage({
  params,
}: PageProps<"/[locale]/portfolio/lasco">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.lasco.heroLabel)}
        title={t(locale, ui.lasco.heroTitle)}
        description={t(locale, ui.lasco.heroDescription)}
        logoSrc="/brands/lasco.png"
        logoAlt="Lasco"
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            {t(locale, ui.lasco.intro)}
          </p>
          <TextLink href={localizedHref(locale, "/portfolio")}>
            {t(locale, ui.lasco.backToPortfolio)}
          </TextLink>
        </div>

        <div className="mt-12 grid gap-14">
          {lascoGroups.map((group) => (
            <section key={group.id}>
              <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {t(locale, group.label)}
              </h2>
              <ProductGrid products={group.products} locale={locale} />
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
