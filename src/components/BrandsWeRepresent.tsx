import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { localizedHref, type Locale } from "@/i18n/config";
import { representedBrands, type Brand } from "@/lib/brands";

function isPdfOrExternalCatalog(href: string) {
  return !href.startsWith("/") || href.startsWith("/catalogs/") || href.startsWith("//");
}

function CatalogAnchor({
  href,
  locale,
  className,
  children,
  ...rest
}: {
  href: string;
  locale: Locale;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}) {
  if (isPdfOrExternalCatalog(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={localizedHref(locale, href)} className={className} {...rest}>
      {children}
    </Link>
  );
}

function brandHasDetails(brand: Brand) {
  return Boolean(
    brand.note || brand.subBrands?.length || brand.productLines?.length || brand.photos?.length,
  );
}

function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-[4.75rem] w-[5.5rem] shrink-0 items-center justify-center self-start sm:h-[5.25rem] sm:w-28">
      {brand.logo ? (
        <div className="relative h-full w-full">
          <Image src={brand.logo} alt="" fill className="object-contain object-left" sizes="112px" />
        </div>
      ) : (
        <p className="text-center text-xs font-bold leading-tight text-ink">{brand.name}</p>
      )}
    </div>
  );
}

function BrandLinks({ brand, locale }: { brand: Brand; locale: Locale }) {
  if (!brand.catalogHref && !brand.extraLinks?.length) return null;

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
      {brand.catalogHref ? (
        <CatalogAnchor
          href={brand.catalogHref}
          locale={locale}
          className="inline-flex text-sm font-semibold text-teal transition hover:text-teal-deep"
        >
          {t(locale, brand.catalogLabel ?? ui.common.viewFullCatalog)} →
        </CatalogAnchor>
      ) : null}
      {brand.extraLinks?.map((link) => (
        <CatalogAnchor
          key={link.href}
          href={link.href}
          locale={locale}
          className="inline-flex text-sm font-semibold text-teal transition hover:text-teal-deep"
        >
          {t(locale, link.label)} →
        </CatalogAnchor>
      ))}
    </div>
  );
}

function BrandDetails({ brand, locale }: { brand: Brand; locale: Locale }) {
  return (
    <div className="space-y-4 border-t border-line px-4 pb-4 pt-3 sm:px-5">
      {brand.note ? (
        <p className="text-sm leading-relaxed text-slate">{t(locale, brand.note)}</p>
      ) : null}

      {brand.subBrands && brand.subBrands.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {brand.subBrands.map((subBrand) => (
            <span
              key={subBrand}
              className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-slate"
            >
              {subBrand}
            </span>
          ))}
        </div>
      ) : null}

      {brand.productLines && brand.productLines.length > 0 ? (
        <ul className="space-y-1.5">
          {brand.productLines.map((line) => (
            <li key={line.label.en} className="text-sm leading-relaxed text-slate">
              <span className="font-semibold text-ink">{t(locale, line.label)}</span>
              {line.detail ? <span> — {t(locale, line.detail)}</span> : null}
            </li>
          ))}
        </ul>
      ) : null}

      {brand.photos && brand.photos.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {brand.photos.map((src, index) => (
            <div
              key={`${brand.slug}-photo-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line"
            >
              <Image
                src={src}
                alt={`${brand.name} ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 180px"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function BrandCard({ brand, locale }: { brand: Brand; locale: Locale }) {
  const expandable = brandHasDetails(brand);
  const roleLabel =
    brand.slug === "fresh-elements"
      ? t(locale, ui.common.ownBrand)
      : t(locale, ui.common.manufacturer);

  return (
    <article
      id={brand.slug}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white has-[details[open]]:border-teal/40"
    >
      <div className="flex gap-3 p-3 sm:gap-4 sm:p-4">
        <BrandLogo brand={brand} />
        <div className="min-w-0 flex-1 space-y-2.5">
          <div>
            <p className="text-[10px] font-bold tracking-wider text-orange uppercase">{roleLabel}</p>
            <h3 className="mt-0.5 text-base font-bold tracking-tight text-ink sm:text-lg">{brand.name}</h3>
            {brand.productLines?.length ? (
              <p className="mt-1 line-clamp-1 text-xs text-slate sm:text-sm">
                {brand.productLines
                  .slice(0, 3)
                  .map((line) => t(locale, line.label))
                  .join(" · ")}
              </p>
            ) : brand.note ? (
              <p className="mt-1 line-clamp-1 text-xs text-slate sm:text-sm">{t(locale, brand.note)}</p>
            ) : null}
          </div>
          <BrandLinks brand={brand} locale={locale} />
        </div>
      </div>

      {expandable ? (
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 border-t border-line px-4 py-2.5 text-sm font-semibold text-teal transition hover:bg-surface/80 sm:px-5 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">{t(locale, ui.brands.learnMore)}</span>
            <span className="hidden group-open:inline">{t(locale, ui.brands.showLess)}</span>
            <span aria-hidden className="inline-block text-xs transition group-open:rotate-180">
              ▾
            </span>
          </summary>
          <BrandDetails brand={brand} locale={locale} />
        </details>
      ) : null}
    </article>
  );
}

export function BrandsWeRepresent({ locale }: { locale: Locale }) {
  return (
    <div id="brands">
      <Reveal>
        <SectionHeading
          label={t(locale, ui.brands.label)}
          title={t(locale, ui.brands.title)}
          description={t(locale, ui.brands.description)}
        />
      </Reveal>

      <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
        {representedBrands.map((brand, index) => (
          <Reveal key={brand.slug} delay={index * 35}>
            <BrandCard brand={brand} locale={locale} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
