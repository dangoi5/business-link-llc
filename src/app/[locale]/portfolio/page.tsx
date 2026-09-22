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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCategories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 40}>
              <Link
                href={localizedHref(locale, `/portfolio/${category.slug}`)}
                id={category.slug}
                className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:border-teal"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={category.image}
                    alt={t(locale, category.title)}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold tracking-tight text-ink">
                    {t(locale, category.title)}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate">
                    {t(locale, category.summary)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.channels.map((channel) => (
                      <span
                        key={channel.en}
                        className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-slate"
                      >
                        {t(locale, channel)}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 text-sm font-semibold text-teal transition group-hover:text-teal-deep">
                    {t(locale, ui.portfolioPage.viewProducts)} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-2xl bg-teal p-8 text-white md:p-10">
          <h3 className="text-2xl font-bold">{t(locale, ui.portfolioPage.lookingTitle)}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            {t(locale, ui.portfolioPage.lookingBody)}
          </p>
          <div className="mt-6">
            <TextLink href={localizedHref(locale, "/contact")}>
              <span className="text-orange hover:underline">
                {t(locale, ui.portfolioPage.discussPortfolio)}
              </span>
            </TextLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
