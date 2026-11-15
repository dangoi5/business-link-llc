"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "@base-ui/react/menu";
import { useCallback, useState } from "react";
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

/**
 * Open/closed state that resets automatically on navigation: the menu stores
 * the path it was opened on, so it reads as closed once the path changes.
 */
function useMenuOpenForPath(pathname: string) {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = useCallback(
    (next: boolean | ((prev: boolean) => boolean)) => {
      setOpenPath((prev) => {
        const value = typeof next === "function" ? next(prev === pathname) : next;
        return value ? pathname : null;
      });
    },
    [pathname],
  );
  return [open, setOpen] as const;
}

const flagClass = "h-3.5 w-[1.2rem] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/20";

/**
 * Language picker. Base UI's Menu supplies the keyboard behaviour (arrow keys,
 * type-ahead, Escape, focus return) and closes on outside presses.
 */
export function LanguageSwitcher({
  locale,
  solid,
}: {
  locale: Locale;
  solid: boolean;
}) {
  const pathname = usePathname();

  return (
    <Menu.Root>
      <Menu.Trigger
        className={`group inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-bold uppercase tracking-wide select-none ${
          solid
            ? "border border-line bg-surface text-ink"
            : "border border-white/25 bg-black/25 text-white"
        }`}
      >
        <LocaleFlag locale={locale} className={flagClass} />
        <span className="sr-only">{t(locale, ui.language.switchTo)}: </span>
        {locale}
        <svg
          viewBox="0 0 12 12"
          className="h-2.5 w-2.5 shrink-0 transition group-data-[popup-open]:rotate-180"
          aria-hidden
        >
          <path d="M2.5 4.5 L6 8 L9.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={8} className="z-[60] outline-none">
          <Menu.Popup className="min-w-[11.5rem] origin-[var(--transform-origin)] overflow-hidden rounded-xl border border-line bg-white py-1 shadow-lg outline-none transition-[scale,opacity] duration-150 ease-out data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            {locales.map((item) => {
              const selected = item === locale;
              return (
                <Menu.LinkItem
                  key={item}
                  closeOnClick
                  label={languageNativeNames[item]}
                  render={<Link href={switchLocalePath(pathname, item)} hrefLang={item} />}
                  aria-current={selected ? "true" : undefined}
                  className={`flex items-center gap-2.5 px-3 py-2 text-sm font-medium outline-none ${
                    selected ? "bg-brand/10 text-brand" : "text-ink data-[highlighted]:bg-surface"
                  }`}
                >
                  <LocaleFlag locale={item} className={flagClass} />
                  <span>{languageNativeNames[item]}</span>
                  <span className="ml-auto text-[11px] font-bold uppercase tracking-wide text-slate">
                    {item}
                  </span>
                </Menu.LinkItem>
              );
            })}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useMenuOpenForPath(pathname);
  const homeHref = localizedHref(locale, "/");

  const solid = true;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white"
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
                  className={`text-sm font-medium transition-colors duration-200 ${
                    solid
                      ? active
                        ? "text-brand"
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
            className="rounded-lg bg-gold px-4 py-2 text-xs font-semibold text-ink transition duration-200 hover:bg-gold-hover active:translate-y-px"
          >
            {t(locale, ui.common.getInTouch)}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:hidden">
          <LanguageSwitcher locale={locale} solid={solid} />
          <button
            type="button"
            aria-label={open ? t(locale, ui.common.closeMenu) : t(locale, ui.common.openMenu)}
            className={`flex h-11 w-11 items-center justify-center ${solid ? "text-ink" : "text-white"}`}
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
              className="block rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-semibold text-ink"
            >
              {t(locale, ui.common.getInTouch)}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
