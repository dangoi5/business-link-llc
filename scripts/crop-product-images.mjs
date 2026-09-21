import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

fs.mkdirSync("public/products/ameriqual", { recursive: true });
fs.mkdirSync("public/products/star-grocery", { recursive: true });

const bd = (n) => path.resolve(`tmp/catalogs/bd/pages/page-${String(n).padStart(2, "0")}.png`);
const sg = (n) => path.resolve(`tmp/catalogs/sg/pages/page-${String(n).padStart(2, "0")}.png`);

async function foodCrop(src, dest, region) {
  await sharp(src).extract(region).jpeg({ quality: 88 }).toFile(dest);
  console.log("food", path.basename(dest), region);
}

async function packShot(src, dest, region) {
  const extracted = await sharp(src).extract(region).toBuffer();
  const meta = await sharp(extracted).metadata();
  const canvas = { width: 900, height: 675 };
  const maxW = canvas.width * 0.78;
  const maxH = canvas.height * 0.88;
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
  console.log("pack", path.basename(dest), region);
}

const proteinServe = { left: 405, top: 308, width: 490, height: 348 };
const bowlServe = { left: 430, top: 20, width: 470, height: 430 };

await foodCrop(bd(5), "public/products/ameriqual/white-chicken.jpg", proteinServe);
await foodCrop(bd(8), "public/products/ameriqual/chicken-salad.jpg", proteinServe);
await foodCrop(bd(11), "public/products/ameriqual/buffalo-chicken.jpg", proteinServe);
await foodCrop(bd(13), "public/products/ameriqual/bbq-white-chicken.jpg", proteinServe);
await foodCrop(bd(17), "public/products/ameriqual/cheesy-mac.jpg", bowlServe);
await foodCrop(bd(28), "public/products/ameriqual/pasta-meat-sauce.jpg", bowlServe);
await foodCrop(bd(31), "public/products/ameriqual/hearty-beef-stew.jpg", bowlServe);
await foodCrop(bd(32), "public/products/ameriqual/ring-o-roni.jpg", bowlServe);
await foodCrop(bd(33), "public/products/ameriqual/chicken-noodle-soup.jpg", bowlServe);
await foodCrop(bd(39), "public/products/ameriqual/mediterranean-chicken-orzo.jpg", bowlServe);
await foodCrop(bd(40), "public/products/ameriqual/chicken-sausage-quinoa.jpg", bowlServe);
await foodCrop(bd(44), "public/products/ameriqual/joy2-peanut-butter.jpg", {
  left: 20,
  top: 20,
  width: 620,
  height: 430,
});

await packShot(sg(2), "public/products/star-grocery/la-pasta-penne.jpg", {
  left: 718,
  top: 178,
  width: 148,
  height: 228,
});
await packShot(sg(2), "public/products/star-grocery/la-pasta-spaghetti.jpg", {
  left: 198,
  top: 742,
  width: 138,
  height: 268,
});
await packShot(sg(3), "public/products/star-grocery/la-pasta-whole-grain-fusilli.jpg", {
  left: 348,
  top: 798,
  width: 168,
  height: 228,
});
await packShot(sg(5), "public/products/star-grocery/la-pasta-semola.jpg", {
  left: 590,
  top: 188,
  width: 210,
  height: 318,
});
await packShot(sg(18), "public/products/star-grocery/khutorok-buckwheat.jpg", {
  left: 62,
  top: 168,
  width: 188,
  height: 248,
});
await packShot(sg(18), "public/products/star-grocery/khutorok-jasmine-rice.jpg", {
  left: 378,
  top: 505,
  width: 148,
  height: 198,
});
await packShot(sg(15), "public/products/star-grocery/khutorok-mashed-creamy.jpg", {
  left: 78,
  top: 528,
  width: 210,
  height: 228,
});
await packShot(sg(24), "public/products/star-grocery/kitto-classic-soy.jpg", {
  left: 78,
  top: 138,
  width: 148,
  height: 288,
});
await packShot(sg(24), "public/products/star-grocery/kitto-sweet-chili.jpg", {
  left: 458,
  top: 828,
  width: 138,
  height: 248,
});
