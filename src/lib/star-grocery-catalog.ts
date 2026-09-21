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
    name: loc("La Pasta Family Collection Showcase", "La Pasta Family Collection Showcase", "La Pasta Family Collection Showcase"),
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
    name: loc("La Pasta premium assortment showcase", "La Pasta premium assortment showcase", "La Pasta premium assortment showcase"),
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
    name: loc("La Pasta bread assortment showcase", "La Pasta bread assortment showcase", "La Pasta bread assortment showcase"),
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
    name: loc("La Pasta bread and flour collection", "La Pasta bread and flour collection", "La Pasta bread and flour collection"),
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
    name: loc("Perfetto Pasta Family Hero", "Perfetto Pasta Family Hero", "Perfetto Pasta Family Hero"),
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
    name: loc("Hutorok Pasta Family Showcase", "Hutorok Pasta Family Showcase", "Hutorok Pasta Family Showcase"),
    description: loc(
      "Hutorok pasta family, 800 g range. Click through for individual shapes.",
      "Familia de pasta Hutorok, línea de 800 g. Entre para ver cada formato.",
      "Famiglia di pasta Hutorok, linea da 800 g. Clicchi per ogni formato.",
    ),
    cover: cover("hutorok-pasta-family-showcase"),
    brand: "Hutorok",
    groups: [
      {
        id: "pasta",
        label: loc("Hutorok pasta", "Pasta Hutorok", "Pasta Hutorok"),
        products: [
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "01", "Hutorok Shells", "Conchas Hutorok", "Conchiglie Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "02", "Hutorok Elbows", "Coditos Hutorok", "Gomiti Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "03", "Hutorok Vermicelli", "Fideos Hutorok", "Vermicelli Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "04", "Hutorok Pearls", "Perlas Hutorok", "Perline Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "05", "Hutorok Feathers", "Penne Hutorok", "Penne Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "06", "Hutorok Horns", "Cuernos Hutorok", "Cornetti Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "07", "Hutorok Shells", "Conchas Hutorok", "Conchiglie Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "08", "Hutorok Spirals", "Espirales Hutorok", "Spirali Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "09", "Hutorok Noodles", "Fideos Hutorok", "Tagliolini Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "10", "Hutorok Spaghetti", "Spaghetti Hutorok", "Spaghetti Hutorok"),
          item("hutorok-pasta-family-showcase", "08_hutorok_pasta_800g", "11", "Hutorok Spaghetti", "Spaghetti Hutorok", "Spaghetti Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-flour-family-styled-for-baking",
    name: loc("Hutorok flour family, styled for baking", "Hutorok flour family, styled for baking", "Hutorok flour family, styled for baking"),
    description: loc(
      "Hutorok flours and pizza mixes. Open the family for each SKU.",
      "Harinas y mezclas para pizza Hutorok. Abra la familia para ver cada SKU.",
      "Farine e miscele per pizza Hutorok. Apra la famiglia per ciascun SKU.",
    ),
    cover: cover("hutorok-flour-family-styled-for-baking"),
    brand: "Hutorok",
    groups: [
      {
        id: "flour",
        label: loc("Flours", "Harinas", "Farine"),
        products: [
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "01", "Hutorok Corn Flour", "Harina de maíz Hutorok", "Farina di mais Hutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "02", "Hutorok Rye Flour", "Harina de centeno Hutorok", "Farina di segale Hutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "03", "Hutorok Pizza Mix", "Mezcla para pizza Hutorok", "Miscela per pizza Hutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "04", "Hutorok Pizza Mix Pack", "Pack mezcla pizza Hutorok", "Pack miscela pizza Hutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "05", "Hutorok Wheat Flour", "Harina de trigo Hutorok", "Farina di grano Hutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "06", "Hutorok Wheat Flour", "Harina de trigo Hutorok", "Farina di grano Hutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "07", "Hutorok Wheat Flour", "Harina de trigo Hutorok", "Farina di grano Hutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "08", "Hutorok Wheat Flour", "Harina de trigo Hutorok", "Farina di grano Hutorok"),
          item("hutorok-flour-family-styled-for-baking", "07_hutorok_flour", "09", "Hutorok Wheat Flour", "Harina de trigo Hutorok", "Farina di grano Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-groats-family-collection",
    name: loc("Hutorok Groats Family Collection", "Hutorok Groats Family Collection", "Hutorok Groats Family Collection"),
    description: loc(
      "Hutorok groats and rice family. Click through for buckwheat, rice, millet and more.",
      "Familia de cereales y arroz Hutorok. Entre para trigo sarraceno, arroz, mijo y más.",
      "Famiglia di cereali e riso Hutorok. Clicchi per grano saraceno, riso, miglio e altro.",
    ),
    cover: cover("hutorok-groats-family-collection"),
    brand: "Hutorok",
    groups: [
      {
        id: "groats",
        label: loc("Groats & rice", "Cereales y arroz", "Cereali e riso"),
        products: [
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "01", "Hutorok Corn Groats", "Sémola de maíz Hutorok", "Semola di mais Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "02", "Hutorok Roasted Buckwheat", "Trigo sarraceno tostado Hutorok", "Grano saraceno tostato Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "03", "Hutorok Semolina", "Sémola Hutorok", "Semolino Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "04", "Hutorok Barley Groats", "Cebada Hutorok", "Orzo perlato Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "05", "Hutorok Millet", "Mijo Hutorok", "Miglio Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "06", "Hutorok Wheat Groats", "Trigo partido Hutorok", "Grano spezzato Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "07", "Hutorok Bulgur", "Bulgur Hutorok", "Bulgur Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "08", "Hutorok Millet", "Mijo Hutorok", "Miglio Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "09", "Hutorok Buckwheat", "Trigo sarraceno Hutorok", "Grano saraceno Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "10", "Hutorok Parboiled Rice", "Arroz precocido Hutorok", "Riso parboiled Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "11", "Hutorok Long-Grain Rice", "Arroz de grano largo Hutorok", "Riso a chicco lungo Hutorok"),
          item("hutorok-groats-family-collection", "09_hutorok_groats_800g", "12", "Hutorok Round Rice", "Arroz redondo Hutorok", "Riso tondo Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-groats-family-collection-400g",
    name: loc("Hutorok Groats Family Collection 400 g", "Hutorok Groats Family Collection 400 g", "Hutorok Groats Family Collection 400 g"),
    description: loc(
      "Hutorok groats in the smaller 400 g family. Open for individual packs.",
      "Cereales Hutorok en la familia de 400 g. Abra para ver empaques individuales.",
      "Cereali Hutorok nella famiglia da 400 g. Apra per le confezioni individuali.",
    ),
    cover: cover("hutorok-groats-family-collection-400g"),
    brand: "Hutorok",
    groups: [
      {
        id: "groats-400",
        label: loc("400 g groats", "Cereales 400 g", "Cereali 400 g"),
        products: [
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "01", "Hutorok Buckwheat 400 g", "Trigo sarraceno Hutorok 400 g", "Grano saraceno Hutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "02", "Hutorok Corn Groats 400 g", "Sémola de maíz Hutorok 400 g", "Semola di mais Hutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "03", "Hutorok Semolina 400 g", "Sémola Hutorok 400 g", "Semolino Hutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "04", "Hutorok Parboiled Rice 400 g", "Arroz precocido Hutorok 400 g", "Riso parboiled Hutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "05", "Hutorok Long-Grain Rice 400 g", "Arroz de grano largo Hutorok 400 g", "Riso a chicco lungo Hutorok 400 g"),
          item("hutorok-groats-family-collection-400g", "10_hutorok_groats_400g", "06", "Hutorok Round Rice 400 g", "Arroz redondo Hutorok 400 g", "Riso tondo Hutorok 400 g"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-mashed-potato-family-spread",
    name: loc("Hutorok mashed potato family spread", "Hutorok mashed potato family spread", "Hutorok mashed potato family spread"),
    description: loc(
      "Hutorok instant mashed potatoes. Click through for each flavor pouch.",
      "Puré de papa instantáneo Hutorok. Entre para ver cada sabor.",
      "Purè di patate istantaneo Hutorok. Clicchi per ogni gusto.",
    ),
    cover: cover("hutorok-mashed-potato-family-spread"),
    brand: "Hutorok",
    groups: [
      {
        id: "mash",
        label: loc("Instant mashed potatoes", "Puré instantáneo", "Purè istantaneo"),
        products: [
          item("hutorok-mashed-potato-family-spread", "15_hutorok_instant_mashed_potatoes", "01", "Hutorok Mash with Mushrooms", "Puré Hutorok con champiñones", "Purè Hutorok ai funghi"),
          item("hutorok-mashed-potato-family-spread", "15_hutorok_instant_mashed_potatoes", "02", "Hutorok Mash with Fried Onion", "Puré Hutorok con cebolla frita", "Purè Hutorok con cipolla fritta"),
          item("hutorok-mashed-potato-family-spread", "15_hutorok_instant_mashed_potatoes", "03", "Hutorok Creamy Mash", "Puré cremoso Hutorok", "Purè cremoso Hutorok"),
          item("hutorok-mashed-potato-family-spread", "15_hutorok_instant_mashed_potatoes", "04", "Hutorok Mash with Meat Gravy", "Puré Hutorok con salsa de carne", "Purè Hutorok con sugo di carne"),
          item("hutorok-mashed-potato-family-spread", "15_hutorok_instant_mashed_potatoes", "05", "Hutorok Mash with Vegetables", "Puré Hutorok con verduras", "Purè Hutorok con verdure"),
          item("hutorok-mashed-potato-family-spread", "15_hutorok_instant_mashed_potatoes", "06", "Hutorok Mash with Herbs", "Puré Hutorok con hierbas", "Purè Hutorok alle erbe"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-pilaf-family-feast",
    name: loc("Hutorok pilaf family feast", "Hutorok pilaf family feast", "Hutorok pilaf family feast"),
    description: loc(
      "Hutorok instant cereal and pilaf boxes. Open for each variety.",
      "Cajas de cereal y pilaf instantáneo Hutorok. Abra para cada variedad.",
      "Scatole di cereali e pilaf istantanei Hutorok. Apra per ciascuna varietà.",
    ),
    cover: cover("hutorok-pilaf-family-feast"),
    brand: "Hutorok",
    groups: [
      {
        id: "pilaf",
        label: loc("Instant cereals", "Cereales instantáneos", "Cereali istantanei"),
        products: [
          item("hutorok-pilaf-family-feast", "16_hutorok_pilaf", "01", "Hutorok 7-Grain Cereal", "Cereal 7 granos Hutorok", "Cereali 7 grani Hutorok"),
          item("hutorok-pilaf-family-feast", "16_hutorok_pilaf", "02", "Hutorok 4-Grain Cereal", "Cereal 4 granos Hutorok", "Cereali 4 grani Hutorok"),
          item("hutorok-pilaf-family-feast", "16_hutorok_pilaf", "03", "Hutorok 3-Grain Cereal", "Cereal 3 granos Hutorok", "Cereali 3 grani Hutorok"),
          item("hutorok-pilaf-family-feast", "16_hutorok_pilaf", "04", "Hutorok 4-Grain Cereal", "Cereal 4 granos Hutorok", "Cereali 4 grani Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-canned-meat-family-collection",
    name: loc("Hutorok Canned Meat Family Collection", "Hutorok Canned Meat Family Collection", "Hutorok Canned Meat Family Collection"),
    description: loc(
      "Hutorok canned meat and pâtés. Click through for each variety.",
      "Carnes enlatadas y patés Hutorok. Entre para ver cada variedad.",
      "Carni in scatola e paté Hutorok. Clicchi per ciascuna varietà.",
    ),
    cover: cover("hutorok-canned-meat-family-collection"),
    brand: "Hutorok",
    groups: [
      {
        id: "meat",
        label: loc("Canned meat & pâté", "Carnes enlatadas y paté", "Carni in scatola e paté"),
        products: [
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "01", "Hutorok Canned Meat", "Carne enlatada Hutorok", "Carne in scatola Hutorok"),
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "02", "Hutorok Lard", "Manteca Hutorok", "Strutto Hutorok"),
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "03", "Hutorok Liver Pâté", "Paté de hígado Hutorok", "Paté di fegato Hutorok"),
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "04", "Hutorok Meat Pâté", "Paté de carne Hutorok", "Paté di carne Hutorok"),
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "05", "Hutorok Liver Pâté", "Paté de hígado Hutorok", "Paté di fegato Hutorok"),
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "06", "Hutorok Poultry Pâté with Mushrooms", "Paté de ave con champiñones Hutorok", "Paté di pollame ai funghi Hutorok"),
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "07", "Hutorok Poultry Pâté with Pepper", "Paté de ave con pimiento Hutorok", "Paté di pollame al peperone Hutorok"),
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "08", "Hutorok Chicken Pâté", "Paté de pollo Hutorok", "Paté di pollo Hutorok"),
          item("hutorok-canned-meat-family-collection", "17_hutorok_canned_meat", "09", "Hutorok Poultry Pâté", "Paté de ave Hutorok", "Paté di pollame Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-salt-family-collection",
    name: loc("Hutorok salt family collection", "Hutorok salt family collection", "Hutorok salt family collection"),
    description: loc(
      "Hutorok salt family — extra, iodized and seasoned. Open for individual packs.",
      "Familia de sales Hutorok: extra, yodada y sazonada. Abra para ver cada empaque.",
      "Famiglia di sali Hutorok: extra, iodato e aromatizzato. Apra per ciascuna confezione.",
    ),
    cover: cover("hutorok-salt-family-collection"),
    brand: "Hutorok",
    groups: [
      {
        id: "salt",
        label: loc("Salt", "Sal", "Sale"),
        products: [
          item("hutorok-salt-family-collection", "11_hutorok_salt", "01", "Hutorok Extra Iodized Salt", "Sal extra yodada Hutorok", "Sale extra iodato Hutorok"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "02", "Hutorok Extra Iodized Salt", "Sal extra yodada Hutorok", "Sale extra iodato Hutorok"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "03", "Hutorok Extra Iodized Salt Box", "Sal extra yodada Hutorok en caja", "Sale extra iodato Hutorok in scatola"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "04", "Hutorok Sea Salt with Spices", "Sal marina con especias Hutorok", "Sale marino alle spezie Hutorok"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "05", "Hutorok Sea Salt with Herbs", "Sal marina con hierbas Hutorok", "Sale marino alle erbe Hutorok"),
          item("hutorok-salt-family-collection", "11_hutorok_salt", "06", "Hutorok Extra Iodized Salt", "Sal extra yodada Hutorok", "Sale extra iodato Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-sugar-and-baking-soda-showcase",
    name: loc("Hutorok Sugar and Baking Soda Showcase", "Hutorok Sugar and Baking Soda Showcase", "Hutorok Sugar and Baking Soda Showcase"),
    description: loc(
      "Hutorok sugar, powdered sugar and baking soda. Click through for each pack.",
      "Azúcar, azúcar glass y bicarbonato Hutorok. Entre para ver cada empaque.",
      "Zucchero, zucchero a velo e bicarbonato Hutorok. Clicchi per ciascuna confezione.",
    ),
    cover: cover("hutorok-sugar-and-baking-soda-showcase"),
    brand: "Hutorok",
    groups: [
      {
        id: "sugar",
        label: loc("Sugar & baking soda", "Azúcar y bicarbonato", "Zucchero e bicarbonato"),
        products: [
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "01", "Hutorok White Sugar", "Azúcar blanca Hutorok", "Zucchero bianco Hutorok"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "02", "Hutorok Sugar Cubes", "Azúcar en cubos Hutorok", "Zucchero in zollette Hutorok"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "03", "Hutorok Sugar Cubes", "Azúcar en cubos Hutorok", "Zucchero in zollette Hutorok"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "04", "Hutorok White Sugar Bag", "Azúcar blanca Hutorok en bolsa", "Zucchero bianco Hutorok in sacco"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "05", "Hutorok Powdered Sugar", "Azúcar glass Hutorok", "Zucchero a velo Hutorok"),
          item("hutorok-sugar-and-baking-soda-showcase", "12_hutorok_sugar_and_soda", "06", "Hutorok Baking Soda", "Bicarbonato Hutorok", "Bicarbonato Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-seasonings-spices-collection",
    name: loc("Hutorok Seasonings & Spices Collection", "Hutorok Seasonings & Spices Collection", "Hutorok Seasonings & Spices Collection"),
    description: loc(
      "Hutorok seasoning blends. Open the family for potato, meat, fish, pilaf and more.",
      "Mezclas de sazón Hutorok. Abra la familia: papa, carne, pescado, pilaf y más.",
      "Miscele di condimento Hutorok. Apra la famiglia: patate, carne, pesce, pilaf e altro.",
    ),
    cover: cover("hutorok-seasonings-spices-collection"),
    brand: "Hutorok",
    groups: [
      {
        id: "seasonings",
        label: loc("Seasoning blends", "Mezclas de sazón", "Miscele di condimento"),
        products: [
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "01", "Hutorok Seasoning for Vegetables", "Sazón Hutorok para verduras", "Condimento Hutorok per verdure"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "02", "Hutorok Seasoning for Potatoes", "Sazón Hutorok para papa", "Condimento Hutorok per patate"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "03", "Hutorok Seasoning for Chicken", "Sazón Hutorok para pollo", "Condimento Hutorok per pollo"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "04", "Hutorok Seasoning for Meat", "Sazón Hutorok para carne", "Condimento Hutorok per carne"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "05", "Hutorok Seasoning for Fish", "Sazón Hutorok para pescado", "Condimento Hutorok per pesce"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "06", "Hutorok Seasoning for Shashlik", "Sazón Hutorok para shashlik", "Condimento Hutorok per shashlik"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "07", "Hutorok Seasoning for Pilaf", "Sazón Hutorok para pilaf", "Condimento Hutorok per pilaf"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "08", "Hutorok Meat Grill Seasoning", "Sazón Hutorok para parrilla", "Condimento Hutorok per griglia"),
          item("hutorok-seasonings-spices-collection", "13_hutorok_seasonings_spices_1", "09", "Hutorok Italian Herbs", "Hierbas italianas Hutorok", "Erbe italiane Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "hutorok-spices-artfully-staged",
    name: loc("Hutorok spices, artfully staged", "Hutorok spices, artfully staged", "Hutorok spices, artfully staged"),
    description: loc(
      "Hutorok baking spices and pantry staples. Click through for pepper, gelatin, vanilla sugar and more.",
      "Especias de horneo y despensa Hutorok. Entre para pimienta, gelatina, azúcar vainilla y más.",
      "Spezie da forno e dispensa Hutorok. Clicchi per pepe, gelatina, zucchero vanigliato e altro.",
    ),
    cover: cover("hutorok-spices-artfully-staged"),
    brand: "Hutorok",
    groups: [
      {
        id: "spices",
        label: loc("Spices & baking", "Especias y repostería", "Spezie e pasticceria"),
        products: [
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "01", "Hutorok Vanilla Sugar", "Azúcar vainilla Hutorok", "Zucchero vanigliato Hutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "02", "Hutorok Bay Leaf", "Laurel Hutorok", "Alloro Hutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "03", "Hutorok Citric Acid", "Ácido cítrico Hutorok", "Acido citrico Hutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "04", "Hutorok Ground Black Pepper", "Pimienta negra molida Hutorok", "Pepe nero macinato Hutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "05", "Hutorok Black Peppercorns", "Pimienta negra en grano Hutorok", "Pepe nero in grani Hutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "06", "Hutorok Baking Powder", "Polvo de hornear Hutorok", "Lievito in polvere Hutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "07", "Hutorok Allspice", "Pimienta de Jamaica Hutorok", "Pimento Hutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "08", "Hutorok Gelatin", "Gelatina Hutorok", "Gelatina Hutorok"),
          item("hutorok-spices-artfully-staged", "14_hutorok_seasonings_spices_2", "09", "Hutorok Citric Acid", "Ácido cítrico Hutorok", "Acido citrico Hutorok"),
        ],
      },
    ],
  },
  {
    slug: "pansky-groats-and-rice-family",
    name: loc("Pansky Groats and Rice Family", "Pansky Groats and Rice Family", "Pansky Groats and Rice Family"),
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
    name: loc("Pansky groats family assortment", "Pansky groats family assortment", "Pansky groats family assortment"),
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
    name: loc("Pansky Pasta and Flour Showcase", "Pansky Pasta and Flour Showcase", "Pansky Pasta and Flour Showcase"),
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
    name: loc("Golden Grain pasta family showcase", "Golden Grain pasta family showcase", "Golden Grain pasta family showcase"),
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
    name: loc("Golden Grain Groats Family Collection", "Golden Grain Groats Family Collection", "Golden Grain Groats Family Collection"),
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
    name: loc("Golden Grain Flour Family Showcase", "Golden Grain Flour Family Showcase", "Golden Grain Flour Family Showcase"),
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
    name: loc("Kitto Soy Sauce Family Spread", "Kitto Soy Sauce Family Spread", "Kitto Soy Sauce Family Spread"),
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
    name: loc("Kitto specialty sauces, elegant trio", "Kitto specialty sauces, elegant trio", "Kitto specialty sauces, elegant trio"),
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
    name: loc("Fitto soup family, freshly served", "Fitto soup family, freshly served", "Fitto soup family, freshly served"),
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
