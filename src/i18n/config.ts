export const locales = ["en", "es", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeOg: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
};

export const languageNativeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : defaultLocale;
}

export function localizedHref(locale: Locale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("/catalogs/") || href.startsWith("//")) {
    return href;
  }
  const path = href === "/" ? "" : href;
  return `/${locale}${path}`;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) {
    segments[1] = locale;
    const next = segments.join("/") || `/${locale}`;
    return next === `/${locale}/` ? `/${locale}` : next;
  }
  return localizedHref(locale, pathname || "/");
}

export function localeAlternates(path = "/") {
  const suffix = path === "/" ? "" : path;
  return {
    languages: {
      ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}${suffix}`])),
      "x-default": `/en${suffix}`,
    },
  };
}

export function preferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const lowered = acceptLanguage.toLowerCase();
  let best: Locale = defaultLocale;
  let bestIndex = Number.POSITIVE_INFINITY;
  for (const locale of locales) {
    const index = lowered.indexOf(locale);
    if (index !== -1 && index < bestIndex) {
      best = locale;
      bestIndex = index;
    }
  }
  return best;
}
