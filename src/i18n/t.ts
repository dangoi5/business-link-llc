import type { Locale } from "@/i18n/config";

export type Loc = Record<Locale, string>;

export function t(locale: Locale, value: string | Loc): string {
  return typeof value === "string" ? value : value[locale];
}

/** Pass every locale so new copy stays in sync across /en, /es and /it. */
export function loc(en: string, es: string, it: string): Loc {
  return { en, es, it };
}
