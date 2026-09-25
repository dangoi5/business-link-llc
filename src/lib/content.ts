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
import { starGroceryFamilyCovers } from "@/lib/star-grocery-catalog";
import { lascoGroceryProducts } from "@/lib/lasco-catalog";
import { tronixSnackProducts } from "@/lib/tronix-catalog";


export const company = {
  name: "Business Link LLC",
  tagline: loc(
    "Developing Businesses. Building Markets. Connecting the World",
    "Desarrollamos negocios. Construimos mercados. Conectamos el mundo",
    "Sviluppiamo imprese. Costruiamo mercati. Connettiamo il mondo",
  ),
  subtitle: loc(
    "Master Distributor · Exporter · Own Brand",
    "Distribuidor maestro · Exportador · Marca propia",
    "Distributore master · Esportatore · Marchio proprio",
  ),
  description: loc(
    "Business Link LLC is a master distributor and exporter of food and beverage products. We develop and execute commercial opportunities across international markets—working with manufacturers, brands, distributors and strategic partners to establish sustainable routes to market and long-term business.",
    "Business Link LLC es un distribuidor maestro y exportador de alimentos y bebidas. Desarrollamos y ejecutamos oportunidades comerciales en mercados internacionales, trabajando con fabricantes, marcas, distribuidores y socios estratégicos para establecer rutas de mercado sostenibles y negocios de largo plazo.",
    "Business Link LLC è un distributore master ed esportatore di prodotti alimentari e bevande. Sviluppiamo ed eseguiamo opportunità commerciali sui mercati internazionali, collaborando con produttori, marchi, distributori e partner strategici per stabilire canali di mercato sostenibili e rapporti commerciali di lungo periodo.",
  ),
  role: loc(
    "As a master distributor and exporter, we manage international supply, distribution structures and commercial relationships across our active markets.",
    "Como distribuidor maestro y exportador, gestionamos el abastecimiento internacional, las estructuras de distribución y las relaciones comerciales en nuestros mercados activos.",
    "In qualità di distributore master ed esportatore, gestiamo l’approvvigionamento internazionale, le strutture di distribuzione e le relazioni commerciali nei mercati in cui operiamo.",
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
  { href: "/capabilities", label: loc("Capabilities", "Capacidades", "Capacità") },
  { href: "/portfolio", label: loc("Portfolio", "Portafolio", "Portafoglio") },
  { href: "/portfolio/fresh-elements", label: loc("Fresh Elements", "Fresh Elements", "Fresh Elements") },
  { href: "/markets", label: loc("Markets", "Mercados", "Mercati") },
  { href: "/contact", label: loc("Contact", "Contacto", "Contatti") },
];

export const heroHighlights = [
  {
    title: loc("Master Distributor & Exporter", "Distribuidor maestro y exportador", "Distributore master ed esportatore"),
    description: loc(
      "We export and distribute food & beverage products across international markets.",
      "Exportamos y distribuimos alimentos y bebidas en mercados internacionales.",
      "Esportiamo e distribuiamo prodotti alimentari e bevande sui mercati internazionali.",
    ),
  },
  {
    title: loc("Import / Export & Market Development", "Importación / exportación y desarrollo de mercados", "Import / export e sviluppo dei mercati"),
    description: loc(
      "International commercial operations across food & beverage—with routes to market, partners and sustainable distribution.",
      "Operaciones comerciales internacionales de alimentos y bebidas, con rutas de mercado, socios y distribución sostenible.",
      "Operazioni commerciali internazionali nel settore alimentare e delle bevande, con canali di mercato, partner e distribuzione sostenibile.",
    ),
  },
  {
    title: loc(
      "Americas · Caribbean · Africa · Europe · Asia-Pacific",
      "Américas · Caribe · África · Europa · Asia-Pacífico",
      "Americhe · Caraibi · Africa · Europa · Asia-Pacifico",
    ),
    description: loc(
      "A multisector commercial network activated by opportunity.",
      "Una red comercial multisectorial activada por la oportunidad.",
      "Una rete commerciale multisettoriale attivata dall’opportunità.",
    ),
  },
];

export const manufacturerServices = [
  {
    title: loc("Export Sales Representation", "Representación de ventas de exportación", "Rappresentanza commerciale per l’export"),
    description: loc(
      "We represent your brand and products in international markets to grow your sales network with qualified buyers and distributors.",
      "Representamos su marca y productos en mercados internacionales para ampliar su red de ventas con compradores y distribuidores calificados.",
      "Rappresentiamo il vostro marchio e i vostri prodotti sui mercati internazionali per ampliare la rete di vendita con acquirenti e distributori qualificati.",
    ),
  },
  {
    title: loc("Market Entry & Distributor Sourcing", "Entrada a mercados y búsqueda de distribuidores", "Ingresso nei mercati e ricerca di distributori"),
    description: loc(
      "We identify ideal markets and connect you with trusted importers, distributors and retail partners to enter and scale.",
      "Identificamos mercados ideales y lo conectamos con importadores, distribuidores y socios de retail de confianza para entrar y escalar.",
      "Individuiamo i mercati ideali e vi mettiamo in contatto con importatori, distributori e partner della distribuzione al dettaglio di fiducia per entrare e crescere.",
    ),
  },
  {
    title: loc("Export Strategy Development", "Desarrollo de estrategia de exportación", "Sviluppo della strategia di export"),
    description: loc(
      "We build a custom market plan, evaluate commercial fit and guide expansion into new regions with lasting partnerships.",
      "Construimos un plan de mercado a medida, evaluamos el encaje comercial y guiamos la expansión a nuevas regiones con alianzas duraderas.",
      "Elaboriamo un piano di mercato su misura, valutiamo l’adeguatezza commerciale e guidiamo l’espansione in nuove regioni con partnership durature.",
    ),
  },
  {
    title: loc("Distribution Structure", "Estructura de distribución", "Struttura di distribuzione"),
    description: loc(
      "We design market-specific distribution models using qualified import, warehousing and logistics partners where required.",
      "Diseñamos modelos de distribución por mercado, con socios calificados de importación, almacenamiento y logística cuando se requiere.",
      "Progettiamo modelli di distribuzione specifici per ciascun mercato, avvalendoci di partner qualificati per l’importazione, lo stoccaggio e la logistica quando necessario.",
    ),
  },
];

export const buyerServices = [
  {
    title: loc("Strategic Product Sourcing", "Abastecimiento estratégico de productos", "Approvvigionamento strategico di prodotti"),
    description: loc(
      "We identify products and manufacturing capabilities matched to specification, volume and destination-market requirements.",
      "Identificamos productos y capacidades de fabricación acordes a especificación, volumen y requisitos del mercado de destino.",
      "Individuiamo prodotti e capacità produttive in linea con le specifiche, i volumi e i requisiti del mercato di destinazione.",
    ),
  },
  {
    title: loc("Supplier & Brand Discovery", "Descubrimiento de proveedores y marcas", "Ricerca di fornitori e marchi"),
    description: loc(
      "Access selected manufacturers and brands whose capabilities complement your channels and commercial goals.",
      "Acceso a fabricantes y marcas seleccionados cuyas capacidades complementan sus canales y objetivos comerciales.",
      "Accesso a produttori e marchi selezionati le cui capacità completano i vostri canali e obiettivi commerciali.",
    ),
  },
  {
    title: loc("Purchasing & Supply Support", "Apoyo de compras y abastecimiento", "Supporto agli acquisti e all’approvvigionamento"),
    description: loc(
      "Assistance across sourcing, commercial structure and supply coordination so purchasing needs become viable operations.",
      "Asistencia en abastecimiento, estructura comercial y coordinación de suministro para convertir necesidades de compra en operaciones viables.",
      "Assistenza su sourcing, struttura commerciale e coordinamento delle forniture per trasformare le esigenze di acquisto in operazioni concrete.",
    ),
  },
  {
    title: loc("Logistics Coordination", "Coordinación logística", "Coordinamento logistico"),
    description: loc(
      "We work with warehousing, fulfillment and logistics partners to support efficient product movement into your market.",
      "Trabajamos con socios de almacenamiento, fulfillment y logística para mover el producto de forma eficiente a su mercado.",
      "Collaboriamo con partner di stoccaggio, fulfillment e logistica per un movimento efficiente del prodotto verso il vostro mercato.",
    ),
  },
];

export const capabilities = [
  {
    slug: "master-distribution-export",
    title: loc("Master Distribution & Export", "Distribución maestra y exportación", "Distribuzione master ed export"),
    summary: loc(
      "We operate as a master distributor and exporter—managing product supply, commercial terms and routes to market for partner brands and our own Fresh Elements line.",
      "Operamos como distribuidor maestro y exportador: gestionamos suministro, términos comerciales y rutas de mercado para marcas asociadas y nuestra línea Fresh Elements.",
      "Operiamo come distributore master ed esportatore: gestiamo l’approvvigionamento, i termini commerciali e i canali di mercato per i marchi partner e per la nostra linea Fresh Elements.",
    ),
    detail: loc(
      "Buyers and market partners gain a single commercial counterpart for international supply, with structured distribution support across our active footprint.",
      "Compradores y socios de mercado obtienen un único interlocutor comercial para el suministro internacional, con apoyo de distribución estructurado en nuestra huella activa.",
      "Acquirenti e partner di mercato dispongono di un unico interlocutore commerciale per le forniture internazionali, con supporto strutturato alla distribuzione nel nostro perimetro operativo.",
    ),
  },
  {
    slug: "international-business-development",
    title: loc("International Business Development", "Desarrollo de negocios internacionales", "Sviluppo commerciale internazionale"),
    summary: loc(
      "We identify and develop commercial opportunities by bringing together the right products, manufacturers, partners and markets.",
      "Identificamos y desarrollamos oportunidades comerciales reuniendo los productos, fabricantes, socios y mercados adecuados.",
      "Individuiamo e sviluppiamo opportunità commerciali mettendo insieme i prodotti, i produttori, i partner e i mercati giusti.",
    ),
    detail: loc(
      "From first contact through sustained commercial activity, we evaluate fit across product, partner capability and destination market demand—then open the relationships that turn opportunity into revenue.",
      "Desde el primer contacto hasta la actividad comercial sostenida, evaluamos el encaje de producto, capacidad del socio y demanda del mercado de destino, y abrimos las relaciones que convierten la oportunidad en ingresos.",
      "Dal primo contatto fino all’attività commerciale continuativa, valutiamo l’adeguatezza di prodotto, capacità del partner e domanda del mercato di destinazione, e apriamo le relazioni che trasformano l’opportunità in fatturato.",
    ),
  },
  {
    slug: "market-development",
    title: loc("Market Development", "Desarrollo de mercados", "Sviluppo dei mercati"),
    summary: loc(
      "We evaluate opportunities, establish routes to market and develop the commercial relationships required to build sustainable market presence.",
      "Evaluamos oportunidades, establecemos rutas de mercado y desarrollamos las relaciones comerciales necesarias para construir una presencia sostenible.",
      "Valutiamo le opportunità, definiamo i canali di mercato e sviluppiamo le relazioni commerciali necessarie per costruire una presenza sostenibile.",
    ),
    detail: loc(
      "Each market has its own regulatory, logistics and channel realities. We map those constraints early and build presence that can scale beyond a single shipment.",
      "Cada mercado tiene sus propias realidades regulatorias, logísticas y de canal. Mapeamos esas restricciones desde el inicio y construimos una presencia que puede escalar más allá de un solo embarque.",
      "Ogni mercato ha le proprie realtà normative, logistiche e di canale. Mappiamo tali vincoli fin dall’inizio e costruiamo una presenza in grado di crescere oltre una singola spedizione.",
    ),
  },
  {
    slug: "distribution-market-execution",
    title: loc("Distribution & Market Execution", "Distribución y ejecución de mercado", "Distribuzione ed esecuzione di mercato"),
    summary: loc(
      "We structure distribution solutions according to each market, working with qualified importers, distributors, warehousing providers and logistics partners where required.",
      "Estructuramos soluciones de distribución según cada mercado, trabajando con importadores, distribuidores, operadores de almacén y socios logísticos calificados cuando se requiere.",
      "Strutturiamo soluzioni di distribuzione in base a ciascun mercato, collaborando con importatori, distributori, operatori di magazzino e partner logistici qualificati quando necessario.",
    ),
    detail: loc(
      "Whether the right model is a local importer, regional hub or hybrid fulfillment structure, we design around the opportunity—not a one-size template.",
      "Ya sea un importador local, un hub regional o una estructura híbrida de fulfillment, diseñamos en torno a la oportunidad, no a un modelo único.",
      "Che il modello più adeguato sia un importatore locale, un hub regionale o una struttura ibrida di fulfillment, progettiamo intorno all’opportunità, non su un modello unico.",
    ),
  },
  {
    slug: "strategic-sourcing",
    title: loc("Strategic Sourcing & Supply Solutions", "Abastecimiento estratégico y soluciones de suministro", "Sourcing strategico e soluzioni di fornitura"),
    summary: loc(
      "We identify products and manufacturing capabilities based on specific market requirements while evaluating sourcing, routing and supply-chain alternatives.",
      "Identificamos productos y capacidades de fabricación según requisitos de mercado específicos, evaluando alternativas de origen, ruteo y cadena de suministro.",
      "Individuiamo prodotti e capacità produttive in base a requisiti di mercato specifici, valutando alternative di origine, routing e catena di fornitura.",
    ),
    detail: loc(
      "Buyers and distributors gain access to manufacturing capacity matched to specification, volume and compliance needs—with routing options that protect margin and reliability.",
      "Compradores y distribuidores acceden a capacidad de fabricación acorde a especificación, volumen y cumplimiento, con opciones de ruteo que protegen margen y confiabilidad.",
      "Acquirenti e distributori accedono a capacità produttive in linea con specifiche, volumi ed esigenze di conformità, con opzioni di routing che tutelano margine e affidabilità.",
    ),
  },
  {
    slug: "own-brand-fresh-elements",
    title: loc("Own Brand — Fresh Elements", "Marca propia — Fresh Elements", "Marchio proprio — Fresh Elements"),
    summary: loc(
      "We develop and market Fresh Elements, our own food product line, alongside the international brands and manufacturers we represent and distribute.",
      "Desarrollamos y comercializamos Fresh Elements, nuestra línea de alimentos, junto a las marcas y fabricantes internacionales que representamos y distribuimos.",
      "Sviluppiamo e commercializziamo Fresh Elements, la nostra linea di prodotti alimentari, insieme ai marchi e ai produttori internazionali che rappresentiamo e distribuiamo.",
    ),
    detail: loc(
      "Fresh Elements gives buyers access to Business Link’s proprietary range, developed for commercial channels including retail, foodservice and institutional supply.",
      "Fresh Elements da a los compradores acceso a la gama propia de Business Link, desarrollada para canales comerciales de retail, foodservice y suministro institucional.",
      "Fresh Elements offre agli acquirenti accesso alla gamma proprietaria di Business Link, sviluppata per i canali commerciali, tra cui retail, foodservice e fornitura istituzionale.",
    ),
  },
];

export const processSteps = [
  {
    step: "01",
    label: loc("Identify", "Identificar", "Identificare"),
    description: loc(
      "Qualify product, market and commercial fit",
      "Calificar el encaje de producto, mercado y negocio",
      "Qualificare l’adeguatezza di prodotto, mercato e business",
    ),
  },
  {
    step: "02",
    label: loc("Develop", "Desarrollar", "Sviluppare"),
    description: loc(
      "Build partner relationships and market access",
      "Construir relaciones con socios y acceso a mercado",
      "Costruire relazioni con i partner e l’accesso al mercato",
    ),
  },
  {
    step: "03",
    label: loc("Structure", "Estructurar", "Strutturare"),
    description: loc(
      "Define distribution, pricing and supply terms",
      "Definir distribución, precios y términos de suministro",
      "Definire distribuzione, prezzi e termini di fornitura",
    ),
  },
  {
    step: "04",
    label: loc("Execute", "Ejecutar", "Eseguire"),
    description: loc(
      "Coordinate logistics, compliance and launch",
      "Coordinar logística, cumplimiento y lanzamiento",
      "Coordinare logistica, conformità e lancio",
    ),
  },
  {
    step: "05",
    label: loc("Grow", "Crecer", "Crescere"),
    description: loc(
      "Expand presence and sustain long-term volume",
      "Expandir la presencia y sostener el volumen a largo plazo",
      "Espandere la presenza e sostenere i volumi nel lungo periodo",
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
  href?: string;
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
    title: loc("Shelf-Stable Foods", "Alimentos de larga duración", "Alimenti a lunga conservazione"),
    summary: loc(
      "Long shelf-life proteins, prepared meals, shelf-stable dairy and other ambient food solutions designed for efficient storage and distribution.",
      "Proteínas de larga vida, comidas preparadas, lácteos a temperatura ambiente y otras soluciones de alimentos que no requieren frío, diseñadas para almacenamiento y distribución eficientes.",
      "Proteine a lunga conservazione, piatti pronti, latticini a temperatura ambiente e altre soluzioni alimentari che non richiedono refrigerazione, progettate per stoccaggio e distribuzione efficienti.",
    ),
    channels: [
      loc("Retail", "Retail", "Retail"),
      loc("Distribution", "Distribución", "Distribuzione"),
      loc("Institutional", "Institucional", "Istituzionale"),
    ],
    image: "/categories/shelf-stable-foods.jpg",
    products: ameriqualShelfStableProducts,
  },
  {
    slug: "oils-fats",
    title: loc("Oils & Fats", "Aceites y grasas", "Oli e grassi"),
    summary: loc(
      "Edible oils, palm-based products, vegetable oil blends, margarines and shortenings for retail and foodservice. We can also partner to bottle in specific markets.",
      "Aceites comestibles, productos a base de palma, mezclas vegetales, margarinas y mantecas para retail y foodservice. También podemos asociarnos para embotellar en mercados específicos.",
      "Oli commestibili, prodotti a base di palma, miscele vegetali, margarine e shortening per retail e foodservice. Possiamo inoltre collaborare per l’imbottigliamento in mercati specifici.",
    ),
    channels: [
      loc("Retail", "Retail", "Retail"),
      loc("Foodservice", "Foodservice", "Foodservice"),
      loc("Industrial", "Industrial", "Industriale"),
    ],
    image: "/products/fresh-elements/palm-oil-blend-900ml.jpg",
    products: freshElementsBrand.products.filter((product) => product.line === "oils"),
  },
  {
    slug: "foodservice-institutional",
    title: loc("Foodservice & Institutional", "Foodservice e institucional", "Foodservice e istituzionale"),
    summary: loc(
      "Products and supply solutions for foodservice, hospitality, catering, institutional feeding and other high-volume applications.",
      "Productos y soluciones de suministro para foodservice, hospitalidad, catering, alimentación institucional y otras aplicaciones de alto volumen.",
      "Prodotti e soluzioni di fornitura per foodservice, hospitality, catering, ristorazione istituzionale e altre applicazioni ad alto volume.",
    ),
    channels: [
      loc("Hospitality", "Hospitalidad", "Ospitalità"),
      loc("Catering", "Catering", "Catering"),
      loc("Institutional", "Institucional", "Istituzionale"),
    ],
    image: "/categories/foodservice-institutional.jpg",
    products: ameriqualFoodserviceProducts,
  },
  {
    slug: "grocery-consumer",
    title: loc("Grocery & Consumer Foods", "Abarrotes y alimentos de consumo", "Generi alimentari e prodotti di consumo"),
    summary: loc(
      "Selected consumer food products and grocery categories developed according to individual market opportunities.",
      "Productos de consumo y categorías de abarrotes seleccionados según las oportunidades de cada mercado.",
      "Prodotti alimentari di consumo e categorie grocery selezionati in base alle opportunità di ciascun mercato.",
    ),
    channels: [
      loc("Retail", "Retail", "Retail"),
      loc("Grocery", "Abarrotes", "Alimentari"),
      loc("Wholesale", "Mayoreo", "Ingrosso"),
    ],
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
    products: [
      ...starGroceryFamilyCovers,
      ...quinoaClubGroceryProducts,
      ...freshElementsBrand.products.filter((product) => product.line === "rice"),
      ...lascoGroceryProducts,
    ],
  },
  {
    slug: "snacks-nuts",
    title: loc("Snacks & Nuts", "Snacks y frutos secos", "Snack e frutta secca"),
    summary: loc(
      "Selected peanuts, flavored nuts and snack products for markets where the product, positioning and distribution opportunity provide the right commercial fit.",
      "Maní, frutos secos saborizados y snacks seleccionados para mercados donde el producto, el posicionamiento y la distribución encajan comercialmente.",
      "Arachidi, frutta secca aromatizzata e snack selezionati per i mercati in cui prodotto, posizionamento e distribuzione offrono il giusto fit commerciale.",
    ),
    channels: [
      loc("Retail", "Retail", "Retail"),
      loc("Snacking", "Snacking", "Snacking"),
      loc("Foodservice", "Foodservice", "Foodservice"),
    ],
    image: "/products/star-brands/flint-wheat-rye-croutons.jpg",
    products: [
      {
        slug: "flint-croutons",
        name: loc("Flint Wheat-Rye Croutons", "Crutones Flint de trigo-centeno", "Crostini Flint di frumento-segale"),
        description: loc(
          "Flint wheat-rye croutons from Star Brands. Flavors include bacon, sour cream and greens, crab, jellied meat with horseradish, red caviar, cheese, kebab and hunting sausages. Packs from 35 g to 150 g.",
          "Crutones Flint de trigo-centeno de Star Brands. Sabores: tocino, crema agria y verdes, cangrejo, gelatina con rábano picante, caviar rojo, queso, kebab y salchichas de caza. Empaques de 35 g a 150 g.",
          "Crostini Flint di frumento-segale di Star Brands. Gusti: bacon, panna acida e verdure, granchio, gelatina con rafano, caviale rosso, formaggio, kebab e salsicce da caccia. Confezioni da 35 g a 150 g.",
        ),
        image: "/products/star-brands/flint-wheat-rye-croutons.jpg",
        details: [
          loc("Flint", "Flint", "Flint"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("35–150 g", "35–150 g", "35–150 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "flint-baguette",
        name: loc("Flint Baguette", "Flint Baguette", "Flint Baguette"),
        description: loc(
          "Round wheat baguette snacks from Flint. Flavors include lobster, spicy pork, creamy sauce with herbs, French cheese, mushroom in creamy sauce, and cream and onions. 60 g, 100 g and 150 g packs.",
          "Snacks de baguette de trigo Flint. Sabores: langosta, cerdo picante, salsa cremosa con hierbas, queso francés, champiñones en salsa cremosa, y crema y cebolla. Empaques de 60 g, 100 g y 150 g.",
          "Snack di baguette di frumento Flint. Gusti: aragosta, maiale piccante, salsa cremosa alle erbe, formaggio francese, funghi in salsa cremosa, e panna e cipolla. Confezioni da 60 g, 100 g e 150 g.",
        ),
        image: "/products/star-brands/flint-baguette.png",
        details: [
          loc("Flint", "Flint", "Flint"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("60 / 100 / 150 g", "60 / 100 / 150 g", "60 / 100 / 150 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "flint-grenki",
        name: loc("Flint Grenki Rye Croutons", "Grenki Flint de centeno", "Grenki Flint di segale"),
        description: loc(
          "True rye toasts roasted with bar-snack flavors: Bavarian sausages, garlic, bacon and horseradish, spicy tomato, and veal with adjika. 65 g, 70 g and 100 g packs.",
          "Tostadas de centeno con sabores de bar: salchichas bávaras, ajo, tocino y rábano picante, tomate picante y ternera con adjika. Empaques de 65 g, 70 g y 100 g.",
          "Crostini di segale con gusti da bar: salsicce bavaresi, aglio, bacon e rafano, pomodoro piccante e vitello con adjika. Confezioni da 65 g, 70 g e 100 g.",
        ),
        image: "/products/star-brands/flint-grenki.png",
        details: [
          loc("Flint Grenki", "Flint Grenki", "Flint Grenki"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("65–100 g", "65–100 g", "65–100 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "flint-craft",
        name: loc("Flint Craft Bars & Bread Chips", "Flint Craft barras y chips de pan", "Flint Craft barrette e chips di pane"),
        description: loc(
          "Craft-recipe Flint snacks in bar and bread-chip shapes. Flavors include kabanosa with mustard, garlic, and spicy jerky. 90 g packs.",
          "Snacks Flint de receta craft en forma de barra y chip de pan. Sabores: kabanosa con mostaza, ajo y cecina picante. Empaques de 90 g.",
          "Snack Flint di ricetta craft in forma di barretta e chip di pane. Gusti: kabanosa con senape, aglio e jerky piccante. Confezioni da 90 g.",
        ),
        image: "/products/star-brands/flint-craft-bars.png",
        details: [
          loc("Flint Craft", "Flint Craft", "Flint Craft"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("90 g", "90 g", "90 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "san-sanych-seeds",
        name: loc("San Sanych Roasted Seeds", "Semillas tostadas San Sanych", "Semi tostati San Sanych"),
        description: loc(
          "Roasted sunflower seeds from San Sanych: classic, salted, premium white and striped, kernels and pumpkin seeds. Packs from 50 g to 285 g.",
          "Semillas de girasol tostadas San Sanych: clásicas, saladas, premium blancas y rayadas, pepitas y calabaza. Empaques de 50 g a 285 g.",
          "Semi di girasole tostati San Sanych: classici, salati, premium bianchi e striati, semi sgusciati e semi di zucca. Confezioni da 50 g a 285 g.",
        ),
        image: "/products/star-brands/san-sanych-seeds-xxl.png",
        details: [
          loc("San Sanych", "San Sanych", "San Sanych"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("50–285 g", "50–285 g", "50–285 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "chipsters-classic",
        name: loc("Chipster’s Classic Potato Chips", "Papas clásicas Chipster’s", "Patatine classiche Chipster’s"),
        description: loc(
          "Classic Chipster’s potato chips in sour cream and herbs, crab, bacon, cheese, grilled sausages, sour cream and onions, salt, jalapeño, cheddar BBQ and Texas steak. Packs from 25 g to 180 g.",
          "Papas clásicas Chipster’s: crema agria y hierbas, cangrejo, tocino, queso, salchichas a la parrilla, crema agria y cebolla, sal, jalapeño, cheddar BBQ y bistec Texas. Empaques de 25 g a 180 g.",
          "Patatine classiche Chipster’s: panna acida e erbe, granchio, bacon, formaggio, salsicce alla griglia, panna acida e cipolla, sale, jalapeño, cheddar BBQ e bistecca Texas. Confezioni da 25 g a 180 g.",
        ),
        image: "/products/star-brands/chipsters-classic-sour-cream.png",
        details: [
          loc("Chipster’s", "Chipster’s", "Chipster’s"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("25–180 g", "25–180 g", "25–180 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "chipsters-bbq-superwave",
        name: loc("Chipster’s BBQ & Superwave", "Chipster’s BBQ y Superwave", "Chipster’s BBQ e Superwave"),
        description: loc(
          "Chipster’s BBQ chips (wings, grilled meat, cheese and onion) and wavy Superwave chips (mushroom cream sauce, sausages with mustard, spicy tomato, cheese sauce with onion). 110 g and 120 g packs.",
          "Papas Chipster’s BBQ (alitas, carne a la parrilla, queso y cebolla) y Superwave onduladas (champiñones en crema, salchichas con mostaza, tomate picante, salsa de queso con cebolla). Empaques de 110 g y 120 g.",
          "Patatine Chipster’s BBQ (ali, carne alla griglia, formaggio e cipolla) e Superwave ondulate (funghi in crema, salsicce con senape, pomodoro piccante, salsa al formaggio con cipolla). Confezioni da 110 g e 120 g.",
        ),
        image: "/products/star-brands/chipsters-bbq-wings.png",
        details: [
          loc("Chipster’s", "Chipster’s", "Chipster’s"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("110 / 120 g", "110 / 120 g", "110 / 120 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "crispy-cris",
        name: loc("Crispy Cris Corn Snacks", "Snacks de maíz Crispy Cris", "Snack di mais Crispy Cris"),
        description: loc(
          "Unfried corn balls and rings from Crispy Cris: cheese balls, sour cream and greens rings, and bacon balls. 55 g packs. Not available for export at the moment.",
          "Bolitas y aros de maíz sin freír de Crispy Cris: bolitas de queso, aros de crema agria y verdes, y bolitas de tocino. Empaques de 55 g. No disponible para exportación por el momento.",
          "Palline e anelli di mais non fritti Crispy Cris: palline al formaggio, anelli panna acida e verdure, e palline al bacon. Confezioni da 55 g. Al momento non disponibili per l’export.",
        ),
        image: "/products/star-brands/crispy-cris.jpg",
        details: [
          loc("Crispy Cris", "Crispy Cris", "Crispy Cris"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("55 g", "55 g", "55 g"),
        ],
        imageFit: "contain",
        unavailableForExport: true,
      },
      {
        slug: "hroom-chips",
        name: loc("Hroom Sliced Potato Chips", "Papas en rodaja Hroom", "Patatine in fetta Hroom"),
        description: loc(
          "Thin sliced Hroom potato chips in crab, bacon, cheese, kebab, sour cream with herbs, cheese and onion, grilled meat and paprika. 50 g and 100 g packs.",
          "Papas Hroom en rodaja fina: cangrejo, tocino, queso, kebab, crema agria con hierbas, queso y cebolla, carne a la parrilla y paprika. Empaques de 50 g y 100 g.",
          "Patatine Hroom in fetta sottile: granchio, bacon, formaggio, kebab, panna acida con erbe, formaggio e cipolla, carne alla griglia e paprika. Confezioni da 50 g e 100 g.",
        ),
        image: "/products/star-brands/hroom-chips.png",
        details: [
          loc("Hroom", "Hroom", "Hroom"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("50 / 100 g", "50 / 100 g", "50 / 100 g"),
        ],
        imageFit: "contain",
      },
      {
        slug: "do-bochkovogo",
        name: loc("Do Bochkovogo Pub Toasts", "Tostadas Do Bochkovogo", "Crostini Do Bochkovogo"),
        description: loc(
          "Pub-style toasts in wavy rye-wheat, rye-wheat pencil and wheat pencil shapes. Flavors include garlic, spicy tomato, veal with adjika, sausages with mustard and horseradish. 90 g and 130 g packs.",
          "Tostadas estilo pub: trigo-centeno ondulado, palito de trigo-centeno y palito de trigo. Sabores: ajo, tomate picante, ternera con adjika, salchichas con mostaza y rábano picante. Empaques de 90 g y 130 g.",
          "Crostini stile pub: frumento-segale ondulato, stick frumento-segale e stick di frumento. Gusti: aglio, pomodoro piccante, vitello con adjika, salsicce con senape e rafano. Confezioni da 90 g e 130 g.",
        ),
        image: "/products/star-brands/do-bochkovogo-pub-grinki.png",
        details: [
          loc("Do Bochkovogo", "Do Bochkovogo", "Do Bochkovogo"),
          loc("Star Brands", "Star Brands", "Star Brands"),
          loc("90 / 130 g", "90 / 130 g", "90 / 130 g"),
        ],
        imageFit: "contain",
      },
      ...quinoaClubSnackProducts,
      ...freshElementsBrand.products.filter((product) => product.line === "snacks"),
      ...tronixSnackProducts,
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}

export { activeMarkets, marketsInDevelopment } from "@/lib/markets";

export const regions = [
  "Americas",
  "Caribbean",
  "Africa",
  "Europe",
  "Asia-Pacific",
  "Middle East",
] as const;

export const regionLabels: Record<(typeof regions)[number], Loc> = {
  Americas: loc("Americas", "Américas", "Americhe"),
  Caribbean: loc("Caribbean", "Caribe", "Caraibi"),
  Africa: loc("Africa", "África", "Africa"),
  Europe: loc("Europe", "Europa", "Europa"),
  "Asia-Pacific": loc("Asia-Pacific", "Asia-Pacífico", "Asia-Pacifico"),
  "Middle East": loc("Middle East", "Medio Oriente", "Medio Oriente"),
};

export const regionCards = [
  {
    region: "Americas" as const,
    detail: loc(
      "Commercial relationships and distribution partners.",
      "Relaciones comerciales y socios de distribución.",
      "Relazioni commerciali e partner di distribuzione.",
    ),
  },
  {
    region: "Caribbean" as const,
    detail: loc(
      "Import, wholesale and retail market access.",
      "Acceso a importación, mayoreo y retail.",
      "Accesso a importazione, ingrosso e retail.",
    ),
  },
  {
    region: "Africa" as const,
    detail: loc(
      "Market development and supply opportunities.",
      "Desarrollo de mercados y oportunidades de suministro.",
      "Sviluppo dei mercati e opportunità di fornitura.",
    ),
  },
  {
    region: "Europe" as const,
    detail: loc(
      "Sourcing and international trade gateway.",
      "Abastecimiento y puerta de comercio internacional.",
      "Sourcing e porta del commercio internazionale.",
    ),
  },
  {
    region: "Asia-Pacific" as const,
    detail: loc(
      "Manufacturing links and buyer networks.",
      "Vínculos de manufactura y redes de compradores.",
      "Collegamenti produttivi e reti di acquirenti.",
    ),
  },
];

export const distributionPoints = [
  {
    title: loc("Market-Specific Models", "Modelos por mercado", "Modelli per mercato"),
    description: loc(
      "Not every market requires the same distribution model. We structure solutions using qualified third-party import, warehousing, fulfillment and logistics resources.",
      "No todos los mercados requieren el mismo modelo de distribución. Estructuramos soluciones con recursos calificados de importación, almacenamiento, fulfillment y logística.",
      "Non tutti i mercati richiedono lo stesso modello di distribuzione. Strutturiamo soluzioni con risorse qualificate di importazione, stoccaggio, fulfillment e logistica.",
    ),
  },
  {
    title: loc("Regional Hubs", "Hubs regionales", "Hub regionali"),
    description: loc(
      "Where justified by the opportunity, regional or market-specific distribution hubs can be established to support inventory, cross-docking, order fulfillment and efficient product movement.",
      "Cuando la oportunidad lo justifica, se pueden establecer hubs regionales o por mercado para inventario, cross-docking, fulfillment de pedidos y movimiento eficiente de producto.",
      "Quando l’opportunità lo giustifica, è possibile istituire hub regionali o per mercato per scorte, cross-docking, evasione degli ordini e movimento efficiente del prodotto.",
    ),
  },
  {
    title: loc("Inventory Reallocation", "Reasignación de inventario", "Riallocazione delle scorte"),
    description: loc(
      "We evaluate opportunities to redirect qualifying excess or short-dated shelf-stable food inventories into selected markets. Products with at least 90 days of remaining shelf life may be evaluated based on destination requirements, transit time, regulatory compliance and commercial viability.",
      "Evaluamos oportunidades para redirigir inventarios excedentes o de fecha corta de alimentos de larga duración a mercados seleccionados. Productos con al menos 90 días de vida útil restante pueden evaluarse según requisitos de destino, tránsito, cumplimiento y viabilidad comercial.",
      "Valutiamo opportunità di reindirizzare scorte in eccesso o a breve scadenza di alimenti a lunga conservazione verso mercati selezionati. I prodotti con almeno 90 giorni di vita utile residua possono essere valutati in base ai requisiti di destinazione, ai tempi di transito, alla conformità normativa e alla sostenibilità commerciale.",
    ),
  },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  markets: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
  operations: "https://images.unsplash.com/photo-1605745341112-859df7b39370?auto=format&fit=crop&w=1400&q=80",
};
