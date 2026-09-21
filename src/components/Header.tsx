"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CompanyLogo } from "@/components/CompanyLogo";
import {
  languageNativeNames,
  locales,
  localizedHref,
  switchLocalePath,
  type Locale,
} from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { navLinks } from "@/lib/content";

function UsFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" className={className} aria-hidden>
      <rect width="16" height="11" fill="#fff" />
      {Array.from({ length: 13 }, (_, i) =>
        i % 2 === 0 ? (
          <rect key={i} y={(i * 11) / 13} width="16" height={11 / 13} fill="#b22234" />
        ) : null,
      )}
      <rect width="6.4" height="5.9" fill="#3c3b6e" />
    </svg>
  );
}

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" className={className} aria-hidden>
      <rect width="16" height="11" fill="#c60b1e" />
      <rect y="2.75" width="16" height="5.5" fill="#ffc400" />
    </svg>
  );
}

function ItalyFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 11" className={className} aria-hidden>
      <rect width="5.34" height="11" fill="#009246" />
      <rect x="5.33" width="5.34" height="11" fill="#fff" />
      <rect x="10.66" width="5.34" height="11" fill="#ce2b37" />
    </svg>
  );
}

function LocaleFlag({ locale, className }: { locale: Locale; className?: string }) {
  if (locale === "es") return <SpainFlag className={className} />;
  if (locale === "it") return <ItalyFlag className={className} />;
  return <UsFlag className={className} />;
}

const flagClass = "h-3.5 w-[1.2rem] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/20";

export function LanguageSwitcher({
  locale,
  solid,
}: {
  locale: Locale;
  solid: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t(locale, ui.language.switchTo)}
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-bold uppercase tracking-wide ${
          solid
            ? "border border-line bg-surface text-ink"
            : "border border-white/25 bg-black/25 text-white"
        }`}
      >
        <LocaleFlag locale={locale} className={flagClass} />
        {locale}
        <svg
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 shrink-0 transition ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M2.5 4.5 L6 8 L9.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-[60] mt-2 min-w-[11.5rem] overflow-hidden rounded-xl border border-line bg-white py-1 shadow-lg"
        >
          {locales.map((item) => {
            const selected = item === locale;
            return (
              <Link
                key={item}
                role="menuitem"
                href={switchLocalePath(pathname, item)}
                hrefLang={item}
                aria-current={selected ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 text-sm font-medium ${
                  selected ? "bg-teal/10 text-teal" : "text-ink hover:bg-surface"
                }`}
              >
                <LocaleFlag locale={item} className={flagClass} />
                <span>{languageNativeNames[item]}</span>
                <span className="ml-auto text-[11px] font-bold uppercase tracking-wide text-slate">
                  {item}
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homeHref = localizedHref(locale, "/");
  const isHome = pathname === homeHref || pathname === `${homeHref}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-line bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-5 md:px-8">
        <Link
          href={homeHref}
          className="flex min-w-0 flex-1 items-center overflow-hidden"
          aria-label={t(locale, ui.common.homeAria)}
        >
          <CompanyLogo
            variant="lockup"
            onDark={!solid}
            priority
            className="h-7 w-max max-w-full min-[360px]:h-8 sm:h-10 md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks
            .filter((link) => link.href !== "/contact")
            .map((link) => {
              const href = localizedHref(locale, link.href);
              const active = pathname === href;
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={`text-sm font-medium transition ${
                    solid
                      ? active
                        ? "text-teal"
                        : "text-slate hover:text-ink"
                      : active
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                  }`}
                >
                  {t(locale, link.label)}
                </Link>
              );
            })}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <LanguageSwitcher locale={locale} solid={solid} />
          <Link
            href={localizedHref(locale, "/contact")}
            className="rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-hover"
          >
            {t(locale, ui.common.getInTouch)}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:hidden">
          <LanguageSwitcher locale={locale} solid={solid} />
          <button
            type="button"
            aria-label={open ? t(locale, ui.common.closeMenu) : t(locale, ui.common.openMenu)}
            className={solid ? "text-ink" : "text-white"}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span className={`block h-0.5 w-full bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={localizedHref(locale, link.href)}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-ink"
              >
                {t(locale, link.label)}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href={localizedHref(locale, "/contact")}
              className="block rounded-full bg-orange px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t(locale, ui.common.getInTouch)}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
