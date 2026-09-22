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

/** ISO 3166-1 alpha-2 → site locale. Unlisted countries fall through to Accept-Language. */
const spanishSpeakingCountries = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

const italianSpeakingCountries = new Set(["IT", "SM", "VA"]);

const englishSpeakingCountries = new Set([
  "US",
  "GB",
  "UK",
  "CA",
  "AU",
  "NZ",
  "IE",
  "ZA",
  "JM",
  "TT",
  "BS",
  "BB",
  "BZ",
  "GY",
  "SG",
  "PH",
  "HK",
  "IN",
  "NG",
  "KE",
  "GH",
  "UG",
  "TZ",
  "ZW",
  "BW",
  "MT",
  "CY",
]);

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromCountry(countryCode: string | null | undefined): Locale | null {
  if (!countryCode) return null;
  const code = countryCode.trim().toUpperCase();
  if (!code) return null;
  if (spanishSpeakingCountries.has(code)) return "es";
  if (italianSpeakingCountries.has(code)) return "it";
  if (englishSpeakingCountries.has(code)) return "en";
  return null;
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

/**
 * Resolve locale for first-time / unprefixed visits.
 * Cookie (manual choice) → IP country → Accept-Language → English.
 */
export function resolveVisitorLocale(input: {
  cookieLocale?: string | null;
  countryCode?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  if (isLocale(input.cookieLocale ?? undefined)) {
    return input.cookieLocale as Locale;
  }
  return localeFromCountry(input.countryCode) ?? preferredLocale(input.acceptLanguage ?? null);
}
