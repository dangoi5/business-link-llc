/**
 * Brand portfolio data for Business Link LLC.
 *
 * Fresh Elements is kept as a self-contained module so it can later move to
 * a dedicated site at freshelementsholdings.com without rewriting this page.
 *
 * Catalog / photo hooks:
 * - Set `catalogHref` to a hosted PDF URL to show “View full catalog”
 *   (opens in a new tab). Leave it undefined to keep the link hidden.
 * - Add paths to `photos` to show a few representative product images
 *   under a brand. Leave empty to stay logo-and-text only.
 */

export type ProductLine = {
  label: string;
  detail?: string;
};

export type Brand = {
  slug: string;
  name: string;
  logo?: string;
  comingSoon?: boolean;
  /** Short note under the name (parent company, facilities, etc.) */
  note?: string;
  subBrands?: string[];
  productLines?: ProductLine[];
  /** Hosted PDF catalog. When set, a “View full catalog” link is shown. */
  catalogHref?: string;
  catalogLabel?: string;
  /** Optional representative product photos (not SKU grids). */
  photos?: string[];
};

export const freshElementsBrand = {
  slug: "fresh-elements",
  name: "Fresh Elements",
  tagline: "Our own product line",
  description:
    "In addition to distributing and exporting partner brands, Business Link develops and markets Fresh Elements—our own line of food products built for retail, foodservice and international trade.",
  ctaLabel: "Explore portfolio",
  ctaHref: "/portfolio",
  /** Future dedicated site — not built yet. */
  futureSite: "https://freshelementsholdings.com",
  logo: undefined as string | undefined,
  catalogHref: undefined as string | undefined,
  catalogLabel: "View full catalog",
  photos: [] as string[],
  productLines: [
    { label: "Oils" },
    {
      label: "Snacks",
      detail: "Includes Platanitos plantain chips — gluten free, multiple flavors",
    },
    { label: "Rice" },
    { label: "Condiments" },
  ] satisfies ProductLine[],
};

export const representedBrands: Brand[] = [
  {
    slug: "ameriqual",
    name: "AmeriQual Group, LLC",
    logo: "/brands/ameriqual-group.jpg",
    note: "Parent company. Facilities in Evansville, IN and Stone Mountain, GA.",
    subBrands: [
      "Food Life Balanced",
      "Food Life Balanced+",
      "Joy2",
      "Ready Ration",
      "APack Ready Meal",
    ],
    productLines: [
      {
        label: "Shelf-stable prepared meals",
        detail:
          "4-year shelf life (pouched entrées: chicken, beef, pasta, chili, mac & cheese varieties)",
      },
      {
        label: "Condensed soups",
        detail: "Chicken noodle, cream of mushroom, tomato, vegetable",
      },
      {
        label: "Shelf-stable yogurt cups",
        detail: "Joy2 Yo-2-Go — no refrigeration needed until opened",
      },
      {
        label: "Peanut butter pouches",
        detail: "Joy2",
      },
      {
        label: "Self-heating emergency meal kits",
        detail:
          "Ready Ration, APack — FEMA-compliant, entrée + sides + dessert + drink",
      },
      {
        label: "Dry pasta",
        detail: "Multiple shapes, whole grain option available",
      },
    ],
    catalogHref: "/catalogs/food-life-balanced-2026.pdf",
    catalogLabel: "View 2026 catalog",
    photos: [],
  },
  {
    slug: "star-grocery",
    name: "Star Grocery LLC",
    logo: "/brands/star-grocery.png",
    productLines: [
      {
        label: "Dry pasta",
        detail: "La Pasta — shapes including penne, spaghetti, tagliatelle, whole grain",
      },
      {
        label: "Flours",
        detail: "La Pasta — semolina, rice, chickpea and wheat flours",
      },
      {
        label: "Rice, groats & pulses",
        detail: "Khutorok Panskyi — buckwheat, rice, lentils, couscous, bulgur",
      },
      {
        label: "Instant mashed potatoes",
        detail: "Khutorok — flavored 30 g pouches",
      },
      {
        label: "Sauces",
        detail: "Kitto — soy, teriyaki, sweet chili, sweet and sour",
      },
    ],
    catalogHref: "/catalogs/star-grocery-2025.pdf",
    catalogLabel: "View 2025 catalog",
    photos: [],
  },
  {
    slug: "tronix",
    name: "Tronix",
    logo: "/brands/tronix.png",
    catalogHref: undefined,
    catalogLabel: "View full catalog",
    photos: [],
  },
  {
    slug: "lasco",
    name: "Lasco",
    logo: "/brands/lasco.png",
    catalogHref: undefined,
    catalogLabel: "View full catalog",
    photos: [],
  },
  {
    slug: "camaguey",
    name: "Camagüey",
    logo: "/brands/camaguey.png",
    catalogHref: undefined,
    catalogLabel: "View full catalog",
    photos: [],
  },
  {
    slug: "coming-soon-1",
    name: "Coming soon",
    comingSoon: true,
  },
  {
    slug: "coming-soon-2",
    name: "Coming soon",
    comingSoon: true,
  },
];

export const brandsWithProductLines: Brand[] = [
  ...representedBrands.filter((brand) => (brand.productLines?.length ?? 0) > 0),
  {
    slug: freshElementsBrand.slug,
    name: freshElementsBrand.name,
    logo: freshElementsBrand.logo,
    note: freshElementsBrand.tagline,
    productLines: freshElementsBrand.productLines,
    catalogHref: freshElementsBrand.catalogHref,
    catalogLabel: freshElementsBrand.catalogLabel,
    photos: freshElementsBrand.photos,
  },
];
