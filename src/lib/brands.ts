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
 * Translatable strings use loc(en, es, it) so all languages stay in one place.
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
  tagline: loc("Our own product line", "Nuestra línea de productos", "La nostra linea di prodotti"),
  description: loc(
    "In addition to distributing and exporting partner brands, Business Link develops and markets Fresh Elements—our own line of food products built for retail, foodservice and international trade.",
    "Además de distribuir y exportar marcas asociadas, Business Link desarrolla y comercializa Fresh Elements: nuestra línea de alimentos para retail, foodservice y comercio internacional.",
    "Oltre a distribuire ed esportare marchi partner, Business Link sviluppa e commercializza Fresh Elements: la nostra linea di prodotti alimentari per il retail, il foodservice e il commercio internazionale.",
  ),
  ctaLabel: loc("View catalog", "Ver catálogo", "Consulta il catalogo"),
  ctaHref: "/portfolio/fresh-elements",
  futureSite: "https://freshelementsholdings.com",
  logo: "/brands/fresh-elements-logo.png" as string | undefined,
  catalogHref: "/portfolio/fresh-elements",
  catalogLabel: loc("View product catalog", "Ver catálogo de productos", "Consulta il catalogo prodotti"),
  photos: [] as string[],
  productLines: [
    {
      id: "snacks",
      label: loc("Snacks", "Snacks", "Snack"),
      detail: loc(
        "Platanitos plantain chips — gluten free, Salt and Chile Limón — and flavored peanuts in all pack sizes, including bulk",
        "Platanitos — chips de plátano sin gluten, Sal y Chile Limón — y maní saborizado en todos los tamaños, incluido granel",
        "Platanitos — chips di platano senza glutine, Sale e Chile Limón — e arachidi aromatizzate in tutti i formati, compresa la rinfusa",
      ),
    },
    {
      id: "oils",
      label: loc("Oils", "Aceites", "Oli"),
      detail: loc(
        "Palm oil blend, table & cooking spread, and traditional margarine. We can also partner to bottle in specific markets.",
        "Mezcla de aceite de palma, untables de mesa y cocina, y margarina tradicional. También podemos asociarnos para embotellar en mercados específicos.",
        "Miscela di olio di palma, spalmabili da tavola e da cucina, e margarina tradizionale. Possiamo inoltre collaborare per l’imbottigliamento in mercati specifici.",
      ),
    },
    {
      id: "rice",
      label: loc("Rice", "Arroz", "Riso"),
      detail: loc(
        "Basmati and jasmine rice — box of 4 × 100 g bags, and 1 kg bags",
        "Arroz basmati y jazmín — caja de 4 bolsas de 100 g, y bolsa de 1 kg",
        "Riso basmati e jasmine — confezione da 4 sacchetti da 100 g e sacchetti da 1 kg",
      ),
    },
    { id: "condiments", label: loc("Condiments", "Condimentos", "Condimenti") },
  ] satisfies ProductLine[],
  products: [
    {
      slug: "flavored-peanuts",
      line: "snacks",
      name: loc("Flavored Peanuts", "Maní saborizado", "Arachidi aromatizzate"),
      description: loc(
        "Flavored peanuts from Fresh Elements in five flavors: spicy, Japanese-style, lime & salt, salted, and caramelized with sesame. Packs can be produced in all sizes, including bulk for export.",
        "Maní saborizado Fresh Elements en cinco sabores: picante, estilo japonés, limón y sal, con sal, y caramelizado con ajonjolí. Se puede producir en todos los tamaños, incluido granel para exportación.",
        "Arachidi aromatizzate Fresh Elements in cinque gusti: piccante, stile giapponese, lime e sale, salate e caramellate con sesamo. Possono essere prodotte in tutti i formati, compresa la rinfusa per l’esportazione.",
      ),
      image: "/products/fresh-elements/flavored-peanuts.jpg",
      details: [
        loc("All pack sizes", "Todos los tamaños", "Tutti i formati"),
        loc("Bulk export", "Exportación a granel", "Esportazione alla rinfusa"),
        loc("5 flavors", "5 sabores", "5 gusti"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "platanitos",
      line: "snacks",
      name: loc("Platanitos", "Platanitos", "Platanitos"),
      description: loc(
        "Gluten-free plantain chips from Fresh Elements. Two flavors: Salt and Chile Limón (Spicy Lime), packed for retail snacking.",
        "Chips de plátano sin gluten de Fresh Elements. Dos sabores: Sal y Chile Limón, en empaque para snack de retail.",
        "Chips di platano senza glutine di Fresh Elements. Due gusti: Sale e Chile Limón, in confezione per lo snacking da retail.",
      ),
      image: "/products/fresh-elements/platanitos.jpg",
      details: [
        loc("Gluten free", "Sin gluten", "Senza glutine"),
        loc("Salt & Chile Limón", "Sal y chile limón", "Sale e Chile Limón"),
        loc("1 oz (28 g) serving", "Porción de 1 oz (28 g)", "Porzione da 1 oz (28 g)"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "palm-oil-blend",
      line: "oils",
      name: loc("Palm Oil Blend", "Mezcla de aceite de palma", "Miscela di olio di palma"),
      description: loc(
        "Fresh Elements premium cooking oil blend made with 80% palm fruit oil. A natural source of vitamin E, ideal for frying. 900 mL bottle. We can also partner to bottle in specific markets.",
        "Mezcla de aceite de cocina premium Fresh Elements, elaborada con 80% de aceite de palma. Fuente natural de vitamina E, ideal para freír. Botella de 900 mL. También podemos asociarnos para embotellar en mercados específicos.",
        "Miscela premium di olio da cucina Fresh Elements, elaborata con l’80% di olio di palma. Fonte naturale di vitamina E, ideale per la frittura. Bottiglia da 900 mL. Possiamo inoltre collaborare per l’imbottigliamento in mercati specifici.",
      ),
      image: "/products/fresh-elements/palm-oil-blend-900ml.jpg",
      details: [
        loc("900 mL", "900 mL", "900 mL"),
        loc("80% palm fruit oil", "80% aceite de palma", "80% olio di palma"),
        loc("Ideal for frying", "Ideal para freír", "Ideale per la frittura"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "do-it-all-spread",
      line: "oils",
      name: loc("Do-It-All Table & Cooking Spread", "Untable Do-It-All de mesa y cocina", "Spalmabile Do-It-All da tavola e da cucina"),
      description: loc(
        "Fresh Elements Do-It-All table and cooking spread. 15.5 oz (440 g) tub, 44 servings.",
        "Untable Fresh Elements Do-It-All para mesa y cocina. Pote de 15.5 oz (440 g), 44 porciones.",
        "Spalmabile Fresh Elements Do-It-All da tavola e da cucina. Vaschetta da 15.5 oz (440 g), 44 porzioni.",
      ),
      image: "/products/fresh-elements/do-it-all-spread-tub.jpg",
      details: [
        loc("15.5 oz / 440 g", "15.5 oz / 440 g", "15.5 oz / 440 g"),
        loc("Table & cooking", "Mesa y cocina", "Tavola e cucina"),
        loc("44 servings", "44 porciones", "44 porzioni"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "margarine-traditional",
      line: "oils",
      name: loc("Traditional Margarine Spread", "Margarina tradicional", "Margarina tradizionale"),
      description: loc(
        "Fresh Elements traditional margarine spread in 50 g and 150 g sticks. With vitamins A & D, zero cholesterol, for cooking and spreading.",
        "Margarina tradicional Fresh Elements en barras de 50 g y 150 g. Con vitaminas A y D, cero colesterol, para cocinar y untar.",
        "Margarina tradizionale Fresh Elements in stecchi da 50 g e 150 g. Con vitamine A e D, zero colesterolo, per cucinare e spalmare.",
      ),
      image: "/products/fresh-elements/margarine-traditional.jpg",
      details: [
        loc("50 g stick", "Barra de 50 g", "Stecco da 50 g"),
        loc("150 g stick", "Barra de 150 g", "Stecco da 150 g"),
        loc("Vitamins A & D", "Vitaminas A y D", "Vitamine A e D"),
        loc("Zero cholesterol", "Cero colesterol", "Zero colesterolo"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "basmati-jasmine-rice",
      line: "rice",
      name: loc("Basmati & Jasmine Rice", "Arroz basmati y jazmín", "Riso basmati e jasmine"),
      description: loc(
        "Fresh Elements basmati and jasmine rice. Packed as a box of four 100 g bags, and in 1 kg bags.",
        "Arroz basmati y jazmín Fresh Elements. Empaque en caja de cuatro bolsas de 100 g, y bolsa de 1 kg.",
        "Riso basmati e jasmine Fresh Elements. Confezionato in scatola da quattro sacchetti da 100 g e in sacchetti da 1 kg.",
      ),
      image: "/products/fresh-elements/basmati-jasmine-rice.jpg",
      details: [
        loc("Basmati & jasmine", "Basmati y jazmín", "Basmati e jasmine"),
        loc("4 × 100 g box", "Caja de 4 × 100 g", "Confezione da 4 × 100 g"),
        loc("1 kg bag", "Bolsa de 1 kg", "Sacchetto da 1 kg"),
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
    slug: "fresh-elements",
    name: "Fresh Elements",
    logo: "/brands/fresh-elements-logo.png",
    note: loc(
      "Our own product line for retail, foodservice and international trade.",
      "Nuestra línea de productos para retail, foodservice y comercio internacional.",
      "La nostra linea di prodotti per retail, foodservice e commercio internazionale.",
    ),
    productLines: freshElementsBrand.productLines,
    catalogHref: "/portfolio/fresh-elements",
    catalogLabel: loc("View product catalog", "Ver catálogo de productos", "Consulta il catalogo prodotti"),
    photos: [],
  },
  {
    slug: "ameriqual",
    name: "AmeriQual Group, LLC",
    logo: "/brands/ameriqual-group.jpg",
    note: loc(
      "Parent company. Facilities in Evansville, IN and Stone Mountain, GA.",
      "Empresa matriz. Plantas en Evansville, IN y Stone Mountain, GA.",
      "Società madre. Stabilimenti a Evansville, IN e Stone Mountain, GA.",
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
        label: loc("Shelf-stable prepared meals", "Comidas preparadas de larga duración", "Piatti pronti a lunga conservazione"),
        detail: loc(
          "4-year shelf life (pouched entrées: chicken, beef, pasta, chili, mac & cheese varieties)",
          "Vida útil de 4 años (entradas en sobre: pollo, res, pasta, chili, macarrones con queso)",
          "Durata di conservazione di 4 anni (piatti principali in busta: pollo, manzo, pasta, chili, varietà di maccheroni al formaggio)",
        ),
      },
      {
        label: loc("Condensed soups", "Sopas condensadas", "Zuppe condensate"),
        detail: loc(
          "Chicken noodle, cream of mushroom, tomato, vegetable",
          "Pollo con fideos, crema de champiñones, tomate, verduras",
          "Pollo con noodles, crema di funghi, pomodoro, verdure",
        ),
      },
      {
        label: loc("Shelf-stable yogurt cups", "Yogur de larga duración", "Yogurt a lunga conservazione"),
        detail: loc(
          "Joy2 Yo-2-Go — no refrigeration needed until opened",
          "Joy2 Yo-2-Go — no requiere refrigeración hasta abrirse",
          "Joy2 Yo-2-Go — non richiede refrigerazione fino all’apertura",
        ),
      },
      {
        label: loc("Peanut butter pouches", "Sobres de mantequilla de maní", "Buste di burro di arachidi"),
        detail: loc("Joy2", "Joy2", "Joy2"),
      },
      {
        label: loc("Military & humanitarian rations", "Raciones militares y humanitarias", "Razioni militari e umanitarie"),
        detail: loc(
          "MRE, HDR, First Strike, emergency water, Heat & Serve and A-Rations — AmeriQual products for military and relief feeding, represented by Business Link for commercial export",
          "MRE, HDR, First Strike, agua de emergencia, Heat & Serve y A-Rations — productos AmeriQual para alimentación militar y de alivio, representados por Business Link para exportación comercial",
          "MRE, HDR, First Strike, acqua di emergenza, Heat & Serve e A-Rations — prodotti AmeriQual per l’alimentazione militare e di soccorso, rappresentati da Business Link per l’esportazione commerciale",
        ),
      },
      {
        label: loc("Self-heating emergency meal kits", "Kits de comida de emergencia auto-calentables", "Kit pasto di emergenza autoriscaldanti"),
        detail: loc(
          "APack Ready Meals for disaster relief; Ready Ration — self-heating kits, 12 meals per case",
          "APack Ready Meals para socorro en desastres; Ready Ration — kits auto-calentables, 12 comidas por caja",
          "APack Ready Meals per soccorso in caso di disastro; Ready Ration — kit autoriscaldanti, 12 pasti per cartone",
        ),
      },
      {
        label: loc("Dry pasta", "Pasta seca", "Pasta secca"),
        detail: loc(
          "Multiple shapes, whole grain option available",
          "Varios formatos, opción integral disponible",
          "Vari formati, opzione integrale disponibile",
        ),
      },
    ],
    catalogHref: "/catalogs/food-life-balanced-2026.pdf",
    catalogLabel: loc("View catalog", "Ver catálogo", "Consulta il catalogo"),
    extraLinks: [
      {
        href: "/portfolio/ameriqual-military",
        label: loc("Military & humanitarian rations", "Raciones militares y humanitarias", "Razioni militari e umanitarie"),
      },
    ],
    photos: [],
  },
  {
    slug: "star-grocery",
    name: "Star Grocery LLC",
    logo: "/brands/star-grocery-logo.png",
    note: loc(
      "Ukrainian grocery manufacturer. La Pasta, Perfetto, Khutorok, Pansky, Golden Grain, Kitto and Fitto.",
      "Fabricante de abarrotes de Ucrania. La Pasta, Perfetto, Khutorok, Pansky, Golden Grain, Kitto y Fitto.",
      "Produttore grocery ucraino. La Pasta, Perfetto, Khutorok, Pansky, Golden Grain, Kitto e Fitto.",
    ),
    subBrands: ["La Pasta", "Perfetto", "Khutorok", "Pansky", "Golden Grain", "Kitto", "Fitto"],
    productLines: [
      {
        label: loc("Pasta & flour", "Pasta y harina", "Pasta e farina"),
        detail: loc(
          "La Pasta, Perfetto, Khutorok, Pansky and Golden Grain — dry pasta, kids shapes, wheat and specialty flours",
          "La Pasta, Perfetto, Khutorok, Pansky y Golden Grain — pasta seca, formatos infantiles, harinas de trigo y especiales",
          "La Pasta, Perfetto, Khutorok, Pansky e Golden Grain — pasta secca, formati per bambini, farine di grano e speciali",
        ),
      },
      {
        label: loc("Rice, groats & pulses", "Arroz, cereales y legumbres", "Riso, cereali e legumi"),
        detail: loc(
          "Khutorok, Pansky and Golden Grain — buckwheat, rice, lentils, couscous, bulgur and millet",
          "Khutorok, Pansky y Golden Grain — trigo sarraceno, arroz, lentejas, cuscús, bulgur y mijo",
          "Khutorok, Pansky e Golden Grain — grano saraceno, riso, lenticchie, couscous, bulgur e miglio",
        ),
      },
      {
        label: loc("Instant meals", "Comidas instantáneas", "Pasti istantanei"),
        detail: loc(
          "Khutorok mashed potatoes and cereals; Fitto soups, cups, oatmeal and savory porridges",
          "Puré y cereales Khutorok; sopas, vasos, avena y gachas Fitto",
          "Purè e cereali Khutorok; zuppe, coppette, avena e porridge Fitto",
        ),
      },
      {
        label: loc("Sauces", "Salsas", "Salse"),
        detail: loc(
          "Kitto soy, teriyaki, sweet chili and specialty sauces",
          "Kitto soya, teriyaki, chile dulce y salsas especiales",
          "Kitto soia, teriyaki, sweet chili e salse speciali",
        ),
      },
      {
        label: loc("Pantry", "Despensa", "Dispensa"),
        detail: loc(
          "Khutorok salt, sugar, baking soda, seasonings and spices",
          "Sal, azúcar, bicarbonato, sazonadores y especias Khutorok",
          "Sale, zucchero, bicarbonato, condimenti e spezie Khutorok",
        ),
      },
    ],
    catalogHref: "/portfolio/star-grocery",
    catalogLabel: loc("View product families", "Ver familias de producto", "Consulta le famiglie di prodotto"),
    extraLinks: [
      {
        href: "/catalogs/star-grocery-2025.pdf",
        label: loc("View catalog", "Ver catálogo", "Consulta il catalogo"),
      },
    ],
    photos: [],
  },
  {
    slug: "star-brands",
    name: "Star Brands",
    logo: "/brands/star-brands-logo.png",
    note: loc(
      "Ukrainian snack manufacturer. Flint, Chipster’s, San Sanych, Crispy Cris, Hroom and Do Bochkovogo.",
      "Fabricante de snacks de Ucrania. Flint, Chipster’s, San Sanych, Crispy Cris, Hroom y Do Bochkovogo.",
      "Produttore di snack ucraino. Flint, Chipster’s, San Sanych, Crispy Cris, Hroom e Do Bochkovogo.",
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
        label: loc("Flint croutons", "Crutones Flint", "Crostini Flint"),
        detail: loc(
          "Wheat-rye croutons, baguette, Grenki rye toasts and Craft bars/chips",
          "Crutones de trigo-centeno, baguette, Grenki de centeno y barras/chips Craft",
          "Crostini di frumento-segale, baguette, toast di segale Grenki e barrette/chips Craft",
        ),
      },
      {
        label: loc("Potato chips", "Papas fritas", "Patatine"),
        detail: loc(
          "Chipster’s classic, BBQ and Superwave; Hroom sliced chips",
          "Chipster’s clásicas, BBQ y Superwave; papas en rodaja Hroom",
          "Chipster’s classiche, BBQ e Superwave; chips a fette Hroom",
        ),
      },
      {
        label: loc("Seeds", "Semillas", "Semi"),
        detail: loc(
          "San Sanych roasted sunflower, striped, white, pumpkin and kernels",
          "San Sanych: girasol tostado, rayadas, blancas, calabaza y pepitas",
          "San Sanych: girasole tostato, striati, bianchi, zucca e semi sgusciati",
        ),
      },
      {
        label: loc("Corn snacks", "Snacks de maíz", "Snack di mais"),
        detail: loc(
          "Crispy Cris corn balls and rings — not available for export at the moment",
          "Crispy Cris: bolitas y aros de maíz — no disponible para exportación por el momento",
          "Crispy Cris: palline e anelli di mais — al momento non disponibili per l’esportazione",
        ),
      },
      {
        label: loc("Pub toasts", "Tostadas", "Toast"),
        detail: loc(
          "Do Bochkovogo wavy and pencil toasts — rye-wheat and wheat",
          "Do Bochkovogo: tostadas onduladas y en palito — trigo-centeno y trigo",
          "Do Bochkovogo: toast ondulati e a stecco — frumento-segale e frumento",
        ),
      },
    ],
    catalogHref: "/catalogs/star-brands-snacks-2024.pdf",
    catalogLabel: loc("View snack catalog", "Ver catálogo de snacks", "Consulta il catalogo snack"),
    photos: [],
  },
  {
    slug: "quinoa-club",
    name: "Quinoa Club",
    logo: "/brands/quinoa-club-logo.png",
    note: loc(
      "Colombian manufacturer in Jamundí, Valle del Cauca. Gluten-free quinoa grocery, breakfast and snacks.",
      "Fabricante colombiano en Jamundí, Valle del Cauca. Abarrotes, desayuno y snacks de quinua sin gluten.",
      "Produttore colombiano a Jamundí, Valle del Cauca. Prodotti da dispensa, colazione e snack di quinoa senza glutine.",
    ),
    productLines: [
      {
        label: loc("Quinoa grain & cooking mixes", "Quinua en grano y mezclas", "Quinoa in chicchi e miscele"),
        detail: loc(
          "Sweet white quinoa grain; Quinoarepa arepa/pupusa/gordita mix; waffle and pancake premix",
          "Quinua blanca dulce; mezcla Quinoarepa para arepa/pupusa/gordita; premix para waffles y pancakes",
          "Quinoa bianca dolce; miscela Quinoarepa per arepa/pupusa/gordita; premix per waffle e pancake",
        ),
      },
      {
        label: loc("Pasta", "Pasta", "Pasta"),
        detail: loc(
          "Spaghetti fortified with quinoa; high-protein fusilli and macaroni (24% protein)",
          "Espagueti fortificado con quinua; fusilli y macarrones de alta proteína (24% de proteína)",
          "Spaghetti fortificati con quinoa; fusilli e maccheroni ad alto contenuto proteico (24% di proteine)",
        ),
      },
      {
        label: loc("Breakfast cereals", "Cereales de desayuno", "Cereali per la colazione"),
        detail: loc(
          "Cereal Puff, Müsli, Protein Loops and BabyQuinoa — with probiotics",
          "Cereal Puff, Müsli, Protein Loops y BabyQuinoa — con probióticos",
          "Cereal Puff, Müsli, Protein Loops e BabyQuinoa — con probiotici",
        ),
      },
      {
        label: loc("Plant beverages", "Bebidas vegetales", "Bevande vegetali"),
        detail: loc(
          "SoyQuinoa instant soy milk with quinoa — natural and vanilla",
          "Leche de soya instantánea SoyQuinoa con quinua — natural y vainilla",
          "Latte di soia istantaneo SoyQuinoa con quinoa — naturale e vaniglia",
        ),
      },
      {
        label: loc("Snacks", "Snacks", "Snack"),
        detail: loc(
          "Cronchy Protein, quinoa toasts, sacha inchi toasts, rings, Quinoa Snacks, Quinoa Puff and Quinoa Chips",
          "Cronchy Protein, tostadas de quinua, tostaditas de sacha inchi, aros, Quinoa Snacks, Quinoa Puff y Quinoa Chips",
          "Cronchy Protein, toast di quinoa, toast di sacha inchi, anelli, Quinoa Snacks, Quinoa Puff e Quinoa Chips",
        ),
      },
    ],
    catalogHref: "/catalogs/quinoa-club-portfolio.pdf",
    catalogLabel: loc("View product portfolio", "Ver portafolio de productos", "Consulta il portafoglio prodotti"),
    photos: [],
  },
  {
    slug: "tronix",
    name: "Tronix",
    logo: "/brands/tronix.png",
    note: loc(
      "Central American extruded snack manufacturer. Torti Chips, Boliqueso, Cebollitas and Cheesitos.",
      "Fabricante centroamericano de snacks extruidos. Torti Chips, Boliqueso, Cebollitas y Cheesitos.",
      "Produttore centroamericano di snack estrusi. Torti Chips, Boliqueso, Cebollitas e Cheesitos.",
    ),
    subBrands: ["Torti Chips", "Boliqueso", "Cebollitas", "Cheesitos"],
    productLines: [
      {
        label: loc("Torti Chips", "Torti Chips", "Torti Chips"),
        detail: loc(
          "Tortilla-style corn chips in 6 flavors: BBQ, Jalapeño, Limón, Chile Limón, Queso and Natural",
          "Chips de maíz estilo tortilla en 6 sabores: BBQ, Jalapeño, Limón, Chile Limón, Queso y Natural",
          "Chips di mais stile tortilla in 6 gusti: BBQ, Jalapeño, Limón, Chile Limón, Queso e Natural",
        ),
      },
      {
        label: loc("Extruded snacks", "Snacks extruidos", "Snack estrusi"),
        detail: loc(
          "Boliqueso corn cheese puffs, Cebollitas onion rings and Cheesitos cheese snacks",
          "Boliqueso bolitas de queso, Cebollitas aros de cebolla y Cheesitos snacks de queso",
          "Boliqueso palline al formaggio, Cebollitas anelli di cipolla e Cheesitos snack al formaggio",
        ),
      },
    ],
    catalogHref: "https://tronixsnacks.com/en/index.php/snacks/",
    catalogLabel: loc("View snack catalog", "Ver catálogo de snacks", "Consulta il catalogo snack"),
    photos: [],
  },
  {
    slug: "lasco",
    name: "Lasco",
    logo: "/brands/lasco.png",
    note: loc(
      "Jamaican manufacturer. Lasco Food Drink in multiple flavors, plus instant chocolate drink mixes.",
      "Fabricante de Jamaica. Lasco Food Drink en varios sabores, más mezclas de chocolate instantáneo.",
      "Produttore giamaicano. Lasco Food Drink in più gusti, più miscele di cioccolato istantaneo.",
    ),
    productLines: [
      {
        label: loc("Food Drink", "Food Drink", "Food Drink"),
        detail: loc(
          "Fortified powdered food drink — vanilla, chocolate, strawberry, peanut punch, almond and more. Add water or milk.",
          "Bebida alimenticia en polvo fortificada — vainilla, chocolate, fresa, punch de maní, almendra y más. Se mezcla con agua o leche.",
          "Bevanda alimentare in polvere fortificata — vaniglia, cioccolato, fragola, punch di arachidi, mandorla e altro. Da miscelare con acqua o latte.",
        ),
      },
      {
        label: loc("Instant Chocolate Drink", "Chocolate instantáneo", "Cioccolato istantaneo"),
        detail: loc(
          "Instant chocolate drink mixes — classic cans plus mint, marshmallow, caramel, nutmeg and French vanilla",
          "Mezclas de chocolate instantáneo — latas clásicas y sabores menta, malvavisco, caramelo, nuez moscada y vainilla francesa",
          "Miscele di cioccolato istantaneo — barattoli classici e gusti menta, marshmallow, caramello, noce moscata e vaniglia francese",
        ),
      },
    ],
    catalogHref: "/portfolio/lasco",
    catalogLabel: loc("View product catalog", "Ver catálogo de productos", "Consulta il catalogo prodotti"),
    photos: [],
  },
  {
    slug: "camaguey",
    name: "Camagüey",
    logo: "/brands/camaguey.png",
    catalogHref: undefined,
    catalogLabel: loc("View full catalog", "Ver catálogo completo", "Consulta il catalogo completo"),
    photos: [],
  },
];
