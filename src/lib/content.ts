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
import { starGroceryFamilyCovers, starGrocerySnackProducts } from "@/lib/star-grocery-catalog";
import { lascoGroceryProducts } from "@/lib/lasco-catalog";
import { akhanProducts } from "@/lib/akhan-catalog";
import { chupaChupsProducts } from "@/lib/chupa-chups-catalog";
import { tronixSnackProducts } from "@/lib/tronix-catalog";
import { starKistProducts } from "@/lib/starkist-catalog";


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
    "Business Link LLC is a master distributor and exporter of food products. We develop and execute commercial opportunities across international markets—working with manufacturers, brands, distributors and strategic partners to establish sustainable routes to market and long-term business.",
    "Business Link LLC es un distribuidor maestro y exportador de alimentos. Desarrollamos y ejecutamos oportunidades comerciales en mercados internacionales, trabajando con fabricantes, marcas, distribuidores y socios estratégicos para establecer rutas de mercado sostenibles y negocios de largo plazo.",
    "Business Link LLC è un distributore master ed esportatore di prodotti alimentari. Sviluppiamo ed eseguiamo opportunità commerciali sui mercati internazionali, collaborando con produttori, marchi, distributori e partner strategici per stabilire canali di mercato sostenibili e rapporti commerciali di lungo periodo.",
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
  { href: "/about", label: loc("About Us", "Nosotros", "Chi siamo") },
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
      "We export and distribute food products across international markets.",
      "Exportamos y distribuimos alimentos en mercados internacionales.",
      "Esportiamo e distribuiamo prodotti alimentari sui mercati internazionali.",
    ),
  },
  {
    title: loc("Import / Export & Market Development", "Importación / exportación y desarrollo de mercados", "Import / export e sviluppo dei mercati"),
    description: loc(
      "International commercial operations across food—with routes to market, partners and sustainable distribution.",
      "Operaciones comerciales internacionales de alimentos, con rutas de mercado, socios y distribución sostenible.",
      "Operazioni commerciali internazionali nel settore alimentare, con canali di mercato, partner e distribuzione sostenibile.",
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

export type SupplyBuyer = { name: Loc; description: Loc };

export const supplyBuyers: SupplyBuyer[] = [
  {
    name: loc("Supermarkets & retail chains", "Supermercados y cadenas minoristas", "Supermercati e catene retail"),
    description: loc(
      "Shelf-ready and private-label programs for grocery and convenience.",
      "Programas listos para estantería y marca privada para abarrotes y conveniencia.",
      "Programmi pronti a scaffale e private label per grocery e convenience.",
    ),
  },
  {
    name: loc("Distributors & wholesalers", "Distribuidores y mayoristas", "Distributori e grossisti"),
    description: loc(
      "Master, national and regional distributors who move volume into their own markets.",
      "Distribuidores maestros, nacionales y regionales que mueven volumen en sus mercados.",
      "Distributori master, nazionali e regionali che muovono volumi nei propri mercati.",
    ),
  },
  {
    name: loc("Governments & public programs", "Gobiernos y programas públicos", "Governi e programmi pubblici"),
    description: loc(
      "Ministries, defense, emergency-response and humanitarian feeding programs.",
      "Ministerios, defensa, respuesta a emergencias y programas de alimentación humanitaria.",
      "Ministeri, difesa, protezione civile e programmi di alimentazione umanitaria.",
    ),
  },
  {
    name: loc("Airlines & travel", "Aerolíneas y viajes", "Compagnie aeree e viaggi"),
    description: loc(
      "In-flight catering, galley and onboard retail suppliers.",
      "Catering a bordo, cocinas de aeronave y venta a bordo.",
      "Catering di bordo, galley e vendita a bordo.",
    ),
  },
  {
    name: loc("Hotels, resorts & cruise lines", "Hoteles, resorts y cruceros", "Hotel, resort e crociere"),
    description: loc(
      "Hospitality groups buying for kitchens, buffets, minibars and room service.",
      "Grupos hoteleros que compran para cocinas, buffets, minibares y servicio a la habitación.",
      "Gruppi alberghieri che acquistano per cucine, buffet, minibar e room service.",
    ),
  },
  {
    name: loc("Theme parks & venues", "Parques temáticos y recintos", "Parchi a tema e venue"),
    description: loc(
      "Concessions, stadiums, attractions and event operators.",
      "Concesiones, estadios, atracciones y operadores de eventos.",
      "Concessioni, stadi, attrazioni e operatori di eventi.",
    ),
  },
  {
    name: loc("Caterers & institutions", "Catering e instituciones", "Catering e istituzioni"),
    description: loc(
      "Contract caterers, hospitals, schools, corporate and remote-site feeding.",
      "Caterers por contrato, hospitales, escuelas, empresas y alimentación en sitios remotos.",
      "Catering a contratto, ospedali, scuole, aziende e ristorazione in siti remoti.",
    ),
  },
  {
    name: loc("Food manufacturers", "Fabricantes de alimentos", "Produttori alimentari"),
    description: loc(
      "Industrial buyers sourcing oils, ingredients and bulk formats.",
      "Compradores industriales de aceites, ingredientes y formatos a granel.",
      "Acquirenti industriali di oli, ingredienti e formati sfusi.",
    ),
  },
];

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
    image: "/categories/shelf-stable-foods-clock.jpg",
    products: [...ameriqualShelfStableProducts, ...starKistProducts],
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
    slug: "commercial-institutional-supply",
    title: loc(
      "Commercial & Institutional Supply",
      "Suministro comercial e institucional",
      "Fornitura commerciale e istituzionale",
    ),
    summary: loc(
      "Our full range, supplied in volume to supermarkets, distributors, governments, airlines, hotels, theme parks and other commercial and institutional buyers.",
      "Toda nuestra gama, suministrada en volumen a supermercados, distribuidores, gobiernos, aerolíneas, hoteles, parques temáticos y otros compradores comerciales e institucionales.",
      "L’intera gamma, fornita in volume a supermercati, distributori, governi, compagnie aeree, hotel, parchi a tema e altri acquirenti commerciali e istituzionali.",
    ),
    channels: [
      loc("Supermarkets", "Supermercados", "Supermercati"),
      loc("Distributors", "Distribuidores", "Distributori"),
      loc("Government", "Gobierno", "Enti pubblici"),
      loc("Airlines & hotels", "Aerolíneas y hoteles", "Compagnie aeree e hotel"),
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
      ...starGroceryFamilyCovers.filter((family) => family.slug !== "flint-hroom-snacks"),
      ...quinoaClubGroceryProducts,
      ...freshElementsBrand.products.filter((product) => product.line === "rice"),
      ...lascoGroceryProducts,
      ...akhanProducts,
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
    image: "/products/star-grocery/snacks/flint-wheat-rye-croutons.jpg",
    products: [
      ...starGrocerySnackProducts,
      ...chupaChupsProducts,
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
  "Americas",
  "Caribbean",
  "Africa",
  "Europe",
  "Asia-Pacific",
] as const;

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


/** Real PDF catalogs in /public/catalogs. Sizes are the actual file sizes in MB. */
export const catalogDocs = [
  {
    brand: "Star Grocery",
    logo: "/brands/star-grocery-logo.png",
    title: loc("General catalog 2026", "Catálogo general 2026", "Catalogo generale 2026"),
    href: "/catalogs/star-grocery-2026.pdf",
    sizeMb: 8.8,
  },
  {
    brand: "Star Grocery",
    logo: "/brands/star-grocery-logo.png",
    title: loc("Flint & Hroom snacks catalog", "Catálogo de snacks Flint y Hroom", "Catalogo snack Flint e Hroom"),
    href: "/catalogs/star-grocery-snacks-flint-hroom.pdf",
    sizeMb: 9.2,
  },
  {
    brand: "Quinoa Club",
    logo: "/brands/quinoa-club-logo.png",
    title: loc("Product portfolio", "Portafolio de productos", "Portafoglio prodotti"),
    href: "/catalogs/quinoa-club-portfolio-en.pdf",
    sizeMb: 26.2,
  },
  {
    brand: "AmeriQual",
    logo: "/brands/ameriqual-group.jpg",
    title: loc("Food Life balanced catalog 2026", "Catálogo Food Life balanced 2026", "Catalogo Food Life balanced 2026"),
    href: "/catalogs/food-life-balanced-2026.pdf",
    sizeMb: 8,
  },
];
