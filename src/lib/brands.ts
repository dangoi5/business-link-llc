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
  extraLinks?: { href: string; label: Loc }[];
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
  logo: "/brands/fresh-elements-logo.png" as string | undefined,
  catalogHref: "/portfolio/fresh-elements",
  catalogLabel: loc("View product catalog", "Ver catálogo de productos"),
  photos: [] as string[],
  productLines: [
    {
      id: "snacks",
      label: loc("Snacks", "Snacks"),
      detail: loc(
        "Platanitos plantain chips — gluten free, Salt and Chile Limón — and flavored peanuts in all pack sizes, including bulk",
        "Platanitos — chips de plátano sin gluten, Sal y Chile Limón — y maní saborizado en todos los tamaños, incluido granel",
      ),
    },
    {
      id: "oils",
      label: loc("Oils", "Aceites"),
      detail: loc(
        "Palm oil blend, table & cooking spread, and traditional margarine. We can also partner to bottle in specific markets.",
        "Mezcla de aceite de palma, untables de mesa y cocina, y margarina tradicional. También podemos asociarnos para embotellar en mercados específicos.",
      ),
    },
    {
      id: "rice",
      label: loc("Rice", "Arroz"),
      detail: loc(
        "Basmati and jasmine rice — box of 4 × 100 g bags, and 1 kg bags",
        "Arroz basmati y jazmín — caja de 4 bolsas de 100 g, y bolsa de 1 kg",
      ),
    },
    { id: "condiments", label: loc("Condiments", "Condimentos") },
  ] satisfies ProductLine[],
  products: [
    {
      slug: "flavored-peanuts",
      line: "snacks",
      name: loc("Flavored Peanuts", "Maní saborizado"),
      description: loc(
        "Flavored peanuts from Fresh Elements in five flavors: spicy, Japanese-style, lime & salt, salted, and caramelized with sesame. Packs can be produced in all sizes, including bulk for export.",
        "Maní saborizado Fresh Elements en cinco sabores: picante, estilo japonés, limón y sal, con sal, y caramelizado con ajonjolí. Se puede producir en todos los tamaños, incluido granel para exportación.",
      ),
      image: "/products/fresh-elements/flavored-peanuts.jpg",
      details: [
        loc("All pack sizes", "Todos los tamaños"),
        loc("Bulk export", "Exportación a granel"),
        loc("5 flavors", "5 sabores"),
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
    {
      slug: "palm-oil-blend",
      line: "oils",
      name: loc("Palm Oil Blend", "Mezcla de aceite de palma"),
      description: loc(
        "Fresh Elements premium cooking oil blend made with 80% palm fruit oil. A natural source of vitamin E, ideal for frying. 900 mL bottle. We can also partner to bottle in specific markets.",
        "Mezcla de aceite de cocina premium Fresh Elements, elaborada con 80% de aceite de palma. Fuente natural de vitamina E, ideal para freír. Botella de 900 mL. También podemos asociarnos para embotellar en mercados específicos.",
      ),
      image: "/products/fresh-elements/palm-oil-blend-900ml.jpg",
      details: [
        loc("900 mL", "900 mL"),
        loc("80% palm fruit oil", "80% aceite de palma"),
        loc("Ideal for frying", "Ideal para freír"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "do-it-all-spread",
      line: "oils",
      name: loc("Do-It-All Table & Cooking Spread", "Untable Do-It-All de mesa y cocina"),
      description: loc(
        "Fresh Elements Do-It-All table and cooking spread. 15.5 oz (440 g) tub, 44 servings.",
        "Untable Fresh Elements Do-It-All para mesa y cocina. Pote de 15.5 oz (440 g), 44 porciones.",
      ),
      image: "/products/fresh-elements/do-it-all-spread-tub.jpg",
      details: [
        loc("15.5 oz / 440 g", "15.5 oz / 440 g"),
        loc("Table & cooking", "Mesa y cocina"),
        loc("44 servings", "44 porciones"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "margarine-traditional",
      line: "oils",
      name: loc("Traditional Margarine Spread", "Margarina tradicional"),
      description: loc(
        "Fresh Elements traditional margarine spread in a 50 g stick. With vitamins A & D, zero cholesterol, for cooking and spreading.",
        "Margarina tradicional Fresh Elements en barra de 50 g. Con vitaminas A y D, cero colesterol, para cocinar y untar.",
      ),
      image: "/products/fresh-elements/margarine-traditional-50g.jpg",
      details: [
        loc("50 g stick", "Barra de 50 g"),
        loc("Vitamins A & D", "Vitaminas A y D"),
        loc("Zero cholesterol", "Cero colesterol"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "basmati-jasmine-rice",
      line: "rice",
      name: loc("Basmati & Jasmine Rice", "Arroz basmati y jazmín"),
      description: loc(
        "Fresh Elements basmati and jasmine rice. Packed as a box of four 100 g bags, and in 1 kg bags.",
        "Arroz basmati y jazmín Fresh Elements. Empaque en caja de cuatro bolsas de 100 g, y bolsa de 1 kg.",
      ),
      image: "/products/fresh-elements/basmati-jasmine-rice.jpg",
      details: [
        loc("Basmati & jasmine", "Basmati y jazmín"),
        loc("4 × 100 g box", "Caja de 4 × 100 g"),
        loc("1 kg bag", "Bolsa de 1 kg"),
      ],
      imageFit: "cover" as const,
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
        label: loc("Military & humanitarian rations", "Raciones militares y humanitarias"),
        detail: loc(
          "MRE, HDR, First Strike, emergency water, Heat & Serve and A-Rations for U.S. and allied military and relief feeding",
          "MRE, HDR, First Strike, agua de emergencia, Heat & Serve y A-Rations para alimentación militar y de alivio de EE. UU. y aliados",
        ),
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
    extraLinks: [
      {
        href: "/portfolio/ameriqual-military",
        label: loc("Military & humanitarian rations", "Raciones militares y humanitarias"),
      },
    ],
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
      "Ukrainian snack manufacturer. Flint, Chipster’s, San Sanych, Crispy Cris, Hroom and Do Bochkovogo.",
      "Fabricante de snacks de Ucrania. Flint, Chipster’s, San Sanych, Crispy Cris, Hroom y Do Bochkovogo.",
    ),
    subBrands: [
      "Flint",
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
        detail: loc(
          "Crispy Cris corn balls and rings — not available for export at the moment",
          "Crispy Cris: bolitas y aros de maíz — no disponible para exportación por el momento",
        ),
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
    slug: "quinoa-club",
    name: "Quinoa Club",
    logo: "/brands/quinoa-club.png",
    note: loc(
      "Colombian manufacturer in Jamundí, Valle del Cauca. Gluten-free quinoa grocery, breakfast and snacks.",
      "Fabricante colombiano en Jamundí, Valle del Cauca. Abarrotes, desayuno y snacks de quinua sin gluten.",
    ),
    productLines: [
      {
        label: loc("Quinoa grain & cooking mixes", "Quinua en grano y mezclas"),
        detail: loc(
          "Sweet white quinoa grain; Quinoarepa arepa/pupusa/gordita mix; waffle and pancake premix",
          "Quinua blanca dulce; mezcla Quinoarepa para arepa/pupusa/gordita; premix para waffles y pancakes",
        ),
      },
      {
        label: loc("Pasta", "Pasta"),
        detail: loc(
          "Spaghetti fortified with quinoa; high-protein fusilli and macaroni (24% protein)",
          "Espagueti fortificado con quinua; fusilli y macarrones de alta proteína (24% de proteína)",
        ),
      },
      {
        label: loc("Breakfast cereals", "Cereales de desayuno"),
        detail: loc(
          "Cereal Puff, Müsli, Protein Loops and BabyQuinoa — with probiotics",
          "Cereal Puff, Müsli, Protein Loops y BabyQuinoa — con probióticos",
        ),
      },
      {
        label: loc("Plant beverages", "Bebidas vegetales"),
        detail: loc(
          "SoyQuinoa instant soy milk with quinoa — natural and vanilla",
          "Leche de soya instantánea SoyQuinoa con quinua — natural y vainilla",
        ),
      },
      {
        label: loc("Snacks", "Snacks"),
        detail: loc(
          "Cronchy Protein, quinoa toasts, sacha inchi toasts, rings, Quinoa Snacks, Quinoa Puff and Quinoa Chips",
          "Cronchy Protein, tostadas de quinua, tostaditas de sacha inchi, aros, Quinoa Snacks, Quinoa Puff y Quinoa Chips",
        ),
      },
    ],
    catalogHref: "/catalogs/quinoa-club-portfolio.pdf",
    catalogLabel: loc("View product portfolio", "Ver portafolio de productos"),
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
    note: loc(
      "Jamaican manufacturer. Lasco Food Drink is a fortified powdered beverage for the whole family.",
      "Fabricante de Jamaica. Lasco Food Drink es una bebida en polvo fortificada para toda la familia.",
    ),
    productLines: [
      {
        label: loc("Food Drink", "Food Drink"),
        detail: loc(
          "Fortified powdered food drink — vanilla and other flavors. Add water or milk.",
          "Bebida alimenticia en polvo fortificada — vainilla y otros sabores. Se mezcla con agua o leche.",
        ),
      },
    ],
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
