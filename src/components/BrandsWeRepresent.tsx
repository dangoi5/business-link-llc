import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { localizedHref, type Locale } from "@/i18n/config";
import {
  brandsWithProductLines,
  representedBrands,
  type Brand,
} from "@/lib/brands";

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

function BrandLogoInner({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-28 items-center justify-center rounded-2xl border border-line bg-white px-4">
      {brand.logo ? (
        <div className="relative h-16 w-full">
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 160px"
          />
        </div>
      ) : (
        <p className="text-center text-sm font-bold tracking-tight text-ink">{brand.name}</p>
      )}
    </div>
  );
}

function BrandLogoCard({ brand, locale }: { brand: Brand; locale: Locale }) {
  if (brand.catalogHref) {
    return (
      <CatalogAnchor
        href={brand.catalogHref}
        locale={locale}
        aria-label={`${brand.name} ${t(locale, ui.common.catalogAria)}`}
        className="block"
      >
        <BrandLogoInner brand={brand} />
      </CatalogAnchor>
    );
  }

  return <BrandLogoInner brand={brand} />;
}

function BrandPhotos({ brand }: { brand: Brand }) {
  if (!brand.photos?.length) return null;

  return (
    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
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
            sizes="(max-width: 768px) 50vw, 220px"
          />
        </div>
      ))}
    </div>
  );
}

function BrandCatalogLink({ brand, locale }: { brand: Brand; locale: Locale }) {
  if (!brand.catalogHref) return null;

  return (
    <CatalogAnchor
      href={brand.catalogHref}
      locale={locale}
      className="inline-flex text-sm font-semibold text-teal transition hover:text-teal-deep"
    >
      {t(locale, brand.catalogLabel ?? ui.common.viewFullCatalog)} →
    </CatalogAnchor>
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

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {representedBrands.map((brand, index) => (
          <Reveal key={brand.slug} delay={index * 40}>
            <BrandLogoCard brand={brand} locale={locale} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-8">
        {brandsWithProductLines.map((brand, index) => (
          <Reveal key={brand.slug} delay={index * 50}>
            <article id={brand.slug} className="scroll-mt-28 border-t border-line pt-8">
              <p className="text-xs font-bold tracking-wider text-orange uppercase">
                {t(locale, ui.common.manufacturer)}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">{brand.name}</h3>
              {brand.note ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
                  {t(locale, brand.note)}
                </p>
              ) : null}

              {brand.subBrands && brand.subBrands.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {brand.subBrands.map((subBrand) => (
                    <span
                      key={subBrand}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate"
                    >
                      {subBrand}
                    </span>
                  ))}
                </div>
              ) : null}

              {brand.productLines && brand.productLines.length > 0 ? (
                <ul className="mt-5 space-y-1.5">
                  {brand.productLines.map((line) => (
                    <li key={line.label.en} className="text-sm leading-relaxed text-slate">
                      <span className="font-semibold text-ink">{t(locale, line.label)}</span>
                      {line.detail ? <span> — {t(locale, line.detail)}</span> : null}
                    </li>
                  ))}
                </ul>
              ) : null}

              <BrandPhotos brand={brand} />
              {brand.catalogHref || brand.extraLinks?.length ? (
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  <BrandCatalogLink brand={brand} locale={locale} />
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
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
