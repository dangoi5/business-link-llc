import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { regionLabels } from "@/lib/content";
import { buildRegionArt, type MapCrop } from "@/lib/map-art";
import { markets, type Market, type MarketRegion, type MarketStatus } from "@/lib/markets";

type RegionTile = {
  region: MarketRegion;
  crop: MapCrop;
  /** Grid placement; tile size follows how many markets the region holds. */
  span: string;
  surface: string;
  colors: { background: string; land: string; market: string };
  columns?: boolean;
  /** Narrower art for tiles whose names would otherwise run into it. */
  artWidth?: string;
};

const tiles: RegionTile[] = [
  {
    region: "Americas",
    crop: { x: 122, y: 298, w: 200, h: 224 },
    span: "md:col-span-2 lg:col-span-7",
    surface: "bg-brand-deep text-white",
    colors: { background: "#123470", land: "#2c4c88", market: "#e5a82b" },
    columns: true,
  },
  {
    region: "Europe",
    crop: { x: 452, y: 268, w: 156, h: 96 },
    span: "lg:col-span-5",
    surface: "bg-surface text-ink",
    colors: { background: "#f4f6fa", land: "#d5dce9", market: "#1a4590" },
  },
  {
    region: "Africa",
    crop: { x: 428, y: 416, w: 66, h: 48 },
    span: "lg:col-span-4 lg:row-span-2",
    surface: "bg-gold text-ink",
    colors: { background: "#e5a82b", land: "#cf9420", market: "#0a1630" },
  },
  {
    region: "Asia-Pacific",
    crop: { x: 772, y: 306, w: 118, h: 172 },
    span: "md:col-span-2 lg:col-span-4 lg:row-span-2",
    surface: "bg-ink text-white",
    colors: { background: "#0a1630", land: "#2a3a5c", market: "#e5a82b" },
  },
  {
    region: "Caribbean",
    crop: { x: 248, y: 396, w: 46, h: 26 },
    span: "lg:col-span-4",
    surface: "bg-brand text-white",
    colors: { background: "#1a4590", land: "#3a62ab", market: "#e5a82b" },
    artWidth: "w-[44%]",
  },
  {
    region: "Middle East",
    crop: { x: 558, y: 362, w: 88, h: 72 },
    span: "lg:col-span-4",
    surface: "bg-surface text-ink",
    colors: { background: "#f4f6fa", land: "#d5dce9", market: "#1a4590" },
  },
];

const artFade = "linear-gradient(to right, transparent 0%, black 30%)";
/** Breathing room between the markets and the tile's right and bottom edges. */
const FRAME_PADDING = 0.08;

function RegionMap({ tile, regionMarkets }: { tile: RegionTile; regionMarkets: Market[] }) {
  const statusById = new Map<string, MarketStatus>();
  for (const market of regionMarkets) {
    for (const id of market.mapIds) statusById.set(id, market.status);
  }
  const { crop, colors } = tile;
  const art = buildRegionArt(crop, statusById);
  // In-development markets read as lighter than active ones.
  const opacity = (status: MarketStatus) => (status === "active" ? 1 : 0.6);

  // `meet` keeps every market in frame at any tile shape; surrounding land fills the rest.
  const frame = {
    "aria-hidden": true,
    viewBox: `${crop.x} ${crop.y} ${crop.w * (1 + FRAME_PADDING)} ${crop.h * (1 + FRAME_PADDING)}`,
    preserveAspectRatio: "xMaxYMax meet",
    className: `pointer-events-none absolute inset-y-0 right-0 h-full ${tile.artWidth ?? "w-[60%]"}`,
  };

  return (
    <>
      {/* Only the background land fades, so markets stay at full strength. */}
      <svg {...frame} style={{ maskImage: artFade, WebkitMaskImage: artFade }}>
        {art.shapes
          .filter((shape) => !shape.status)
          .map((shape) => (
            <path
              key={shape.id}
              d={shape.d}
              fill={colors.land}
              stroke={colors.background}
              strokeWidth={0.75}
              vectorEffect="non-scaling-stroke"
            />
          ))}
      </svg>
      <svg {...frame}>
        {art.shapes.map((shape) =>
          shape.status ? (
            <path
              key={shape.id}
              d={shape.d}
              fill={colors.market}
              fillOpacity={opacity(shape.status)}
              stroke={colors.background}
              strokeWidth={0.75}
              vectorEffect="non-scaling-stroke"
            />
          ) : null,
        )}
        {art.dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={crop.w * 0.018}
            fill={colors.market}
            fillOpacity={opacity(dot.status)}
            stroke={colors.background}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </>
  );
}

export function MarketRegions({ locale }: { locale: Locale }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_12rem_12rem]">
      {tiles.map((tile) => {
        const regionMarkets = markets.filter((market) => market.region === tile.region);
        if (!regionMarkets.length) return null;
        return (
          <li
            key={tile.region}
            className={`relative min-h-44 overflow-hidden rounded-2xl ${tile.surface} ${tile.span}`}
          >
            <RegionMap tile={tile} regionMarkets={regionMarkets} />
            <div className="relative p-6 lg:p-8">
              <h2 className="display text-3xl lg:text-4xl">{t(locale, regionLabels[tile.region])}</h2>
              <ul className={`mt-4 grid gap-y-1.5 ${tile.columns ? "gap-x-8 sm:w-fit sm:grid-cols-2" : ""}`}>
                {regionMarkets.map((market) => (
                  <li key={market.id} className="text-base font-medium lg:text-lg">
                    {t(locale, market.name)}
                    {market.status === "developing" ? (
                      <span className={`text-xs font-normal whitespace-nowrap opacity-75 ${tile.columns ? "ml-2" : "block"}`}>
                        {t(locale, ui.marketsPage.regionInDevelopment)}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
