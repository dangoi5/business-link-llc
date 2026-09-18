"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CompanyLogo } from "@/components/CompanyLogo";
import { locales, localizedHref, switchLocalePath, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { navLinks } from "@/lib/content";

export function LanguageSwitcher({
  locale,
  solid,
}: {
  locale: Locale;
  solid: boolean;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`flex items-center gap-1.5 text-[11px] font-bold tracking-wide ${
        solid ? "text-slate" : "text-white/80"
      }`}
      aria-label={t(locale, ui.language.switchTo)}
    >
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-1.5">
          {index > 0 ? <span className="opacity-40">|</span> : null}
          <Link
            href={switchLocalePath(pathname, item)}
            hrefLang={item}
            aria-current={item === locale ? "true" : undefined}
            className={`uppercase transition ${
              item === locale
                ? solid
                  ? "text-teal"
                  : "text-white"
                : solid
                  ? "hover:text-ink"
                  : "hover:text-white"
            }`}
          >
            {item}
          </Link>
        </span>
      ))}
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
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href={homeHref} className="flex min-w-0 items-center" aria-label={t(locale, ui.common.homeAria)}>
          <span className="relative h-10 w-10 shrink-0 sm:hidden">
            <CompanyLogo variant="mark" onDark={!solid} priority sizes="40px" />
          </span>
          <span className="relative hidden h-11 w-[168px] sm:block md:h-12 md:w-[184px]">
            <CompanyLogo
              variant="lockup"
              onDark={!solid}
              priority
              sizes="184px"
              className="object-left"
            />
          </span>
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

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher locale={locale} solid={solid} />
          <Link
            href={localizedHref(locale, "/contact")}
            className="rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-hover"
          >
            {t(locale, ui.common.getInTouch)}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
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
