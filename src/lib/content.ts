export const company = {
  name: "Business Link LLC",
  tagline: "Developing Businesses. Building Markets. Connecting the World",
  subtitle: "International Business & Market Development",
  description:
    "Business Link LLC develops and executes commercial opportunities across international markets. We work with manufacturers, brands, distributors and strategic partners to establish sustainable routes to market, develop distribution structures and create long-term business.",
  email: "info@businesslinkllc.com",
  phone: "",
};

export const navLinks = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/markets", label: "Markets" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export const capabilities = [
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
];

export const processSteps = [
  { step: "01", label: "Identify", description: "Qualify product, market and commercial fit" },
  { step: "02", label: "Develop", description: "Build partner relationships and market access" },
  { step: "03", label: "Structure", description: "Define distribution, pricing and supply terms" },
  { step: "04", label: "Execute", description: "Coordinate logistics, compliance and launch" },
  { step: "05", label: "Grow", description: "Expand presence and sustain long-term volume" },
];

export const portfolioCategories = [
  {
    slug: "shelf-stable-foods",
    title: "Shelf-Stable Foods",
    summary:
      "Long shelf-life proteins, prepared meals, shelf-stable dairy and other ambient food solutions designed for efficient storage and distribution.",
    channels: ["Retail", "Distribution", "Institutional"],
  },
  {
    slug: "oils-fats",
    title: "Oils & Fats",
    summary:
      "Edible oils, palm-based products, vegetable oil blends, margarines and shortenings for retail and foodservice applications.",
    channels: ["Retail", "Foodservice", "Industrial"],
  },
  {
    slug: "foodservice-institutional",
    title: "Foodservice & Institutional",
    summary:
      "Products and supply solutions for foodservice, hospitality, catering, institutional feeding and other high-volume applications.",
    channels: ["Hospitality", "Catering", "Institutional"],
  },
  {
    slug: "grocery-consumer",
    title: "Grocery & Consumer Foods",
    summary:
      "Selected consumer food products and grocery categories developed according to individual market opportunities.",
    channels: ["Retail", "Grocery", "Wholesale"],
  },
  {
    slug: "snacks-nuts",
    title: "Snacks & Nuts",
    summary:
      "Selected peanuts, flavored nuts and snack products for markets where the product, positioning and distribution opportunity provide the right commercial fit.",
    channels: ["Retail", "Snacking", "Foodservice"],
  },
];

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

export const partners = [
  {
    type: "Manufacturers",
    description:
      "Selected food and beverage manufacturers seeking structured access to new international markets.",
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
