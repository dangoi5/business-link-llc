import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const API =
  "https://consumer.lascojamaica.com/wp-json/wp/v2/product?per_page=100&product-category=3&_embed=1";
const outDir = path.resolve("public/products/lasco");
const manifestPath = path.resolve("tmp/lasco-manifest.json");

const CATEGORY_ORDER = [
  "food-drinks",
  "powdered-milk-soy-drinks",
  "instant-chocolate-and-cocoa",
  "breakfast-items",
  "macaroni-products",
  "canned-foods",
  "condiments-sauces",
  "margarine",
  "oil-and-vinegar",
  "soft-drinks",
  "icool-flavoured-water-and-juice-drinks",
  "icool-water",
  "baby-formula",
];

const CATEGORY_LABELS = {
  "food-drinks": {
    en: "Food Drinks",
    es: "Bebidas alimenticias",
    it: "Bevande alimentari",
  },
  "powdered-milk-soy-drinks": {
    en: "Powdered Milk & Soy Drinks",
    es: "Leches en polvo y soya",
    it: "Latte in polvere e soia",
  },
  "instant-chocolate-and-cocoa": {
    en: "Instant Chocolate & Cocoa",
    es: "Chocolate y cacao instantáneos",
    it: "Cioccolato e cacao istantanei",
  },
  "breakfast-items": {
    en: "Breakfast",
    es: "Desayuno",
    it: "Colazione",
  },
  "macaroni-products": {
    en: "Macaroni",
    es: "Macarrones",
    it: "Maccheroni",
  },
  "canned-foods": {
    en: "Canned Foods",
    es: "Enlatados",
    it: "Conserve",
  },
  "condiments-sauces": {
    en: "Condiments & Sauces",
    es: "Condimentos y salsas",
    it: "Condimenti e salse",
  },
  margarine: {
    en: "Margarine",
    es: "Margarina",
    it: "Margarina",
  },
  "oil-and-vinegar": {
    en: "Oil & Vinegar",
    es: "Aceite y vinagre",
    it: "Olio e aceto",
  },
  "soft-drinks": {
    en: "Soft Drinks",
    es: "Refrescos",
    it: "Bevande analcoliche",
  },
  "icool-flavoured-water-and-juice-drinks": {
    en: "iCool Flavoured Water & Juice",
    es: "Agua saborizada y jugos iCool",
    it: "Acqua aromatizzata e succhi iCool",
  },
  "icool-water": {
    en: "iCool Water",
    es: "Agua iCool",
    it: "Acqua iCool",
  },
  "baby-formula": {
    en: "Baby Formula & Cereal",
    es: "Fórmula infantil y cereal",
    it: "Formula infantile e cereali",
  },
};

function decodeHtml(s) {
  return s
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/,/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanTitle(raw) {
  let t = decodeHtml(raw);
  t = t.replace(/^LASCO\s+/i, "Lasco ");
  t = t.replace(/-/g, " ");
  t = t.replace(/,/g, ", ");
  t = t.replace(/\s+/g, " ").trim();
  t = t.replace(/\bw\b/gi, "with");
  // Title-case words, keep small connectors lowercase mid-string
  t = t
    .split(" ")
    .map((word, i) => {
      if (!word) return word;
      const lower = word.toLowerCase();
      if (i > 0 && ["and", "with", "in", "of", "the", "a", "an"].includes(lower)) return lower;
      if (/^\d/.test(word)) return word;
      if (/^(ml|mL|g|kg|oz|L)$/i.test(word)) return word.replace(/ml/i, "mL");
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  t = t
    .replace(/\bLasoy\b/gi, "LaSoy")
    .replace(/\bIcool\b/gi, "iCool")
    .replace(/\bLyrix\b/gi, "Lyrix")
    .replace(/\bKonka\b/gi, "Konka")
    .replace(/\bMac And Cheese\b/gi, "Mac & Cheese")
    .replace(/\b50%\s*Sachet\b/gi, "50% Less Sugar Sachet")
    .replace(/\b50%\s*Less\s*Sugar\b/gi, "50% Less Sugar")
    .replace(/\bNutmeg\b/gi, "Nutmeg")
    .replace(/\bGuavapine\b/gi, "Guava Pine")
    .replace(/\(new Look\)/gi, "(New Look)");
  return t;
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function pickCategory(classList = []) {
  for (const id of CATEGORY_ORDER) {
    if (classList.includes(`tag-${id}`)) return id;
  }
  return "food-drinks";
}

function sizeHint(title) {
  const m = title.match(/(\d+(?:\.\d+)?\s*(?:g|kg|oz|mL|ml|L)\b(?:\s*[,–-]\s*\d+(?:\.\d+)?\s*(?:g|kg|oz|mL|ml|L)\b)*)/i);
  return m ? m[1].replace(/\s+/g, " ") : null;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });

  console.log("Fetching products...");
  const res = await fetch(API);
  if (!res.ok) throw new Error(`API ${res.status}`);
  const products = await res.json();
  console.log(`Got ${products.length} products`);

  const seenSlugs = new Set();
  const seenTitles = new Set();
  const items = [];

  for (const p of products) {
    const title = cleanTitle(p.title?.rendered || p.slug);
    const titleKey = title.toLowerCase();
    if (seenTitles.has(titleKey)) {
      console.log(`Skipping duplicate: ${title}`);
      continue;
    }
    seenTitles.add(titleKey);

    let slug = slugify(p.slug || title);
    if (seenSlugs.has(slug)) slug = `${slug}-${p.id}`;
    seenSlugs.add(slug);

    const media = p._embedded?.["wp:featuredmedia"]?.[0];
    const imageUrl =
      media?.media_details?.sizes?.medium_large?.source_url ||
      media?.media_details?.sizes?.full?.source_url ||
      media?.source_url;

    if (!imageUrl) {
      console.warn(`No image for ${slug}`);
      continue;
    }

    const category = pickCategory(p.class_list || []);
    const destFile = `${slug}.jpg`;
    const destPath = path.join(outDir, destFile);

    if (!fs.existsSync(destPath)) {
      console.log(`Downloading ${slug}...`);
      const imgRes = await fetch(imageUrl);
      if (!imgRes.ok) {
        console.warn(`Failed image ${imageUrl}`);
        continue;
      }
      const buf = Buffer.from(await imgRes.arrayBuffer());
      await sharp(buf)
        .rotate()
        .resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(destPath);
    }

    items.push({
      id: p.id,
      slug,
      title,
      category,
      size: sizeHint(title),
      image: `/products/lasco/${destFile}`,
      sourceUrl: p.link,
    });
  }

  // Keep existing food-drink.jpg if present; prefer new vanilla pack as food drink flagship already replaced
  const byCat = Object.fromEntries(CATEGORY_ORDER.map((c) => [c, []]));
  for (const item of items) {
    (byCat[item.category] ||= []).push(item);
  }

  const manifest = { categories: CATEGORY_ORDER, labels: CATEGORY_LABELS, items, byCat };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Wrote ${items.length} items → ${manifestPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
