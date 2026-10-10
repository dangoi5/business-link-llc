import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import type { Loc } from "@/i18n/t";
import type { NutritionFacts } from "@/lib/content";

export type CatalogProduct = {
  slug: string;
  name: Loc;
  description: Loc;
  image: string;
  details?: Loc[];
  imageFit?: "cover" | "contain";
  nutrition?: NutritionFacts;
  unavailableForExport?: boolean;
  href?: string;
};

function NutritionBlock({
  nutrition,
  locale,
}: {
  nutrition: NutritionFacts;
  locale: Locale;
}) {
  const facts = [
    { label: t(locale, ui.categoryPage.calories), value: nutrition.calories },
    nutrition.protein ? { label: t(locale, ui.categoryPage.protein), value: nutrition.protein } : null,
    nutrition.totalFat ? { label: t(locale, ui.categoryPage.fat), value: nutrition.totalFat } : null,
    nutrition.totalCarbohydrate
      ? { label: t(locale, ui.categoryPage.carbs), value: nutrition.totalCarbohydrate }
      : null,
    nutrition.sodium ? { label: t(locale, ui.categoryPage.sodium), value: nutrition.sodium } : null,
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

  return (
    <div className="mt-4 rounded-xl border border-line bg-surface px-3 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70">
        {t(locale, ui.categoryPage.nutritionFacts)}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-slate">
        {t(locale, ui.categoryPage.perServing)}: {t(locale, nutrition.servingSize)}
        {nutrition.servingsPerContainer ? ` · ${t(locale, nutrition.servingsPerContainer)}` : ""}
      </p>
      <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {facts.map((fact) => (
          <div key={fact.label} className="flex items-baseline justify-between gap-2">
            <dt className="text-[11px] text-slate">{fact.label}</dt>
            <dd className="text-xs font-semibold text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

async function productImageSrc(src: string): Promise<string> {
  if (!src.startsWith("/products/")) return src;
  try {
    const file = await fs.stat(path.join(process.cwd(), "public", src));
    return `${src}?v=${Math.trunc(file.mtimeMs)}`;
  } catch {
    return src;
  }
}

export async function ProductGrid({
  products,
  locale,
}: {
  products: CatalogProduct[];
  locale: Locale;
}) {
  const imageSources = await Promise.all(products.map((product) => productImageSrc(product.image)));

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => {
        const card = (
          <article
            key={product.slug}
            className={`overflow-hidden rounded-2xl border border-line bg-white ${
              product.href
                ? "group flex h-full flex-col transition hover:border-brand hover:shadow-lg hover:shadow-ink/5"
                : ""
            }`}
          >
            <div className="relative aspect-square overflow-hidden bg-[#f7f4ee]">
              <Image
                src={imageSources[index]}
                alt={t(locale, product.name)}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className={`p-5 ${product.href ? "flex flex-1 flex-col" : ""}`}>
              <h3 className="text-lg font-bold text-ink">{t(locale, product.name)}</h3>
              {product.unavailableForExport ? (
                <p className="mt-2 inline-flex rounded-full bg-gold/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gold-ink uppercase">
                  {t(locale, ui.categoryPage.notAvailableForExport)}
                </p>
              ) : null}
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
              {product.nutrition ? <NutritionBlock nutrition={product.nutrition} locale={locale} /> : null}
              {product.href ? (
                <span className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-brand-deep">
                    {t(locale, ui.categoryPage.viewAllProducts)}
                    <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
                  </span>
                </span>
              ) : null}
            </div>
          </article>
        );

        return product.href ? (
          <Link key={product.slug} href={localizedHref(locale, product.href)} className="block h-full">
            {card}
          </Link>
        ) : (
          card
        );
      })}
    </div>
  );
}
