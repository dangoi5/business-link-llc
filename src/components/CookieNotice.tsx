"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";

const COOKIE_KEY = "BL_COOKIE_NOTICE";

export function CookieNotice({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      localStorage.setItem(COOKIE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/95 p-4 shadow-[0_-8px_30px_rgba(7,17,31,0.12)] backdrop-blur md:p-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-slate">
          {t(locale, ui.cookieNotice.message)}{" "}
          <Link
            href={localizedHref(locale, "/privacy")}
            className="font-semibold text-teal underline-offset-2 hover:underline"
          >
            {t(locale, ui.cookieNotice.learnMore)}
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:bg-ink-soft"
        >
          {t(locale, ui.cookieNotice.accept)}
        </button>
      </div>
    </div>
  );
}
