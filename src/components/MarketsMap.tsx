import world from "@svg-maps/world";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { marketByMapId, marketStatusByMapId } from "@/lib/markets";

const palette = {
  dark: { market: "#e5a82b", base: "#2a3a5c", stroke: "#0a1630" },
  light: { market: "#1a4590", base: "#d9dfeb", stroke: "#ffffff" },
} as const;

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

  return (
    <div className={`overflow-hidden rounded-xl ${variant === "dark" ? "mx-auto max-w-3xl bg-ink" : "w-full"}`}>
      {variant === "dark" ? (
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 md:px-5">
          <span className="h-2 w-2 rounded-full" style={{ background: colors.market }} />
          <p className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
            {t(locale, ui.marketsPage.mapLabel)}
          </p>
        </div>
      ) : null}

      <div className="px-2 pb-2 pt-1 md:px-3 md:pb-3">
        <svg
          role="img"
          aria-label={t(locale, ui.marketsPage.mapAlt)}
          viewBox={world.viewBox}
          className="h-auto w-full"
        >
          <title>{t(locale, ui.marketsPage.mapAlt)}</title>
          {world.locations.map((location) => {
            const highlighted = statusById.has(location.id);
            const market = marketLookup.get(location.id);
            const label = market ? t(locale, market.name) : location.name;
            return (
              <path
                key={location.id}
                d={location.path}
                fill={highlighted ? colors.market : colors.base}
                stroke={colors.stroke}
                strokeWidth={highlighted ? 0.4 : 0.2}
                className={highlighted ? "transition-opacity hover:opacity-90" : undefined}
              >
                <title>{label}</title>
              </path>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
