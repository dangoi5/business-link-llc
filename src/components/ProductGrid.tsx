import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";
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
              {product.nutrition ? <NutritionBlock nutrition={product.nutrition} locale={locale} /> : null}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
