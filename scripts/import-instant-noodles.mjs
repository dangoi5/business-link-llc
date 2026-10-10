import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Usage: node scripts/import-instant-noodles.mjs <dir with 01-*.png … 21-*.png>
const src = process.argv[2];
if (!src) throw new Error("Pass the folder containing the staged noodle PNGs");

const files = fs.readdirSync(src).filter((f) => /^\d{2}-.*\.png$/i.test(f)).sort();
const flavorRoot = path.resolve("public/products/star-grocery/flavors");
const familyRoot = path.resolve("public/products/star-grocery/families");
fs.mkdirSync(familyRoot, { recursive: true });

const groups = [
  { family: "khutorok-instant-noodles", folder: "30_khutorok_instant_noodles_bag_60g", range: [1, 8] },
  { family: "khutorok-instant-noodles", folder: "31_khutorok_instant_noodles_cup_80g", range: [9, 11] },
  { family: "khutorok-instant-noodles", folder: "32_khutorok_instant_noodles_tray_90g", range: [12, 14] },
  { family: "khutorok-instant-noodles", folder: "33_khutorok_instant_noodles_bag_90g", range: [15, 18] },
  { family: "kitto-instant-egg-noodles", folder: "34_kitto_instant_egg_noodles_130g", range: [19, 21] },
];

const SIZE = 1200;
const buffers = {};
for (const g of groups) {
  const dir = path.join(flavorRoot, g.family, g.folder);
  fs.mkdirSync(dir, { recursive: true });
  for (let n = g.range[0]; n <= g.range[1]; n++) {
    const file = files.find((f) => f.startsWith(String(n).padStart(2, "0") + "-"));
    if (!file) throw new Error(`Missing image ${n}`);
    const out = path.join(dir, `product_${String(n - g.range[0] + 1).padStart(2, "0")}.jpg`);
    await sharp(path.join(src, file))
      .resize({ width: SIZE, height: SIZE, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(out);
    buffers[n] = out;
  }
}

async function tile(n, w, h) {
  return sharp(buffers[n]).resize(w, h, { fit: "cover", position: "centre" }).toBuffer();
}

// Khutorok cover: 2x2 of bag 60g, cup, tray, bag 90g.
const half = SIZE / 2;
await sharp({ create: { width: SIZE, height: SIZE, channels: 3, background: "#f3e9dc" } })
  .composite([
    { input: await tile(1, half, half), left: 0, top: 0 },
    { input: await tile(9, half, half), left: half, top: 0 },
    { input: await tile(12, half, half), left: 0, top: half },
    { input: await tile(15, half, half), left: half, top: half },
  ])
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(familyRoot, "khutorok-instant-noodles.jpg"));

// Kitto cover: triptych.
const third = Math.floor(SIZE / 3);
await sharp({ create: { width: third * 3, height: SIZE, channels: 3, background: "#f3e9dc" } })
  .composite(
    await Promise.all([19, 20, 21].map(async (n, i) => ({ input: await tile(n, third, SIZE), left: i * third, top: 0 }))),
  )
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(familyRoot, "kitto-instant-egg-noodles.jpg"));

console.log("done");
