import { buildCatalogEntries, type CatalogProduct } from "@/components/ProductGrid";
import { ProductCatalog } from "@/components/ProductCatalog";
import { localizedHref, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { freshElementsBrand } from "@/lib/brands";
import { portfolioCategories, type PortfolioCategory } from "@/lib/content";
import { sizeBuckets } from "@/lib/pack-sizes";

/** A category's products, or every category's for "All products", each listed once. */
function uniqueProducts(categories: PortfolioCategory[]): CatalogProduct[] {
  const bySlug = new Map<string, CatalogProduct>();
  for (const category of categories) {
    for (const product of category.products) {
      if (!bySlug.has(product.slug)) bySlug.set(product.slug, product);
    }
  }
  return [...bySlug.values()];
}

/** Anchor on the catalog, so moving between categories lands on the products, not the hero. */
const CATALOG_ID = "catalog";

/**
 * The filterable product catalog. On a category page it holds that category's
 * products only; without a category it holds all of them. The sidebar links to
 * every category's page, and its brand and size filters list only what this page has.
 */
export async function ProductCatalogSection({
  locale,
  category,
}: {
  locale: Locale;
  /** Category slug; omit for the All products page. */
  category?: string;
}) {
  const current = portfolioCategories.find((item) => item.slug === category);
  const products = uniqueProducts(current ? [current] : portfolioCategories);

  const freshElementsSlugs = new Set(freshElementsBrand.products.map((product) => product.slug));
  const items = await buildCatalogEntries(
    products.map((product) => ({
      product,
      brand: freshElementsSlugs.has(product.slug) ? freshElementsBrand.name : undefined,
    })),
    locale,
  );

  const categoryLinks = [
    {
      href: `${localizedHref(locale, "/products")}#${CATALOG_ID}`,
      label: t(locale, ui.catalog.allProducts),
      count: uniqueProducts(portfolioCategories).length,
      active: !current,
    },
    ...portfolioCategories
      .filter((item) => item.products.length > 0)
      .map((item) => ({
        href: `${localizedHref(locale, `/portfolio/${item.slug}`)}#${CATALOG_ID}`,
        label: t(locale, item.title),
        count: uniqueProducts([item]).length,
        active: item.slug === current?.slug,
      })),
  ];

  const c = ui.catalog;

  return (
    <div id={CATALOG_ID} className="scroll-mt-24">
      <ProductCatalog
        items={items}
        categoryLinks={categoryLinks}
        sizeOptions={sizeBuckets.map((bucket) => ({ id: bucket.id, label: t(locale, bucket.label) }))}
        labels={{
          filters: t(locale, c.filters),
          clear: t(locale, c.clear),
          search: t(locale, c.search),
          category: t(locale, c.category),
          brand: t(locale, c.brand),
          size: t(locale, c.size),
          productCount: t(locale, c.productCount),
          sort: t(locale, c.sort),
          sortFeatured: t(locale, c.sortFeatured),
          sortAz: t(locale, c.sortAz),
          sortZa: t(locale, c.sortZa),
          noResults: t(locale, c.noResults),
          showFilters: t(locale, c.showFilters),
          showResults: t(locale, c.showResults),
        }}
      />
    </div>
  );
}
