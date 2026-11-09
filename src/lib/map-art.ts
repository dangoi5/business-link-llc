import world from "@svg-maps/world";
import { parseRings } from "@/lib/map-labels";
import type { MarketStatus } from "@/lib/markets";

/** A window onto the world map, in map units. */
export type MapCrop = { x: number; y: number; w: number; h: number };

export type RegionArt = {
  shapes: { id: string; d: string; status: MarketStatus | null }[];
  /** Markets too small to see at this crop get a dot. */
  dots: { id: string; x: number; y: number; status: MarketStatus }[];
};

function bounds(ring: [number, number][]) {
  const xs = ring.map(([x]) => x);
  const ys = ring.map(([, y]) => y);
  return {
    left: Math.min(...xs),
    right: Math.max(...xs),
    top: Math.min(...ys),
    bottom: Math.max(...ys),
  };
}

/**
 * Drops points closer than the tolerance to the last one kept. Coastlines
 * outside the frame barely show, so they get a much coarser tolerance.
 */
function simplify(ring: [number, number][], tolerance: number, frame: MapCrop) {
  const kept: [number, number][] = [ring[0]];
  for (const point of ring) {
    const last = kept[kept.length - 1];
    const inFrame =
      point[0] > frame.x && point[0] < frame.x + frame.w && point[1] > frame.y && point[1] < frame.y + frame.h;
    const needed = inFrame ? tolerance : tolerance * 12;
    if (Math.hypot(point[0] - last[0], point[1] - last[1]) >= needed) kept.push(point);
  }
  return kept;
}

const round = (value: number) => Math.round(value * 10) / 10;

/**
 * Light, low-detail outlines for a close-up of one region. Decorative only, so
 * it trades precision for a far smaller page than reusing the full map's paths.
 */
export function buildRegionArt(crop: MapCrop, statusById: Map<string, MarketStatus>): RegionArt {
  const tolerance = Math.max(crop.w / 220, 0.4);
  const tinyUnits = crop.w * 0.05;
  const art: RegionArt = { shapes: [], dots: [] };

  for (const location of world.locations) {
    const status = statusById.get(location.id) ?? null;
    let d = "";
    let largest: { size: number; x: number; y: number; span: number } | null = null;

    for (const ring of parseRings(location.path)) {
      const box = bounds(ring);
      const width = box.right - box.left;
      const height = box.bottom - box.top;
      if (status && (!largest || width + height > largest.size)) {
        largest = {
          size: width + height,
          x: (box.left + box.right) / 2,
          y: (box.top + box.bottom) / 2,
          span: Math.max(width, height),
        };
      }
      // Tiles are rarely the crop's shape, so land just outside it still shows.
      const margin = Math.max(crop.w, crop.h) * 1.5;
      const visible =
        box.right > crop.x - margin &&
        box.left < crop.x + crop.w + margin &&
        box.bottom > crop.y - margin &&
        box.top < crop.y + crop.h + margin;
      if (!visible || (!status && Math.max(width, height) < tolerance * 2)) continue;
      const points = simplify(ring, tolerance, crop);
      if (points.length < 3) continue;
      d += `M${points.map(([x, y]) => `${round(x)} ${round(y)}`).join("L")}Z`;
    }

    if (d) art.shapes.push({ id: location.id, d, status });
    if (status && largest && largest.span < tinyUnits) {
      art.dots.push({ id: location.id, x: round(largest.x), y: round(largest.y), status });
    }
  }
  return art;
}
