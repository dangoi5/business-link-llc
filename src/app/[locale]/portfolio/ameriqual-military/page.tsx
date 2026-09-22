import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PrimaryButton, SectionLabel, TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import {
  ameriqualMilitaryAssets,
  ameriqualMilitaryRations,
} from "@/lib/ameriqual-military";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/ameriqual-military">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.ameriqualMilitary.metaTitle),
    description: t(locale, ui.ameriqualMilitary.metaDescription),
    alternates: localeAlternates("/portfolio/ameriqual-military"),
  };
}

export default async function AmeriqualMilitaryPage({
  params,
}: PageProps<"/[locale]/portfolio/ameriqual-military">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const individual = ameriqualMilitaryRations.filter((item) => item.group === "individual");
  const mre = individual.find((item) => item.slug === "mre");
  const otherIndividual = individual.filter((item) => item.slug !== "mre");
  const group = ameriqualMilitaryRations.filter((item) => item.group === "group");

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 pb-16 md:pt-36 md:pb-20">
        <Image
          src={ameriqualMilitaryAssets.flag}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-6 inline-flex rounded-xl bg-white px-4 py-3">
            <div className="relative h-14 w-64 md:h-16 md:w-80">
              <Image
                src={ameriqualMilitaryAssets.logo}
                alt="AmeriQual Foods"
                fill
                priority
                unoptimized
                className="object-contain object-left"
              />
            </div>
          </div>
          <SectionLabel light>{t(locale, ui.ameriqualMilitary.heroLabel)}</SectionLabel>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t(locale, ui.ameriqualMilitary.heroTitle)}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {t(locale, ui.ameriqualMilitary.heroDescription)}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <div className="relative mx-auto aspect-[5/3] w-full max-w-lg">
                <Image
                  src={ameriqualMilitaryAssets.seals}
                  alt={t(locale, ui.ameriqualMilitary.sealsAlt)}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-slate">
                {t(locale, ui.ameriqualMilitary.sealsCaption)}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <SectionLabel>{t(locale, ui.ameriqualMilitary.heroLabel)}</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {t(locale, ui.ameriqualMilitary.supportsTitle)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
              {t(locale, ui.ameriqualMilitary.supportsBody)}
            </p>
            <div className="mt-8">
              <TextLink href={localizedHref(locale, "/portfolio")}>
                {t(locale, ui.ameriqualMilitary.backToPortfolio)}
              </TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {t(locale, ui.ameriqualMilitary.individualLabel)}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">
              {t(locale, ui.ameriqualMilitary.individualBody)}
            </p>
          </Reveal>
          {mre ? (
            <Reveal className="mt-10">
              <article className="rounded-2xl border border-line bg-white p-6 md:p-8">
                <h3 className="text-xl font-bold text-ink md:text-2xl">{t(locale, mre.name)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">{t(locale, mre.description)}</p>
                {mre.whatIsIt ? (
                  <>
                    <p className="mt-6 text-xs font-bold tracking-wider text-orange uppercase">
                      {t(locale, ui.ameriqualMilitary.whatIsIt)}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate md:text-base">{t(locale, mre.whatIsIt)}</p>
                  </>
                ) : null}
                {mre.facts && mre.facts.length > 0 ? (
                  <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {mre.facts.map((fact) => (
                      <div key={fact.label.en} className="rounded-xl bg-surface px-4 py-3">
                        <dt className="text-[11px] font-semibold tracking-wide text-slate uppercase">
                          {t(locale, fact.label)}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">{t(locale, fact.value)}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                {mre.examples && mre.examples.length > 0 ? (
                  <div className="mt-8">
                    <p className="text-xs font-bold tracking-wider text-orange uppercase">
                      {t(locale, ui.ameriqualMilitary.menuExamples)}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
                      {mre.examples.map((example) => (
                        <figure key={example.slug} className="min-w-0">
                          <div className="relative aspect-square overflow-hidden rounded-xl bg-white ring-1 ring-line">
                            <Image
                              src={example.image}
                              alt={t(locale, example.name)}
                              fill
                              className="object-contain p-2 md:p-3"
                              sizes="(max-width: 1024px) 45vw, 220px"
                            />
                          </div>
                          <figcaption className="mt-2.5 text-center">
                            <p className="text-xs font-semibold leading-snug text-ink md:text-sm">
                              {t(locale, example.name)}
                            </p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            </Reveal>
          ) : null}

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {otherIndividual.map((item, index) => (
              <Reveal key={item.slug} delay={index * 50}>
                <article className="h-full rounded-2xl border border-line bg-white p-6">
                  <h3 className="text-lg font-bold text-ink">{t(locale, item.name)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{t(locale, item.description)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {t(locale, ui.ameriqualMilitary.groupLabel)}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">
            {t(locale, ui.ameriqualMilitary.groupBody)}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {group.map((item, index) => (
            <Reveal key={item.slug} delay={index * 50}>
                <article className="h-full rounded-2xl border border-line bg-surface p-6 md:p-8">
                <h3 className="text-xl font-bold text-ink">{t(locale, item.name)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                  {t(locale, item.description)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>{t(locale, ui.ameriqualMilitary.certificationsLabel)}</SectionLabel>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
              {t(locale, ui.ameriqualMilitary.certificationsBody)}
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {ameriqualMilitaryAssets.certifications.map((mark) => (
              <div key={mark.src} className="relative h-20 w-28 md:h-24 md:w-32">
                <Image
                  src={mark.src}
                  alt={mark.alt}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {t(locale, ui.ameriqualMilitary.commercialLabel)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                {t(locale, ui.ameriqualMilitary.commercialBody)}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <TextLink href={localizedHref(locale, "/portfolio/foodservice-institutional")}>
                  {t(locale, ui.ameriqualMilitary.viewFoodservice)}
                </TextLink>
                <PrimaryButton href={localizedHref(locale, "/contact")}>
                  {t(locale, ui.ameriqualMilitary.inquire)}
                </PrimaryButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-white">
                <Image
                  src="/products/ameriqual/ready-ration.jpg"
                  alt="Ready Ration"
                  fill
                  className="object-contain p-2"
                  sizes="180px"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-white">
                <Image
                  src="/products/ameriqual/apack-ready-meal.jpg"
                  alt="A-Pack Ready Meal"
                  fill
                  className="object-contain p-2"
                  sizes="180px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
