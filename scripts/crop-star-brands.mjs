import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const pages = path.resolve("tmp/catalogs/star-brands/pages");
const dest = path.resolve("public/products/star-brands");
fs.mkdirSync(dest, { recursive: true });

const page = (n) => path.join(pages, `page-${String(n).padStart(2, "0")}.png`);

async function packShot(src, destFile, region) {
  const extracted = await sharp(src).extract(region).toBuffer();
  const meta = await sharp(extracted).metadata();
  const canvas = { width: 900, height: 675 };
  const maxW = canvas.width * 0.82;
  const maxH = canvas.height * 0.92;
  const scale = Math.min(maxW / meta.width, maxH / meta.height);
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);
  const resized = await sharp(extracted).resize(w, h).toBuffer();
  await sharp({
    create: {
      width: canvas.width,
      height: canvas.height,
      channels: 3,
      background: "#f7f4ee",
    },
  })
    .composite([
      {
        input: resized,
        left: Math.round((canvas.width - w) / 2),
        top: Math.round((canvas.height - h) / 2),
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(destFile);
  console.log(path.basename(destFile), region);
}

const crops = [
  [2, "flint-croutons.jpg", { left: 145, top: 312, width: 148, height: 176 }],
  [4, "flint-baguette.jpg", { left: 68, top: 242, width: 165, height: 222 }],
  [8, "flint-grenki.jpg", { left: 78, top: 362, width: 175, height: 248 }],
  [10, "flint-craft.jpg", { left: 112, top: 278, width: 275, height: 305 }],
  [12, "big-bob-peanuts.jpg", { left: 532, top: 222, width: 125, height: 192 }],
  [14, "big-bob-crunch.jpg", { left: 142, top: 708, width: 160, height: 275 }],
  [16, "big-bob-corn.jpg", { left: 222, top: 388, width: 130, height: 318 }],
  [18, "big-bob-popcorn.jpg", { left: 68, top: 212, width: 215, height: 242 }],
  [20, "san-sanych-seeds.jpg", { left: 648, top: 182, width: 165, height: 200 }],
  [24, "chipsters-classic.jpg", { left: 52, top: 248, width: 175, height: 185 }],
  [26, "chipsters-bbq.jpg", { left: 112, top: 302, width: 185, height: 205 }],
  [28, "crispy-cris.jpg", { left: 48, top: 378, width: 230, height: 290 }],
  [30, "hroom-chips.jpg", { left: 452, top: 788, width: 345, height: 114 }],
  [32, "do-bochkovogo.jpg", { left: 68, top: 578, width: 190, height: 192 }],
];

for (const [n, name, region] of crops) {
  await packShot(page(n), path.join(dest, name), region);
}
