import world from "@svg-maps/world";
import { MapViewport } from "@/components/MapViewport";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import {
  buildMapLabels,
  COUNTRY_LABEL_PX,
  MARKET_LABEL_PX,
  SCALE_RATIO,
  SCALE_START,
} from "@/lib/map-labels";
import { marketByMapId, marketStatusByMapId } from "@/lib/markets";

const palette = {
  dark: { market: "#e5a82b", base: "#2a3a5c", stroke: "#0a1630", label: "#ffffff", halo: "#0a1630" },
  light: { market: "#1a4590", base: "#d9dfeb", stroke: "#ffffff", label: "#0a1630", halo: "#ffffff" },
} as const;

const [, , WORLD_WIDTH, WORLD_HEIGHT] = world.viewBox.split(" ").map(Number);
const LABEL_BASE_PX = 11;
const MARKER_RADIUS_PX = 2.75;
const MARKER_HIT_RADIUS_PX = 9;

function countryName(locale: Locale, id: string, fallback: string) {
  // The map also has non-ISO ids (e.g. "um-dq") that Intl.DisplayNames rejects.
  if (locale === "en" || !/^[a-z]{2}$/.test(id)) return fallback;
  return new Intl.DisplayNames([locale], { type: "region", fallback: "none" }).of(id.toUpperCase()) ?? fallback;
}

export function MarketsMap({
  locale,
  variant = "dark",
}: {
  locale: Locale;
  variant?: "dark" | "light";
}) {
  const colors = palette[variant];
  const statusById = marketStatusByMapId();
  const marketLookup = marketByMapId();
  const copy = ui.marketsPage;

  const statusLabel = (id: string) => {
    const status = statusById.get(id);
    if (!status) return undefined;
    return t(locale, status === "active" ? copy.mapStatusActive : copy.mapStatusDeveloping);
  };

  const countries = world.locations.map((location) => {
    const market = marketLookup.get(location.id);
    return {
      ...location,
      // A market spanning several countries (Gulf Region) still names each one.
      name:
        market?.mapIds.length === 1
          ? t(locale, market.name)
          : countryName(locale, location.id, location.name),
      isMarket: Boolean(market),
      isActive: market?.status === "active",
    };
  });
  const labels = buildMapLabels(countries);
  const markers = labels.filter((label) => label.hasMarker);

  return (
    <div
      className={`overflow-hidden rounded-xl lg:mx-auto lg:w-[min(1120px,76.5vw)] lg:max-w-none ${
        variant === "dark" ? "mx-auto max-w-3xl bg-ink" : "w-full"
      }`}
    >
      {variant === "dark" ? (
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 md:px-5">
          <span className="h-2 w-2 rounded-full" style={{ background: colors.market }} />
          <p className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
            {t(locale, copy.mapLabel)}
          </p>
        </div>
      ) : null}

      <div className="px-2 pb-2 pt-1 md:px-3 md:pb-3">
        <MapViewport
          width={WORLD_WIDTH}
          height={WORLD_HEIGHT}
          label={t(locale, copy.mapAlt)}
          variant={variant}
          strings={{
            zoomIn: t(locale, copy.mapZoomIn),
            zoomOut: t(locale, copy.mapZoomOut),
            reset: t(locale, copy.mapReset),
            hint: t(locale, copy.mapHint),
          }}
        >
          <g>
            {countries.map((country) => (
              <path
                key={country.id}
                d={country.path}
                data-name={country.name}
                data-status={statusLabel(country.id)}
                fill={country.isMarket ? colors.market : colors.base}
                stroke={colors.stroke}
                strokeWidth={country.isMarket ? 0.6 : 0.35}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>

          <g>
            {markers.map((marker) => (
              <g key={marker.id} data-name={marker.name} data-status={statusLabel(marker.id)}>
                <circle cx={marker.x} cy={marker.y} r={MARKER_HIT_RADIUS_PX} data-map-marker={MARKER_HIT_RADIUS_PX} fill="transparent" />
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r={MARKER_RADIUS_PX}
                  data-map-marker={MARKER_RADIUS_PX}
                  fill={colors.market}
                  stroke={colors.halo}
                  strokeWidth={0.75}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
          </g>

          <g
            data-map-labels=""
            data-scale-start={SCALE_START}
            data-scale-ratio={SCALE_RATIO}
            fontSize={LABEL_BASE_PX}
            textAnchor="middle"
            pointerEvents="none"
          >
            {labels.map((label) =>
              label.minScale === null || label.isMarket ? null : (
                <text
                  key={label.id}
                  x={label.x}
                  y={label.y}
                  dy="0.35em"
                  data-min-scale={label.minScale}
                  data-min-zoom={label.minZoom}
                  display="none"
                  fill={colors.label}
                  stroke={colors.halo}
                  strokeWidth="0.3em"
                  strokeLinejoin="round"
                  fontSize={`${COUNTRY_LABEL_PX / LABEL_BASE_PX}em`}
                  style={{ paintOrder: "stroke" }}
                >
                  {label.name}
                </text>
              ),
            )}
            {labels
              .filter((label) => label.isMarket)
              .map((label) => (
                <g
                  key={label.id}
                  data-placements={label.placements.map((placement) => placement?.join(",") ?? "").join(";")}
                  data-x={label.x}
                  data-y={label.y}
                  data-min-zoom={label.minZoom}
                  display="none"
                >
                  <line
                    x1={label.x}
                    y1={label.y}
                    x2={label.x}
                    y2={label.y}
                    stroke={colors.label}
                    strokeWidth={0.75}
                    vectorEffect="non-scaling-stroke"
                    display="none"
                  />
                  <circle cx={label.x} cy={label.y} r={0} fill={colors.label} display="none" />
                  <text
                    x={label.x}
                    y={label.y}
                    dy="0.35em"
                    fill={colors.label}
                    stroke={colors.halo}
                    strokeWidth="0.3em"
                    strokeLinejoin="round"
                    fontSize={`${MARKET_LABEL_PX / LABEL_BASE_PX}em`}
                    fontWeight={700}
                    style={{ paintOrder: "stroke" }}
                  >
                    {label.name}
                  </text>
                </g>
              ))}
          </g>
        </MapViewport>
      </div>
    </div>
  );
}
