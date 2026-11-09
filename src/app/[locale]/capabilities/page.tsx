import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PrimaryButton, SectionLabel } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import {
  buyerServices,
  capabilities,
  manufacturerServices,
  processSteps,
} from "@/lib/content";

const OWN_BRAND_SLUG = "own-brand-fresh-elements";

/** Shared columns so capability and audience rows line up down the page. */
const rowGrid = "grid gap-x-8 lg:grid-cols-[3.5rem_minmax(0,5fr)_minmax(0,6fr)]";

const packshots = {
  oil: "/products/fresh-elements/palm-oil-blend.jpg",
  chips: "/products/fresh-elements/platanitos.jpg",
  spread: "/products/fresh-elements/do-it-all-spread-v2.jpg",
};

function formatIndex(index: number) {
  return String(index).padStart(2, "0");
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/capabilities">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.capabilities.metaTitle),
    description: t(locale, ui.capabilities.metaDescription),
    alternates: localeAlternates("/capabilities"),
  };
}

export default async function CapabilitiesPage({ params }: PageProps<"/[locale]/capabilities">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const contactHref = localizedHref(locale, "/contact");
  const services = capabilities.filter((item) => item.slug !== OWN_BRAND_SLUG);
  const ownBrand = capabilities.find((item) => item.slug === OWN_BRAND_SLUG);

  const audiences = [
    {
      id: "manufacturers",
      title: ui.capabilities.forManufacturers,
      items: manufacturerServices,
      cta: ui.home.heroSupplier,
      href: `${contactHref}?role=manufacturer`,
    },
    {
      id: "buyers",
      title: ui.capabilities.forBuyers,
      items: buyerServices,
      cta: ui.common.getInTouch,
      href: `${contactHref}?role=buyer`,
    },
  ];

  return (
    <>
      <section className="bg-ink pt-28 pb-10 md:pt-32 md:pb-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionLabel light>{t(locale, ui.capabilities.heroLabel)}</SectionLabel>
          <div className="mt-5 grid items-end gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
            <h1 className="display break-words text-[2.6rem] text-white sm:text-6xl xl:text-7xl">
              {t(locale, ui.capabilities.heroTitle)}
            </h1>
            <p className="max-w-[52ch] text-base leading-relaxed text-white/70 md:text-lg">
              {t(locale, ui.capabilities.heroDescription)}
            </p>
          </div>

          <h2 className="mt-10 text-sm font-semibold text-gold md:mt-16">
            {t(locale, ui.capabilities.fromOpportunity)}
          </h2>
          <ol className="mt-8 grid lg:grid-cols-5">
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="relative border-l border-white/25 pb-5 pl-6 last:pb-0 lg:border-t lg:border-l-0 lg:pt-6 lg:pr-6 lg:pb-0 lg:pl-0"
              >
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[5px] size-[9px] bg-gold lg:top-[-5px] lg:left-0"
                />
                <p className="display text-2xl text-white">{t(locale, step.label)}</p>
                <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-white/65">
                  {t(locale, step.description)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <ol className="divide-y divide-line border-b border-line">
          {services.map((item, index) => (
            <li key={item.slug} id={item.slug}>
              <Reveal className={`${rowGrid} gap-y-4 py-10 md:py-14`}>
                <p className="numeral text-sm text-gold-ink lg:pt-2">{formatIndex(index + 1)}</p>
                <h2 className="display break-words text-3xl text-ink md:text-4xl xl:text-[2.75rem]">
                  {t(locale, item.title)}
                </h2>
                <div>
                  <p className="max-w-[60ch] text-lg leading-snug font-medium text-ink">
                    {t(locale, item.summary)}
                  </p>
                  <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-slate">
                    {t(locale, item.detail)}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {ownBrand ? (
        <section id={ownBrand.slug} className="bg-surface py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="numeral text-sm text-gold-ink">{formatIndex(services.length + 1)}</p>
              <h2 className="display mt-4 break-words text-4xl text-ink md:text-5xl xl:text-6xl">
                {t(locale, ownBrand.title)}
              </h2>
              <p className="mt-6 max-w-[56ch] text-lg leading-snug font-medium text-ink">
                {t(locale, ownBrand.summary)}
              </p>
              <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-slate">
                {t(locale, ownBrand.detail)}
              </p>
              <div className="mt-8">
                <PrimaryButton href={localizedHref(locale, "/portfolio/fresh-elements")}>
                  {t(locale, ui.home.freshCta)}
                </PrimaryButton>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid aspect-[8/7] grid-cols-7 grid-rows-2 gap-3 md:gap-4">
                <div className="relative col-span-3 row-span-2 overflow-hidden rounded-xl bg-white">
                  <Image
                    src={packshots.oil}
                    alt="Fresh Elements Palm Oil Blend, 900 ml bottle"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 22vw"
                  />
                </div>
                <div className="relative col-span-4 overflow-hidden rounded-xl bg-white">
                  <Image
                    src={packshots.chips}
                    alt="Fresh Elements Platanitos plantain chips, salt and chile limón"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 28vw"
                  />
                </div>
                <div className="relative col-span-4 overflow-hidden rounded-xl bg-white">
                  <Image
                    src={packshots.spread}
                    alt="Fresh Elements Do-It-All table and cooking spread"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 28vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl space-y-16 px-5 pt-20 pb-14 md:space-y-24 md:px-8 md:pt-28 md:pb-20">
        {audiences.map((audience) => (
          <Reveal key={audience.id}>
            <div id={audience.id} className={`${rowGrid} gap-y-8 border-t border-ink pt-8`}>
              <div className="lg:col-span-2">
                <h2 className="display break-words text-4xl text-ink md:text-5xl">
                  {t(locale, audience.title)}
                </h2>
                <Link
                  href={audience.href}
                  className="mt-6 inline-block text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-brand"
                >
                  {t(locale, audience.cta)}
                </Link>
              </div>
              <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {audience.items.map((service) => (
                  <div key={service.title.en}>
                    <dt className="font-semibold text-ink">{t(locale, service.title)}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-slate">
                      {t(locale, service.description)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            href={contactHref}
            className="display inline-block max-w-[14ch] break-words text-[2.6rem] text-ink transition-colors duration-200 hover:text-brand sm:text-7xl lg:text-8xl"
          >
            {t(locale, ui.capabilities.talkOpportunity)}
          </Link>
        </div>
      </section>
    </>
  );
}
