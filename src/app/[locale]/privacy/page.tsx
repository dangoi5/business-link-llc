import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { isLocale, localeAlternates, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { privacySections } from "@/lib/legal";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.privacyPage.metaTitle),
    description: t(locale, ui.privacyPage.metaDescription),
    alternates: localeAlternates("/privacy"),
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.privacyPage.heroLabel)}
        title={t(locale, ui.privacyPage.heroTitle)}
        description={t(locale, ui.privacyPage.updated)}
      />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-10">
          {privacySections.map((section) => (
            <Reveal key={section.title.en}>
              <h2 className="text-xl font-bold text-ink">{t(locale, section.title)}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate md:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph.en}>{t(locale, paragraph)}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
