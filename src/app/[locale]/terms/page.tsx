import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { isLocale, localeAlternates, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { termsIntro, termsSections } from "@/lib/legal";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.termsPage.metaTitle),
    description: t(locale, ui.termsPage.metaDescription),
    alternates: localeAlternates("/terms"),
  };
}

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.termsPage.heroLabel)}
        title={t(locale, ui.termsPage.heroTitle)}
        description={t(locale, ui.termsPage.updated)}
      />
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-2xl border border-line bg-white p-7 md:p-10">
          <h2 className="display type-3 text-ink">{t(locale, ui.termsPage.heading)}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate md:text-base">{t(locale, termsIntro)}</p>
          <div className="mt-10 space-y-10">
            {termsSections.map((section, index) => (
              <Reveal key={section.title.en}>
                <h3 className="border-b border-line pb-3 text-lg font-bold text-brand md:text-xl">
                  {index + 1}. {t(locale, section.title)}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.en}>{t(locale, paragraph)}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
