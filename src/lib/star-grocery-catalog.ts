import type { CatalogProduct } from "@/components/ProductGrid";
import { loc, type Loc } from "@/i18n/t";

export type StarGroceryGroup = {
  id: string;
  label: Loc;
  products: CatalogProduct[];
};

export type StarGroceryFamily = {
  slug: string;
  name: Loc;
  description: Loc;
  cover: string;
  brand: string;
  groups: StarGroceryGroup[];
};

const flavorNote = loc(
  "Individual pack from this Star Grocery family.",
  "Empaque individual de esta familia Star Grocery.",
  "Confezione individuale di questa famiglia Star Grocery.",
);

function cover(slug: string) {
  return `/products/star-grocery/families/${slug}.jpg`;
}

function shot(family: string, folder: string, n: string) {
  return `/products/star-grocery/flavors/${family}/${folder}/product_${n}.jpg`;
}

function item(family: string, folder: string, n: string, en: string, es: string, it: string): CatalogProduct {
  return {
    slug: `${family}-${folder}-${n}`,
    name: loc(en, es, it),
    description: flavorNote,
    image: shot(family, folder, n),
    imageFit: "contain",
  };
}

export const starGroceryFamilies: StarGroceryFamily[] = [
  {
    slug: "la-pasta-family-collection-showcase",
    name: loc("La Pasta Dry Pasta", "Pasta seca La Pasta", "Pasta secca La Pasta"),
    description: loc(
      "La Pasta dry-pasta family. Open the collection to see individual shapes and pack shots.",
      "Familia de pasta seca La Pasta. Abra la colección para ver formatos e imágenes individuales.",
      "Famiglia di pasta secca La Pasta. Apra la collezione per vedere formati e scatti individuali.",
    ),
    cover: cover("la-pasta-family-collection-showcase"),
    brand: "La Pasta",
    groups: [
      {
        id: "pasta",
        label: loc("Pasta shapes", "Formatos de pasta", "Formati di pasta"),
        products: [
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "01", "La Pasta Tagliatelle", "La Pasta Tagliatelle", "La Pasta Tagliatelle"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "02", "La Pasta Farfalle", "La Pasta Farfalle", "La Pasta Farfalle"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "03", "La Pasta Spaghetti", "La Pasta Spaghetti", "La Pasta Spaghetti"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "04", "La Pasta Penne Rigate", "La Pasta Penne Rigate", "La Pasta Penne Rigate"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "05", "La Pasta Rigatoni", "La Pasta Rigatoni", "La Pasta Rigatoni"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "06", "La Pasta Pipe Rigate", "La Pasta Pipe Rigate", "La Pasta Pipe Rigate"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "07", "La Pasta Fusilli", "La Pasta Fusilli", "La Pasta Fusilli"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "08", "La Pasta Linguine", "La Pasta Linguine", "La Pasta Linguine"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "09", "La Pasta Spaghetti", "La Pasta Spaghetti", "La Pasta Spaghetti"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "10", "La Pasta Capellini", "La Pasta Capellini", "La Pasta Capellini"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "11", "La Pasta Fettuccine", "La Pasta Fettuccine", "La Pasta Fettuccine"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "12", "La Pasta Ditalini", "La Pasta Ditalini", "La Pasta Ditalini"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "13", "La Pasta Stelline", "La Pasta Stelline", "La Pasta Stelline"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "14", "La Pasta Fusilli", "La Pasta Fusilli", "La Pasta Fusilli"),
          item("la-pasta-family-collection-showcase", "02_la_pasta_pasta_products", "15", "La Pasta Penne", "La Pasta Penne", "La Pasta Penne"),
        ],
      },
    ],
  },
  {
    slug: "la-pasta-premium-assortment-showcase",
    name: loc("La Pasta Premium Pasta", "Pasta premium La Pasta", "Pasta premium La Pasta"),
    description: loc(
      "Premium La Pasta shapes, including nests and specialty cuts. Click through for individual packs.",
      "Formatos premium La Pasta, incluidos nidos y cortes especiales. Entre para ver empaques individuales.",
      "Formati premium La Pasta, compresi nidi e tagli speciali. Clicchi per le confezioni individuali.",
    ),
    cover: cover("la-pasta-premium-assortment-showcase"),
    brand: "La Pasta",
    groups: [
      {
        id: "premium",
        label: loc("Premium shapes", "Formatos premium", "Formati premium"),
        products: [
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "01", "La Pasta Nest Tagliatelle", "La Pasta Tagliatelle nido", "La Pasta Tagliatelle a nido"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "02", "La Pasta Nest Fettuccine", "La Pasta Fettuccine nido", "La Pasta Fettuccine a nido"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "03", "La Pasta Pipe", "La Pasta Pipe", "La Pasta Pipe"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "04", "La Pasta Conchiglie", "La Pasta Conchiglie", "La Pasta Conchiglie"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "05", "La Pasta Risoni", "La Pasta Risoni", "La Pasta Risoni"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "06", "La Pasta Farfalle", "La Pasta Farfalle", "La Pasta Farfalle"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "07", "La Pasta Fusilli", "La Pasta Fusilli", "La Pasta Fusilli"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "08", "La Pasta Spirals", "La Pasta espirales", "La Pasta spirali"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "09", "La Pasta Vermicelli", "La Pasta Vermicelli", "La Pasta Vermicelli"),
          item("la-pasta-premium-assortment-showcase", "03_la_pasta_pasta_products_new", "10", "La Pasta Penne", "La Pasta Penne", "La Pasta Penne"),
        ],
      },
    ],
  },
  {
    slug: "la-pasta-bread-assortment-showcase",
    name: loc("La Pasta Flours & Bread Mixes", "Harinas y mezclas para pan La Pasta", "Farine e miscele per pane La Pasta"),
    description: loc(
      "La Pasta flours and bread mixes. Open the family to see each mix.",
      "Harinas y mezclas para pan La Pasta. Abra la familia para ver cada mezcla.",
      "Farine e miscele per pane La Pasta. Apra la famiglia per vedere ciascuna miscela.",
    ),
    cover: cover("la-pasta-bread-assortment-showcase"),
    brand: "La Pasta",
    groups: [
      {
        id: "bread",
        label: loc("Flours & bread mixes", "Harinas y mezclas para pan", "Farine e miscele per pane"),
        products: [
          item("la-pasta-bread-assortment-showcase", "05_la_pasta_bread_assortment", "01", "La Pasta Wheat Flour", "Harina de trigo La Pasta", "Farina di grano La Pasta"),
          item("la-pasta-bread-assortment-showcase", "05_la_pasta_bread_assortment", "02", "La Pasta Whole Grain Flour", "Harina integral La Pasta", "Farina integrale La Pasta"),
          item("la-pasta-bread-assortment-showcase", "05_la_pasta_bread_assortment", "03", "La Pasta Pizza Flour", "Harina para pizza La Pasta", "Farina per pizza La Pasta"),
          item("la-pasta-bread-assortment-showcase", "05_la_pasta_bread_assortment", "04", "La Pasta Sandwich Bread Mix", "Mezcla para pan sándwich La Pasta", "Miscela per pane sandwich La Pasta"),
          item("la-pasta-bread-assortment-showcase", "05_la_pasta_bread_assortment", "05", "La Pasta Focaccia Mix", "Mezcla para focaccia La Pasta", "Miscela per focaccia La Pasta"),
        ],
      },
    ],
  },
  {
    slug: "la-pasta-bread-and-flour-collection",
    name: loc("La Pasta Kids Pasta", "Pasta infantil La Pasta", "Pasta per bambini La Pasta"),
    description: loc(
      "Kids pasta shapes from La Pasta. Click through for the individual packs.",
      "Pasta infantil La Pasta. Entre para ver los empaques individuales.",
      "Pasta per bambini La Pasta. Clicchi per le confezioni individuali.",
    ),
    cover: cover("la-pasta-bread-and-flour-collection"),
    brand: "La Pasta",
    groups: [
      {
        id: "kids",
        label: loc("Kids pasta", "Pasta infantil", "Pasta per bambini"),
        products: [
          item("la-pasta-bread-and-flour-collection", "06_la_pasta_bread_assortment_new", "01", "La Pasta Kids Pasta — Sea Shapes", "La Pasta pasta infantil — mar", "La Pasta pasta per bambini — mare"),
          item("la-pasta-bread-and-flour-collection", "06_la_pasta_bread_assortment_new", "02", "La Pasta Kids Pasta — Dino Shapes", "La Pasta pasta infantil — dinos", "La Pasta pasta per bambini — dino"),
        ],
      },
    ],
  },
  {
    slug: "perfetto-pasta-family-hero",
    name: loc("Perfetto Premium Pasta", "Pasta premium Perfetto", "Pasta premium Perfetto"),
    description: loc(
      "Perfetto premium pasta family. Open to see each colored pack and shape.",
      "Familia de pasta premium Perfetto. Abra para ver cada empaque y formato.",
      "Famiglia di pasta premium Perfetto. Apra per vedere ciascuna confezione e formato.",
    ),
    cover: cover("perfetto-pasta-family-hero"),
    brand: "Perfetto",
    groups: [
      {
        id: "pasta",
        label: loc("Perfetto shapes", "Formatos Perfetto", "Formati Perfetto"),
        products: [
          item("perfetto-pasta-family-hero", "04_perfetto_premium_pasta", "01", "Perfetto Spaghetti", "Perfetto Spaghetti", "Perfetto Spaghetti"),
          item("perfetto-pasta-family-hero", "04_perfetto_premium_pasta", "03", "Perfetto Farfalle", "Perfetto Farfalle", "Perfetto Farfalle"),
          item("perfetto-pasta-family-hero", "04_perfetto_premium_pasta", "04", "Perfetto Linguine", "Perfetto Linguine", "Perfetto Linguine"),
          item("perfetto-pasta-family-hero", "04_perfetto_premium_pasta", "05", "Perfetto Conchiglie", "Perfetto Conchiglie", "Perfetto Conchiglie"),
          item("perfetto-pasta-family-hero", "04_perfetto_premium_pasta", "06", "Perfetto Pipe", "Perfetto Pipe", "Perfetto Pipe"),
          item("perfetto-pasta-family-hero", "04_perfetto_premium_pasta", "07", "Perfetto Penne", "Perfetto Penne", "Perfetto Penne"),
          item("perfetto-pasta-family-hero", "04_perfetto_premium_pasta", "08", "Perfetto Fusilli", "Perfetto Fusilli", "Perfetto Fusilli"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-pasta-family-showcase",
    name: loc("Khutorok Pasta", "Pasta Khutorok", "Pasta Khutorok"),
    description: loc(
      "Khutorok pasta family, 800 g range. Click through for individual shapes.",
      "Familia de pasta Khutorok, línea de 800 g. Entre para ver cada formato.",
      "Famiglia di pasta Khutorok, linea da 800 g. Clicchi per ogni formato.",
    ),
    cover: cover("hutorok-pasta-family-showcase"),
    brand: "Khutorok",
    groups: [
      {
        id: "pasta",
        label: loc("Khutorok pasta", "Pasta Khutorok", "Pasta Khutorok"),
        products: [
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "01", "Khutorok Shells", "Conchas Khutorok", "Conchiglie Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "02", "Khutorok Elbows", "Coditos Khutorok", "Gomiti Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "03", "Khutorok Vermicelli", "Fideos Khutorok", "Vermicelli Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "04", "Khutorok Pearls", "Perlas Khutorok", "Perline Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "05", "Khutorok Feathers", "Penne Khutorok", "Penne Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "06", "Khutorok Horns", "Cuernos Khutorok", "Cornetti Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "07", "Khutorok Shells", "Conchas Khutorok", "Conchiglie Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "08", "Khutorok Spirals", "Espirales Khutorok", "Spirali Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "09", "Khutorok Noodles", "Fideos Khutorok", "Tagliolini Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "10", "Khutorok Spaghetti", "Spaghetti Khutorok", "Spaghetti Khutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "11", "Khutorok Spaghetti", "Spaghetti Khutorok", "Spaghetti Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-flour-family-styled-for-baking",
    name: loc("Khutorok Flours & Pizza Mixes", "Harinas y mezclas para pizza Khutorok", "Farine e miscele per pizza Khutorok"),
    description: loc(
      "Khutorok flours and pizza mixes. Open the family for each SKU.",
      "Harinas y mezclas para pizza Khutorok. Abra la familia para ver cada SKU.",
      "Farine e miscele per pizza Khutorok. Apra la famiglia per ciascun SKU.",
    ),
    cover: cover("hutorok-flour-family-styled-for-baking"),
    brand: "Khutorok",
    groups: [
      {
        id: "flour",
        label: loc("Flours", "Harinas", "Farine"),
        products: [
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "01", "Khutorok Corn Flour", "Harina de maíz Khutorok", "Farina di mais Khutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "02", "Khutorok Rye Flour", "Harina de centeno Khutorok", "Farina di segale Khutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "03", "Khutorok Pizza Mix", "Mezcla para pizza Khutorok", "Miscela per pizza Khutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "04", "Khutorok Pizza Mix Pack", "Pack mezcla pizza Khutorok", "Pack miscela pizza Khutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "05", "Khutorok Wheat Flour", "Harina de trigo Khutorok", "Farina di grano Khutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "06", "Khutorok Wheat Flour", "Harina de trigo Khutorok", "Farina di grano Khutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "07", "Khutorok Wheat Flour", "Harina de trigo Khutorok", "Farina di grano Khutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "08", "Khutorok Wheat Flour", "Harina de trigo Khutorok", "Farina di grano Khutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "09", "Khutorok Wheat Flour", "Harina de trigo Khutorok", "Farina di grano Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-groats-family-collection",
    name: loc("Khutorok Groats & Rice", "Cereales y arroz Khutorok", "Cereali e riso Khutorok"),
    description: loc(
      "Khutorok groats and rice family. Click through for buckwheat, rice, millet and more.",
      "Familia de cereales y arroz Khutorok. Entre para trigo sarraceno, arroz, mijo y más.",
      "Famiglia di cereali e riso Khutorok. Clicchi per grano saraceno, riso, miglio e altro.",
    ),
    cover: cover("hutorok-groats-family-collection"),
    brand: "Khutorok",
    groups: [
      {
        id: "groats",
        label: loc("Groats & rice", "Cereales y arroz", "Cereali e riso"),
        products: [
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "01", "Khutorok Corn Groats", "Sémola de maíz Khutorok", "Semola di mais Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "02", "Khutorok Roasted Buckwheat", "Trigo sarraceno tostado Khutorok", "Grano saraceno tostato Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "03", "Khutorok Semolina", "Sémola Khutorok", "Semolino Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "04", "Khutorok Barley Groats", "Cebada Khutorok", "Orzo perlato Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "05", "Khutorok Millet", "Mijo Khutorok", "Miglio Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "06", "Khutorok Wheat Groats", "Trigo partido Khutorok", "Grano spezzato Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "07", "Khutorok Bulgur", "Bulgur Khutorok", "Bulgur Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "08", "Khutorok Millet", "Mijo Khutorok", "Miglio Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "09", "Khutorok Buckwheat", "Trigo sarraceno Khutorok", "Grano saraceno Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "10", "Khutorok Parboiled Rice", "Arroz precocido Khutorok", "Riso parboiled Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "11", "Khutorok Long-Grain Rice", "Arroz de grano largo Khutorok", "Riso a chicco lungo Khutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "12", "Khutorok Round Rice", "Arroz redondo Khutorok", "Riso tondo Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-groats-family-collection-400g",
    name: loc("Khutorok Groats 400 g", "Cereales Khutorok 400 g", "Cereali Khutorok 400 g"),
    description: loc(
      "Khutorok groats in the smaller 400 g family. Open for individual packs.",
      "Cereales Khutorok en la familia de 400 g. Abra para ver empaques individuales.",
      "Cereali Khutorok nella famiglia da 400 g. Apra per le confezioni individuali.",
    ),
    cover: cover("hutorok-groats-family-collection-400g"),
    brand: "Khutorok",
    groups: [
      {
        id: "groats-400",
        label: loc("400 g groats", "Cereales 400 g", "Cereali 400 g"),
        products: [
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "01", "Khutorok Buckwheat 400 g", "Trigo sarraceno Khutorok 400 g", "Grano saraceno Khutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "02", "Khutorok Corn Groats 400 g", "Sémola de maíz Khutorok 400 g", "Semola di mais Khutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "03", "Khutorok Semolina 400 g", "Sémola Khutorok 400 g", "Semolino Khutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "04", "Khutorok Parboiled Rice 400 g", "Arroz precocido Khutorok 400 g", "Riso parboiled Khutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "05", "Khutorok Long-Grain Rice 400 g", "Arroz de grano largo Khutorok 400 g", "Riso a chicco lungo Khutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "06", "Khutorok Round Rice 400 g", "Arroz redondo Khutorok 400 g", "Riso tondo Khutorok 400 g"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-mashed-potato-family-spread",
    name: loc("Khutorok Instant Mashed Potatoes", "Puré de papa instantáneo Khutorok", "Purè di patate istantaneo Khutorok"),
    description: loc(
      "Khutorok instant mashed potatoes. Click through for each flavor pouch.",
      "Puré de papa instantáneo Khutorok. Entre para ver cada sabor.",
      "Purè di patate istantaneo Khutorok. Clicchi per ogni gusto.",
    ),
    cover: cover("hutorok-mashed-potato-family-spread"),
    brand: "Khutorok",
    groups: [
      {
        id: "mash",
        label: loc("Instant mashed potatoes", "Puré instantáneo", "Purè istantaneo"),
        products: [
          item("hutorok-mashed-potato-family-spread", "15_Khutorok_instant_mashed_potatoes", "01", "Khutorok Mash with Mushrooms", "Puré Khutorok con champiñones", "Purè Khutorok ai funghi"),
          item("hutorok-mashed-potato-family-spread", "15_Khutorok_instant_mashed_potatoes", "02", "Khutorok Mash with Fried Onion", "Puré Khutorok con cebolla frita", "Purè Khutorok con cipolla fritta"),
          item("hutorok-mashed-potato-family-spread", "15_Khutorok_instant_mashed_potatoes", "03", "Khutorok Creamy Mash", "Puré cremoso Khutorok", "Purè cremoso Khutorok"),
          item("hutorok-mashed-potato-family-spread", "15_Khutorok_instant_mashed_potatoes", "04", "Khutorok Mash with Meat Gravy", "Puré Khutorok con salsa de carne", "Purè Khutorok con sugo di carne"),
          item("hutorok-mashed-potato-family-spread", "15_Khutorok_instant_mashed_potatoes", "05", "Khutorok Mash with Vegetables", "Puré Khutorok con verduras", "Purè Khutorok con verdure"),
          item("hutorok-mashed-potato-family-spread", "15_Khutorok_instant_mashed_potatoes", "06", "Khutorok Mash with Herbs", "Puré Khutorok con hierbas", "Purè Khutorok alle erbe"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-pilaf-family-feast",
    name: loc("Khutorok Instant Cereals & Pilaf", "Cereales instantáneos y pilaf Khutorok", "Cereali istantanei e pilaf Khutorok"),
    description: loc(
      "Khutorok instant cereal and pilaf boxes. Open for each variety.",
      "Cajas de cereal y pilaf instantáneo Khutorok. Abra para cada variedad.",
      "Scatole di cereali e pilaf istantanei Khutorok. Apra per ciascuna varietà.",
    ),
    cover: cover("hutorok-pilaf-family-feast"),
    brand: "Khutorok",
    groups: [
      {
        id: "pilaf",
        label: loc("Instant cereals", "Cereales instantáneos", "Cereali istantanei"),
        products: [
          item("hutorok-pilaf-family-feast", "16_Khutorok_pilaf", "01", "Khutorok 7-Grain Cereal", "Cereal 7 granos Khutorok", "Cereali 7 grani Khutorok"),
          item("hutorok-pilaf-family-feast", "16_Khutorok_pilaf", "02", "Khutorok 4-Grain Cereal", "Cereal 4 granos Khutorok", "Cereali 4 grani Khutorok"),
          item("hutorok-pilaf-family-feast", "16_Khutorok_pilaf", "03", "Khutorok 3-Grain Cereal", "Cereal 3 granos Khutorok", "Cereali 3 grani Khutorok"),
          item("hutorok-pilaf-family-feast", "16_Khutorok_pilaf", "04", "Khutorok 4-Grain Cereal", "Cereal 4 granos Khutorok", "Cereali 4 grani Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-salt-family-collection",
    name: loc("Khutorok Salt", "Sales Khutorok", "Sali Khutorok"),
    description: loc(
      "Khutorok salt family — extra, iodized and seasoned. Open for individual packs.",
      "Familia de sales Khutorok: extra, yodada y sazonada. Abra para ver cada empaque.",
      "Famiglia di sali Khutorok: extra, iodato e aromatizzato. Apra per ciascuna confezione.",
    ),
    cover: cover("hutorok-salt-family-collection"),
    brand: "Khutorok",
    groups: [
      {
        id: "salt",
        label: loc("Salt", "Sal", "Sale"),
        products: [
          item("hutorok-salt-family-collection", "11_hutorok_salt", "01", "Khutorok Extra Iodized Salt", "Sal extra yodada Khutorok", "Sale extra iodato Khutorok"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "02", "Khutorok Extra Iodized Salt", "Sal extra yodada Khutorok", "Sale extra iodato Khutorok"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "03", "Khutorok Extra Iodized Salt Box", "Sal extra yodada Khutorok en caja", "Sale extra iodato Khutorok in scatola"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "04", "Khutorok Sea Salt with Spices", "Sal marina con especias Khutorok", "Sale marino alle spezie Khutorok"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "05", "Khutorok Sea Salt with Herbs", "Sal marina con hierbas Khutorok", "Sale marino alle erbe Khutorok"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "06", "Khutorok Extra Iodized Salt", "Sal extra yodada Khutorok", "Sale extra iodato Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-sugar-and-baking-soda-showcase",
    name: loc("Khutorok Sugar & Baking Soda", "Azúcar y bicarbonato Khutorok", "Zucchero e bicarbonato Khutorok"),
    description: loc(
      "Khutorok sugar, powdered sugar and baking soda. Click through for each pack.",
      "Azúcar, azúcar glass y bicarbonato Khutorok. Entre para ver cada empaque.",
      "Zucchero, zucchero a velo e bicarbonato Khutorok. Clicchi per ciascuna confezione.",
    ),
    cover: cover("hutorok-sugar-and-baking-soda-showcase"),
    brand: "Khutorok",
    groups: [
      {
        id: "sugar",
        label: loc("Sugar & baking soda", "Azúcar y bicarbonato", "Zucchero e bicarbonato"),
        products: [
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "01", "Khutorok White Sugar", "Azúcar blanca Khutorok", "Zucchero bianco Khutorok"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "02", "Khutorok Sugar Cubes", "Azúcar en cubos Khutorok", "Zucchero in zollette Khutorok"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "03", "Khutorok Sugar Cubes", "Azúcar en cubos Khutorok", "Zucchero in zollette Khutorok"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "04", "Khutorok White Sugar Bag", "Azúcar blanca Khutorok en bolsa", "Zucchero bianco Khutorok in sacco"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "05", "Khutorok Powdered Sugar", "Azúcar glass Khutorok", "Zucchero a velo Khutorok"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "06", "Khutorok Baking Soda", "Bicarbonato Khutorok", "Bicarbonato Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-seasonings-spices-collection",
    name: loc("Khutorok Seasoning Blends", "Mezclas de sazón Khutorok", "Miscele di condimento Khutorok"),
    description: loc(
      "Khutorok seasoning blends. Open the family for potato, meat, fish, pilaf and more.",
      "Mezclas de sazón Khutorok. Abra la familia: papa, carne, pescado, pilaf y más.",
      "Miscele di condimento Khutorok. Apra la famiglia: patate, carne, pesce, pilaf e altro.",
    ),
    cover: cover("hutorok-seasonings-spices-collection"),
    brand: "Khutorok",
    groups: [
      {
        id: "seasonings",
        label: loc("Seasoning blends", "Mezclas de sazón", "Miscele di condimento"),
        products: [
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "01", "Khutorok Seasoning for Vegetables", "Sazón Khutorok para verduras", "Condimento Khutorok per verdure"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "02", "Khutorok Seasoning for Potatoes", "Sazón Khutorok para papa", "Condimento Khutorok per patate"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "03", "Khutorok Seasoning for Chicken", "Sazón Khutorok para pollo", "Condimento Khutorok per pollo"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "04", "Khutorok Seasoning for Meat", "Sazón Khutorok para carne", "Condimento Khutorok per carne"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "05", "Khutorok Seasoning for Fish", "Sazón Khutorok para pescado", "Condimento Khutorok per pesce"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "06", "Khutorok Seasoning for Shashlik", "Sazón Khutorok para shashlik", "Condimento Khutorok per shashlik"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "07", "Khutorok Seasoning for Pilaf", "Sazón Khutorok para pilaf", "Condimento Khutorok per pilaf"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "08", "Khutorok Meat Grill Seasoning", "Sazón Khutorok para parrilla", "Condimento Khutorok per griglia"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "09", "Khutorok Italian Herbs", "Hierbas italianas Khutorok", "Erbe italiane Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-spices-artfully-staged",
    name: loc("Khutorok Spices & Baking Staples", "Especias y repostería Khutorok", "Spezie e pasticceria Khutorok"),
    description: loc(
      "Khutorok baking spices and pantry staples. Click through for pepper, gelatin, vanilla sugar and more.",
      "Especias de horneo y despensa Khutorok. Entre para pimienta, gelatina, azúcar vainilla y más.",
      "Spezie da forno e dispensa Khutorok. Clicchi per pepe, gelatina, zucchero vanigliato e altro.",
    ),
    cover: cover("hutorok-spices-artfully-staged"),
    brand: "Khutorok",
    groups: [
      {
        id: "spices",
        label: loc("Spices & baking", "Especias y repostería", "Spezie e pasticceria"),
        products: [
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "01", "Khutorok Vanilla Sugar", "Azúcar vainilla Khutorok", "Zucchero vanigliato Khutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "02", "Khutorok Bay Leaf", "Laurel Khutorok", "Alloro Khutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "03", "Khutorok Citric Acid", "Ácido cítrico Khutorok", "Acido citrico Khutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "04", "Khutorok Ground Black Pepper", "Pimienta negra molida Khutorok", "Pepe nero macinato Khutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "05", "Khutorok Black Peppercorns", "Pimienta negra en grano Khutorok", "Pepe nero in grani Khutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "06", "Khutorok Baking Powder", "Polvo de hornear Khutorok", "Lievito in polvere Khutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "07", "Khutorok Allspice", "Pimienta de Jamaica Khutorok", "Pimento Khutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "08", "Khutorok Gelatin", "Gelatina Khutorok", "Gelatina Khutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "09", "Khutorok Citric Acid", "Ácido cítrico Khutorok", "Acido citrico Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "pansky-groats-and-rice-family",
    name: loc("Pansky Rice, Groats & Pulses", "Arroz, cereales y legumbres Pansky", "Riso, cereali e legumi Pansky"),
    description: loc(
      "Pansky rice, buckwheat, lentils and bulgur. Open the family for each grain.",
      "Arroz, trigo sarraceno, lentejas y bulgur Pansky. Abra la familia para cada grano.",
      "Riso, grano saraceno, lenticchie e bulgur Pansky. Apra la famiglia per ciascun cereale.",
    ),
    cover: cover("pansky-groats-and-rice-family"),
    brand: "Pansky",
    groups: [
      {
        id: "groats",
        label: loc("Rice, groats & pulses", "Arroz, cereales y legumbres", "Riso, cereali e legumi"),
        products: [
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "01", "Pansky Basmati Rice", "Arroz basmati Pansky", "Riso basmati Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "02", "Pansky Steamed Rice", "Arroz vaporizado Pansky", "Riso vaporizato Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "03", "Pansky Roasted Buckwheat", "Trigo sarraceno tostado Pansky", "Grano saraceno tostato Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "04", "Pansky Jasmine Rice", "Arroz jazmín Pansky", "Riso jasmine Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "05", "Pansky Parboiled Rice", "Arroz precocido Pansky", "Riso parboiled Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "06", "Pansky Steamed Long-Grain Rice", "Arroz largo vaporizado Pansky", "Riso lungo vaporizato Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "07", "Pansky Camrose Rice", "Arroz Camrose Pansky", "Riso Camrose Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "08", "Pansky Rice & Oats", "Arroz y avena Pansky", "Riso e avena Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "09", "Pansky Parboiled Long Rice", "Arroz largo precocido Pansky", "Riso lungo parboiled Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "10", "Pansky Round Steamed Rice", "Arroz redondo vaporizado Pansky", "Riso tondo vaporizato Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "11", "Pansky Wild Rice Blend", "Mezcla de arroz salvaje Pansky", "Miscela di riso selvatico Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "12", "Pansky Green Lentils", "Lentejas verdes Pansky", "Lenticchie verdi Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "13", "Pansky Red Lentils", "Lentejas rojas Pansky", "Lenticchie rosse Pansky"),
          item("pansky-groats-and-rice-family", "18_pansky_groats_1", "14", "Pansky Wheat Bulgur", "Bulgur de trigo Pansky", "Bulgur di grano Pansky"),
        ],
      },
    ],
  },
  {
    slug: "pansky-groats-family-assortment",
    name: loc("Pansky Boxed Groats", "Cereales en caja Pansky", "Cereali in scatola Pansky"),
    description: loc(
      "Pansky boxed rice and groats assortment. Click through for each carton.",
      "Surtido Pansky en cajas de arroz y cereales. Entre para ver cada caja.",
      "Assortimento Pansky in scatola di riso e cereali. Clicchi per ciascuna scatola.",
    ),
    cover: cover("pansky-groats-family-assortment"),
    brand: "Pansky",
    groups: [
      {
        id: "boxed",
        label: loc("Boxed groats", "Cereales en caja", "Cereali in scatola"),
        products: [
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "01", "Pansky Wild Rice Blend", "Mezcla de arroz salvaje Pansky", "Miscela di riso selvatico Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "02", "Pansky Wheat Groats Artek", "Trigo Artek Pansky", "Grano Artek Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "03", "Pansky Steamed Rice", "Arroz vaporizado Pansky", "Riso vaporizato Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "04", "Pansky Roasted Buckwheat", "Trigo sarraceno tostado Pansky", "Grano saraceno tostato Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "05", "Pansky Steamed Rice with Vegetables", "Arroz vaporizado con verduras Pansky", "Riso vaporizato con verdure Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "06", "Pansky Camrose Rice", "Arroz Camrose Pansky", "Riso Camrose Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "07", "Pansky Wheat Bulgur", "Bulgur de trigo Pansky", "Bulgur di grano Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "08", "Pansky Round Steamed Rice", "Arroz redondo vaporizado Pansky", "Riso tondo vaporizato Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "09", "Pansky Couscous", "Cuscús Pansky", "Couscous Pansky"),
          item("pansky-groats-family-assortment", "19_pansky_groats_2", "10", "Pansky Wheat Couscous", "Cuscús de trigo Pansky", "Couscous di grano Pansky"),
        ],
      },
    ],
  },
  {
    slug: "pansky-pasta-and-flour-showcase",
    name: loc("Pansky Pasta & Flour", "Pasta y harina Pansky", "Pasta e farina Pansky"),
    description: loc(
      "Pansky pasta and wheat flour family. Open for individual packs.",
      "Familia de pasta y harina de trigo Pansky. Abra para ver cada empaque.",
      "Famiglia di pasta e farina di grano Pansky. Apra per ciascuna confezione.",
    ),
    cover: cover("pansky-pasta-and-flour-showcase"),
    brand: "Pansky",
    groups: [
      {
        id: "pasta-flour",
        label: loc("Pasta & flour", "Pasta y harina", "Pasta e farina"),
        products: [
          item("pansky-pasta-and-flour-showcase", "20_pansky_pasta_and_flour", "01", "Pansky Vegetable Pasta Horns", "Pasta vegetal Pansky — cuernos", "Pasta vegetale Pansky — cornetti"),
          item("pansky-pasta-and-flour-showcase", "20_pansky_pasta_and_flour", "02", "Pansky Vegetable Pasta Spirals", "Pasta vegetal Pansky — espirales", "Pasta vegetale Pansky — spirali"),
          item("pansky-pasta-and-flour-showcase", "20_pansky_pasta_and_flour", "03", "Pansky Wheat Flour", "Harina de trigo Pansky", "Farina di grano Pansky"),
          item("pansky-pasta-and-flour-showcase", "20_pansky_pasta_and_flour", "04", "Pansky Wheat Flour", "Harina de trigo Pansky", "Farina di grano Pansky"),
          item("pansky-pasta-and-flour-showcase", "20_pansky_pasta_and_flour", "05", "Pansky Wheat Flour", "Harina de trigo Pansky", "Farina di grano Pansky"),
          item("pansky-pasta-and-flour-showcase", "20_pansky_pasta_and_flour", "06", "Pansky Wheat Flour", "Harina de trigo Pansky", "Farina di grano Pansky"),
        ],
      },
    ],
  },
  {
    slug: "golden-grain-pasta-family-showcase",
    name: loc("Golden Grain Pasta", "Pasta Golden Grain", "Pasta Golden Grain"),
    description: loc(
      "Golden Grain pasta family. Click through for shells, feathers, spaghetti and vermicelli.",
      "Familia de pasta Golden Grain. Entre para conchas, plumas, spaghetti y fideos.",
      "Famiglia di pasta Golden Grain. Clicchi per conchiglie, penne, spaghetti e vermicelli.",
    ),
    cover: cover("golden-grain-pasta-family-showcase"),
    brand: "Golden Grain",
    groups: [
      {
        id: "pasta",
        label: loc("Pasta", "Pasta", "Pasta"),
        products: [
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "01", "Golden Grain Shells", "Conchas Golden Grain", "Conchiglie Golden Grain"),
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "02", "Golden Grain Feathers", "Penne Golden Grain", "Penne Golden Grain"),
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "03", "Golden Grain Horns", "Cuernos Golden Grain", "Cornetti Golden Grain"),
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "04", "Golden Grain Spaghetti", "Spaghetti Golden Grain", "Spaghetti Golden Grain"),
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "05", "Golden Grain Spirals", "Espirales Golden Grain", "Spirali Golden Grain"),
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "06", "Golden Grain Pasta", "Pasta Golden Grain", "Pasta Golden Grain"),
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "07", "Golden Grain Pasta", "Pasta Golden Grain", "Pasta Golden Grain"),
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "08", "Golden Grain Vermicelli", "Fideos Golden Grain", "Vermicelli Golden Grain"),
          item("golden-grain-pasta-family-showcase", "22_zolote_zerno_pasta_products", "09", "Golden Grain Vermicelli", "Fideos Golden Grain", "Vermicelli Golden Grain"),
        ],
      },
    ],
  },
  {
    slug: "golden-grain-groats-family-collection",
    name: loc("Golden Grain Groats & Staples", "Cereales y despensa Golden Grain", "Cereali e dispensa Golden Grain"),
    description: loc(
      "Golden Grain groats, rice, peas and sugar. Open the family for each bag.",
      "Cereales, arroz, chícharos y azúcar Golden Grain. Abra la familia para cada bolsa.",
      "Cereali, riso, piselli e zucchero Golden Grain. Apra la famiglia per ciascun sacco.",
    ),
    cover: cover("golden-grain-groats-family-collection"),
    brand: "Golden Grain",
    groups: [
      {
        id: "groats",
        label: loc("Groats & staples", "Cereales y básicos", "Cereali e base"),
        products: [
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "01", "Golden Grain Buckwheat", "Trigo sarraceno Golden Grain", "Grano saraceno Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "02", "Golden Grain Barley Artek", "Cebada Artek Golden Grain", "Orzo Artek Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "03", "Golden Grain Semolina", "Sémola Golden Grain", "Semolino Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "04", "Golden Grain Rice", "Arroz Golden Grain", "Riso Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "05", "Golden Grain Millet", "Mijo Golden Grain", "Miglio Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "06", "Golden Grain Wheat Groats", "Trigo partido Golden Grain", "Grano spezzato Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "07", "Golden Grain Rice", "Arroz Golden Grain", "Riso Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "08", "Golden Grain Wheat Groats", "Trigo partido Golden Grain", "Grano spezzato Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "09", "Golden Grain Peas", "Chícharos Golden Grain", "Piselli Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "10", "Golden Grain Rice", "Arroz Golden Grain", "Riso Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "11", "Golden Grain Millet", "Mijo Golden Grain", "Miglio Golden Grain"),
          item("golden-grain-groats-family-collection", "21_zolote_zerno_groats", "12", "Golden Grain Sugar", "Azúcar Golden Grain", "Zucchero Golden Grain"),
        ],
      },
    ],
  },
  {
    slug: "golden-grain-flour-family-showcase",
    name: loc("Golden Grain Wheat Flour", "Harina de trigo Golden Grain", "Farina di grano Golden Grain"),
    description: loc(
      "Golden Grain wheat flour family. Click through for each pack size.",
      "Familia de harina de trigo Golden Grain. Entre para ver cada tamaño.",
      "Famiglia di farina di grano Golden Grain. Clicchi per ciascun formato.",
    ),
    cover: cover("golden-grain-flour-family-showcase"),
    brand: "Golden Grain",
    groups: [
      {
        id: "flour",
        label: loc("Wheat flour", "Harina de trigo", "Farina di grano"),
        products: [
          item("golden-grain-flour-family-showcase", "23_zolote_zerno_flour", "01", "Golden Grain Wheat Flour", "Harina de trigo Golden Grain", "Farina di grano Golden Grain"),
          item("golden-grain-flour-family-showcase", "23_zolote_zerno_flour", "02", "Golden Grain Wheat Flour", "Harina de trigo Golden Grain", "Farina di grano Golden Grain"),
          item("golden-grain-flour-family-showcase", "23_zolote_zerno_flour", "03", "Golden Grain Wheat Flour", "Harina de trigo Golden Grain", "Farina di grano Golden Grain"),
        ],
      },
    ],
  },
  {
    slug: "kitto-soy-sauce-family-spread",
    name: loc("Kitto Soy & Asian Sauces", "Salsas de soya y asiáticas Kitto", "Salse di soia e asiatiche Kitto"),
    description: loc(
      "Kitto soy and Asian sauces. Open the family for classic, teriyaki, chili and more.",
      "Salsas de soya y asiáticas Kitto. Abra la familia: clásica, teriyaki, chile y más.",
      "Salse di soia e asiatiche Kitto. Apra la famiglia: classica, teriyaki, chili e altro.",
    ),
    cover: cover("kitto-soy-sauce-family-spread"),
    brand: "Kitto",
    groups: [
      {
        id: "soy",
        label: loc("Soy & Asian sauces", "Salsas de soya y asiáticas", "Salse di soia e asiatiche"),
        products: [
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "01", "Kitto Classic Soy Sauce", "Salsa de soya clásica Kitto", "Salsa di soia classica Kitto"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "02", "Kitto Teriyaki Sauce", "Salsa teriyaki Kitto", "Salsa teriyaki Kitto"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "03", "Kitto Unagi Sauce", "Salsa unagi Kitto", "Salsa unagi Kitto"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "04", "Kitto Sushi Soy Sauce", "Salsa de soya para sushi Kitto", "Salsa di soia per sushi Kitto"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "05", "Kitto Chili Soy Sauce", "Salsa de soya con chile Kitto", "Salsa di soia al chili Kitto"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "06", "Kitto Classic Soy Sauce 1 L", "Salsa de soya clásica Kitto 1 L", "Salsa di soia classica Kitto 1 L"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "07", "Kitto Sweet Chili Sauce", "Salsa chile dulce Kitto", "Salsa chili dolce Kitto"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "08", "Kitto Sweet & Sour Sauce", "Salsa agridulce Kitto", "Salsa agrodolce Kitto"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "09", "Kitto Mushroom Soy Sauce", "Salsa de soya con champiñón Kitto", "Salsa di soia ai funghi Kitto"),
          item("kitto-soy-sauce-family-spread", "24_kitto_soy_sauces", "10", "Kitto Ginger Soy Sauce", "Salsa de soya con jengibre Kitto", "Salsa di soia allo zenzero Kitto"),
        ],
      },
    ],
  },
  {
    slug: "kitto-specialty-sauces-elegant-trio",
    name: loc("Kitto Specialty Sauces", "Salsas especiales Kitto", "Salse speciali Kitto"),
    description: loc(
      "Kitto specialty sauces — cranberry, balsamic and pomegranate.",
      "Salsas especiales Kitto: arándano, balsámico y granada.",
      "Salse speciali Kitto: mirtillo rosso, balsamico e melograno.",
    ),
    cover: cover("kitto-specialty-sauces-elegant-trio"),
    brand: "Kitto",
    groups: [
      {
        id: "specialty",
        label: loc("Specialty sauces", "Salsas especiales", "Salse speciali"),
        products: [
          item("kitto-specialty-sauces-elegant-trio", "25_kitto_specialty_sauces", "01", "Kitto Cranberry Sauce", "Salsa de arándano Kitto", "Salsa al mirtillo rosso Kitto"),
          item("kitto-specialty-sauces-elegant-trio", "25_kitto_specialty_sauces", "02", "Kitto Balsamic Dressing", "Aderezo balsámico Kitto", "Condimento balsamico Kitto"),
          item("kitto-specialty-sauces-elegant-trio", "25_kitto_specialty_sauces", "03", "Kitto Pomegranate Sauce", "Salsa de granada Kitto", "Salsa al melograno Kitto"),
        ],
      },
    ],
  },
  {
    slug: "fitto-soup-family-freshly-served",
    name: loc("Fitto Instant Soups & Porridges", "Sopas y gachas instantáneas Fitto", "Zuppe e porridge istantanei Fitto"),
    description: loc(
      "Fitto soups, cups, oatmeal and savory porridges. Click through for every flavor.",
      "Sopas, vasos, avena y gachas saladas Fitto. Entre para ver cada sabor.",
      "Zuppe, coppette, avena e porridge salati Fitto. Clicchi per ogni gusto.",
    ),
    cover: cover("fitto-soup-family-freshly-served"),
    brand: "Fitto",
    groups: [
      {
        id: "soups",
        label: loc("Instant soups", "Sopas instantáneas", "Zuppe istantanee"),
        products: [
          item("fitto-soup-family-freshly-served", "26_fitto_instant_soups", "01", "Fitto Pumpkin Cream Soup", "Crema de calabaza Fitto", "Crema di zucca Fitto"),
          item("fitto-soup-family-freshly-served", "26_fitto_instant_soups", "02", "Fitto Pea Soup", "Sopa de chícharo Fitto", "Zuppa di piselli Fitto"),
          item("fitto-soup-family-freshly-served", "26_fitto_instant_soups", "03", "Fitto Mushroom Cream Soup", "Crema de champiñón Fitto", "Crema di funghi Fitto"),
          item("fitto-soup-family-freshly-served", "26_fitto_instant_soups", "04", "Fitto Cheese Cream Soup", "Crema de queso Fitto", "Crema di formaggio Fitto"),
        ],
      },
      {
        id: "cups",
        label: loc("Instant cups", "Vasos instantáneos", "Coppette istantanee"),
        products: [
          item("fitto-soup-family-freshly-served", "27_fitto_instant_food", "01", "Fitto Pea Cream Soup Cup", "Vaso crema de chícharo Fitto", "Coppetta crema di piselli Fitto"),
          item("fitto-soup-family-freshly-served", "27_fitto_instant_food", "02", "Fitto Mushroom Cream Soup Cup", "Vaso crema de champiñón Fitto", "Coppetta crema di funghi Fitto"),
          item("fitto-soup-family-freshly-served", "27_fitto_instant_food", "03", "Fitto Cheese Cream Soup Cup", "Vaso crema de queso Fitto", "Coppetta crema di formaggio Fitto"),
          item("fitto-soup-family-freshly-served", "27_fitto_instant_food", "04", "Fitto Buckwheat Cup", "Vaso de trigo sarraceno Fitto", "Coppetta di grano saraceno Fitto"),
          item("fitto-soup-family-freshly-served", "27_fitto_instant_food", "05", "Fitto Pea Puree Cup", "Vaso de puré de chícharo Fitto", "Coppetta di purè di piselli Fitto"),
          item("fitto-soup-family-freshly-served", "27_fitto_instant_food", "06", "Fitto Buckwheat Kasha Cup", "Vaso de kasha Fitto", "Coppetta di kasha Fitto"),
        ],
      },
      {
        id: "oatmeal",
        label: loc("Instant oatmeal", "Avena instantánea", "Avena istantanea"),
        products: [
          item("fitto-soup-family-freshly-served", "28_fitto_instant_oatmeal", "01", "Fitto Oatmeal Strawberry", "Avena Fitto fresa", "Avena Fitto fragola"),
          item("fitto-soup-family-freshly-served", "28_fitto_instant_oatmeal", "02", "Fitto Oatmeal Blueberry", "Avena Fitto arándano", "Avena Fitto mirtillo"),
          item("fitto-soup-family-freshly-served", "28_fitto_instant_oatmeal", "03", "Fitto Oatmeal Banana", "Avena Fitto banano", "Avena Fitto banana"),
          item("fitto-soup-family-freshly-served", "28_fitto_instant_oatmeal", "04", "Fitto Oatmeal Strawberry Chocolate", "Avena Fitto fresa chocolate", "Avena Fitto fragola cioccolato"),
          item("fitto-soup-family-freshly-served", "28_fitto_instant_oatmeal", "05", "Fitto Oatmeal Chocolate", "Avena Fitto chocolate", "Avena Fitto cioccolato"),
          item("fitto-soup-family-freshly-served", "28_fitto_instant_oatmeal", "06", "Fitto Oatmeal Classic", "Avena Fitto clásica", "Avena Fitto classica"),
          item("fitto-soup-family-freshly-served", "28_fitto_instant_oatmeal", "07", "Fitto Oatmeal Apple Cinnamon", "Avena Fitto manzana canela", "Avena Fitto mela cannella"),
        ],
      },
      {
        id: "savory",
        label: loc("Savory porridge", "Gachas saladas", "Porridge salato"),
        products: [
          item("fitto-soup-family-freshly-served", "29_fitto_salty_porridge", "01", "Fitto Pea Puree", "Puré de chícharo Fitto", "Purè di piselli Fitto"),
          item("fitto-soup-family-freshly-served", "29_fitto_salty_porridge", "02", "Fitto Soup Porridge", "Gacha-sopa Fitto", "Porridge-zuppa Fitto"),
          item("fitto-soup-family-freshly-served", "29_fitto_salty_porridge", "03", "Fitto Pilaf", "Pilaf Fitto", "Pilaf Fitto"),
          item("fitto-soup-family-freshly-served", "29_fitto_salty_porridge", "04", "Fitto Buckwheat Kasha", "Kasha de trigo sarraceno Fitto", "Kasha di grano saraceno Fitto"),
        ],
      },
    ],
  },
];

export function getStarGroceryFamily(slug: string) {
  return starGroceryFamilies.find((family) => family.slug === slug);
}

export const starGroceryFamilyCovers: (CatalogProduct & { href: string })[] = starGroceryFamilies.map(
  (family) => ({
    slug: family.slug,
    name: family.name,
    description: family.description,
    image: family.cover,
    imageFit: "cover",
    details: [
      loc(family.brand, family.brand, family.brand),
      loc("Star Grocery", "Star Grocery", "Star Grocery"),
      loc("View flavors", "Ver sabores", "Vedi i gusti"),
    ],
    href: `/portfolio/star-grocery/${family.slug}`,
  }),
);

/**
 * Temporarily unavailable product families kept in storage.
 * Khutorok canned meats and pâtés are currently not available for export.
 */
export const unavailableStarGroceryFamilies: StarGroceryFamily[] = [
  {
    slug: "hutorok-canned-meat-family-collection",
    name: loc("Khutorok Canned Meat & Pâtés", "Carnes enlatadas y patés Khutorok", "Carni in scatola e paté Khutorok"),
    description: loc(
      "Khutorok canned meat and pâtés. Click through for each variety.",
      "Carnes enlatadas y patés Khutorok. Entre para ver cada variedad.",
      "Carni in scatola e paté Khutorok. Clicchi per ciascuna varietà.",
    ),
    cover: cover("hutorok-canned-meat-family-collection"),
    brand: "Khutorok",
    groups: [
      {
        id: "meat",
        label: loc("Canned meat & pâté", "Carnes enlatadas y paté", "Carni in scatola e paté"),
        products: [
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "01", "Khutorok Canned Meat", "Carne enlatada Khutorok", "Carne in scatola Khutorok"),
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "02", "Khutorok Lard", "Manteca Khutorok", "Strutto Khutorok"),
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "03", "Khutorok Liver Pâté", "Paté de hígado Khutorok", "Paté di fegato Khutorok"),
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "04", "Khutorok Meat Pâté", "Paté de carne Khutorok", "Paté di carne Khutorok"),
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "05", "Khutorok Liver Pâté", "Paté de hígado Khutorok", "Paté di fegato Khutorok"),
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "06", "Khutorok Poultry Pâté with Mushrooms", "Paté de ave con champiñones Khutorok", "Paté di pollame ai funghi Khutorok"),
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "07", "Khutorok Poultry Pâté with Pepper", "Paté de ave con pimiento Khutorok", "Paté di pollame al peperone Khutorok"),
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "08", "Khutorok Chicken Pâté", "Paté de pollo Khutorok", "Paté di pollo Khutorok"),
          item("hutorok-canned-meat-family-collection", "17_Khutorok_canned_meat", "09", "Khutorok Poultry Pâté", "Paté de ave Khutorok", "Paté di pollame Khutorok"),
        ],
      },
    ],
  },
];

