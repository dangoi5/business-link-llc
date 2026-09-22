import world from "@svg-maps/world";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { marketByMapId, marketStatusByMapId } from "@/lib/markets";

const MARKET_FILL = "#e06b2c";
const DEFAULT_FILL = "#3a4556";
const STROKE = "#0b1220";

export function MarketsMap({ locale }: { locale: Locale }) {
  const statusById = marketStatusByMapId();
  const marketLookup = marketByMapId();

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-ink">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 md:px-5">
        <span className="h-2 w-2 rounded-full" style={{ background: MARKET_FILL }} />
        <p className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
          {t(locale, ui.marketsPage.mapLabel)}
        </p>
      </div>

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
                fill={highlighted ? MARKET_FILL : DEFAULT_FILL}
                stroke={STROKE}
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
