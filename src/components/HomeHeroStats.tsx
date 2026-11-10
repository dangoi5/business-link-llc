import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedHref } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { representedBrands } from "@/lib/brands";
import { activeMarkets, company, portfolioCategories } from "@/lib/content";
import { getStarGroceryFamily } from "@/lib/star-grocery-catalog";
import { ProductReel } from "./ProductReel";

const wrap = "mx-auto w-full max-w-[100rem] px-4 md:px-8";

const button =
  "hero-tag inline-flex h-12 items-center justify-center gap-3 border-2 border-ink px-4 whitespace-nowrap transition-colors duration-150 active:translate-y-px";

/**
 * The reel, by product slug: at least one single-pack photo from every brand, ordered so
 * no brand sits beside itself. Star Grocery family slugs resolve to the family's first pack.
 * Camagüey has no products in the catalog yet; add it here once it does.
 */
const reelPicks = [
  "premium-white-chicken", // AmeriQual
  "palm-oil-blend", // Fresh Elements
  "khutorok-flour", // Star Grocery
  "quinoa-club-grain", // Quinoa Club
  "lasco-chocolate-120g", // Lasco
  "starkist-chunk-light-water", // StarKist
  "flint-croutons", // Star Grocery
  "ready-ration", // AmeriQual
  "tronix-torti-chips-bbq", // Tronix
  "akhan-penne-rigate", // Akhan
  "chupa-chups-popcorn-caramel", // Chupa Chups
  "premium-chicken-salad", // AmeriQual
  "do-it-all-spread", // Fresh Elements
  "khutorok-groats", // Star Grocery
  "quinoa-club-quinoarepa", // Quinoa Club
  "lasco-peanut-punch-120g", // Lasco
  "flint-baguette", // Star Grocery
  "buffalo-style-chicken", // AmeriQual
  "margarine-traditional", // Fresh Elements
  "pansky-boil-in-bag-groats", // Star Grocery
  "apack-ready-meal", // AmeriQual
  "flint-grenki", // Star Grocery
];

/** Staged versions of catalog cut-outs, so these packs match the rest of the reel. */
const reelStagedPhotos: Record<string, string> = {
  "palm-oil-blend": "/products/fresh-elements/palm-oil-blend-900ml.jpg",
  "do-it-all-spread": "/products/fresh-elements/do-it-all-spread-tub-v2.jpg",
  "margarine-traditional": "/products/fresh-elements/margarine-traditional.jpg",
  "starkist-chunk-light-water": "/products/starkist/starkist-chunk-light-water-staged.jpg",
  "tronix-torti-chips-bbq": "/products/tronix/torti-chips-bbq-staged.jpg",
  "akhan-penne-rigate": "/products/akhan/penne-rigate-staged.jpg",
  "chupa-chups-popcorn-caramel": "/products/chupa-chups/chupa-chups-popcorn-caramel-staged.jpg",
};

/** Home page opener: compact headline, moving product shelf and the numbers bar. */
export function HomeHeroStats({ locale }: { locale: Locale }) {
  const contactHref = localizedHref(locale, "/contact");
  const regionCount = new Set(activeMarkets.map((market) => market.region)).size;

  const stats = [
    { value: "35+", label: t(locale, ui.home.statYears) },
    { value: String(activeMarkets.length), label: t(locale, ui.home.activeMarkets) },
    { value: String(regionCount), label: t(locale, ui.home.worldRegions) },
    { value: String(representedBrands.length), label: t(locale, ui.home.statBrands) },
  ];

  const catalog = portfolioCategories.flatMap((category) =>
    category.products.map((product) => ({ product, category })),
  );
  // One pack per tile: family covers are collages, so each is swapped for its first single pack.
  const reel = reelPicks.flatMap((slug) => {
    const entry = catalog.find(({ product }) => product.slug === slug);
    if (!entry) return [];
    const pack = getStarGroceryFamily(slug)?.groups[0]?.products[0] ?? entry.product;
    return [
      {
        key: slug,
        name: t(locale, pack.name),
        image: reelStagedPhotos[slug] ?? pack.image,
        category: t(locale, entry.category.title),
        href: localizedHref(locale, `/portfolio/${entry.category.slug}`),
      },
    ];
  });

  return (
    <div>
      {/* Compact enough that the product shelf is on screen before any scrolling on desktop. */}
      <section className="bg-surface pt-[4.5rem]">
        {/*
          Layout rules: the headline box is trimmed to its cap height and baseline (.trim-cap), so
          spacing is measured from the letters themselves. On desktop the right column is
          bottom-aligned, so the buttons sit exactly on the headline's last baseline.
        */}
        <div className={`${wrap} pt-6 pb-8 md:pt-8 md:pb-10`}>
          <p className="hero-tag text-ink">{t(locale, company.subtitle)}</p>
          <div className="mt-5 grid gap-6 md:mt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-end lg:gap-12">
            {/* Sized by height as well as width, so short laptop screens still reach the shelf. */}
            <h1 className="hero-display trim-cap text-[11vw] text-ink md:text-[clamp(2.75rem,min(5.5vw,10.5vh),6rem)]">
              {t(locale, ui.home.heroTitle)}
            </h1>
            <div>
              <p className="max-w-[46ch] text-base leading-normal font-medium text-ink/85 md:text-lg">
                {t(locale, ui.home.heroBody)}
              </p>
              {/* Equal-width buttons that span the paragraph, so the column ends in a clean rectangle. */}
              <div className="mt-6 grid max-w-[46ch] grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:max-w-none">
                <Link
                  href={`${contactHref}?role=buyer`}
                  className={`${button} bg-gold text-ink hover:bg-ink hover:text-gold`}
                >
                  {t(locale, ui.common.getInTouch)}
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href={`${contactHref}?role=manufacturer`}
                  className={`${button} text-ink hover:bg-ink hover:text-white`}
                >
                  {t(locale, ui.home.heroSupplier)}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ProductReel items={reel} />
      </section>

      <section className="bg-ink text-white">
        <dl className={`${wrap} grid grid-cols-2 lg:grid-cols-4`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse justify-end py-8 md:py-10 ${
                index % 2 === 1 ? "border-l border-white/25 pl-4 md:pl-8" : ""
              } ${index > 1 ? "border-t border-white/25 lg:border-t-0" : ""} ${
                index === 2 ? "lg:border-l lg:border-white/25 lg:pl-8" : ""
              }`}
            >
              <dt className="hero-tag mt-3 max-w-[20ch] text-white/75">{stat.label}</dt>
              <dd className="hero-display text-7xl tabular-nums md:text-9xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
