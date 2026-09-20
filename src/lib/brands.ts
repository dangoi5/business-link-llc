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
  id?: string;
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
  ctaLabel: loc("View catalog", "Ver catálogo"),
  ctaHref: "/portfolio/fresh-elements",
  futureSite: "https://freshelementsholdings.com",
  logo: undefined as string | undefined,
  catalogHref: "/portfolio/fresh-elements",
  catalogLabel: loc("View product catalog", "Ver catálogo de productos"),
  photos: [] as string[],
  productLines: [
    {
      id: "snacks",
      label: loc("Snacks", "Snacks"),
      detail: loc(
        "Platanitos plantain chips — gluten free, Salt and Chile Limón — and flavored peanuts in five 42 g flavors",
        "Platanitos — chips de plátano sin gluten, Sal y Chile Limón — y maní saborizado en cinco sabores de 42 g",
      ),
    },
    { id: "oils", label: loc("Oils", "Aceites") },
    { id: "rice", label: loc("Rice", "Arroz") },
    { id: "condiments", label: loc("Condiments", "Condimentos") },
  ] satisfies ProductLine[],
  products: [
    {
      slug: "flavored-peanuts",
      line: "snacks",
      name: loc("Flavored Peanuts", "Maní saborizado"),
      description: loc(
        "Retail peanut snacks from our Fresh Elements line. Five 42 g (1.5 oz) flavors: spicy, Japanese-style, lime & salt, salted, and caramelized with sesame.",
        "Snacks de maní de nuestra línea Fresh Elements. Cinco sabores de 42 g (1.5 oz): picante, estilo japonés, limón y sal, con sal, y caramelizado con ajonjolí.",
      ),
      image: "/products/fresh-elements/flavored-peanuts.jpg",
      details: [
        loc("42 g / 1.5 oz", "42 g / 1.5 oz"),
        loc("5 flavors", "5 sabores"),
        loc("Retail snack", "Snack de retail"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "platanitos",
      line: "snacks",
      name: loc("Platanitos", "Platanitos"),
      description: loc(
        "Gluten-free plantain chips from Fresh Elements. Two flavors: Salt and Chile Limón (Spicy Lime), packed for retail snacking.",
        "Chips de plátano sin gluten de Fresh Elements. Dos sabores: Sal y Chile Limón, en empaque para snack de retail.",
      ),
      image: "/products/fresh-elements/platanitos.jpg",
      details: [
        loc("Gluten free", "Sin gluten"),
        loc("Salt & Chile Limón", "Sal y chile limón"),
        loc("1 oz (28 g) serving", "Porción de 1 oz (28 g)"),
      ],
      imageFit: "contain" as const,
    },
  ],
};

export type FreshElementsLineId = (typeof freshElementsBrand.productLines)[number]["id"];

export type FreshElementsProduct = (typeof freshElementsBrand.products)[number];

export function freshElementsProductsForLine(line: FreshElementsLineId) {
  return freshElementsBrand.products.filter((product) => product.line === line);
}

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
    slug: "star-brands",
    name: "Star Brands",
    logo: "/brands/star-brands.png",
    note: loc(
      "Ukrainian snack manufacturer. Flint, Big Bob, Chipster’s, San Sanych, Crispy Cris, Hroom and Do Bochkovogo.",
      "Fabricante de snacks de Ucrania. Flint, Big Bob, Chipster’s, San Sanych, Crispy Cris, Hroom y Do Bochkovogo.",
    ),
    subBrands: [
      "Flint",
      "Big Bob",
      "Chipster’s",
      "San Sanych",
      "Crispy Cris",
      "Hroom",
      "Do Bochkovogo",
    ],
    productLines: [
      {
        label: loc("Flint croutons", "Crutones Flint"),
        detail: loc(
          "Wheat-rye croutons, baguette, Grenki rye toasts and Craft bars/chips",
          "Crutones de trigo-centeno, baguette, Grenki de centeno y barras/chips Craft",
        ),
      },
      {
        label: loc("Big Bob nuts & corn", "Frutos secos y maíz Big Bob"),
        detail: loc(
          "Roasted peanuts, crunch peanuts in casing, fried corn and popcorn",
          "Maní tostado, maní crujiente en cobertura, maíz frito y palomitas",
        ),
      },
      {
        label: loc("Potato chips", "Papas fritas"),
        detail: loc(
          "Chipster’s classic, BBQ and Superwave; Hroom sliced chips",
          "Chipster’s clásicas, BBQ y Superwave; papas en rodaja Hroom",
        ),
      },
      {
        label: loc("Seeds", "Semillas"),
        detail: loc(
          "San Sanych roasted sunflower, striped, white, pumpkin and kernels",
          "San Sanych: girasol tostado, rayadas, blancas, calabaza y pepitas",
        ),
      },
      {
        label: loc("Corn snacks", "Snacks de maíz"),
        detail: loc("Crispy Cris corn balls and rings", "Crispy Cris: bolitas y aros de maíz"),
      },
      {
        label: loc("Pub toasts", "Tostadas"),
        detail: loc(
          "Do Bochkovogo wavy and pencil toasts — rye-wheat and wheat",
          "Do Bochkovogo: tostadas onduladas y en palito — trigo-centeno y trigo",
        ),
      },
    ],
    catalogHref: "/catalogs/star-brands-snacks-2024.pdf",
    catalogLabel: loc("View 2024 snack catalog", "Ver catálogo de snacks 2024"),
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

export const brandsWithProductLines: Brand[] = representedBrands.filter(
  (brand) => (brand.productLines?.length ?? 0) > 0,
);
