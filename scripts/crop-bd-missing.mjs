import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const bd = (n) => path.resolve(`tmp/catalogs/bd/pages/page-${String(n).padStart(2, "0")}.png`);
const destDir = path.resolve("public/products/ameriqual");
const previewDir = path.resolve("tmp/catalogs/bd/crops");
fs.mkdirSync(destDir, { recursive: true });
fs.mkdirSync(previewDir, { recursive: true });

const proteinServe = { left: 405, top: 308, width: 490, height: 348 };
const bowlServe = { left: 430, top: 20, width: 470, height: 430 };
const plusServe = { left: 400, top: 18, width: 500, height: 430 };
const kitItems = { left: 478, top: 718, width: 420, height: 430 };
const elbowsBox = { left: 48, top: 168, width: 300, height: 430 };

async function foodCrop(page, destName, region) {
  const dest = path.join(destDir, destName);
  await sharp(bd(page)).extract(region).jpeg({ quality: 88 }).toFile(dest);
  await sharp(dest).resize(480).jpeg({ quality: 80 }).toFile(path.join(previewDir, destName));
  console.log("ok", destName, "p" + page);
}

const jobs = [
  [14, "pollo-asado.jpg", proteinServe],
  [15, "bbq-sauce-with-beef.jpg", proteinServe],
  [16, "hearty-beef-stew-7oz.jpg", bowlServe],
  [18, "spaghetti-tomato-sauce.jpg", bowlServe],
  [19, "chili-with-bean.jpg", bowlServe],
  [20, "pasta-garden-vegetables.jpg", bowlServe],
  [21, "southwestern-chicken-rice.jpg", bowlServe],
  [22, "white-chicken-chili.jpg", bowlServe],
  [23, "spaghetti-meat-sauce.jpg", bowlServe],
  [27, "pizza-mac.jpg", bowlServe],
  [29, "marinara-mac.jpg", bowlServe],
  [30, "hot-chili.jpg", bowlServe],
  [34, "cream-of-mushroom.jpg", bowlServe],
  [35, "tomato-soup.jpg", bowlServe],
  [36, "vegetable-soup.jpg", bowlServe],
  [37, "rustic-beef-stew.jpg", plusServe],
  [38, "savory-breakfast-hash.jpg", plusServe],
  [45, "ready-ration.jpg", kitItems],
  [46, "apack-ready-meal.jpg", kitItems],
  [47, "elbows-pasta.jpg", elbowsBox],
];

for (const [page, name, region] of jobs) {
  await foodCrop(page, name, region);
}
