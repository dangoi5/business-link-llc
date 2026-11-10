import Link from "next/link";
import { CompanyLogo } from "@/components/CompanyLogo";
import { localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { company, navLinks } from "@/lib/content";

/** Carried over from the redesign test site, sized to the main site's container and type. */
export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="hero-display max-w-4xl py-12 text-3xl text-white sm:text-4xl md:py-16 md:text-5xl">
          {t(locale, company.tagline)}
        </p>

        {/* One ruled row of destinations rather than columns of links. */}
        <nav aria-label={t(locale, ui.common.explore)} className="border-t border-white/25">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/25 lg:border-b-0">
                <Link
                  href={localizedHref(locale, link.href)}
                  className="hero-tag block py-4 whitespace-nowrap text-white transition-colors duration-150 hover:text-gold"
                >
                  {t(locale, link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-8 border-t border-white/25 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href={localizedHref(locale, "/")} aria-label={t(locale, ui.common.homeAria)} className="inline-block">
              <span className="flex h-12 items-center">
                <CompanyLogo variant="lockup" onDark className="h-12" />
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">{t(locale, ui.common.footerBlurb)}</p>
          </div>
          <a
            href={`mailto:${company.email}`}
            className="hero-display text-2xl break-all text-white underline decoration-gold decoration-2 underline-offset-4 transition-colors duration-150 hover:text-gold md:text-4xl"
          >
            {company.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/25 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} Business Link LLC. {t(locale, ui.common.rights)}
            </p>
            <p>{t(locale, ui.common.localeNote)}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href={localizedHref(locale, "/privacy")} className="whitespace-nowrap transition-colors hover:text-white">
              {t(locale, ui.common.privacy)}
            </Link>
            <Link href={localizedHref(locale, "/terms")} className="whitespace-nowrap transition-colors hover:text-white">
              {t(locale, ui.common.terms)}
            </Link>
            <p>{t(locale, ui.common.regionsLine)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
