import { Fragment } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedHref } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { representedBrands } from "@/lib/brands";
import { activeMarkets, company, portfolioCategories } from "@/lib/content";
import { getStarGroceryFamily } from "@/lib/star-grocery-catalog";
import { ProductReel } from "./ProductReel";

// Same container as the header and footer, so the logo, headline and numbers share one left and right edge.
const wrap = "mx-auto w-full max-w-7xl px-5 md:px-8";

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
          Desktop is a two-by-two grid: a flexible headline column and a fixed 25rem column.
          The numbers bar below runs edge to edge, so the headline's left edge meets "35+" and the
          right column's right edge meets "10".
            row 1: eyebrow            | (empty)
            row 2: headline           | pitch, buttons, direct email   (tops aligned at the cap height)
          The left column never moves for the right one: the headline always sits right under
          the eyebrow. Headline and pitch are trimmed to cap height (.trim-cap) so their tops
          line up on the letters. On phones everything stacks in that order.
        */}
        <div
          className={`${wrap} grid pt-6 pb-8 md:pt-8 md:pb-10 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-start lg:gap-x-12`}
        >
          <p className="hero-tag text-ink lg:col-start-1 lg:row-start-1 lg:self-baseline">
            {t(locale, company.subtitle)}
          </p>
          {/*
            Three lines on desktop: "Food, exported / and distributed / worldwide." The 8.5em cap
            fits each of those lines (about 6.8em at most) but not "Food, exported and" (about
            8.9em), so the breaks stay put at every width. Also sized by height so short laptops
            still reach the shelf.
          */}
          <h1 className="hero-display trim-cap mt-5 text-[11vw] text-ink md:mt-6 md:text-[clamp(2.75rem,min(5.2vw,10.5vh),5rem)] lg:col-start-1 lg:row-start-2 lg:max-w-[8.5em]">
            {t(locale, ui.home.heroTitle)}
          </h1>
          <div className="mt-8 max-w-[30rem] md:mt-6 lg:col-start-2 lg:row-start-2 lg:max-w-none">
            <p className="trim-cap text-base leading-normal font-medium text-ink/85 md:text-lg">
              {t(locale, ui.home.heroBody)}
            </p>
            {/* Equal-width buttons that span the paragraph, so the column ends in a clean rectangle. */}
            <div className="mt-6 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2">
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
            <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="hero-tag text-slate">{t(locale, ui.home.heroOrEmail)}</span>
              <a
                href={`mailto:${company.email}`}
                className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 transition-colors duration-150 hover:text-brand"
              >
                {company.email}
              </a>
            </p>
          </div>
        </div>

        <ProductReel items={reel} />
      </section>

      <section className="bg-ink text-white">
        {/*
          Desktop: the four numbers are spread edge to edge with equal space between them, so
          "35+" starts on the container's left edge (under the headline) and "10" ends on its
          right edge (under the pitch and buttons). Dividers sit exactly halfway between numbers.
          Each label wraps to its number's width (w-0 min-w-full), so the numbers set the edges.
          Phones and tablets keep the two-by-two grid.
        */}
        <div className={`${wrap} grid grid-cols-2 lg:flex lg:justify-between`}>
          {stats.map((stat, index) => (
            <Fragment key={stat.label}>
              {index > 0 ? <span aria-hidden className="hidden w-px self-stretch bg-white/25 lg:block" /> : null}
              <div
                className={`flex flex-col py-8 md:py-10 ${
                  index % 2 === 1 ? "border-l border-white/25 pl-4 md:pl-8 lg:border-l-0 lg:pl-0" : ""
                } ${index > 1 ? "border-t border-white/25 lg:border-t-0" : ""}`}
              >
                <p className="hero-display text-7xl tabular-nums md:text-9xl">{stat.value}</p>
                <p className="hero-tag mt-3 max-w-[20ch] text-white/75 lg:w-0 lg:min-w-full lg:max-w-none">
                  {stat.label}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
