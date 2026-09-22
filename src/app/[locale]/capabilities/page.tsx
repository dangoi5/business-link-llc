import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { buyerServices, capabilities, manufacturerServices } from "@/lib/content";

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

  return (
    <>
      <PageHero
        label={t(locale, ui.capabilities.heroLabel)}
        title={t(locale, ui.capabilities.heroTitle)}
        description={t(locale, ui.capabilities.heroDescription)}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <Reveal key={item.slug} delay={index * 50}>
              <article className="h-full rounded-2xl border border-line bg-white p-7 md:p-8">
                <p className="text-xs font-bold text-orange">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-xl font-bold text-ink md:text-2xl">{t(locale, item.title)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                  {t(locale, item.summary)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate/80">{t(locale, item.detail)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-line p-8">
              <h3 className="text-xl font-bold text-ink">{t(locale, ui.capabilities.forManufacturers)}</h3>
              <ul className="mt-5 space-y-4">
                {manufacturerServices.map((s) => (
                  <li key={s.title.en}>
                    <p className="font-semibold text-teal">{t(locale, s.title)}</p>
                    <p className="mt-1 text-sm text-slate">{t(locale, s.description)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-line p-8">
              <h3 className="text-xl font-bold text-ink">{t(locale, ui.capabilities.forBuyers)}</h3>
              <ul className="mt-5 space-y-4">
                {buyerServices.map((s) => (
                  <li key={s.title.en}>
                    <p className="font-semibold text-teal">{t(locale, s.title)}</p>
                    <p className="mt-1 text-sm text-slate">{t(locale, s.description)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href={localizedHref(locale, "/contact")}
            className="text-sm font-semibold text-orange hover:underline"
          >
            {t(locale, ui.capabilities.talkOpportunity)}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
