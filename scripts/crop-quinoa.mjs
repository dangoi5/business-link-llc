import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const page = (n) =>
  path.resolve(`tmp/catalogs/quinoa/pages/page-${String(n).padStart(2, "0")}.png`);
const destDir = path.resolve("public/products/quinoa-club");
const previewDir = path.resolve("tmp/catalogs/quinoa/crops");
const brandDir = path.resolve("public/brands");
fs.mkdirSync(destDir, { recursive: true });
fs.mkdirSync(previewDir, { recursive: true });

const rightPouch = { left: 555, top: 108, width: 450, height: 730 };
const centerBag = { left: 220, top: 15, width: 600, height: 870 };

async function packShot(src, dest, region) {
  const extracted = await sharp(src).extract(region).toBuffer();
  const meta = await sharp(extracted).metadata();
  const canvas = { width: 900, height: 675 };
  const maxW = canvas.width * 0.82;
  const maxH = canvas.height * 0.9;
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
    .jpeg({ quality: 88 })
    .toFile(dest);
}

async function foodCrop(src, dest, region) {
  await sharp(src).extract(region).jpeg({ quality: 88 }).toFile(dest);
}

const jobs = [
  [5, "quinoa-grain.jpg", { left: 555, top: 140, width: 450, height: 705 }, "pack"],
  [7, "quinoarepa.jpg", { left: 560, top: 95, width: 450, height: 740 }, "pack"],
  [
    8,
    "quinoa-waffles.jpg",
    { left: 40, top: 20, width: 960, height: 860 },
    "food",
  ],
  [
    12,
    "quinoa-spaghetti.jpg",
    { left: 30, top: 445, width: 980, height: 310 },
    "pack",
  ],
  [15, "quinoa-fusilli.jpg", rightPouch, "pack"],
  [16, "quinoa-macaroni.jpg", rightPouch, "pack"],
  [20, "cereal-puff.jpg", centerBag, "pack"],
  [22, "musli.jpg", { left: 520, top: 40, width: 500, height: 840 }, "pack"],
  [26, "protein-loops.jpg", centerBag, "pack"],
  [31, "baby-quinoa.jpg", { left: 555, top: 130, width: 450, height: 710 }, "pack"],
  [32, "crunchy-protein.jpg", { left: 560, top: 120, width: 450, height: 715 }, "pack"],
  [34, "quinoa-toasts.jpg", { left: 560, top: 95, width: 450, height: 740 }, "pack"],
  [38, "sacha-inchi-toast.jpg", centerBag, "pack"],
  [41, "quinoa-rings.jpg", { left: 560, top: 55, width: 450, height: 640 }, "pack"],
  [
    48,
    "quinoa-chips.jpg",
    centerBag,
    "pack",
  ],
  [
    51,
    "quinoa-puff.jpg",
    { left: 680, top: 40, width: 340, height: 830 },
    "pack",
  ],
  [52, "soyquinoa.jpg", { left: 555, top: 70, width: 450, height: 690 }, "pack"],
];

for (const [n, name, region, kind] of jobs) {
  const dest = path.join(destDir, name);
  if (kind === "food") {
    await foodCrop(page(n), dest, region);
  } else {
    await packShot(page(n), dest, region);
  }
  await sharp(dest).resize(640).jpeg({ quality: 82 }).toFile(path.join(previewDir, name));
  const meta = await sharp(dest).metadata();
  console.log("ok", name, meta.width, meta.height, fs.statSync(dest).size);
}

const logoDest = path.join(brandDir, "quinoa-club.png");
await sharp(page(1))
  .extract({ left: 95, top: 0, width: 860, height: 188 })
  .png()
  .toFile(logoDest);
console.log("ok logo", fs.statSync(logoDest).size);
