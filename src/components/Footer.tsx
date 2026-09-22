import Link from "next/link";
import { CompanyLogo } from "@/components/CompanyLogo";
import { localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { company, navLinks } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <Link
            href={localizedHref(locale, "/")}
            aria-label={t(locale, ui.common.homeAria)}
            className="inline-block"
          >
            <span className="flex h-12 items-center">
              <CompanyLogo variant="lockup" onDark className="h-12" />
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            {t(locale, company.tagline)}
          </p>
          <Link
            href={localizedHref(locale, "/contact")}
            className="mt-6 inline-flex rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-hover"
          >
            {t(locale, ui.common.getInTouch)}
          </Link>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t(locale, ui.common.explore)}</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizedHref(locale, link.href)}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {t(locale, link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t(locale, ui.common.contact)}</p>
          <a href={`mailto:${company.email}`} className="mt-4 block text-sm text-orange hover:underline">
            {company.email}
          </a>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            {t(locale, ui.common.footerBlurb)}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} Business Link LLC. {t(locale, ui.common.rights)}
            </p>
            <p>{t(locale, ui.common.localeNote)}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href={localizedHref(locale, "/privacy")} className="transition hover:text-white">
              {t(locale, ui.common.privacy)}
            </Link>
            <Link href={localizedHref(locale, "/terms")} className="transition hover:text-white">
              {t(locale, ui.common.terms)}
            </Link>
            <p>{t(locale, ui.common.regionsLine)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
