import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading, TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { akhanGroups } from "@/lib/akhan-catalog";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/akhan">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.akhan.metaTitle),
    description: t(locale, ui.akhan.metaDescription),
    alternates: localeAlternates("/portfolio/akhan"),
  };
}

export default async function AkhanCatalogPage({
  params,
}: PageProps<"/[locale]/portfolio/akhan">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.akhan.heroLabel)}
        title={t(locale, ui.akhan.heroTitle)}
        description={t(locale, ui.akhan.heroDescription)}
        logoSrc="/brands/akhan-logo.png"
        logoAlt="Akhan Makarna"
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <p className="max-w-3xl text-base leading-relaxed text-slate md:text-lg">
            {t(locale, ui.akhan.intro)}
          </p>
          <TextLink href={localizedHref(locale, "/portfolio")}>
            {t(locale, ui.akhan.backToPortfolio)}
          </TextLink>
        </div>

        <div className="mt-16">
          <SectionHeading label={t(locale, ui.akhan.whyLabel)} title={t(locale, ui.akhan.whyTitle)} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ui.akhan.highlights.map((item) => (
              <Reveal key={item.title.en}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <h3 className="text-lg font-bold text-ink">{t(locale, item.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{t(locale, item.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="rounded-2xl bg-ink px-7 py-10 text-white md:px-12 md:py-12">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t(locale, ui.akhan.americasTitle)}</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
              {ui.akhan.americasBody.map((p) => (
                <p key={p.en}>{t(locale, p)}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <h2 className="display mt-20 text-3xl text-ink md:text-[2.75rem]">{t(locale, ui.akhan.rangeTitle)}</h2>

        <div className="mt-10 grid gap-14">
          {akhanGroups.map((group) => (
            <section key={group.id}>
              <h3 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {t(locale, group.label)}
              </h3>
              <ProductGrid products={group.products} locale={locale} />
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
