import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  PrimaryButton,
  SecondaryButton,
  SectionHeading,
  SectionLabel,
  TextLink,
} from "@/components/ui";
import { isLocale, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import {
  activeMarkets,
  buyerServices,
  company,
  heroHighlights,
  images,
  manufacturerServices,
  ownBrand,
  portfolioCategories,
  regionCards,
  regionLabels,
} from "@/lib/content";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden bg-ink">
        <Image
          src={images.hero}
          alt={t(locale, ui.home.heroAlt)}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-32 md:justify-center md:px-8 md:pb-36">
          <SectionLabel light>{t(locale, ui.home.heroLabel)}</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
            {t(locale, ui.home.heroTitle1)}
            <br />
            {t(locale, ui.home.heroTitle2)}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {t(locale, ui.home.heroBody)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href={localizedHref(locale, "/portfolio")}>
              {t(locale, ui.home.requestPortfolio)}
            </PrimaryButton>
            <SecondaryButton href={localizedHref(locale, "/contact")} light>
              {t(locale, ui.home.letsWork)}
            </SecondaryButton>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">{activeMarkets.length}+</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-white/70 uppercase">
                {t(locale, ui.home.activeMarkets)}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">{portfolioCategories.length}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-white/70 uppercase">
                {t(locale, ui.home.productCategories)}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">5</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-white/70 uppercase">
                {t(locale, ui.home.worldRegions)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-14 px-5 md:-mt-16 md:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-ink/10 md:grid-cols-3">
          {heroHighlights.map((item) => (
            <div
              key={item.title.en}
              className="border-b border-line p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8"
            >
              <h3 className="text-base font-bold text-teal">{t(locale, item.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{t(locale, item.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel>{t(locale, ui.home.whoWeAre)}</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {t(locale, ui.home.whoTitle)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
              {t(locale, company.description)}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">{t(locale, company.role)}</p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              {t(locale, ui.home.whoAlongside)}{" "}
              <Link href={localizedHref(locale, "/portfolio/fresh-elements")} className="font-semibold text-ink underline decoration-orange/60 underline-offset-4 hover:text-teal">
                {ownBrand.name}
              </Link>
              {t(locale, ui.home.whoAlongsideAfter)}
            </p>
            <div className="mt-8">
              <TextLink href={localizedHref(locale, "/capabilities")}>
                {t(locale, ui.home.learnCapabilities)}
              </TextLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={images.about}
                alt={t(locale, ui.home.aboutAlt)}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                label={t(locale, ui.home.portfolioLabel)}
                title={t(locale, ui.home.portfolioTitle)}
                description={t(locale, ui.home.portfolioDescription)}
              />
              <TextLink href={localizedHref(locale, "/portfolio")}>
                {t(locale, ui.home.explorePortfolio)}
              </TextLink>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioCategories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 60}>
                <article className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:shadow-lg hover:shadow-ink/5">
                  <Link href={localizedHref(locale, `/portfolio/${category.slug}`)} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={t(locale, category.title)}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-ink group-hover:text-teal">
                        {t(locale, category.title)}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">
                        {t(locale, category.summary)}
                      </p>
                    </div>
                  </Link>
                  <div className="border-t border-line px-5 py-4">
                    <Link
                      href={localizedHref(locale, `/portfolio/${category.slug}`)}
                      className="text-sm font-semibold text-orange transition hover:text-orange-hover"
                    >
                      {t(locale, ui.home.viewProducts)}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <Image src={images.markets} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              light
              label={t(locale, ui.home.marketsLabel)}
              title={t(locale, ui.home.marketsTitle)}
              description={t(locale, ui.home.marketsDescription)}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {regionCards.map((card) => (
              <Reveal key={card.region}>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <h3 className="font-bold text-white">{t(locale, regionLabels[card.region])}</h3>
                  <p className="mt-2 text-sm text-white/65">{t(locale, card.detail)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              href={localizedHref(locale, "/markets")}
              className="text-sm font-semibold text-orange hover:underline"
            >
              {t(locale, ui.home.viewFootprint)}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            label={t(locale, ui.home.gatewayLabel)}
            title={t(locale, ui.home.gatewayTitle)}
            description={t(locale, ui.home.gatewayDescription)}
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-8">
              <p className="text-sm font-bold text-orange">{t(locale, ui.home.forManufacturers)}</p>
              <h3 className="mt-2 text-2xl font-bold text-ink">{t(locale, ui.home.expandMarkets)}</h3>
              <ul className="mt-6 space-y-5">
                {manufacturerServices.map((service) => (
                  <li key={service.title.en}>
                    <p className="font-semibold text-ink">{t(locale, service.title)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">
                      {t(locale, service.description)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PrimaryButton href={localizedHref(locale, "/contact")}>
                  {t(locale, ui.common.contactUs)}
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-line bg-teal p-8 text-white">
              <p className="text-sm font-bold text-orange">{t(locale, ui.home.forBuyers)}</p>
              <h3 className="mt-2 text-2xl font-bold">{t(locale, ui.home.sourceSupply)}</h3>
              <ul className="mt-6 space-y-5">
                {buyerServices.map((service) => (
                  <li key={service.title.en}>
                    <p className="font-semibold">{t(locale, service.title)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">
                      {t(locale, service.description)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href={localizedHref(locale, "/contact")}
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal transition hover:bg-white/90"
                >
                  {t(locale, ui.common.contactUs)}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-xl">
            <SectionLabel light>{t(locale, ui.home.letsWork)}</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t(locale, ui.home.ctaTitle)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">{t(locale, ui.home.ctaBody)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href={localizedHref(locale, "/contact")}>
              {t(locale, ui.common.getInTouch)}
            </PrimaryButton>
            <SecondaryButton href={localizedHref(locale, "/portfolio")} light>
              {t(locale, ui.home.viewPortfolio)}
            </SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
