import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionLabel } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import {
  activeMarkets,
  distributionPoints,
  marketsInDevelopment,
  regionLabels,
  regions,
} from "@/lib/content";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/markets">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.marketsPage.metaTitle),
    description: t(locale, ui.marketsPage.metaDescription),
    alternates: localeAlternates("/markets"),
  };
}

export default async function MarketsPage({ params }: PageProps<"/[locale]/markets">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const byRegion = regions.map((region) => ({
    region,
    markets: activeMarkets.filter((market) => market.region === region),
  }));

  return (
    <>
      <PageHero
        label={t(locale, ui.marketsPage.heroLabel)}
        title={t(locale, ui.marketsPage.heroTitle)}
        description={t(locale, ui.marketsPage.heroDescription)}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="max-w-3xl text-base leading-relaxed text-slate md:text-lg">
            {t(locale, ui.marketsPage.intro)}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {byRegion.map(({ region, markets }) =>
            markets.length ? (
              <Reveal key={region}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <h2 className="text-lg font-bold text-teal">{t(locale, regionLabels[region])}</h2>
                  <ul className="mt-4 space-y-2">
                    {markets.map((market) => (
                      <li key={market.name.en} className="flex items-center gap-2 text-sm text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                        {t(locale, market.name)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null,
          )}
        </div>

        <Reveal className="mt-12 rounded-2xl border border-dashed border-line bg-surface p-6 md:p-8">
          <SectionLabel>{t(locale, ui.marketsPage.inDevelopment)}</SectionLabel>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
            {t(locale, ui.marketsPage.inDevelopmentBody)}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {marketsInDevelopment.map((market) => (
              <span
                key={market.name.en}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink border border-line"
              >
                {t(locale, market.name)}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel light>{t(locale, ui.marketsPage.distribution)}</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              {t(locale, ui.marketsPage.distributionTitle)}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {distributionPoints.map((point) => (
              <Reveal key={point.title.en}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <h3 className="text-lg font-bold text-orange">{t(locale, point.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{t(locale, point.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href={localizedHref(locale, "/contact")}
              className="text-sm font-semibold text-orange hover:underline"
            >
              {t(locale, ui.marketsPage.discussMarket)}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
