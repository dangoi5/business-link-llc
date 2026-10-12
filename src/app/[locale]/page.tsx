import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarketsMap } from "@/components/MarketsMap";
import { Reveal } from "@/components/Reveal";
import { PrimaryButton, SectionHeading, TextLink } from "@/components/ui";
import { isLocale, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { representedBrands } from "@/lib/brands";
import {
  activeMarkets,
  buyerServices,
  company,
  images,
  manufacturerServices,
  portfolioCategories,
  regionCards,
  regionLabels,
} from "@/lib/content";

const packshots = {
  oil: "/products/fresh-elements/palm-oil-blend.jpg",
  chips: "/products/fresh-elements/platanitos.jpg",
  spread: "/products/fresh-elements/do-it-all-spread-v2.jpg",
};

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const contactHref = localizedHref(locale, "/contact");
  const logos = representedBrands.filter((brand) => brand.logo);

  const audiences = [
    {
      id: "buyers",
      kicker: ui.home.forBuyers,
      title: ui.home.sourceSupply,
      items: buyerServices,
      cta: ui.common.getInTouch,
      href: `${contactHref}?role=buyer`,
    },
    {
      id: "manufacturers",
      kicker: ui.home.forManufacturers,
      title: ui.home.expandMarkets,
      items: manufacturerServices,
      cta: ui.home.heroSupplier,
      href: `${contactHref}?role=manufacturer`,
    },
  ];

  return (
    <>
      <section className="bg-white pt-[4.5rem]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:px-8 lg:min-h-[calc(100dvh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-16">
          <div>
            <h1 className="display max-w-[16ch] text-[2.6rem] text-ink sm:text-6xl xl:text-7xl">
              {t(locale, ui.home.heroTitle)}
            </h1>
            <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-slate md:text-lg">
              {t(locale, ui.home.heroBody)}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <PrimaryButton href={`${contactHref}?role=buyer`}>{t(locale, ui.common.getInTouch)}</PrimaryButton>
              <Link
                href={`${contactHref}?role=manufacturer`}
                className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-brand"
              >
                {t(locale, ui.home.heroSupplier)}
              </Link>
            </div>
          </div>

          <div className="relative aspect-[5/6] overflow-hidden rounded-xl bg-ink sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={images.hero}
              alt={t(locale, ui.home.heroAlt)}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section aria-label={t(locale, ui.home.brandsHeading)} className="border-y border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:px-8 lg:flex-row lg:items-center lg:gap-12">
          <p className="shrink-0 text-sm font-semibold text-ink">{t(locale, ui.home.brandsHeading)}</p>
          <ul className="grid flex-1 grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {logos.map((brand) => (
              <li key={brand.slug} className="flex h-10 items-center justify-center">
                <Image
                  src={brand.logo as string}
                  alt={brand.name}
                  width={160}
                  height={64}
                  className="h-full w-auto max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              title={t(locale, ui.home.portfolioTitle)}
              description={t(locale, ui.home.portfolioDescription)}
            />
            <div className="mt-6">
              <TextLink href={localizedHref(locale, "/portfolio")}>{t(locale, ui.home.explorePortfolio)}</TextLink>
            </div>
          </Reveal>

          <ul className="divide-y divide-line border-y border-line">
            {portfolioCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={localizedHref(locale, `/portfolio/${category.slug}`)}
                  className="group grid grid-cols-[5.5rem_1fr_auto] items-center gap-5 py-5 transition-colors duration-200 hover:bg-surface sm:grid-cols-[7rem_1fr_auto] sm:gap-7 sm:px-3"
                >
                  <span className="relative block aspect-square overflow-hidden rounded-lg bg-surface">
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </span>
                  <span>
                    <span className="display block text-xl text-ink md:text-2xl">{t(locale, category.title)}</span>
                    <span className="mt-1 line-clamp-2 block max-w-[52ch] text-sm leading-relaxed text-slate">
                      {t(locale, category.summary)}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-xl text-slate transition duration-200 group-hover:translate-x-1 group-hover:text-ink"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <div className="grid h-[28rem] grid-cols-7 grid-rows-2 gap-3 sm:h-[36rem] md:gap-4">
              <div className="relative col-span-3 row-span-2 overflow-hidden rounded-xl bg-white">
                <Image
                  src={packshots.oil}
                  alt="Fresh Elements Palm Oil Blend, 900 ml bottle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 28vw"
                />
              </div>
              <div className="relative col-span-4 overflow-hidden rounded-xl bg-white">
                <Image
                  src={packshots.chips}
                  alt="Fresh Elements Platanitos plantain chips, salt and chile limón"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 33vw"
                />
              </div>
              <div className="relative col-span-4 overflow-hidden rounded-xl bg-white">
                <Image
                  src={packshots.spread}
                  alt="Fresh Elements Do-It-All table and cooking spread"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 33vw"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-3xl text-ink md:text-5xl">{t(locale, ui.home.freshTitle)}</h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-slate md:text-lg">
              {t(locale, ui.home.freshBody)}
            </p>
            <div className="mt-8">
              <PrimaryButton href={localizedHref(locale, "/portfolio/fresh-elements")}>
                {t(locale, ui.home.freshCta)}
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="display max-w-[22ch] text-3xl text-ink md:text-5xl">
            {t(locale, ui.home.footprintTitle)
              .replace("{n}", String(activeMarkets.length))
              .replace("{r}", String(new Set(activeMarkets.map((market) => market.region)).size))}
          </h2>
        </Reveal>
        <div className="mt-10">
          <MarketsMap locale={locale} variant="light" />
        </div>
        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {regionCards.map((card) => (
            <li key={card.region} className="border-t border-ink pt-4">
              <p className="display text-xl text-ink">{t(locale, regionLabels[card.region])}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate">{t(locale, card.detail)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <TextLink href={localizedHref(locale, "/markets")}>{t(locale, ui.home.viewFootprint)}</TextLink>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title={t(locale, ui.home.gatewayTitle)} description={t(locale, ui.home.gatewayDescription)} />
          </Reveal>
          <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-0">
            {audiences.map((audience, index) => (
              <Reveal
                key={audience.id}
                delay={index * 80}
                className={index === 0 ? "lg:border-r lg:border-line lg:pr-14" : "lg:pl-14"}
              >
                <div id={audience.id} className="scroll-mt-28">
                  <p className="text-sm font-semibold text-gold-ink">{t(locale, audience.kicker)}</p>
                  <h3 className="display mt-2 text-3xl text-ink">{t(locale, audience.title)}</h3>
                  <dl className="mt-8 space-y-6">
                    {audience.items.map((service) => (
                      <div key={service.title.en}>
                        <dt className="font-semibold text-ink">{t(locale, service.title)}</dt>
                        <dd className="mt-1 max-w-[56ch] text-sm leading-relaxed text-slate">
                          {t(locale, service.description)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-9">
                    {index === 0 ? (
                      <PrimaryButton href={audience.href}>{t(locale, audience.cta)}</PrimaryButton>
                    ) : (
                      <Link
                        href={audience.href}
                        className="inline-flex rounded-lg border border-ink px-6 py-3 text-sm font-semibold text-ink transition duration-200 hover:bg-ink hover:text-white active:translate-y-px"
                      >
                        {t(locale, audience.cta)}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="display max-w-[14ch] text-5xl text-ink sm:text-7xl lg:text-8xl">
            {t(locale, ui.home.ctaTitleNew)}
          </h2>
          <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-slate md:text-lg">{t(locale, ui.home.ctaBody)}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <PrimaryButton href={`${contactHref}?role=buyer`}>{t(locale, ui.common.getInTouch)}</PrimaryButton>
            <a
              href={`mailto:${company.email}`}
              className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-brand"
            >
              {company.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
