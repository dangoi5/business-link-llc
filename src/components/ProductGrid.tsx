import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { t } from "@/i18n/t";
import type { Locale } from "@/i18n/config";
import type { Loc } from "@/i18n/t";

export type CatalogProduct = {
  slug: string;
  name: Loc;
  description: Loc;
  image: string;
  details?: Loc[];
  imageFit?: "cover" | "contain";
};

export function ProductGrid({
  products,
  locale,
}: {
  products: CatalogProduct[];
  locale: Locale;
}) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <Reveal key={product.slug} delay={index * 50}>
          <article className="overflow-hidden rounded-2xl border border-line bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src={product.image}
                alt={t(locale, product.name)}
                fill
                className={product.imageFit === "contain" ? "object-contain bg-[#f7f4ee]" : "object-cover"}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-ink">{t(locale, product.name)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{t(locale, product.description)}</p>
              {product.details && product.details.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.details.map((detail) => (
                    <span
                      key={detail.en}
                      className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-slate"
                    >
                      {t(locale, detail)}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
