export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "es";
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
      en: `/en${suffix}`,
      es: `/es${suffix}`,
      "x-default": `/en${suffix}`,
    },
  };
}

export function preferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const lowered = acceptLanguage.toLowerCase();
  const esIndex = lowered.indexOf("es");
  const enIndex = lowered.indexOf("en");
  if (esIndex !== -1 && (enIndex === -1 || esIndex < enIndex)) return "es";
  return defaultLocale;
}
