import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const destDir = path.resolve("public/products/ameriqual");
const previewDir = path.resolve("tmp/catalogs/bd/crops");
fs.mkdirSync(destDir, { recursive: true });
fs.mkdirSync(previewDir, { recursive: true });

const page = (n) => path.resolve(`tmp/catalogs/bd/pages/page-${String(n).padStart(2, "0")}.png`);
const cup = { left: 8, top: 228, width: 600, height: 450 };

const jobs = [
  [41, "joy2-yogurt-mixed-berry.jpg"],
  [42, "joy2-yogurt-strawberry.jpg"],
  [43, "joy2-yogurt-vanilla.jpg"],
];

for (const [n, name] of jobs) {
  const dest = path.join(destDir, name);
  await sharp(page(n)).extract(cup).jpeg({ quality: 88 }).toFile(dest);
  await sharp(dest).resize(640).jpeg({ quality: 82 }).toFile(path.join(previewDir, name));
  const meta = await sharp(dest).metadata();
  console.log("ok", name, meta.width, meta.height, fs.statSync(dest).size);
}
