import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Usage: node scripts/import-star-catalog-2026.mjs <items.json> <dir of staged PNGs>
// items.json: [{ family, folder, n, image }] — `image` is the staged PNG basename (shared when pack art is identical).
const [itemsFile, stagedDir] = process.argv.slice(2);
if (!itemsFile || !stagedDir) throw new Error("Pass items.json and the staged PNG folder");

const items = JSON.parse(fs.readFileSync(itemsFile, "utf8"));
const flavorRoot = path.resolve("public/products/star-grocery/flavors");
const familyRoot = path.resolve("public/products/star-grocery/families");
const SIZE = 1200;

const byFamily = new Map();
for (const it of items) {
  const src = path.join(stagedDir, `${it.image}.png`);
  if (!fs.existsSync(src)) throw new Error(`Missing staged image ${it.image}`);
  const dir = path.join(flavorRoot, it.family, it.folder);
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, `product_${it.n}.jpg`);
  await sharp(src)
    .resize({ width: SIZE, height: SIZE, fit: "cover", position: "centre" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);
  if (!byFamily.has(it.family)) byFamily.set(it.family, []);
  byFamily.get(it.family).push({ out, image: it.image });
}

// Family cover: 2x2 grid of the first four distinct shots (3 or fewer: side-by-side strip).
fs.mkdirSync(familyRoot, { recursive: true });
for (const [family, shots] of byFamily) {
  const picks = [...new Map(shots.map((s) => [s.image, s])).values()];
  const pick = picks.length >= 4 ? [0, 1, 2, 3].map((i) => picks[Math.floor((i * picks.length) / 4)]) : picks;
  const tiles =
    pick.length === 4
      ? await Promise.all(
          pick.map(async (s, i) => ({
            input: await sharp(s.out).resize(SIZE / 2, SIZE / 2).toBuffer(),
            left: (i % 2) * (SIZE / 2),
            top: Math.floor(i / 2) * (SIZE / 2),
          })),
        )
      : await Promise.all(
          pick.map(async (s, i) => {
            const w = Math.floor(SIZE / pick.length);
            return {
              input: await sharp(s.out).resize(w, SIZE, { fit: "cover", position: "centre" }).toBuffer(),
              left: i * w,
              top: 0,
            };
          }),
        );
  await sharp({ create: { width: SIZE, height: SIZE, channels: 3, background: "#f3e9dc" } })
    .composite(tiles)
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(familyRoot, `${family}.jpg`));
  console.log("family", family, shots.length);
}
