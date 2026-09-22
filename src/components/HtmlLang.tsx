"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    const secure = window.location.protocol === "https:" ? ";Secure" : "";
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;samesite=lax${secure}`;
  }, [locale]);
  return null;
}
