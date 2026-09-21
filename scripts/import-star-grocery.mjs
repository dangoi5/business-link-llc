import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const familySrc = "C:/Users/diego/Downloads/star_grocery_family_product_images";
const flavorSrc =
  "C:/Users/diego/Downloads/star_grocery_individual_staged_product_images/star_grocery_individual_staged_images";
const familyDest = path.resolve("public/products/star-grocery/families");
const flavorDest = path.resolve("public/products/star-grocery/flavors");
const sheetDest = path.resolve("tmp/star-grocery-sheets");

fs.mkdirSync(familyDest, { recursive: true });
fs.mkdirSync(flavorDest, { recursive: true });
fs.mkdirSync(sheetDest, { recursive: true });

export const families = [
  {
    slug: "fitto-soup-family-freshly-served",
    file: "Fitto soup family, freshly served.png",
    folders: [
      "26_fitto_instant_soups",
      "27_fitto_instant_food",
      "28_fitto_instant_oatmeal",
      "29_fitto_salty_porridge",
    ],
  },
  {
    slug: "golden-grain-flour-family-showcase",
    file: "Golden Grain Flour Family Showcase.png",
    folders: ["23_zolote_zerno_flour"],
  },
  {
    slug: "golden-grain-groats-family-collection",
    file: "Golden Grain Groats Family Collection.png",
    folders: ["21_zolote_zerno_groats"],
  },
  {
    slug: "golden-grain-pasta-family-showcase",
    file: "Golden Grain pasta family showcase.png",
    folders: ["22_zolote_zerno_pasta_products"],
  },
  {
    slug: "hutorok-canned-meat-family-collection",
    file: "Hutorok Canned Meat Family Collection.png",
    folders: ["17_hutorok_canned_meat"],
  },
  {
    slug: "hutorok-flour-family-styled-for-baking",
    file: "Hutorok flour family, styled for baking.png",
    folders: ["07_hutorok_flour"],
  },
  {
    slug: "hutorok-groats-family-collection",
    file: "Hutorok Groats Family Collection.png",
    folders: ["09_hutorok_groats_800g"],
  },
  {
    slug: "hutorok-groats-family-collection-400g",
    file: "Hutorok Groats Family Collection(1).png",
    folders: ["10_hutorok_groats_400g"],
  },
  {
    slug: "hutorok-mashed-potato-family-spread",
    file: "Hutorok mashed potato family spread.png",
    folders: ["15_hutorok_instant_mashed_potatoes"],
  },
  {
    slug: "hutorok-pasta-family-showcase",
    file: "Hutorok Pasta Family Showcase.png",
    folders: ["08_hutorok_pasta_800g"],
  },
  {
    slug: "hutorok-pilaf-family-feast",
    file: "Hutorok pilaf family feast.png",
    folders: ["16_hutorok_pilaf"],
  },
  {
    slug: "hutorok-salt-family-collection",
    file: "Hutorok salt family collection.png",
    folders: ["11_hutorok_salt"],
  },
  {
    slug: "hutorok-seasonings-spices-collection",
    file: "Hutorok Seasonings & Spices Collection.png",
    folders: ["13_hutorok_seasonings_spices_1"],
  },
  {
    slug: "hutorok-spices-artfully-staged",
    file: "Hutorok spices, artfully staged.png",
    folders: ["14_hutorok_seasonings_spices_2"],
  },
  {
    slug: "hutorok-sugar-and-baking-soda-showcase",
    file: "Hutorok Sugar and Baking Soda Showcase.png",
    folders: ["12_hutorok_sugar_and_soda"],
  },
  {
    slug: "kitto-soy-sauce-family-spread",
    file: "Kitto Soy Sauce Family Spread.png",
    folders: ["24_kitto_soy_sauces"],
  },
  {
    slug: "kitto-specialty-sauces-elegant-trio",
    file: "Kitto specialty sauces, elegant trio.png",
    folders: ["25_kitto_specialty_sauces"],
  },
  {
    slug: "la-pasta-bread-and-flour-collection",
    file: "La Pasta bread and flour collection.png",
    folders: ["06_la_pasta_bread_assortment_new"],
  },
  {
    slug: "la-pasta-bread-assortment-showcase",
    file: "La Pasta bread assortment showcase.png",
    folders: ["05_la_pasta_bread_assortment"],
  },
  {
    slug: "la-pasta-family-collection-showcase",
    file: "La Pasta Family Collection Showcase.png",
    folders: ["02_la_pasta_pasta_products"],
  },
  {
    slug: "la-pasta-premium-assortment-showcase",
    file: "La Pasta premium assortment showcase.png",
    folders: ["03_la_pasta_pasta_products_new"],
  },
  {
    slug: "pansky-groats-and-rice-family",
    file: "Pansky Groats and Rice Family.png",
    folders: ["18_pansky_groats_1"],
  },
  {
    slug: "pansky-groats-family-assortment",
    file: "Pansky groats family assortment.png",
    folders: ["19_pansky_groats_2"],
  },
  {
    slug: "pansky-pasta-and-flour-showcase",
    file: "Pansky Pasta and Flour Showcase.png",
    folders: ["20_pansky_pasta_and_flour"],
  },
  {
    slug: "perfetto-pasta-family-hero",
    file: "Perfetto Pasta Family Hero.png",
    folders: ["04_perfetto_premium_pasta"],
  },
];

function displayNameFromFile(file) {
  return file.replace(/\.png$/i, "").replace(/\(1\)$/, " 400 g");
}

async function writeJpeg(src, dest, width) {
  await sharp(src)
    .rotate()
    .resize({ width, height: width, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(dest);
}

async function contactSheet(folderName, files, destFile) {
  const thumb = 220;
  const cols = Math.min(5, files.length);
  const rows = Math.ceil(files.length / cols);
  const tiles = [];
  for (let i = 0; i < files.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const resized = await sharp(files[i].full)
      .resize(thumb, thumb, { fit: "cover" })
      .jpeg({ quality: 70 })
      .toBuffer();
    const labeled = await sharp(resized)
      .extend({ bottom: 28, background: "#111" })
      .composite([
        {
          input: Buffer.from(
            `<svg width="${thumb}" height="28"><rect width="100%" height="100%" fill="#111"/><text x="8" y="19" font-size="13" fill="#fff" font-family="Arial">${files[i].name}</text></svg>`,
          ),
          top: thumb,
          left: 0,
        },
      ])
      .toBuffer();
    tiles.push({ input: labeled, left: col * thumb, top: row * (thumb + 28) });
  }
  await sharp({
    create: {
      width: cols * thumb,
      height: rows * (thumb + 28),
      channels: 3,
      background: "#222",
    },
  })
    .composite(tiles)
    .jpeg({ quality: 75 })
    .toFile(destFile);
  console.log("sheet", folderName);
}

const manifest = [];

for (const family of families) {
  const src = path.join(familySrc, family.file);
  if (!fs.existsSync(src)) throw new Error(`Missing family image: ${family.file}`);
  const cover = `${family.slug}.jpg`;
  await writeJpeg(src, path.join(familyDest, cover), 1400);
  console.log("family", cover);

  const groups = [];
  for (const folder of family.folders) {
    const dir = path.join(flavorSrc, folder);
    const pngs = fs
      .readdirSync(dir)
      .filter((name) => name.toLowerCase().endsWith(".png"))
      .sort();
    const outDir = path.join(flavorDest, family.slug, folder);
    fs.mkdirSync(outDir, { recursive: true });
    const products = [];
    const sheetFiles = [];
    for (const png of pngs) {
      const id = png.replace(/\.png$/i, "");
      const outName = `${id}.jpg`;
      await writeJpeg(path.join(dir, png), path.join(outDir, outName), 1200);
      products.push({
        file: png,
        image: `/products/star-grocery/flavors/${family.slug}/${folder}/${outName}`,
      });
      sheetFiles.push({ full: path.join(dir, png), name: id });
    }
    await contactSheet(folder, sheetFiles, path.join(sheetDest, `${folder}.jpg`));
    groups.push({ folder, products });
  }

  manifest.push({
    slug: family.slug,
    file: family.file,
    name: displayNameFromFile(family.file),
    cover: `/products/star-grocery/families/${cover}`,
    groups,
  });
}

fs.writeFileSync(path.resolve("tmp/star-grocery-manifest.json"), JSON.stringify(manifest, null, 2));
console.log("wrote", manifest.length, "families");
