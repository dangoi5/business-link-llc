import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CookieNotice } from "@/components/CookieNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HtmlLang } from "@/components/HtmlLang";
import { isLocale, localeAlternates, localeOg, locales, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: {
      default: t(locale, ui.meta.titleDefault),
      template: t(locale, ui.meta.titleTemplate),
    },
    description: t(locale, ui.meta.description),
    openGraph: {
      title: t(locale, ui.meta.openGraphTitle),
      description: t(locale, ui.meta.openGraphDescription),
      type: "website",
      locale: localeOg[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => localeOg[item]),
    },
    alternates: localeAlternates("/"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <HtmlLang locale={locale} />
      <Suspense fallback={null}>
        <Header locale={locale} />
      </Suspense>
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
      <CookieNotice locale={locale} />
    </>
  );
}
