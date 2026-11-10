import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandsWeRepresent } from "@/components/BrandsWeRepresent";
import { Reveal } from "@/components/Reveal";
import { PageHero, TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { portfolioCategories } from "@/lib/content";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.portfolioPage.metaTitle),
    description: t(locale, ui.portfolioPage.metaDescription),
    alternates: localeAlternates("/portfolio"),
  };
}

export default async function PortfolioPage({ params }: PageProps<"/[locale]/portfolio">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.portfolioPage.heroLabel)}
        title={t(locale, ui.portfolioPage.heroTitle)}
        description={t(locale, ui.portfolioPage.heroDescription)}
      />

      <section className="mx-auto max-w-7xl px-5 pt-10 pb-16 md:px-8 md:pt-12 md:pb-24">
        <Reveal className="mb-6">
          <h2 className="display type-3 text-ink">
            {t(locale, ui.portfolioPage.foodCategories)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            {t(locale, ui.portfolioPage.foodCategoriesBody)}
          </p>
        </Reveal>

        {/*
          Every category gets an identical tile and they are all visible together:
          stacked rows on phones, 3 + 2 centered on tablets, one row on desktop.
        */}
        <div className="grid gap-3 sm:gap-4 sm:max-lg:grid-cols-6 sm:max-lg:[&>*]:col-span-2 sm:max-lg:[&>:nth-last-child(2):nth-child(3n+1)]:col-start-2 lg:grid-cols-5">
          {portfolioCategories.map((category) => (
            <Reveal key={category.slug}>
              <Link
                href={localizedHref(locale, `/portfolio/${category.slug}`)}
                id={category.slug}
                className="group flex h-full min-h-24 scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-200 hover:border-brand sm:flex-col"
              >
                <div className="relative w-24 shrink-0 overflow-hidden bg-surface sm:aspect-square sm:w-full">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 639px) 96px, (max-width: 1023px) 33vw, 240px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-4 sm:justify-between">
                  <h3 className="text-base leading-snug font-bold tracking-tight break-words text-ink">
                    {t(locale, category.title)}
                  </h3>
                  <span className="text-sm font-semibold text-brand transition-colors duration-200 group-hover:text-brand-deep">
                    {t(locale, ui.portfolioPage.viewProducts)} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <BrandsWeRepresent locale={locale} />
        </div>

        <Reveal className="mt-14 rounded-2xl bg-brand p-8 text-white md:p-10">
          <h3 className="display type-3">{t(locale, ui.portfolioPage.lookingTitle)}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            {t(locale, ui.portfolioPage.lookingBody)}
          </p>
          <div className="mt-6">
            <TextLink href={localizedHref(locale, "/contact")}>
              <span className="text-gold hover:underline">
                {t(locale, ui.portfolioPage.discussPortfolio)}
              </span>
            </TextLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
