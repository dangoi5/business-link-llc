"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;samesite=lax`;
  }, [locale]);
  return null;
}
