import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionLabel } from "@/components/ui";
import { isLocale, localeAlternates, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { company } from "@/lib/content";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.contactPage.metaTitle),
    description: t(locale, ui.contactPage.metaDescription),
    alternates: localeAlternates("/contact"),
  };
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <PageHero
        label={t(locale, ui.contactPage.heroLabel)}
        title={t(locale, ui.contactPage.heroTitle)}
        description={t(locale, ui.contactPage.heroDescription)}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
        <Reveal>
          <SectionLabel>{t(locale, ui.contactPage.whyLabel)}</SectionLabel>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">
            {t(locale, ui.contactPage.whyTitle)}
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate md:text-base">
            <li className="rounded-xl border border-line bg-surface p-4">
              {t(locale, ui.contactPage.reason1)}
            </li>
            <li className="rounded-xl border border-line bg-surface p-4">
              {t(locale, ui.contactPage.reason2)}
            </li>
            <li className="rounded-xl border border-line bg-surface p-4">
              {t(locale, ui.contactPage.reason3)}
            </li>
          </ul>

          <div className="mt-8 rounded-2xl bg-ink p-6 text-white">
            <p className="text-sm font-medium text-white/60">{t(locale, ui.contactPage.email)}</p>
            <a
              href={`mailto:${company.email}`}
              className="mt-2 block text-lg font-semibold text-orange hover:underline"
            >
              {company.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ContactForm locale={locale} />
        </Reveal>
      </section>
    </>
  );
}
