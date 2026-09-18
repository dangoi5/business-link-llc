import { freshElementsBrand } from "@/lib/brands";

export const company = {
  name: "Business Link LLC",
  tagline: "Developing Businesses. Building Markets. Connecting the World",
  subtitle: "Master Distributor · Exporter · Own Brand",
  description:
    "Business Link LLC is a master distributor and exporter of food and beverage products. We develop and execute commercial opportunities across international markets—working with manufacturers, brands, distributors and strategic partners to establish sustainable routes to market and long-term business.",
  role:
    "As a master distributor and exporter, we manage international supply, distribution structures and commercial relationships across our active markets.",
  email: "info@businesslinkllc.com",
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
  { href: "/capabilities", label: "Capabilities" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/markets", label: "Markets" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export const heroHighlights = [
  {
    title: "Master Distributor & Exporter",
    description: "We export and distribute food & beverage products across international markets.",
  },
  {
    title: "Import / Export & Market Development",
    description:
      "International commercial operations across food & beverage—with routes to market, partners and sustainable distribution.",
  },
  {
    title: "Americas · Caribbean · Africa · Europe · Asia-Pacific",
    description: "A multisector commercial network activated by opportunity.",
  },
];

export const manufacturerServices = [
  {
    title: "Export Sales Representation",
    description:
      "We represent your brand and products in international markets to grow your sales network with qualified buyers and distributors.",
  },
  {
    title: "Market Entry & Distributor Sourcing",
    description:
      "We identify ideal markets and connect you with trusted importers, distributors and retail partners to enter and scale.",
  },
  {
    title: "Export Strategy Development",
    description:
      "We build a custom market plan, evaluate commercial fit and guide expansion into new regions with lasting partnerships.",
  },
  {
    title: "Distribution Structure",
    description:
      "We design market-specific distribution models using qualified import, warehousing and logistics partners where required.",
  },
];

export const buyerServices = [
  {
    title: "Strategic Product Sourcing",
    description:
      "We identify products and manufacturing capabilities matched to specification, volume and destination-market requirements.",
  },
  {
    title: "Supplier & Brand Discovery",
    description:
      "Access selected manufacturers and brands whose capabilities complement your channels and commercial goals.",
  },
  {
    title: "Purchasing & Supply Support",
    description:
      "Assistance across sourcing, commercial structure and supply coordination so purchasing needs become viable operations.",
  },
  {
    title: "Logistics Coordination",
    description:
      "We work with warehousing, fulfillment and logistics partners to support efficient product movement into your market.",
  },
];

export const capabilities = [
  {
    slug: "master-distribution-export",
    title: "Master Distribution & Export",
    summary:
      "We operate as a master distributor and exporter—managing product supply, commercial terms and routes to market for partner brands and our own Fresh Elements line.",
    detail:
      "Buyers and market partners gain a single commercial counterpart for international supply, with structured distribution support across our active footprint.",
  },
  {
    slug: "international-business-development",
    title: "International Business Development",
    summary:
      "We identify and develop commercial opportunities by bringing together the right products, manufacturers, partners and markets.",
    detail:
      "From first contact through sustained commercial activity, we evaluate fit across product, partner capability and destination market demand—then open the relationships that turn opportunity into revenue.",
  },
  {
    slug: "market-development",
    title: "Market Development",
    summary:
      "We evaluate opportunities, establish routes to market and develop the commercial relationships required to build sustainable market presence.",
    detail:
      "Each market has its own regulatory, logistics and channel realities. We map those constraints early and build presence that can scale beyond a single shipment.",
  },
  {
    slug: "distribution-market-execution",
    title: "Distribution & Market Execution",
    summary:
      "We structure distribution solutions according to each market, working with qualified importers, distributors, warehousing providers and logistics partners where required.",
    detail:
      "Whether the right model is a local importer, regional hub or hybrid fulfillment structure, we design around the opportunity—not a one-size template.",
  },
  {
    slug: "strategic-sourcing",
    title: "Strategic Sourcing & Supply Solutions",
    summary:
      "We identify products and manufacturing capabilities based on specific market requirements while evaluating sourcing, routing and supply-chain alternatives.",
    detail:
      "Buyers and distributors gain access to manufacturing capacity matched to specification, volume and compliance needs—with routing options that protect margin and reliability.",
  },
  {
    slug: "own-brand-fresh-elements",
    title: "Own Brand — Fresh Elements",
    summary:
      "We develop and market Fresh Elements, our own food product line, alongside the international brands and manufacturers we represent and distribute.",
    detail:
      "Fresh Elements gives buyers access to Business Link’s proprietary range, developed for commercial channels including retail, foodservice and institutional supply.",
  },
];

export const processSteps = [
  { step: "01", label: "Identify", description: "Qualify product, market and commercial fit" },
  { step: "02", label: "Develop", description: "Build partner relationships and market access" },
  { step: "03", label: "Structure", description: "Define distribution, pricing and supply terms" },
  { step: "04", label: "Execute", description: "Coordinate logistics, compliance and launch" },
  { step: "05", label: "Grow", description: "Expand presence and sustain long-term volume" },
];

export type PortfolioProduct = {
  slug: string;
  name: string;
  description: string;
  image: string;
  /** Optional short details like pack size, origin, or format */
  details?: string[];
};

export type PortfolioCategory = {
  slug: string;
  title: string;
  summary: string;
  channels: string[];
  image: string;
  products: PortfolioProduct[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "shelf-stable-foods",
    title: "Shelf-Stable Foods",
    summary:
      "Long shelf-life proteins, prepared meals, shelf-stable dairy and other ambient food solutions designed for efficient storage and distribution.",
    channels: ["Retail", "Distribution", "Institutional"],
    image: "/categories/shelf-stable-foods.jpg",
    products: [
      // Add products here, for example:
      // {
      //   slug: "long-life-milk",
      //   name: "Long-Life Milk",
      //   description: "UHT milk for retail and institutional distribution.",
      //   image: "/products/shelf-stable/long-life-milk.jpg",
      //   details: ["1L", "Retail", "Foodservice"],
      // },
    ],
  },
  {
    slug: "oils-fats",
    title: "Oils & Fats",
    summary:
      "Edible oils, palm-based products, vegetable oil blends, margarines and shortenings for retail and foodservice applications.",
    channels: ["Retail", "Foodservice", "Industrial"],
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80",
    products: [],
  },
  {
    slug: "foodservice-institutional",
    title: "Foodservice & Institutional",
    summary:
      "Products and supply solutions for foodservice, hospitality, catering, institutional feeding and other high-volume applications.",
    channels: ["Hospitality", "Catering", "Institutional"],
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    products: [],
  },
  {
    slug: "grocery-consumer",
    title: "Grocery & Consumer Foods",
    summary:
      "Selected consumer food products and grocery categories developed according to individual market opportunities.",
    channels: ["Retail", "Grocery", "Wholesale"],
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
    products: [],
  },
  {
    slug: "snacks-nuts",
    title: "Snacks & Nuts",
    summary:
      "Selected peanuts, flavored nuts and snack products for markets where the product, positioning and distribution opportunity provide the right commercial fit.",
    channels: ["Retail", "Snacking", "Foodservice"],
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1200&q=80",
    products: [],
  },
];

export function getCategoryBySlug(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}

export const activeMarkets = [
  { name: "United States", region: "Americas" },
  { name: "Jamaica", region: "Caribbean" },
  { name: "Dominican Republic", region: "Caribbean" },
  { name: "Colombia", region: "Americas" },
  { name: "Peru", region: "Americas" },
  { name: "Panama", region: "Americas" },
  { name: "El Salvador", region: "Americas" },
  { name: "Guatemala", region: "Americas" },
  { name: "Ghana", region: "Africa" },
  { name: "Benin", region: "Africa" },
  { name: "Italy", region: "Europe" },
  { name: "Philippines", region: "Asia-Pacific" },
];

export const marketsInDevelopment = [
  { name: "Venezuela", region: "Americas" },
  { name: "Gulf Region", region: "Middle East" },
];

export const regions = [
  "Americas",
  "Caribbean",
  "Africa",
  "Europe",
  "Asia-Pacific",
] as const;

export const regionCards = [
  { region: "Americas", detail: "Commercial relationships and distribution partners." },
  { region: "Caribbean", detail: "Import, wholesale and retail market access." },
  { region: "Africa", detail: "Market development and supply opportunities." },
  { region: "Europe", detail: "Sourcing and international trade gateway." },
  { region: "Asia-Pacific", detail: "Manufacturing links and buyer networks." },
];

export const partners = [
  {
    type: "Fresh Elements",
    description:
      "Our own product line—developed and marketed by Business Link for retail, foodservice and international distribution.",
  },
  {
    type: "Manufacturers",
    description:
      "Selected food and beverage manufacturers seeking structured access to new international markets through our master distribution and export network.",
  },
  {
    type: "Brands",
    description:
      "Established and emerging brands whose product range fits the retail, foodservice and institutional channels we serve.",
  },
  {
    type: "Distributors & Importers",
    description:
      "Qualified local partners with import capability, warehousing and route-to-market coverage in destination markets.",
  },
  {
    type: "Logistics & Warehousing",
    description:
      "Strategic logistics and fulfillment partners supporting inventory, cross-docking and efficient product movement.",
  },
];

export const distributionPoints = [
  {
    title: "Market-Specific Models",
    description:
      "Not every market requires the same distribution model. We structure solutions using qualified third-party import, warehousing, fulfillment and logistics resources.",
  },
  {
    title: "Regional Hubs",
    description:
      "Where justified by the opportunity, regional or market-specific distribution hubs can be established to support inventory, cross-docking, order fulfillment and efficient product movement.",
  },
  {
    title: "Inventory Reallocation",
    description:
      "We evaluate opportunities to redirect qualifying excess or short-dated shelf-stable food inventories into selected markets. Products with at least 90 days of remaining shelf life may be evaluated based on destination requirements, transit time, regulatory compliance and commercial viability.",
  },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  markets: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
  operations: "https://images.unsplash.com/photo-1605745341112-859df7b39370?auto=format&fit=crop&w=1400&q=80",
};
