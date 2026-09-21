import {
  ameriqualFoodserviceProducts,
  ameriqualShelfStableProducts,
} from "@/lib/ameriqual-catalog";
import { freshElementsBrand } from "@/lib/brands";
import { loc, type Loc } from "@/i18n/t";
import {
  quinoaClubGroceryProducts,
  quinoaClubSnackProducts,
} from "@/lib/quinoa-club-catalog";

export const company = {
  name: "Business Link LLC",
  tagline: loc(
    "Developing Businesses. Building Markets. Connecting the World",
    "Desarrollamos negocios. Construimos mercados. Conectamos el mundo",
  ),
  subtitle: loc(
    "Master Distributor · Exporter · Own Brand",
    "Distribuidor maestro · Exportador · Marca propia",
  ),
  description: loc(
    "Business Link LLC is a master distributor and exporter of food and beverage products. We develop and execute commercial opportunities across international markets—working with manufacturers, brands, distributors and strategic partners to establish sustainable routes to market and long-term business.",
    "Business Link LLC es un distribuidor maestro y exportador de alimentos y bebidas. Desarrollamos y ejecutamos oportunidades comerciales en mercados internacionales, trabajando con fabricantes, marcas, distribuidores y socios estratégicos para establecer rutas de mercado sostenibles y negocios de largo plazo.",
  ),
  role: loc(
    "As a master distributor and exporter, we manage international supply, distribution structures and commercial relationships across our active markets.",
    "Como distribuidor maestro y exportador, gestionamos el abastecimiento internacional, las estructuras de distribución y las relaciones comerciales en nuestros mercados activos.",
  ),
  email: "info@businesslinkgroup.com",
  phone: "",
};

export const ownBrand = {
  name: freshElementsBrand.name,
  tagline: freshElementsBrand.tagline,
  description: freshElementsBrand.description,
  ctaLabel: freshElementsBrand.ctaLabel,
  ctaHref: freshElementsBrand.ctaHref,
};

export const navLinks = [
  { href: "/capabilities", label: loc("Capabilities", "Capacidades") },
  { href: "/portfolio", label: loc("Portfolio", "Portafolio") },
  { href: "/portfolio/fresh-elements", label: loc("Fresh Elements", "Fresh Elements") },
  { href: "/markets", label: loc("Markets", "Mercados") },
  { href: "/contact", label: loc("Contact", "Contacto") },
];

export const heroHighlights = [
  {
    title: loc("Master Distributor & Exporter", "Distribuidor maestro y exportador"),
    description: loc(
      "We export and distribute food & beverage products across international markets.",
      "Exportamos y distribuimos alimentos y bebidas en mercados internacionales.",
    ),
  },
  {
    title: loc("Import / Export & Market Development", "Importación / exportación y desarrollo de mercados"),
    description: loc(
      "International commercial operations across food & beverage—with routes to market, partners and sustainable distribution.",
      "Operaciones comerciales internacionales de alimentos y bebidas, con rutas de mercado, socios y distribución sostenible.",
    ),
  },
  {
    title: loc(
      "Americas · Caribbean · Africa · Europe · Asia-Pacific",
      "Américas · Caribe · África · Europa · Asia-Pacífico",
    ),
    description: loc(
      "A multisector commercial network activated by opportunity.",
      "Una red comercial multisectorial activada por la oportunidad.",
    ),
  },
];

export const manufacturerServices = [
  {
    title: loc("Export Sales Representation", "Representación de ventas de exportación"),
    description: loc(
      "We represent your brand and products in international markets to grow your sales network with qualified buyers and distributors.",
      "Representamos su marca y productos en mercados internacionales para ampliar su red de ventas con compradores y distribuidores calificados.",
    ),
  },
  {
    title: loc("Market Entry & Distributor Sourcing", "Entrada a mercados y búsqueda de distribuidores"),
    description: loc(
      "We identify ideal markets and connect you with trusted importers, distributors and retail partners to enter and scale.",
      "Identificamos mercados ideales y lo conectamos con importadores, distribuidores y socios de retail de confianza para entrar y escalar.",
    ),
  },
  {
    title: loc("Export Strategy Development", "Desarrollo de estrategia de exportación"),
    description: loc(
      "We build a custom market plan, evaluate commercial fit and guide expansion into new regions with lasting partnerships.",
      "Construimos un plan de mercado a medida, evaluamos el encaje comercial y guiamos la expansión a nuevas regiones con alianzas duraderas.",
    ),
  },
  {
    title: loc("Distribution Structure", "Estructura de distribución"),
    description: loc(
      "We design market-specific distribution models using qualified import, warehousing and logistics partners where required.",
      "Diseñamos modelos de distribución por mercado, con socios calificados de importación, almacenamiento y logística cuando se requiere.",
    ),
  },
];

export const buyerServices = [
  {
    title: loc("Strategic Product Sourcing", "Abastecimiento estratégico de productos"),
    description: loc(
      "We identify products and manufacturing capabilities matched to specification, volume and destination-market requirements.",
      "Identificamos productos y capacidades de fabricación acordes a especificación, volumen y requisitos del mercado de destino.",
    ),
  },
  {
    title: loc("Supplier & Brand Discovery", "Descubrimiento de proveedores y marcas"),
    description: loc(
      "Access selected manufacturers and brands whose capabilities complement your channels and commercial goals.",
      "Acceso a fabricantes y marcas seleccionados cuyas capacidades complementan sus canales y objetivos comerciales.",
    ),
  },
  {
    title: loc("Purchasing & Supply Support", "Apoyo de compras y abastecimiento"),
    description: loc(
      "Assistance across sourcing, commercial structure and supply coordination so purchasing needs become viable operations.",
      "Asistencia en abastecimiento, estructura comercial y coordinación de suministro para convertir necesidades de compra en operaciones viables.",
    ),
  },
  {
    title: loc("Logistics Coordination", "Coordinación logística"),
    description: loc(
      "We work with warehousing, fulfillment and logistics partners to support efficient product movement into your market.",
      "Trabajamos con socios de almacenamiento, fulfillment y logística para mover el producto de forma eficiente a su mercado.",
    ),
  },
];

export const capabilities = [
  {
    slug: "master-distribution-export",
    title: loc("Master Distribution & Export", "Distribución maestra y exportación"),
    summary: loc(
      "We operate as a master distributor and exporter—managing product supply, commercial terms and routes to market for partner brands and our own Fresh Elements line.",
      "Operamos como distribuidor maestro y exportador: gestionamos suministro, términos comerciales y rutas de mercado para marcas asociadas y nuestra línea Fresh Elements.",
    ),
    detail: loc(
      "Buyers and market partners gain a single commercial counterpart for international supply, with structured distribution support across our active footprint.",
      "Compradores y socios de mercado obtienen un único interlocutor comercial para el suministro internacional, con apoyo de distribución estructurado en nuestra huella activa.",
    ),
  },
  {
    slug: "international-business-development",
    title: loc("International Business Development", "Desarrollo de negocios internacionales"),
    summary: loc(
      "We identify and develop commercial opportunities by bringing together the right products, manufacturers, partners and markets.",
      "Identificamos y desarrollamos oportunidades comerciales reuniendo los productos, fabricantes, socios y mercados adecuados.",
    ),
    detail: loc(
      "From first contact through sustained commercial activity, we evaluate fit across product, partner capability and destination market demand—then open the relationships that turn opportunity into revenue.",
      "Desde el primer contacto hasta la actividad comercial sostenida, evaluamos el encaje de producto, capacidad del socio y demanda del mercado de destino, y abrimos las relaciones que convierten la oportunidad en ingresos.",
    ),
  },
  {
    slug: "market-development",
    title: loc("Market Development", "Desarrollo de mercados"),
    summary: loc(
      "We evaluate opportunities, establish routes to market and develop the commercial relationships required to build sustainable market presence.",
      "Evaluamos oportunidades, establecemos rutas de mercado y desarrollamos las relaciones comerciales necesarias para construir una presencia sostenible.",
    ),
    detail: loc(
      "Each market has its own regulatory, logistics and channel realities. We map those constraints early and build presence that can scale beyond a single shipment.",
      "Cada mercado tiene sus propias realidades regulatorias, logísticas y de canal. Mapeamos esas restricciones desde el inicio y construimos una presencia que puede escalar más allá de un solo embarque.",
    ),
  },
  {
    slug: "distribution-market-execution",
    title: loc("Distribution & Market Execution", "Distribución y ejecución de mercado"),
    summary: loc(
      "We structure distribution solutions according to each market, working with qualified importers, distributors, warehousing providers and logistics partners where required.",
      "Estructuramos soluciones de distribución según cada mercado, trabajando con importadores, distribuidores, operadores de almacén y socios logísticos calificados cuando se requiere.",
    ),
    detail: loc(
      "Whether the right model is a local importer, regional hub or hybrid fulfillment structure, we design around the opportunity—not a one-size template.",
      "Ya sea un importador local, un hub regional o una estructura híbrida de fulfillment, diseñamos en torno a la oportunidad, no a un modelo único.",
    ),
  },
  {
    slug: "strategic-sourcing",
    title: loc("Strategic Sourcing & Supply Solutions", "Abastecimiento estratégico y soluciones de suministro"),
    summary: loc(
      "We identify products and manufacturing capabilities based on specific market requirements while evaluating sourcing, routing and supply-chain alternatives.",
      "Identificamos productos y capacidades de fabricación según requisitos de mercado específicos, evaluando alternativas de origen, ruteo y cadena de suministro.",
    ),
    detail: loc(
      "Buyers and distributors gain access to manufacturing capacity matched to specification, volume and compliance needs—with routing options that protect margin and reliability.",
      "Compradores y distribuidores acceden a capacidad de fabricación acorde a especificación, volumen y cumplimiento, con opciones de ruteo que protegen margen y confiabilidad.",
    ),
  },
  {
    slug: "own-brand-fresh-elements",
    title: loc("Own Brand — Fresh Elements", "Marca propia — Fresh Elements"),
    summary: loc(
      "We develop and market Fresh Elements, our own food product line, alongside the international brands and manufacturers we represent and distribute.",
      "Desarrollamos y comercializamos Fresh Elements, nuestra línea de alimentos, junto a las marcas y fabricantes internacionales que representamos y distribuimos.",
    ),
    detail: loc(
      "Fresh Elements gives buyers access to Business Link’s proprietary range, developed for commercial channels including retail, foodservice and institutional supply.",
      "Fresh Elements da a los compradores acceso a la gama propia de Business Link, desarrollada para canales comerciales de retail, foodservice y suministro institucional.",
    ),
  },
];

export const processSteps = [
  {
    step: "01",
    label: loc("Identify", "Identificar"),
    description: loc(
      "Qualify product, market and commercial fit",
      "Calificar el encaje de producto, mercado y negocio",
    ),
  },
  {
    step: "02",
    label: loc("Develop", "Desarrollar"),
    description: loc(
      "Build partner relationships and market access",
      "Construir relaciones con socios y acceso a mercado",
    ),
  },
  {
    step: "03",
    label: loc("Structure", "Estructurar"),
    description: loc(
      "Define distribution, pricing and supply terms",
      "Definir distribución, precios y términos de suministro",
    ),
  },
  {
    step: "04",
    label: loc("Execute", "Ejecutar"),
    description: loc(
      "Coordinate logistics, compliance and launch",
      "Coordinar logística, cumplimiento y lanzamiento",
    ),
  },
  {
    step: "05",
    label: loc("Grow", "Crecer"),
    description: loc(
      "Expand presence and sustain long-term volume",
      "Expandir la presencia y sostener el volumen a largo plazo",
    ),
  },
];

export type NutritionFacts = {
  servingSize: Loc;
  servingsPerContainer?: Loc;
  calories: string;
  protein?: string;
  totalFat?: string;
  totalCarbohydrate?: string;
  sodium?: string;
};

export type PortfolioProduct = {
  slug: string;
  name: Loc;
  description: Loc;
  image: string;
  details?: Loc[];
  imageFit?: "cover" | "contain";
  nutrition?: NutritionFacts;
  unavailableForExport?: boolean;
};

export type PortfolioCategory = {
  slug: string;
  title: Loc;
  summary: Loc;
  channels: Loc[];
  image: string;
  products: PortfolioProduct[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "shelf-stable-foods",
    title: loc("Shelf-Stable Foods", "Alimentos de larga duración"),
    summary: loc(
      "Long shelf-life proteins, prepared meals, shelf-stable dairy and other ambient food solutions designed for efficient storage and distribution.",
      "Proteínas de larga vida, comidas preparadas, lácteos a temperatura ambiente y otras soluciones de alimentos que no requieren frío, diseñadas para almacenamiento y distribución eficientes.",
    ),
    channels: [
      loc("Retail", "Retail"),
      loc("Distribution", "Distribución"),
      loc("Institutional", "Institucional"),
    ],
    image: "/categories/shelf-stable-foods.jpg",
    products: ameriqualShelfStableProducts,
  },
  {
    slug: "oils-fats",
    title: loc("Oils & Fats", "Aceites y grasas"),
    summary: loc(
      "Edible oils, palm-based products, vegetable oil blends, margarines and shortenings for retail and foodservice. We can also partner to bottle in specific markets.",
      "Aceites comestibles, productos a base de palma, mezclas vegetales, margarinas y mantecas para retail y foodservice. También podemos asociarnos para embotellar en mercados específicos.",
    ),
    channels: [
      loc("Retail", "Retail"),
      loc("Foodservice", "Foodservice"),
      loc("Industrial", "Industrial"),
    ],
    image: "/products/fresh-elements/palm-oil-blend-900ml.jpg",
    products: freshElementsBrand.products.filter((product) => product.line === "oils"),
  },
  {
    slug: "foodservice-institutional",
    title: loc("Foodservice & Institutional", "Foodservice e institucional"),
    summary: loc(
      "Products and supply solutions for foodservice, hospitality, catering, institutional feeding and other high-volume applications.",
      "Productos y soluciones de suministro para foodservice, hospitalidad, catering, alimentación institucional y otras aplicaciones de alto volumen.",
    ),
    channels: [
      loc("Hospitality", "Hospitalidad"),
      loc("Catering", "Catering"),
      loc("Institutional", "Institucional"),
    ],
    image: "/categories/foodservice-institutional.jpg",
    products: ameriqualFoodserviceProducts,
  },
  {
    slug: "grocery-consumer",
    title: loc("Grocery & Consumer Foods", "Abarrotes y alimentos de consumo"),
    summary: loc(
      "Selected consumer food products and grocery categories developed according to individual market opportunities.",
      "Productos de consumo y categorías de abarrotes seleccionados según las oportunidades de cada mercado.",
    ),
    channels: [
      loc("Retail", "Retail"),
      loc("Grocery", "Abarrotes"),
      loc("Wholesale", "Mayoreo"),
    ],
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
    products: [
      {
        slug: "la-pasta-penne-rigate",
        name: loc("La Pasta Penne Rigate", "La Pasta Penne Rigate"),
        description: loc(
          "Durum wheat penne rigate from the La Pasta range. A core dry-pasta shape for retail and wholesale grocery.",
          "Penne rigate de trigo duro de la línea La Pasta. Un formato central de pasta seca para retail y mayoreo.",
        ),
        image: "/products/star-grocery/la-pasta-penne.jpg",
        details: [
          loc("La Pasta", "La Pasta"),
          loc("400 g", "400 g"),
          loc("Star Grocery", "Star Grocery"),
        ],
        imageFit: "contain",
      },
      {
        slug: "la-pasta-spaghetti",
        name: loc("La Pasta Spaghetti", "La Pasta Spaghetti"),
        description: loc(
          "Classic spaghetti from La Pasta, packed for grocery distribution. Additional pack sizes are listed in the full catalog.",
          "Spaghetti clásico de La Pasta, empacado para distribución de abarrotes. Otros tamaños aparecen en el catálogo completo.",
        ),
        image: "/products/star-grocery/la-pasta-spaghetti.jpg",
        details: [
          loc("La Pasta", "La Pasta"),
          loc("400 g", "400 g"),
          loc("Star Grocery", "Star Grocery"),
        ],
        imageFit: "contain",
      },
      {
        slug: "la-pasta-whole-grain-fusilli",
        name: loc("La Pasta Whole Grain Fusilli", "La Pasta Fusilli integral"),
        description: loc(
          "Whole-grain fusilli from La Pasta. A whole-wheat pasta option alongside the standard durum shapes.",
          "Fusilli integral de La Pasta. Una opción de pasta de trigo integral junto a los formatos de sémola estándar.",
        ),
        image: "/products/star-grocery/la-pasta-whole-grain-fusilli.jpg",
        details: [
          loc("La Pasta", "La Pasta"),
          loc("400 g", "400 g"),
          loc("Whole grain", "Integral"),
        ],
        imageFit: "contain",
      },
      {
        slug: "la-pasta-semolina-flour",
        name: loc("La Pasta Semolina Flour", "Harina de sémola La Pasta"),
        description: loc(
          "Semola di grano duro tipo 1 — durum wheat semolina flour from La Pasta for pasta, bakery and foodservice use.",
          "Sémola de trigo duro tipo 1 de La Pasta, para pasta, panadería y foodservice.",
        ),
        image: "/products/star-grocery/la-pasta-semola.jpg",
        details: [
          loc("La Pasta", "La Pasta"),
          loc("1 kg", "1 kg"),
          loc("Durum wheat", "Trigo duro"),
        ],
        imageFit: "contain",
      },
      {
        slug: "khutorok-buckwheat-groats",
        name: loc("Khutorok Panskyi Buckwheat Groats", "Trigo sarraceno Khutorok Panskyi"),
        description: loc(
          "Khutorok Panskyi roasted buckwheat groats. A staple groat for retail grocery and foodservice.",
          "Trigo sarraceno tostado Khutorok Panskyi. Un cereal básico para abarrotes y foodservice.",
        ),
        image: "/products/star-grocery/khutorok-buckwheat.jpg",
        details: [loc("Khutorok Panskyi", "Khutorok Panskyi"), loc("1 kg", "1 kg")],
        imageFit: "contain",
      },
      {
        slug: "khutorok-jasmine-rice",
        name: loc("Khutorok Panskyi Jasmine Rice", "Arroz jazmín Khutorok Panskyi"),
        description: loc(
          "Long-grain jasmine rice from the Khutorok Panskyi groats and rice line. Polished, 1 kg retail pack.",
          "Arroz jazmín de grano largo de la línea Khutorok Panskyi. Pulido, empaque retail de 1 kg.",
        ),
        image: "/products/star-grocery/khutorok-jasmine-rice.jpg",
        details: [
          loc("Khutorok Panskyi", "Khutorok Panskyi"),
          loc("1 kg", "1 kg"),
          loc("Long grain", "Grano largo"),
        ],
        imageFit: "contain",
      },
      {
        slug: "khutorok-creamy-mashed-potatoes",
        name: loc("Khutorok Creamy Mashed Potatoes", "Puré de papa cremoso Khutorok"),
        description: loc(
          "Instant mashed potatoes with a creamy taste from Khutorok. A 30 g single-serve pouch for grocery and foodservice.",
          "Puré de papa instantáneo con sabor cremoso de Khutorok. Sobre individual de 30 g para abarrotes y foodservice.",
        ),
        image: "/products/star-grocery/khutorok-mashed-creamy.jpg",
        details: [
          loc("Khutorok", "Khutorok"),
          loc("30 g pouch", "Sobre de 30 g"),
          loc("Instant", "Instantáneo"),
        ],
        imageFit: "contain",
      },
      {
        slug: "kitto-classic-soy-sauce",
        name: loc("Kitto Classic Soy Sauce", "Salsa de soya clásica Kitto"),
        description: loc(
          "Classic soy sauce from Kitto. Available in 200 ml to 1 L bottles, with ginger, garlic and mushroom variants in the catalog.",
          "Salsa de soya clásica Kitto. Disponible de 200 ml a 1 L, con variantes de jengibre, ajo y champiñón en el catálogo.",
        ),
        image: "/products/star-grocery/kitto-classic-soy.jpg",
        details: [loc("Kitto", "Kitto"), loc("1 L", "1 L")],
        imageFit: "contain",
      },
      {
        slug: "kitto-sweet-chili-sauce",
        name: loc("Kitto Sweet Chili Sauce", "Salsa chile dulce Kitto"),
        description: loc(
          "Sweet chili sauce from Kitto. A grocery condiment alongside Kitto teriyaki, unagi and sweet-and-sour sauces.",
          "Salsa de chile dulce Kitto. Un condimento de abarrotes junto a las salsas teriyaki, unagi y agridulce de Kitto.",
        ),
        image: "/products/star-grocery/kitto-sweet-chili.jpg",
        details: [loc("Kitto", "Kitto"), loc("200 ml", "200 ml")],
        imageFit: "contain",
      },
      ...quinoaClubGroceryProducts,
      ...freshElementsBrand.products.filter((product) => product.line === "rice"),
      {
        slug: "lasco-food-drink",
        name: loc("Lasco Food Drink", "Lasco Food Drink"),
        description: loc(
          "Lasco Food Drink — a Jamaican fortified powdered beverage. Vanilla and other flavors; add water or milk. Shown here in the 400 g vanilla pack.",
          "Lasco Food Drink — bebida en polvo fortificada de Jamaica. Vainilla y otros sabores; se mezcla con agua o leche. Aquí, el empaque de vainilla de 400 g.",
        ),
        image: "/products/lasco/food-drink.jpg",
        details: [
          loc("Lasco", "Lasco"),
          loc("400 g", "400 g"),
          loc("Vanilla & other flavors", "Vainilla y otros sabores"),
        ],
        imageFit: "contain",
      },
    ],
  },
  {
    slug: "snacks-nuts",
    title: loc("Snacks & Nuts", "Snacks y frutos secos"),
    summary: loc(
      "Selected peanuts, flavored nuts and snack products for markets where the product, positioning and distribution opportunity provide the right commercial fit.",
      "Maní, frutos secos saborizados y snacks seleccionados para mercados donde el producto, el posicionamiento y la distribución encajan comercialmente.",
    ),
    channels: [
      loc("Retail", "Retail"),
      loc("Snacking", "Snacking"),
      loc("Foodservice", "Foodservice"),
    ],
    image: "/products/star-brands/flint-wheat-rye-croutons.jpg",
    products: [
      {
        slug: "flint-croutons",
        name: loc("Flint Wheat-Rye Croutons", "Crutones Flint de trigo-centeno"),
        description: loc(
          "Flint wheat-rye croutons from Star Brands. Flavors include bacon, sour cream and greens, crab, jellied meat with horseradish, red caviar, cheese, kebab and hunting sausages. Packs from 35 g to 150 g.",
          "Crutones Flint de trigo-centeno de Star Brands. Sabores: tocino, crema agria y verdes, cangrejo, gelatina con rábano picante, caviar rojo, queso, kebab y salchichas de caza. Empaques de 35 g a 150 g.",
        ),
        image: "/products/star-brands/flint-wheat-rye-croutons.jpg",
        details: [
          loc("Flint", "Flint"),
          loc("Star Brands", "Star Brands"),
          loc("35–150 g", "35–150 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "flint-baguette",
        name: loc("Flint Baguette", "Flint Baguette"),
        description: loc(
          "Round wheat baguette snacks from Flint. Flavors include lobster, spicy pork, creamy sauce with herbs, French cheese, mushroom in creamy sauce, and cream and onions. 60 g, 100 g and 150 g packs.",
          "Snacks de baguette de trigo Flint. Sabores: langosta, cerdo picante, salsa cremosa con hierbas, queso francés, champiñones en salsa cremosa, y crema y cebolla. Empaques de 60 g, 100 g y 150 g.",
        ),
        image: "/products/star-brands/flint-baguette.png",
        details: [
          loc("Flint", "Flint"),
          loc("Star Brands", "Star Brands"),
          loc("60 / 100 / 150 g", "60 / 100 / 150 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "flint-grenki",
        name: loc("Flint Grenki Rye Croutons", "Grenki Flint de centeno"),
        description: loc(
          "True rye toasts roasted with bar-snack flavors: Bavarian sausages, garlic, bacon and horseradish, spicy tomato, and veal with adjika. 65 g, 70 g and 100 g packs.",
          "Tostadas de centeno con sabores de bar: salchichas bávaras, ajo, tocino y rábano picante, tomate picante y ternera con adjika. Empaques de 65 g, 70 g y 100 g.",
        ),
        image: "/products/star-brands/flint-grenki.png",
        details: [
          loc("Flint Grenki", "Flint Grenki"),
          loc("Star Brands", "Star Brands"),
          loc("65–100 g", "65–100 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "flint-craft",
        name: loc("Flint Craft Bars & Bread Chips", "Flint Craft barras y chips de pan"),
        description: loc(
          "Craft-recipe Flint snacks in bar and bread-chip shapes. Flavors include kabanosa with mustard, garlic, and spicy jerky. 90 g packs.",
          "Snacks Flint de receta craft en forma de barra y chip de pan. Sabores: kabanosa con mostaza, ajo y cecina picante. Empaques de 90 g.",
        ),
        image: "/products/star-brands/flint-craft.jpg",
        details: [
          loc("Flint Craft", "Flint Craft"),
          loc("Star Brands", "Star Brands"),
          loc("90 g", "90 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "san-sanych-seeds",
        name: loc("San Sanych Roasted Seeds", "Semillas tostadas San Sanych"),
        description: loc(
          "Roasted sunflower seeds from San Sanych: classic, salted, premium white and striped, kernels and pumpkin seeds. Packs from 50 g to 285 g.",
          "Semillas de girasol tostadas San Sanych: clásicas, saladas, premium blancas y rayadas, pepitas y calabaza. Empaques de 50 g a 285 g.",
        ),
        image: "/products/star-brands/san-sanych-seeds.jpg",
        details: [
          loc("San Sanych", "San Sanych"),
          loc("Star Brands", "Star Brands"),
          loc("50–285 g", "50–285 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "chipsters-classic",
        name: loc("Chipster’s Classic Potato Chips", "Papas clásicas Chipster’s"),
        description: loc(
          "Classic Chipster’s potato chips in sour cream and herbs, crab, bacon, cheese, grilled sausages, sour cream and onions, salt, jalapeño, cheddar BBQ and Texas steak. Packs from 25 g to 180 g.",
          "Papas clásicas Chipster’s: crema agria y hierbas, cangrejo, tocino, queso, salchichas a la parrilla, crema agria y cebolla, sal, jalapeño, cheddar BBQ y bistec Texas. Empaques de 25 g a 180 g.",
        ),
        image: "/products/star-brands/chipsters-classic.jpg",
        details: [
          loc("Chipster’s", "Chipster’s"),
          loc("Star Brands", "Star Brands"),
          loc("25–180 g", "25–180 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "chipsters-bbq-superwave",
        name: loc("Chipster’s BBQ & Superwave", "Chipster’s BBQ y Superwave"),
        description: loc(
          "Chipster’s BBQ chips (wings, grilled meat, cheese and onion) and wavy Superwave chips (mushroom cream sauce, sausages with mustard, spicy tomato, cheese sauce with onion). 110 g and 120 g packs.",
          "Papas Chipster’s BBQ (alitas, carne a la parrilla, queso y cebolla) y Superwave onduladas (champiñones en crema, salchichas con mostaza, tomate picante, salsa de queso con cebolla). Empaques de 110 g y 120 g.",
        ),
        image: "/products/star-brands/chipsters-bbq.jpg",
        details: [
          loc("Chipster’s", "Chipster’s"),
          loc("Star Brands", "Star Brands"),
          loc("110 / 120 g", "110 / 120 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "crispy-cris",
        name: loc("Crispy Cris Corn Snacks", "Snacks de maíz Crispy Cris"),
        description: loc(
          "Unfried corn balls and rings from Crispy Cris: cheese balls, sour cream and greens rings, and bacon balls. 55 g packs. Not available for export at the moment.",
          "Bolitas y aros de maíz sin freír de Crispy Cris: bolitas de queso, aros de crema agria y verdes, y bolitas de tocino. Empaques de 55 g. No disponible para exportación por el momento.",
        ),
        image: "/products/star-brands/crispy-cris.jpg",
        details: [
          loc("Crispy Cris", "Crispy Cris"),
          loc("Star Brands", "Star Brands"),
          loc("55 g", "55 g"),
        ],
        imageFit: "contain",
        unavailableForExport: true,
      },
      {
        slug: "hroom-chips",
        name: loc("Hroom Sliced Potato Chips", "Papas en rodaja Hroom"),
        description: loc(
          "Thin sliced Hroom potato chips in crab, bacon, cheese, kebab, sour cream with herbs, cheese and onion, grilled meat and paprika. 50 g and 100 g packs.",
          "Papas Hroom en rodaja fina: cangrejo, tocino, queso, kebab, crema agria con hierbas, queso y cebolla, carne a la parrilla y paprika. Empaques de 50 g y 100 g.",
        ),
        image: "/products/star-brands/hroom-chips.png",
        details: [
          loc("Hroom", "Hroom"),
          loc("Star Brands", "Star Brands"),
          loc("50 / 100 g", "50 / 100 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "do-bochkovogo",
        name: loc("Do Bochkovogo Pub Toasts", "Tostadas Do Bochkovogo"),
        description: loc(
          "Pub-style toasts in wavy rye-wheat, rye-wheat pencil and wheat pencil shapes. Flavors include garlic, spicy tomato, veal with adjika, sausages with mustard and horseradish. 90 g and 130 g packs.",
          "Tostadas estilo pub: trigo-centeno ondulado, palito de trigo-centeno y palito de trigo. Sabores: ajo, tomate picante, ternera con adjika, salchichas con mostaza y rábano picante. Empaques de 90 g y 130 g.",
        ),
        image: "/products/star-brands/do-bochkovogo.jpg",
        details: [
          loc("Do Bochkovogo", "Do Bochkovogo"),
          loc("Star Brands", "Star Brands"),
          loc("90 / 130 g", "90 / 130 g"),
        ],
        imageFit: "contain",
      },
      ...quinoaClubSnackProducts,
      ...freshElementsBrand.products.filter((product) => product.line === "snacks"),
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}

export const activeMarkets = [
  { name: loc("United States", "Estados Unidos"), region: "Americas" as const },
  { name: loc("Jamaica", "Jamaica"), region: "Caribbean" as const },
  { name: loc("Dominican Republic", "República Dominicana"), region: "Caribbean" as const },
  { name: loc("Colombia", "Colombia"), region: "Americas" as const },
  { name: loc("Peru", "Perú"), region: "Americas" as const },
  { name: loc("Panama", "Panamá"), region: "Americas" as const },
  { name: loc("El Salvador", "El Salvador"), region: "Americas" as const },
  { name: loc("Guatemala", "Guatemala"), region: "Americas" as const },
  { name: loc("Ghana", "Ghana"), region: "Africa" as const },
  { name: loc("Benin", "Benín"), region: "Africa" as const },
  { name: loc("Italy", "Italia"), region: "Europe" as const },
  { name: loc("Philippines", "Filipinas"), region: "Asia-Pacific" as const },
];

export const marketsInDevelopment = [
  { name: loc("Venezuela", "Venezuela"), region: "Americas" as const },
  { name: loc("Gulf Region", "Región del Golfo"), region: "Middle East" as const },
];

export const regions = [
  "Americas",
  "Caribbean",
  "Africa",
  "Europe",
  "Asia-Pacific",
] as const;

export const regionLabels: Record<(typeof regions)[number], Loc> = {
  Americas: loc("Americas", "Américas"),
  Caribbean: loc("Caribbean", "Caribe"),
  Africa: loc("Africa", "África"),
  Europe: loc("Europe", "Europa"),
  "Asia-Pacific": loc("Asia-Pacific", "Asia-Pacífico"),
};

export const regionCards = [
  {
    region: "Americas" as const,
    detail: loc(
      "Commercial relationships and distribution partners.",
      "Relaciones comerciales y socios de distribución.",
    ),
  },
  {
    region: "Caribbean" as const,
    detail: loc(
      "Import, wholesale and retail market access.",
      "Acceso a importación, mayoreo y retail.",
    ),
  },
  {
    region: "Africa" as const,
    detail: loc(
      "Market development and supply opportunities.",
      "Desarrollo de mercados y oportunidades de suministro.",
    ),
  },
  {
    region: "Europe" as const,
    detail: loc(
      "Sourcing and international trade gateway.",
      "Abastecimiento y puerta de comercio internacional.",
    ),
  },
  {
    region: "Asia-Pacific" as const,
    detail: loc(
      "Manufacturing links and buyer networks.",
      "Vínculos de manufactura y redes de compradores.",
    ),
  },
];

export const distributionPoints = [
  {
    title: loc("Market-Specific Models", "Modelos por mercado"),
    description: loc(
      "Not every market requires the same distribution model. We structure solutions using qualified third-party import, warehousing, fulfillment and logistics resources.",
      "No todos los mercados requieren el mismo modelo de distribución. Estructuramos soluciones con recursos calificados de importación, almacenamiento, fulfillment y logística.",
    ),
  },
  {
    title: loc("Regional Hubs", "Hubs regionales"),
    description: loc(
      "Where justified by the opportunity, regional or market-specific distribution hubs can be established to support inventory, cross-docking, order fulfillment and efficient product movement.",
      "Cuando la oportunidad lo justifica, se pueden establecer hubs regionales o por mercado para inventario, cross-docking, fulfillment de pedidos y movimiento eficiente de producto.",
    ),
  },
  {
    title: loc("Inventory Reallocation", "Reasignación de inventario"),
    description: loc(
      "We evaluate opportunities to redirect qualifying excess or short-dated shelf-stable food inventories into selected markets. Products with at least 90 days of remaining shelf life may be evaluated based on destination requirements, transit time, regulatory compliance and commercial viability.",
      "Evaluamos oportunidades para redirigir inventarios excedentes o de fecha corta de alimentos de larga duración a mercados seleccionados. Productos con al menos 90 días de vida útil restante pueden evaluarse según requisitos de destino, tránsito, cumplimiento y viabilidad comercial.",
    ),
  },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  markets: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
  operations: "https://images.unsplash.com/photo-1605745341112-859df7b39370?auto=format&fit=crop&w=1400&q=80",
};
