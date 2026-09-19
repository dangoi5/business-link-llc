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
          <BrandsWeRepresent locale={locale} includeOwnBrand={false} />
        </div>

        <Reveal className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {t(locale, ui.portfolioPage.foodCategories)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            {t(locale, ui.portfolioPage.foodCategoriesBody)}
          </p>
        </Reveal>

        <div className="grid gap-8">
          {portfolioCategories.map((category, index) => (
            <Reveal key={category.slug}>
              <article
                id={category.slug}
                className="scroll-mt-28 grid overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-2"
              >
                <div className={`relative min-h-[240px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={category.image}
                    alt={t(locale, category.title)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="text-xs font-bold tracking-wider text-orange uppercase">
                    {t(locale, ui.portfolioPage.categoryPrefix)} {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
                    {t(locale, category.title)}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate">{t(locale, category.summary)}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.channels.map((channel) => (
                      <span
                        key={channel.en}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate"
                      >
                        {t(locale, channel)}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7">
                    <Link
                      href={localizedHref(locale, `/portfolio/${category.slug}`)}
                      className="inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-hover"
                    >
                      {t(locale, ui.portfolioPage.viewProducts)}
                    </Link>
                  </div>
                </div>
              </article>
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
