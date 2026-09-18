import { loc, type Loc } from "@/i18n/t";

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
 *
 * Translatable strings use loc(en, es) so both languages stay in one place.
 */

export type ProductLine = {
  label: Loc;
  detail?: Loc;
};

export type Brand = {
  slug: string;
  name: string;
  logo?: string;
  comingSoon?: boolean;
  note?: Loc;
  subBrands?: string[];
  productLines?: ProductLine[];
  catalogHref?: string;
  catalogLabel?: Loc;
  photos?: string[];
};

export const freshElementsBrand = {
  slug: "fresh-elements",
  name: "Fresh Elements",
  tagline: loc("Our own product line", "Nuestra línea de productos"),
  description: loc(
    "In addition to distributing and exporting partner brands, Business Link develops and markets Fresh Elements—our own line of food products built for retail, foodservice and international trade.",
    "Además de distribuir y exportar marcas asociadas, Business Link desarrolla y comercializa Fresh Elements: nuestra línea de alimentos para retail, foodservice y comercio internacional.",
  ),
  ctaLabel: loc("Explore portfolio", "Ver portafolio"),
  ctaHref: "/portfolio",
  futureSite: "https://freshelementsholdings.com",
  logo: undefined as string | undefined,
  catalogHref: undefined as string | undefined,
  catalogLabel: loc("View full catalog", "Ver catálogo completo"),
  photos: [] as string[],
  productLines: [
    { label: loc("Oils", "Aceites") },
    {
      label: loc("Snacks", "Snacks"),
      detail: loc(
        "Includes Platanitos plantain chips — gluten free, multiple flavors",
        "Incluye Platanitos — chips de plátano sin gluten, varios sabores",
      ),
    },
    { label: loc("Rice", "Arroz") },
    { label: loc("Condiments", "Condimentos") },
  ] satisfies ProductLine[],
};

export const representedBrands: Brand[] = [
  {
    slug: "ameriqual",
    name: "AmeriQual Group, LLC",
    logo: "/brands/ameriqual-group.jpg",
    note: loc(
      "Parent company. Facilities in Evansville, IN and Stone Mountain, GA.",
      "Empresa matriz. Plantas en Evansville, IN y Stone Mountain, GA.",
    ),
    subBrands: [
      "Food Life Balanced",
      "Food Life Balanced+",
      "Joy2",
      "Ready Ration",
      "APack Ready Meal",
    ],
    productLines: [
      {
        label: loc("Shelf-stable prepared meals", "Comidas preparadas de larga duración"),
        detail: loc(
          "4-year shelf life (pouched entrées: chicken, beef, pasta, chili, mac & cheese varieties)",
          "Vida útil de 4 años (entradas en sobre: pollo, res, pasta, chili, macarrones con queso)",
        ),
      },
      {
        label: loc("Condensed soups", "Sopas condensadas"),
        detail: loc(
          "Chicken noodle, cream of mushroom, tomato, vegetable",
          "Pollo con fideos, crema de champiñones, tomate, verduras",
        ),
      },
      {
        label: loc("Shelf-stable yogurt cups", "Yogur de larga duración"),
        detail: loc(
          "Joy2 Yo-2-Go — no refrigeration needed until opened",
          "Joy2 Yo-2-Go — no requiere refrigeración hasta abrirse",
        ),
      },
      {
        label: loc("Peanut butter pouches", "Sobres de mantequilla de maní"),
        detail: loc("Joy2", "Joy2"),
      },
      {
        label: loc("Self-heating emergency meal kits", "Kits de comida de emergencia auto-calentables"),
        detail: loc(
          "Ready Ration, APack — FEMA-compliant, entrée + sides + dessert + drink",
          "Ready Ration, APack — conformes a FEMA, entrada + acompañamientos + postre + bebida",
        ),
      },
      {
        label: loc("Dry pasta", "Pasta seca"),
        detail: loc(
          "Multiple shapes, whole grain option available",
          "Varios formatos, opción integral disponible",
        ),
      },
    ],
    catalogHref: "/catalogs/food-life-balanced-2026.pdf",
    catalogLabel: loc("View 2026 catalog", "Ver catálogo 2026"),
    photos: [],
  },
  {
    slug: "star-grocery",
    name: "Star Grocery LLC",
    logo: "/brands/star-grocery.png",
    productLines: [
      {
        label: loc("Dry pasta", "Pasta seca"),
        detail: loc(
          "La Pasta — shapes including penne, spaghetti, tagliatelle, whole grain",
          "La Pasta — formatos que incluyen penne, spaghetti, tagliatelle e integral",
        ),
      },
      {
        label: loc("Flours", "Harinas"),
        detail: loc(
          "La Pasta — semolina, rice, chickpea and wheat flours",
          "La Pasta — sémola, arroz, garbanzo y harinas de trigo",
        ),
      },
      {
        label: loc("Rice, groats & pulses", "Arroz, cereales y legumbres"),
        detail: loc(
          "Khutorok Panskyi — buckwheat, rice, lentils, couscous, bulgur",
          "Khutorok Panskyi — trigo sarraceno, arroz, lentejas, cuscús, bulgur",
        ),
      },
      {
        label: loc("Instant mashed potatoes", "Puré de papa instantáneo"),
        detail: loc("Khutorok — flavored 30 g pouches", "Khutorok — sobres saborizados de 30 g"),
      },
      {
        label: loc("Sauces", "Salsas"),
        detail: loc(
          "Kitto — soy, teriyaki, sweet chili, sweet and sour",
          "Kitto — soya, teriyaki, chile dulce, agridulce",
        ),
      },
    ],
    catalogHref: "/catalogs/star-grocery-2025.pdf",
    catalogLabel: loc("View 2025 catalog", "Ver catálogo 2025"),
    photos: [],
  },
  {
    slug: "tronix",
    name: "Tronix",
    logo: "/brands/tronix.png",
    catalogHref: undefined,
    catalogLabel: loc("View full catalog", "Ver catálogo completo"),
    photos: [],
  },
  {
    slug: "lasco",
    name: "Lasco",
    logo: "/brands/lasco.png",
    catalogHref: undefined,
    catalogLabel: loc("View full catalog", "Ver catálogo completo"),
    photos: [],
  },
  {
    slug: "camaguey",
    name: "Camagüey",
    logo: "/brands/camaguey.png",
    catalogHref: undefined,
    catalogLabel: loc("View full catalog", "Ver catálogo completo"),
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
