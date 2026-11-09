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

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-16">
          <BrandsWeRepresent locale={locale} />
        </div>

        <Reveal className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {t(locale, ui.portfolioPage.foodCategories)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            {t(locale, ui.portfolioPage.foodCategoriesBody)}
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {portfolioCategories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 40}>
              <Link
                href={localizedHref(locale, `/portfolio/${category.slug}`)}
                id={category.slug}
                className="group flex h-full scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white transition hover:border-brand sm:flex-col"
              >
                <div className="relative w-28 shrink-0 overflow-hidden bg-surface sm:aspect-square sm:w-full">
                  <Image
                    src={category.image}
                    alt={t(locale, category.title)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 639px) 112px, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-base font-bold tracking-tight text-ink sm:text-lg">
                    {t(locale, category.title)}
                  </h3>
                  <p className="mt-1 line-clamp-2 flex-1 text-sm leading-relaxed text-slate sm:mt-2 sm:line-clamp-3">
                    {t(locale, category.summary)}
                  </p>
                  <div className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
                    {category.channels.map((channel) => (
                      <span
                        key={channel.en}
                        className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-slate"
                      >
                        {t(locale, channel)}
                      </span>
                    ))}
                  </div>
                  <span className="mt-2 text-sm font-semibold text-brand transition group-hover:text-brand-deep sm:mt-4">
                    {t(locale, ui.portfolioPage.viewProducts)} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-2xl bg-brand p-8 text-white md:p-10">
          <h3 className="text-2xl font-bold">{t(locale, ui.portfolioPage.lookingTitle)}</h3>
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
