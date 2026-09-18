import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandsWeRepresent } from "@/components/BrandsWeRepresent";
import { Reveal } from "@/components/Reveal";
import { PageHero, PrimaryButton } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { ownBrand, partners } from "@/lib/content";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/partners">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.partnersPage.metaTitle),
    description: t(locale, ui.partnersPage.metaDescription),
    alternates: localeAlternates("/partners"),
  };
}

export default async function PartnersPage({ params }: PageProps<"/[locale]/partners">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.partnersPage.heroLabel)}
        title={t(locale, ui.partnersPage.heroTitle)}
        description={t(locale, ui.partnersPage.heroDescription)}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="rounded-2xl border border-line bg-teal p-8 text-white md:flex md:items-center md:justify-between md:gap-10 md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-orange">{t(locale, ownBrand.tagline)}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">{ownBrand.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                {t(locale, ownBrand.description)}
              </p>
            </div>
            <div className="mt-6 shrink-0 md:mt-0">
              <PrimaryButton href={localizedHref(locale, ownBrand.ctaHref)}>
                {t(locale, ownBrand.ctaLabel)}
              </PrimaryButton>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {partners
            .filter((partner) => partner.type.en !== "Fresh Elements")
            .map((partner, index) => (
              <Reveal key={partner.type.en} delay={index * 50}>
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <p className="text-xs font-bold text-orange">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-2 text-xl font-bold text-ink">{t(locale, partner.type)}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                    {t(locale, partner.description)}
                  </p>
                </div>
              </Reveal>
            ))}
        </div>

        <div className="mt-16 border-t border-line pt-16">
          <BrandsWeRepresent locale={locale} />
        </div>

        <Reveal className="mt-16 flex flex-col gap-6 rounded-2xl bg-ink p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold">{t(locale, ui.partnersPage.becomePartner)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              {t(locale, ui.partnersPage.becomePartnerBody)}
            </p>
          </div>
          <Link
            href={localizedHref(locale, "/contact")}
            className="inline-flex shrink-0 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
          >
            {t(locale, ui.partnersPage.partnerWithUs)}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
