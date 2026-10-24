import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { isLocale, localeAlternates, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(locale, ui.about.metaTitle),
    description: t(locale, ui.about.metaDescription),
    alternates: localeAlternates("/about"),
  };
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const a = ui.about;

  return (
    <>
      <PageHero
        label={t(locale, a.heroLabel)}
        title={t(locale, a.heroTitle)}
        description={t(locale, a.heroDescription)}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-slate md:text-lg">
            {a.roots.map((p) => (
              <p key={p.en}>{t(locale, p)}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="space-y-5 text-base leading-relaxed text-slate md:text-lg">
            {a.story.map((p) => (
              <p key={p.en}>{t(locale, p)}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <figure className="mx-auto w-40 text-center md:ml-auto md:mr-0 md:w-44">
            <Image
              src="/company/jose-paternostro.jpg"
              alt={t(locale, a.founderAlt)}
              width={1087}
              height={1446}
              sizes="176px"
              className="h-auto w-full rounded-md shadow-md"
            />
            <figcaption className="mt-3">
              <p className="text-sm font-bold text-ink">José Paternostro</p>
              <p className="mt-0.5 text-xs text-slate">{t(locale, a.founderRole)}</p>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-7 md:p-8">
              <h2 className="text-xl font-bold text-ink md:text-2xl">{t(locale, a.missionTitle)}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate md:text-base">
                {a.mission.map((p) => (
                  <p key={p.en}>{t(locale, p)}</p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-7 md:p-8">
              <h2 className="text-xl font-bold text-ink md:text-2xl">{t(locale, a.visionTitle)}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate md:text-base">
                {a.vision.map((p) => (
                  <p key={p.en}>{t(locale, p)}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-3xl px-5 pb-16 text-center md:px-8 md:pb-24">
          <blockquote className="border-t border-line pt-10 text-lg italic leading-relaxed text-brand md:text-xl">
            {t(locale, a.quote)}
          </blockquote>
        </Reveal>
      </section>
    </>
  );
}
