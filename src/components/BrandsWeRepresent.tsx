import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import {
  brandsWithProductLines,
  representedBrands,
  type Brand,
} from "@/lib/brands";

function BrandLogoInner({ brand }: { brand: Brand }) {
  if (brand.comingSoon) {
    return (
      <div className="relative flex h-28 items-center justify-center rounded-2xl border border-dashed border-line bg-surface/80 px-4 text-center opacity-55">
        <span className="absolute top-2.5 right-2.5 rounded-full border border-line bg-white px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-slate uppercase">
          Coming soon
        </span>
        <p className="max-w-[9rem] text-sm font-semibold tracking-tight text-slate">
          Brand to be announced
        </p>
      </div>
    );
  }

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

function BrandLogoCard({ brand }: { brand: Brand }) {
  if (brand.catalogHref) {
    return (
      <a
        href={brand.catalogHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${brand.name} catalog`}
        className="block"
      >
        <BrandLogoInner brand={brand} />
      </a>
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
            alt={`${brand.name} product ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 220px"
          />
        </div>
      ))}
    </div>
  );
}

function BrandCatalogLink({ brand }: { brand: Brand }) {
  if (!brand.catalogHref) return null;

  return (
    <a
      href={brand.catalogHref}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex text-sm font-semibold text-teal transition hover:text-teal-deep"
    >
      {brand.catalogLabel ?? "View full catalog"} →
    </a>
  );
}

export function BrandsWeRepresent() {
  return (
    <div id="brands">
      <Reveal>
        <SectionHeading
          label="Brands we represent"
          title="Manufacturers and brands in our distribution portfolio."
          description="A selected group of manufacturers and brands we represent as master distributor and exporter. Product line categories are listed below, with full catalogs linked where available."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {representedBrands.map((brand, index) => (
          <Reveal key={brand.slug} delay={index * 40}>
            <BrandLogoCard brand={brand} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-8">
        {brandsWithProductLines.map((brand, index) => (
          <Reveal key={brand.slug} delay={index * 50}>
            <article
              id={brand.slug}
              className="scroll-mt-28 border-t border-line pt-8"
            >
              <p className="text-xs font-bold tracking-wider text-orange uppercase">
                {brand.slug === "fresh-elements" ? "Own brand" : "Manufacturer"}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">{brand.name}</h3>
              {brand.note ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">{brand.note}</p>
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
                    <li key={line.label} className="text-sm leading-relaxed text-slate">
                      <span className="font-semibold text-ink">{line.label}</span>
                      {line.detail ? <span> — {line.detail}</span> : null}
                    </li>
                  ))}
                </ul>
              ) : null}

              <BrandPhotos brand={brand} />
              <BrandCatalogLink brand={brand} />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
