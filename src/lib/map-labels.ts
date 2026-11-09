/**
 * Works out where each country's name goes on the world map at every zoom.
 * Runs on the server only, so none of this reaches the client bundle.
 *
 * Markets are placed first, per zoom step: a name sits on its own country when
 * it can, and otherwise moves to nearby free space with a leader line back to
 * the country. Grey countries only appear when zoomed in a lot, and only where
 * they never touch a market's name.
 */

/** On-screen label sizes in px. */
export const MARKET_LABEL_PX = 12;
export const COUNTRY_LABEL_PX = 10.5;
/** Markets narrower than this (in map units) get a dot so they can be found. */
const TINY_MARKET_UNITS = 14;
/** Zoom level at which each kind of name may appear; the full map stays clean. */
const MARKET_MIN_ZOOM = 1.3;
const COUNTRY_MIN_ZOOM = 6;

/** Placement is computed for scales SCALE_START * SCALE_RATIO^step (px per map unit). */
export const SCALE_START = 0.4;
export const SCALE_RATIO = 1.25;
const SCALE_STEPS = Array.from({ length: 20 }, (_, step) => SCALE_START * SCALE_RATIO ** step);

/** Distances (px) a displaced name may sit from its country. */
const LEADER_DISTANCES = [14, 28, 44, 62, 84];
/** Space (px) kept clear around another market's anchor point. */
const ANCHOR_CLEARANCE = 4;

type Ring = { area: number; x: number; y: number; width: number; height: number };

export type LabelInput = {
  id: string;
  name: string;
  path: string;
  isMarket: boolean;
  isActive: boolean;
};

/** [label offset x, y, leader end x, y] in screen px from the anchor; null = hidden. */
export type MarketPlacement = [number, number, number, number] | null;

export type MapLabel = {
  id: string;
  name: string;
  x: number;
  y: number;
  isMarket: boolean;
  hasMarker: boolean;
  minZoom: number;
  /** Grey countries: scale at which the name may appear; null = never. */
  minScale: number | null;
  /** Markets: where the name goes at each zoom step. */
  placements: MarketPlacement[];
};

/** Polygons of a path built only from relative `m … z` commands. */
export function parseRings(path: string): [number, number][][] {
  const tokens = path.match(/[mz]|-?[\d.]+(?:e[-+]?\d+)?/gi) ?? [];
  const rings: [number, number][][] = [];
  let current: [number, number][] = [];
  let cx = 0;
  let cy = 0;
  let startX = 0;
  let startY = 0;
  let first = false;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "m") {
      first = true;
    } else if (token === "z") {
      if (current.length) rings.push(current);
      current = [];
      cx = startX;
      cy = startY;
    } else {
      cx += Number(token);
      cy += Number(tokens[++i]);
      if (first) {
        startX = cx;
        startY = cy;
        first = false;
      }
      current.push([cx, cy]);
    }
  }
  if (current.length) rings.push(current);
  return rings;
}

function largestRing(path: string): Ring {
  let best: Ring = { area: -1, x: 0, y: 0, width: 0, height: 0 };
  for (const ring of parseRings(path)) {
    let signedArea = 0;
    let sumX = 0;
    let sumY = 0;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i = 0; i < ring.length; i++) {
      const [x0, y0] = ring[i];
      const [x1, y1] = ring[(i + 1) % ring.length];
      const cross = x0 * y1 - x1 * y0;
      signedArea += cross;
      sumX += (x0 + x1) * cross;
      sumY += (y0 + y1) * cross;
      minX = Math.min(minX, x0);
      minY = Math.min(minY, y0);
      maxX = Math.max(maxX, x0);
      maxY = Math.max(maxY, y0);
    }
    const area = Math.abs(signedArea) / 2;
    if (area > best.area) {
      const degenerate = Math.abs(signedArea) < 1e-9;
      best = {
        area,
        x: degenerate ? (minX + maxX) / 2 : sumX / (3 * signedArea),
        y: degenerate ? (minY + maxY) / 2 : sumY / (3 * signedArea),
        width: maxX - minX,
        height: maxY - minY,
      };
    }
  }
  return best;
}

type Item = LabelInput & {
  ring: Ring;
  hasMarker: boolean;
  textWidth: number;
  textHeight: number;
};
type Offset = { x: number; y: number };
type Box = { left: number; right: number; top: number; bottom: number };
type Point = { x: number; y: number };

function boxAt(item: Item, offset: Offset, scale: number): Box {
  const x = item.ring.x * scale + offset.x;
  const y = item.ring.y * scale + offset.y;
  return {
    left: x - item.textWidth / 2,
    right: x + item.textWidth / 2,
    top: y - item.textHeight / 2,
    bottom: y + item.textHeight / 2,
  };
}

function overlaps(a: Box, b: Box) {
  return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
}

function contains(box: Box, point: Point, padding = 0) {
  return (
    point.x > box.left - padding &&
    point.x < box.right + padding &&
    point.y > box.top - padding &&
    point.y < box.bottom + padding
  );
}

/** Point of a label's box closest to its anchor: where the leader line ends. */
function leaderEnd(item: Item, offset: Offset): Offset {
  const halfWidth = item.textWidth / 2;
  const halfHeight = item.textHeight / 2;
  return {
    x: Math.min(Math.max(0, offset.x - halfWidth), offset.x + halfWidth),
    y: Math.min(Math.max(0, offset.y - halfHeight), offset.y + halfHeight),
  };
}

function leaderPoints(item: Item, offset: Offset, scale: number): Point[] {
  const end = leaderEnd(item, offset);
  if (!end.x && !end.y) return [];
  const ax = item.ring.x * scale;
  const ay = item.ring.y * scale;
  return [0.2, 0.4, 0.6, 0.8, 1].map((t) => ({ x: ax + end.x * t, y: ay + end.y * t }));
}

/** Positions a market's name can try, nearest first. */
function candidateOffsets(item: Item, previous: Offset | undefined): Offset[] {
  const half = item.textWidth / 2;
  const candidates: Offset[] = item.hasMarker ? [] : [{ x: 0, y: 0 }];
  // Staying put between zoom steps stops names jumping around.
  if (previous) candidates.push(previous);
  for (const d of LEADER_DISTANCES) {
    candidates.push(
      { x: 0, y: -d },
      { x: 0, y: d },
      { x: half + d * 0.7, y: 0 },
      { x: -(half + d * 0.7), y: 0 },
      { x: half + d * 0.5, y: -d * 0.8 },
      { x: -(half + d * 0.5), y: -d * 0.8 },
      { x: half + d * 0.5, y: d * 0.8 },
      { x: -(half + d * 0.5), y: d * 0.8 },
    );
  }
  return candidates;
}

function placeMarketsAtScale(
  markets: Item[],
  scale: number,
  previous: Map<string, Offset>,
): Map<string, { offset: Offset; box: Box }> {
  const anchors = markets.map((item) => ({ id: item.id, x: item.ring.x * scale, y: item.ring.y * scale }));
  const placed = new Map<string, { offset: Offset; box: Box }>();
  const leaders: Point[] = [];

  for (const item of markets) {
    for (const offset of candidateOffsets(item, previous.get(item.id))) {
      const box = boxAt(item, offset, scale);
      const boxes = Array.from(placed.values(), (entry) => entry.box);
      const points = leaderPoints(item, offset, scale);
      const free =
        !boxes.some((other) => overlaps(box, other)) &&
        !anchors.some((anchor) => anchor.id !== item.id && contains(box, anchor, ANCHOR_CLEARANCE)) &&
        !points.some((point) => boxes.some((other) => contains(other, point))) &&
        !leaders.some((point) => contains(box, point));
      if (!free) continue;
      placed.set(item.id, { offset, box });
      leaders.push(...points);
      break;
    }
  }
  return placed;
}

export function buildMapLabels(inputs: LabelInput[]): MapLabel[] {
  const items: Item[] = inputs.map((input) => {
    const ring = largestRing(input.path);
    const px = input.isMarket ? MARKET_LABEL_PX : COUNTRY_LABEL_PX;
    return {
      ...input,
      ring,
      hasMarker: input.isMarket && Math.max(ring.width, ring.height) < TINY_MARKET_UNITS,
      textWidth: input.name.length * px * (input.isMarket ? 0.6 : 0.54),
      textHeight: px * 1.3,
    };
  });

  // Active markets choose first, then the ones with the least room to manoeuvre.
  const markets = items
    .filter((item) => item.isMarket)
    .sort(
      (a, b) =>
        Number(b.isActive) - Number(a.isActive) ||
        Number(b.hasMarker) - Number(a.hasMarker) ||
        b.textWidth - a.textWidth,
    );

  const marketSteps: Map<string, { offset: Offset; box: Box }>[] = [];
  let previous = new Map<string, Offset>();
  for (const scale of SCALE_STEPS) {
    const placed = placeMarketsAtScale(markets, scale, previous);
    marketSteps.push(placed);
    previous = new Map(Array.from(placed, ([id, entry]) => [id, entry.offset]));
  }

  const countries = items
    .filter((item) => !item.isMarket)
    .sort((a, b) => b.ring.area - a.ring.area);
  const minScale = new Map<string, number>();
  const none: Offset = { x: 0, y: 0 };
  SCALE_STEPS.forEach((scale, step) => {
    const placed = countries.filter((item) => minScale.has(item.id)).map((item) => boxAt(item, none, scale));
    for (const item of countries) {
      if (minScale.has(item.id)) continue;
      // Wait until the name roughly fits inside the country's land.
      if (item.ring.width * scale < item.textWidth * 0.7) continue;
      const box = boxAt(item, none, scale);
      if (placed.some((other) => overlaps(box, other))) continue;
      // Market names move between steps, so stay clear of them at every later zoom too.
      const hitsMarket = SCALE_STEPS.slice(step).some((laterScale, offset) => {
        const laterBox = boxAt(item, none, laterScale);
        return Array.from(marketSteps[step + offset].values()).some((entry) => overlaps(laterBox, entry.box));
      });
      if (hitsMarket) continue;
      placed.push(box);
      minScale.set(item.id, scale);
    }
  });

  const round = (value: number) => Math.round(value * 10) / 10;

  return items.map((item) => ({
    id: item.id,
    name: item.name,
    x: item.ring.x,
    y: item.ring.y,
    isMarket: item.isMarket,
    hasMarker: item.hasMarker,
    minZoom: item.isMarket ? MARKET_MIN_ZOOM : COUNTRY_MIN_ZOOM,
    minScale: minScale.get(item.id) ?? null,
    placements: item.isMarket
      ? marketSteps.map((placed): MarketPlacement => {
          const entry = placed.get(item.id);
          if (!entry) return null;
          const end = leaderEnd(item, entry.offset);
          return [round(entry.offset.x), round(entry.offset.y), round(end.x), round(end.y)];
        })
      : [],
  }));
}
