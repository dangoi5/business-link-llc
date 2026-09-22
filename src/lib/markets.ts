import { loc, type Loc } from "@/i18n/t";

export type MarketRegion =
  | "Americas"
  | "Caribbean"
  | "Africa"
  | "Europe"
  | "Asia-Pacific"
  | "Middle East";

export type MarketStatus = "active" | "developing";

/**
 * Add or remove markets here. `mapIds` are ISO 3166-1 alpha-2 codes
 * (lowercase) matching @svg-maps/world location ids.
 */
export type Market = {
  id: string;
  name: Loc;
  region: MarketRegion;
  status: MarketStatus;
  mapIds: string[];
};

export const markets: Market[] = [
  {
    id: "united-states",
    name: loc("United States", "Estados Unidos", "Stati Uniti"),
    region: "Americas",
    status: "active",
    mapIds: ["us"],
  },
  {
    id: "jamaica",
    name: loc("Jamaica", "Jamaica", "Giamaica"),
    region: "Caribbean",
    status: "active",
    mapIds: ["jm"],
  },
  {
    id: "dominican-republic",
    name: loc("Dominican Republic", "República Dominicana", "Repubblica Dominicana"),
    region: "Caribbean",
    status: "active",
    mapIds: ["do"],
  },
  {
    id: "colombia",
    name: loc("Colombia", "Colombia", "Colombia"),
    region: "Americas",
    status: "active",
    mapIds: ["co"],
  },
  {
    id: "peru",
    name: loc("Peru", "Perú", "Perù"),
    region: "Americas",
    status: "active",
    mapIds: ["pe"],
  },
  {
    id: "panama",
    name: loc("Panama", "Panamá", "Panama"),
    region: "Americas",
    status: "active",
    mapIds: ["pa"],
  },
  {
    id: "el-salvador",
    name: loc("El Salvador", "El Salvador", "El Salvador"),
    region: "Americas",
    status: "active",
    mapIds: ["sv"],
  },
  {
    id: "guatemala",
    name: loc("Guatemala", "Guatemala", "Guatemala"),
    region: "Americas",
    status: "active",
    mapIds: ["gt"],
  },
  {
    id: "ghana",
    name: loc("Ghana", "Ghana", "Ghana"),
    region: "Africa",
    status: "active",
    mapIds: ["gh"],
  },
  {
    id: "benin",
    name: loc("Benin", "Benín", "Benin"),
    region: "Africa",
    status: "active",
    mapIds: ["bj"],
  },
  {
    id: "italy",
    name: loc("Italy", "Italia", "Italia"),
    region: "Europe",
    status: "active",
    mapIds: ["it"],
  },
  {
    id: "philippines",
    name: loc("Philippines", "Filipinas", "Filippine"),
    region: "Asia-Pacific",
    status: "active",
    mapIds: ["ph"],
  },
  {
    id: "hong-kong",
    name: loc("Hong Kong", "Hong Kong", "Hong Kong"),
    region: "Asia-Pacific",
    status: "active",
    mapIds: ["hk"],
  },
  {
    id: "venezuela",
    name: loc("Venezuela", "Venezuela", "Venezuela"),
    region: "Americas",
    status: "developing",
    mapIds: ["ve"],
  },
  {
    id: "gulf-region",
    name: loc("Gulf Region", "Región del Golfo", "Regione del Golfo"),
    region: "Middle East",
    status: "developing",
    mapIds: ["ae", "sa", "kw", "qa", "bh", "om"],
  },
];

export const activeMarkets = markets.filter((market) => market.status === "active");
export const marketsInDevelopment = markets.filter((market) => market.status === "developing");

export function marketStatusByMapId(): Map<string, MarketStatus> {
  const map = new Map<string, MarketStatus>();
  for (const market of markets) {
    for (const mapId of market.mapIds) {
      // Active wins if a code somehow appears twice
      if (map.get(mapId) === "active") continue;
      map.set(mapId, market.status);
    }
  }
  return map;
}

export function marketByMapId(): Map<string, Market> {
  const map = new Map<string, Market>();
  for (const market of markets) {
    for (const mapId of market.mapIds) {
      if (!map.has(mapId) || market.status === "active") {
        map.set(mapId, market);
      }
    }
  }
  return map;
}
