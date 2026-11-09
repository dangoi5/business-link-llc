import { loc, type Loc } from "@/i18n/t";

/**
 * Brand portfolio data for Business Link LLC.
 *
 * Fresh Elements is kept as a self-contained module so it can later move to
 * a dedicated site without rewriting this page.
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
  /**
   * Width of the logo in the homepage strip, as a % of its grid cell.
   * Tune per logo so they all carry similar visual weight: wide wordmarks
   * get more width, compact or solid marks get less. Defaults to 55.
   */
  logoWidth?: number;
  note?: Loc;
  /** Short selling points shown as a bullet list under the note. */
  highlights?: Loc[];
  subBrands?: string[];
  productLines?: ProductLine[];
  catalogHref?: string;
  /** Spanish-language PDF, used instead of `catalogHref` on the /es site. */
  catalogHrefEs?: string;
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
      image: "/products/fresh-elements/flavored-peanuts.webp",
      details: [
        loc("All pack sizes", "Todos los tamaños", "Tutti i formati"),
        loc("Bulk export", "Exportación a granel", "Esportazione alla rinfusa"),
        loc("5 flavors", "5 sabores", "5 gusti"),
      ],
      imageFit: "contain" as const,
    },
    {
      slug: "salted-peanuts-15kg",
      line: "snacks",
      name: loc(
        "Salted Peanuts — Foodservice 15 kg",
        "Maní salado — Foodservice 15 kg",
        "Arachidi salate — Foodservice 15 kg",
      ),
      description: loc(
        "Fresh Elements salted peanuts in a 15 kg vacuum-packed bag, built for foodservice and bulk buyers.",
        "Maní salado Fresh Elements en bolsa de 15 kg empacada al vacío, pensada para foodservice y compradores a granel.",
        "Arachidi salate Fresh Elements in sacco da 15 kg confezionato sottovuoto, pensato per il foodservice e per gli acquirenti all’ingrosso.",
      ),
      image: "/products/fresh-elements/salted-peanuts-15kg.webp",
      details: [
        loc("Vacuum packed", "Empacado al vacío", "Confezionato sottovuoto"),
        loc("15 kg bag", "Bolsa de 15 kg", "Sacco da 15 kg"),
        loc("Foodservice", "Foodservice", "Foodservice"),
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
      image: "/products/fresh-elements/platanitos.webp",
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
      image: "/products/fresh-elements/palm-oil-blend-900ml.webp",
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
      image: "/products/fresh-elements/do-it-all-spread-tub-v2.webp",
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
      image: "/products/fresh-elements/margarine-traditional.webp",
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
    logoWidth: 48,
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
    logoWidth: 56,
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
        label: loc("Shelf-stable fully cooked meals", "Comidas de larga duración totalmente cocidas", "Piatti completamente cotti a lunga conservazione"),
        detail: loc(
          "4-year shelf life ready-to-heat and enjoy entrees in a variety of pouch sizes including chicken, beef, pasta, chili, stews, and macaroni & cheese and ethnic varieties.",
          "Vida útil de 4 años: platos principales listos para calentar y disfrutar, en variedad de tamaños de sobre, incluidos pollo, res, pasta, chili, estofados, macarrones con queso y variedades étnicas.",
          "Durata di conservazione di 4 anni: piatti principali pronti da riscaldare e gustare, in buste di vari formati, tra cui pollo, manzo, pasta, chili, stufati, maccheroni al formaggio e varietà etniche.",
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
    logoWidth: 54,
    note: loc(
      "Ukrainian grocery and snack manufacturer. Khutorok, Pansky, The Banka, La Pasta, Perfetto, Kitto, Flint and Hroom.",
      "Fabricante de abarrotes y snacks de Ucrania. Khutorok, Pansky, The Banka, La Pasta, Perfetto, Kitto, Flint y Hroom.",
      "Produttore grocery e snack ucraino. Khutorok, Pansky, The Banka, La Pasta, Perfetto, Kitto, Flint e Hroom.",
    ),
    subBrands: ["Khutorok", "Pansky", "The Banka", "La Pasta", "Perfetto", "Kitto", "Flint", "Hroom"],
    productLines: [
      {
        label: loc("Pasta & flour", "Pasta y harina", "Pasta e farina"),
        detail: loc(
          "Khutorok, Pansky, La Pasta and Perfetto — dry pasta, wheat, corn, rye, semola, rice and chickpea flours",
          "Khutorok, Pansky, La Pasta y Perfetto — pasta seca, harinas de trigo, maíz, centeno, sémola, arroz y garbanzo",
          "Khutorok, Pansky, La Pasta e Perfetto — pasta secca, farine di grano, mais, segale, semola, riso e ceci",
        ),
      },
      {
        label: loc("Groats & pulses", "Cereales y legumbres", "Cereali e legumi"),
        detail: loc(
          "Khutorok and Pansky — buckwheat, millet, barley, wheat, corn, semolina, split peas, bulgur and couscous",
          "Khutorok y Pansky — trigo sarraceno, mijo, cebada, trigo, maíz, sémola, chícharo partido, bulgur y cuscús",
          "Khutorok e Pansky — grano saraceno, miglio, orzo, grano, mais, semolino, piselli spezzati, bulgur e couscous",
        ),
      },
      {
        label: loc("Instant noodles", "Fideos instantáneos", "Noodles istantanei"),
        detail: loc(
          "Khutorok instant noodles in bags, cups and trays; Kitto instant egg noodles",
          "Fideos instantáneos Khutorok en bolsas, vasos y bandejas; fideos de huevo instantáneos Kitto",
          "Noodles istantanei Khutorok in buste, coppette e vaschette; noodles all'uovo istantanei Kitto",
        ),
      },
      {
        label: loc("Canned vegetables & preserves", "Verduras en conserva", "Conserve vegetali"),
        detail: loc(
          "Khutorok and The Banka — pickles, hot peppers, beans, tomato paste, lecho, salads and jams",
          "Khutorok y The Banka — encurtidos, chiles, frijoles, pasta de tomate, lecho, ensaladas y mermeladas",
          "Khutorok e The Banka — sottaceti, peperoncini, fagioli, concentrato di pomodoro, lecsó, insalate e confetture",
        ),
      },
      {
        label: loc("Juices", "Jugos", "Succhi"),
        detail: loc(
          "Khutorok and The Banka — tomato and fruit juices, nectars and birch sap",
          "Khutorok y The Banka — jugos de tomate y frutas, néctares y savia de abedul",
          "Khutorok e The Banka — succhi di pomodoro e frutta, nettari e linfa di betulla",
        ),
      },
      {
        label: loc("Sauces", "Salsas", "Salse"),
        detail: loc(
          "Kitto soy, teriyaki, unagi, sweet chili and specialty sauces",
          "Kitto soya, teriyaki, unagi, chile dulce y salsas especiales",
          "Kitto soia, teriyaki, unagi, sweet chili e salse speciali",
        ),
      },
      {
        label: loc("Snacks", "Snacks", "Snack"),
        detail: loc(
          "Flint wheat-rye croutons, baguette, UA FOOD, Grenki rye toasts and Craft bars; Hroom sliced potato chips",
          "Crutones Flint de trigo-centeno, baguette, UA FOOD, Grenki de centeno y barras Craft; papas en rodaja Hroom",
          "Crostini Flint di frumento-segale, baguette, UA FOOD, toast di segale Grenki e barrette Craft; patatine in fetta Hroom",
        ),
      },
    ],
    catalogHref: "/portfolio/star-grocery",
    catalogLabel: loc("View product families", "Ver familias de producto", "Consulta le famiglie di prodotto"),
    extraLinks: [
      {
        href: "/catalogs/star-grocery-2026.pdf",
        label: loc("General catalog (PDF)", "Catálogo general (PDF)", "Catalogo generale (PDF)"),
      },
      {
        href: "/catalogs/star-grocery-snacks-flint-hroom.pdf",
        label: loc("Snacks catalog (PDF)", "Catálogo de snacks (PDF)", "Catalogo snack (PDF)"),
      },
    ],
    photos: [],
  },
  {
    slug: "quinoa-club",
    name: "Quinoa Club",
    logo: "/brands/quinoa-club-logo.png",
    logoWidth: 69,
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
        label: loc("Instant soy mix", "Mezcla de soya instantánea", "Mix di soia istantaneo"),
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
    catalogHref: "/catalogs/quinoa-club-portfolio-en.pdf",
    catalogHrefEs: "/catalogs/quinoa-club-portfolio-es.pdf",
    catalogLabel: loc("View product portfolio", "Ver portafolio de productos", "Consulta il portafoglio prodotti"),
    photos: [],
  },
  {
    slug: "tronix",
    name: "Tronix",
    logo: "/brands/tronix.png",
    logoWidth: 50,
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
    catalogHref: "/catalogs/tronix-product-catalog-2026.pdf",
    catalogLabel: loc("View product catalog", "Ver catálogo de productos", "Consulta il catalogo prodotti"),
    photos: [],
  },
  {
    slug: "lasco",
    name: "Lasco",
    logo: "/brands/lasco.png",
    logoWidth: 42,
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
    slug: "akhan",
    name: "Akhan Makarna",
    logo: "/brands/akhan-logo.png",
    logoWidth: 44,
    note: loc(
      "Turkish durum wheat pasta from Mardin, in Mesopotamia — the land many consider the birthplace of durum wheat. Business Link is working with Akhan to bring it to the Americas for its history, quality and price.",
      "Pasta turca elaborada en Mardin, en Mesopotamia, la tierra que muchos consideran la cuna del trigo duro. Business Link trabaja con Akhan para traerla a las Américas por su historia, calidad y precio.",
      "Pasta turca prodotta a Mardin, in Mesopotamia, la terra che molti considerano la culla del grano duro. Business Link lavora con Akhan per portarla nelle Americhe per la sua storia, qualità e prezzo.",
    ),
    highlights: [
      loc(
        "Made by Akhan, a wheat miller with tradition, producing flour since 2005 and one of Turkey’s top 10 flour producers",
        "Elaborada por Akhan, un molinero de trigo con tradición, que produce harina desde 2005 y es uno de los 10 principales productores de harina de Turquía",
        "Prodotta da Akhan, azienda molitoria di tradizione che produce farina dal 2005 ed è tra le 10 maggiori della Turchia",
      ),
      loc(
        "Brand-new Mardin plant (January 2026): four robotic lines, Swiss and Italian equipment, hands-free production",
        "Planta nueva en Mardin (enero de 2026): cuatro líneas robotizadas, equipos suizos e italianos, producción sin contacto manual",
        "Nuovo stabilimento a Mardin (gennaio 2026): quattro linee robotizzate, impianti svizzeri e italiani, produzione senza contatto manuale",
      ),
      loc(
        "Up to 360 tons of pasta a day, BRC-certified, close to the Mersin and İskenderun ports",
        "Hasta 360 toneladas de pasta al día, certificación BRC, cerca de los puertos de Mersin e İskenderun",
        "Fino a 360 tonnellate di pasta al giorno, certificazione BRC, vicino ai porti di Mersin e İskenderun",
      ),
      loc(
        "Premium look on the shelf at a competitive price-to-quality ratio",
        "Imagen premium en la góndola con una relación precio-calidad competitiva",
        "Aspetto premium a scaffale con un rapporto qualità-prezzo competitivo",
      ),
    ],
    productLines: [
      {
        label: loc("Long pasta", "Pasta larga", "Pasta lunga"),
        detail: loc(
          "Spaghetti, spaghettini, fettuccine, linguine and bucatini",
          "Espagueti, spaghettini, fettuccine, linguine y bucatini",
          "Spaghetti, spaghettini, fettuccine, linguine e bucatini",
        ),
      },
      {
        label: loc("Short & tubular pasta", "Pasta corta y tubular", "Pasta corta e tubolare"),
        detail: loc(
          "Fusilli, penne rigate, pennine, rigatoni, rotini, sedani, sedanini and elbows",
          "Fusilli, penne rigate, pennine, rigatoni, rotini, sedani, sedanini y codos",
          "Fusilli, penne rigate, pennette, rigatoni, rotini, sedani, sedanini e chifferi",
        ),
      },
      {
        label: loc("Soup pasta & specialty shapes", "Pasta para sopa y formas especiales", "Pastina da brodo e formati speciali"),
        detail: loc(
          "Ditalini, vermicelli, orzo, acini di pepe, couscous, tripolini and farfalle",
          "Ditalini, fideo (vermicelli), orzo, acini di pepe, cuscús, tripolini y farfalle",
          "Ditalini, vermicelli, orzo, acini di pepe, couscous, tripolini e farfalle",
        ),
      },
    ],
    catalogHref: "/portfolio/akhan",
    catalogLabel: loc("View product catalog", "Ver catálogo de productos", "Consulta il catalogo prodotti"),
    photos: [],
  },
  {
    slug: "chupa-chups",
    name: "Chupa Chups Popcorn",
    logo: "/brands/chupa-chups-logo.png",
    logoWidth: 30,
    note: loc(
      "Chupa Chups Popcorn by CRNCH Popcorn Concepts (Netherlands). Round popcorn glazed in Chupa Chups lollipop flavors.",
      "Palomitas Chupa Chups de CRNCH Popcorn Concepts (Países Bajos). Palomitas redondas glaseadas con sabores de paleta Chupa Chups.",
      "Popcorn Chupa Chups di CRNCH Popcorn Concepts (Paesi Bassi). Popcorn rotondi glassati ai gusti dei lecca-lecca Chupa Chups.",
    ),
    productLines: [
      {
        label: loc("Glazed popcorn", "Palomitas glaseadas", "Popcorn glassati"),
        detail: loc(
          "Apple, strawberry, cola and caramel — snack-size 30 g, fun-size 90–110 g and classic 135 g bags",
          "Manzana, fresa, cola y caramelo — bolsas snack de 30 g, fun de 90–110 g y clásicas de 135 g",
          "Mela, fragola, cola e caramello — buste snack da 30 g, fun da 90–110 g e classiche da 135 g",
        ),
      },
    ],
    catalogHref: "/portfolio/chupa-chups",
    catalogLabel: loc("View product catalog", "Ver catálogo de productos", "Consulta il catalogo prodotti"),
    photos: [],
  },
  {
    slug: "starkist",
    name: "StarKist",
    logo: "/brands/starkist-logo.jpg",
    logoWidth: 84,
    note: loc(
      "Wild-caught tuna and salmon in cans and single-serve pouches. Classic cans, Tuna Creations flavored pouches and StarKist Selects specialty cans.",
      "Atún y salmón de pesca silvestre en latas y sobres individuales. Latas clásicas, sobres saborizados Tuna Creations y latas especiales StarKist Selects.",
      "Tonno e salmone pescati in natura in lattine e buste monodose. Lattine classiche, buste aromatizzate Tuna Creations e lattine speciali StarKist Selects.",
    ),
    subBrands: ["StarKist Classics", "Tuna Creations", "StarKist Selects"],
    productLines: [
      {
        label: loc("Classic cans — 5 oz", "Latas clásicas — 5 oz", "Lattine classiche — 5 oz"),
        detail: loc(
          "Chunk Light, Chunk White Albacore and Solid White Albacore tuna in water or oil, including 25% less sodium options",
          "Atún Chunk Light, Chunk White Albacore y Solid White Albacore en agua o aceite, con opciones con 25% menos sodio",
          "Tonno Chunk Light, Chunk White Albacore e Solid White Albacore in acqua o olio, con opzioni con il 25% di sodio in meno",
        ),
      },
      {
        label: loc("Single-serve pouches — 2.6 oz", "Sobres individuales — 2,6 oz", "Buste monodose — 2,6 oz"),
        detail: loc(
          "Classic light tuna in water or sunflower oil, plus Tuna Creations in Jalapeño, Lemon Pepper, Herb & Garlic, Sweet & Spicy, Hickory Smoke and Honey BBQ",
          "Atún light clásico en agua o aceite de girasol, más Tuna Creations en Jalapeño, Limón y pimienta, Hierbas y ajo, Dulce y picante, Hickory y BBQ con miel",
          "Tonno light classico in acqua o olio di girasole, più Tuna Creations nei gusti Jalapeño, Limone e pepe, Erbe e aglio, Dolce e piccante, Hickory e BBQ al miele",
        ),
      },
      {
        label: loc("StarKist Selects", "StarKist Selects", "StarKist Selects"),
        detail: loc(
          "Wild-caught, hand-selected yellowfin and albacore in extra virgin olive oil (including four flavored options) or water, plus pink salmon",
          "Aleta amarilla y albacore de pesca silvestre y selección manual en aceite de oliva extra virgen (con cuatro opciones saborizadas) o agua, más salmón rosado",
          "Pinna gialla e albacore pescati in natura e selezionati a mano in olio extra vergine di oliva (con quattro opzioni aromatizzate) o acqua, più salmone rosa",
        ),
      },
    ],
    catalogHref: "/portfolio/starkist",
    catalogLabel: loc("View product catalog", "Ver catálogo de productos", "Consulta il catalogo prodotti"),
    photos: [],
  },
  {
    slug: "camaguey",
    name: "Camagüey",
    logo: "/brands/camaguey.png",
    logoWidth: 56,
    catalogHref: undefined,
    catalogLabel: loc("View full catalog", "Ver catálogo completo", "Consulta il catalogo completo"),
    photos: [],
  },
];
