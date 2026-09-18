import type { Locale } from "@/i18n/config";

export type Loc = { en: string; es: string };

export function t(locale: Locale, value: string | Loc): string {
  return typeof value === "string" ? value : value[locale];
}

export function loc(en: string, es: string): Loc {
  return { en, es };
}
