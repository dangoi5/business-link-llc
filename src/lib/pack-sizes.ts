import { loc, type Loc } from "@/i18n/t";

/**
 * Size ranges for the catalog's Size filter. Pack sizes are written freely in the
 * catalog data ("250 g / 500 g / 25 kg", "2.6 / 4.5 oz", "35–150 g", "900 ml"),
 * so each is converted to grams and sorted into these ranges. Liquids count
 * 1 ml as 1 g, which is close enough for oils and sauces.
 */
export const sizeBuckets: { id: string; label: Loc; min: number; max: number }[] = [
  { id: "under-100g", label: loc("Under 100 g", "Menos de 100 g", "Meno di 100 g"), min: 0, max: 100 },
  { id: "100-249g", label: loc("100–249 g", "100–249 g", "100–249 g"), min: 100, max: 250 },
  { id: "250-499g", label: loc("250–499 g", "250–499 g", "250–499 g"), min: 250, max: 500 },
  { id: "500-999g", label: loc("500–999 g", "500–999 g", "500–999 g"), min: 500, max: 1000 },
  { id: "1-5kg", label: loc("1–5 kg", "1–5 kg", "1–5 kg"), min: 1000, max: 5000 },
  { id: "over-5kg", label: loc("Over 5 kg (bulk)", "Más de 5 kg (granel)", "Oltre 5 kg (sfuso)"), min: 5000, max: Infinity },
];

const GRAMS_PER_UNIT: Record<string, number> = {
  g: 1,
  kg: 1000,
  oz: 28.35,
  floz: 29.57,
  lb: 453.6,
  lbs: 453.6,
  ml: 1,
  cl: 10,
  l: 1000,
};

/** Every weight in a size string, in grams. "4 × 100 g" counts as 100 g packs. */
function weightsInGrams(size: string): number[] {
  const pattern = /(\d+(?:[.,]\d+)?)\s*(?:([×x])(?=\s*\d)|(fl\.?\s?oz|oz|lbs?|kg|g|ml|cl|l)\b)?/gi;
  const grams: number[] = [];
  let pending: number[] = [];

  for (const match of size.matchAll(pattern)) {
    const value = Number(match[1].replace(",", "."));
    if (match[2]) continue; // a pack count such as "4 ×"
    const unit = match[3]?.toLowerCase().replace(/[.\s]/g, "");
    if (!unit) {
      pending.push(value); // "2.6 / 4.5 oz": the unit comes after the last number
      continue;
    }
    const factor = GRAMS_PER_UNIT[unit] ?? 1;
    for (const number of [...pending, value]) grams.push(number * factor);
    pending = [];
  }
  return grams;
}

/** The size ranges a product belongs to. A range like "35–150 g" covers every bucket it spans. */
export function sizeBucketIds(size: string | undefined): string[] {
  if (!size) return [];
  const grams = weightsInGrams(size);
  if (grams.length === 0) return [];

  const isRange = /\d\s*(?:[a-z]+\s*)?[–-]\s*\d/i.test(size);
  const matches = isRange
    ? (bucket: (typeof sizeBuckets)[number]) =>
        bucket.min <= Math.max(...grams) && bucket.max > Math.min(...grams)
    : (bucket: (typeof sizeBuckets)[number]) => grams.some((g) => g >= bucket.min && g < bucket.max);

  return sizeBuckets.filter(matches).map((bucket) => bucket.id);
}
