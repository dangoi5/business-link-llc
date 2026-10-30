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
    slug: "khutorok-flour",
    name: loc("Khutorok Flour", "Harinas Khutorok", "Farine Khutorok"),
    description: loc(
      "Khutorok premium wheat flour in 1, 2 and 5 kg, plus corn and rye flour and the Pansky premium line.",
      "Harina de trigo premium Khutorok en 1, 2 y 5 kg, harina de maíz y de centeno, y la línea premium Pansky.",
      "Farina di grano premium Khutorok da 1, 2 e 5 kg, farina di mais e di segale e la linea premium Pansky.",
    ),
    cover: cover("khutorok-flour"),
    brand: "Khutorok",
    groups: [
      {
        id: "flour",
        label: loc("Flour", "Harinas", "Farine"),
        products: [
          item("khutorok-flour", "01_khutorok_flour", "01", "Khutorok Premium Wheat Flour 1 kg", "Harina de trigo premium Khutorok 1 kg", "Farina di grano premium Khutorok 1 kg"),
          item("khutorok-flour", "01_khutorok_flour", "02", "Khutorok Premium Wheat Flour 2 kg", "Harina de trigo premium Khutorok 2 kg", "Farina di grano premium Khutorok 2 kg"),
          item("khutorok-flour", "01_khutorok_flour", "03", "Khutorok Premium Wheat Flour 5 kg", "Harina de trigo premium Khutorok 5 kg", "Farina di grano premium Khutorok 5 kg"),
          item("khutorok-flour", "01_khutorok_flour", "04", "Khutorok Corn Flour 900 g", "Harina de maíz Khutorok 900 g", "Farina di mais Khutorok 900 g"),
          item("khutorok-flour", "01_khutorok_flour", "05", "Khutorok Rye Flour 900 g", "Harina de centeno Khutorok 900 g", "Farina di segale Khutorok 900 g"),
          item("khutorok-flour", "01_khutorok_flour", "06", "Pansky Premium Wheat Flour 2 kg", "Harina de trigo premium Pansky 2 kg", "Farina di grano premium Pansky 2 kg"),
          item("khutorok-flour", "01_khutorok_flour", "07", "Pansky Premium Wheat Flour 5 kg", "Harina de trigo premium Pansky 5 kg", "Farina di grano premium Pansky 5 kg"),
        ],
      },
    ],
  },
  {
    slug: "khutorok-groats",
    name: loc("Khutorok Groats & Pulses", "Cereales y legumbres Khutorok", "Cereali e legumi Khutorok"),
    description: loc(
      "Khutorok 800 g groats: buckwheat, millet, barley, wheat, corn, semolina and split peas, plus baking soda.",
      "Cereales Khutorok de 800 g: trigo sarraceno, mijo, cebada, trigo, maíz, sémola y chícharo partido, más bicarbonato.",
      "Cereali Khutorok da 800 g: grano saraceno, miglio, orzo, grano, mais, semolino e piselli spezzati, più bicarbonato.",
    ),
    cover: cover("khutorok-groats"),
    brand: "Khutorok",
    groups: [
      {
        id: "groats",
        label: loc("Groats, 800 g", "Cereales, 800 g", "Cereali, 800 g"),
        products: [
          item("khutorok-groats", "02_khutorok_groats", "01", "Khutorok Buckwheat Groats 800 g", "Trigo sarraceno Khutorok 800 g", "Grano saraceno Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "02", "Khutorok Polished Millet 800 g", "Mijo pulido Khutorok 800 g", "Miglio decorticato Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "03", "Khutorok Pearl Barley No. 1 800 g", "Cebada perlada n.º 1 Khutorok 800 g", "Orzo perlato n. 1 Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "04", "Khutorok Barley Groats No. 2 800 g", "Cebada partida n.º 2 Khutorok 800 g", "Orzo spezzato n. 2 Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "05", "Khutorok Wheat Groats “Artek” 800 g", "Trigo partido «Artek» Khutorok 800 g", "Grano spezzato «Artek» Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "06", "Khutorok Wheat Groats “Poltavska” No. 3 800 g", "Trigo partido «Poltavska» n.º 3 Khutorok 800 g", "Grano spezzato «Poltavska» n. 3 Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "07", "Khutorok Corn Grits 800 g", "Sémola de maíz Khutorok 800 g", "Semola di mais Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "08", "Khutorok Semolina Grade “M” 800 g", "Sémola de trigo grado «M» Khutorok 800 g", "Semolino grado «M» Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "09", "Khutorok Polished Split Peas 800 g", "Chícharo partido pulido Khutorok 800 g", "Piselli spezzati decorticati Khutorok 800 g"),
          item("khutorok-groats", "02_khutorok_groats", "10", "Khutorok Baking Soda", "Bicarbonato de sodio Khutorok", "Bicarbonato di sodio Khutorok"),
        ],
      },
    ],
  },
  {
    slug: "pansky-boil-in-bag-groats",
    name: loc("Pansky Boil-in-Bag Groats", "Cereales en bolsitas de cocción Pansky", "Cereali in sacchetti da cottura Pansky"),
    description: loc(
      "Pansky boil-in-bag cartons: Artek wheat, buckwheat, bulgur and couscous in portion bags.",
      "Cajas Pansky con bolsitas de cocción: trigo Artek, trigo sarraceno, bulgur y cuscús en porciones.",
      "Scatole Pansky con sacchetti da cottura: grano Artek, grano saraceno, bulgur e couscous in porzioni.",
    ),
    cover: cover("pansky-boil-in-bag-groats"),
    brand: "Pansky",
    groups: [
      {
        id: "boil-in-bag",
        label: loc("Boil-in-bag cartons", "Cajas con bolsitas", "Scatole con sacchetti"),
        products: [
          item("pansky-boil-in-bag-groats", "03_pansky_boil_in_bag", "01", "Pansky Boil-in-Bag Artek Wheat Groats 300 g", "Pansky trigo Artek en bolsitas 300 g", "Pansky grano Artek in sacchetti 300 g"),
          item("pansky-boil-in-bag-groats", "03_pansky_boil_in_bag", "02", "Pansky Boil-in-Bag Buckwheat 400 g", "Pansky trigo sarraceno en bolsitas 400 g", "Pansky grano saraceno in sacchetti 400 g"),
          item("pansky-boil-in-bag-groats", "03_pansky_boil_in_bag", "03", "Pansky Boil-in-Bag Bulgur 400 g", "Pansky bulgur en bolsitas 400 g", "Pansky bulgur in sacchetti 400 g"),
          item("pansky-boil-in-bag-groats", "03_pansky_boil_in_bag", "04", "Pansky Boil-in-Bag Couscous 400 g", "Pansky cuscús en bolsitas 400 g", "Pansky couscous in sacchetti 400 g"),
        ],
      },
    ],
  },
  {
    slug: "khutorok-pasta",
    name: loc("Khutorok Pasta", "Pasta Khutorok", "Pasta Khutorok"),
    description: loc(
      "Khutorok pasta in 800 g bags, plus 450 g and 700 g spaghetti.",
      "Pasta Khutorok en bolsas de 800 g, más spaghetti de 450 g y 700 g.",
      "Pasta Khutorok in buste da 800 g, più spaghetti da 450 g e 700 g.",
    ),
    cover: cover("khutorok-pasta"),
    brand: "Khutorok",
    groups: [
      {
        id: "pasta",
        label: loc("Pasta", "Pasta", "Pasta"),
        products: [
          item("khutorok-pasta", "04_khutorok_pasta", "01", "Khutorok Vermicelli 800 g", "Fideos cabello Khutorok 800 g", "Vermicelli Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "02", "Khutorok Penne “Feathers” 800 g", "Penne «Plumas» Khutorok 800 g", "Penne «Piume» Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "03", "Khutorok Short Noodles 800 g", "Fideos cortos Khutorok 800 g", "Tagliolini corti Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "04", "Khutorok Small Shells 800 g", "Conchitas Khutorok 800 g", "Conchigliette Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "05", "Khutorok Shells 800 g", "Conchas Khutorok 800 g", "Conchiglie Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "06", "Khutorok Horns 800 g", "Coditos Khutorok 800 g", "Chifferi Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "07", "Khutorok Twisted Horns 800 g", "Coditos rizados Khutorok 800 g", "Chifferi rigati Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "08", "Khutorok Spirals 800 g", "Espirales Khutorok 800 g", "Fusilli Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "09", "Khutorok Tubes 800 g", "Tubitos Khutorok 800 g", "Tubetti Khutorok 800 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "10", "Khutorok Spaghetti 450 g", "Spaghetti Khutorok 450 g", "Spaghetti Khutorok 450 g"),
          item("khutorok-pasta", "04_khutorok_pasta", "11", "Khutorok Spaghetti 700 g", "Spaghetti Khutorok 700 g", "Spaghetti Khutorok 700 g"),
        ],
      },
    ],
  },
  {
    slug: "khutorok-instant-noodles",
    name: loc("Khutorok Instant Noodles", "Fideos instantáneos Khutorok", "Noodles istantanei Khutorok"),
    description: loc(
      "Khutorok instant vermicelli in 60 g and 90 g bags, 80 g cups and 90 g trays. Open the family for every flavor.",
      "Fideos instantáneos Khutorok en bolsas de 60 g y 90 g, vasos de 80 g y bandejas de 90 g. Entre para ver cada sabor.",
      "Vermicelli istantanei Khutorok in buste da 60 g e 90 g, coppette da 80 g e vaschette da 90 g. Clicchi per ogni gusto.",
    ),
    cover: cover("khutorok-instant-noodles"),
    brand: "Khutorok",
    groups: [
      {
        id: "bags-60g",
        label: loc("Bags, 60 g", "Bolsas, 60 g", "Buste, 60 g"),
        products: [
          item("khutorok-instant-noodles", "30_khutorok_instant_noodles_bag_60g", "01", "Khutorok Instant Noodles, Cheese & Herbs 60 g", "Fideos instantáneos Khutorok, queso y hierbas 60 g", "Noodles istantanei Khutorok, formaggio ed erbe 60 g"),
          item("khutorok-instant-noodles", "30_khutorok_instant_noodles_bag_60g", "02", "Khutorok Instant Noodles, Duck 60 g", "Fideos instantáneos Khutorok, pato 60 g", "Noodles istantanei Khutorok, anatra 60 g"),
          item("khutorok-instant-noodles", "30_khutorok_instant_noodles_bag_60g", "03", "Khutorok Instant Noodles, Beef 60 g", "Fideos instantáneos Khutorok, res 60 g", "Noodles istantanei Khutorok, manzo 60 g"),
          item("khutorok-instant-noodles", "30_khutorok_instant_noodles_bag_60g", "04", "Khutorok Instant Noodles, Mushroom 60 g", "Fideos instantáneos Khutorok, champiñones 60 g", "Noodles istantanei Khutorok, funghi 60 g"),
          item("khutorok-instant-noodles", "30_khutorok_instant_noodles_bag_60g", "05", "Khutorok Instant Noodles, Vegetables 60 g", "Fideos instantáneos Khutorok, verduras 60 g", "Noodles istantanei Khutorok, verdure 60 g"),
          item("khutorok-instant-noodles", "30_khutorok_instant_noodles_bag_60g", "06", "Khutorok Instant Noodles, Chicken (Non-Spicy) 60 g", "Fideos instantáneos Khutorok, pollo (no picante) 60 g", "Noodles istantanei Khutorok, pollo (non piccante) 60 g"),
          item("khutorok-instant-noodles", "30_khutorok_instant_noodles_bag_60g", "07", "Khutorok Instant Noodles, Shrimp 60 g", "Fideos instantáneos Khutorok, camarón 60 g", "Noodles istantanei Khutorok, gambero 60 g"),
          item("khutorok-instant-noodles", "30_khutorok_instant_noodles_bag_60g", "08", "Khutorok Instant Noodles, Chicken (Spicy) 60 g", "Fideos instantáneos Khutorok, pollo (picante) 60 g", "Noodles istantanei Khutorok, pollo (piccante) 60 g"),
        ],
      },
      {
        id: "cups-80g",
        label: loc("Cups, 80 g", "Vasos, 80 g", "Coppette, 80 g"),
        products: [
          item("khutorok-instant-noodles", "31_khutorok_instant_noodles_cup_80g", "01", "Khutorok Instant Noodles Cup, Homemade Chicken Broth 80 g", "Vaso de fideos Khutorok, caldo de pollo casero 80 g", "Coppetta di noodles Khutorok, brodo di pollo casalingo 80 g"),
          item("khutorok-instant-noodles", "31_khutorok_instant_noodles_cup_80g", "02", "Khutorok Instant Noodles Cup, Mushroom Soup 80 g", "Vaso de fideos Khutorok, sopa de champiñones 80 g", "Coppetta di noodles Khutorok, zuppa di funghi 80 g"),
          item("khutorok-instant-noodles", "31_khutorok_instant_noodles_cup_80g", "03", "Khutorok Instant Noodles Cup, Goulash 80 g", "Vaso de fideos Khutorok, goulash 80 g", "Coppetta di noodles Khutorok, gulasch 80 g"),
        ],
      },
      {
        id: "trays-90g",
        label: loc("Trays, 90 g", "Bandejas, 90 g", "Vaschette, 90 g"),
        products: [
          item("khutorok-instant-noodles", "32_khutorok_instant_noodles_tray_90g", "01", "Khutorok Instant Noodles Tray, Homemade Chicken Broth 90 g", "Bandeja de fideos Khutorok, caldo de pollo casero 90 g", "Vaschetta di noodles Khutorok, brodo di pollo casalingo 90 g"),
          item("khutorok-instant-noodles", "32_khutorok_instant_noodles_tray_90g", "02", "Khutorok Instant Noodles Tray, Mushroom Soup 90 g", "Bandeja de fideos Khutorok, sopa de champiñones 90 g", "Vaschetta di noodles Khutorok, zuppa di funghi 90 g"),
          item("khutorok-instant-noodles", "32_khutorok_instant_noodles_tray_90g", "03", "Khutorok Instant Noodles Tray, Goulash 90 g", "Bandeja de fideos Khutorok, goulash 90 g", "Vaschetta di noodles Khutorok, gulasch 90 g"),
        ],
      },
      {
        id: "bags-90g",
        label: loc("Bags, 90 g", "Bolsas, 90 g", "Buste, 90 g"),
        products: [
          item("khutorok-instant-noodles", "33_khutorok_instant_noodles_bag_90g", "01", "Khutorok Instant Noodles, Meat with Vegetables & Herbs 90 g", "Fideos instantáneos Khutorok, carne con verduras y hierbas 90 g", "Noodles istantanei Khutorok, carne con verdure ed erbe 90 g"),
          item("khutorok-instant-noodles", "33_khutorok_instant_noodles_bag_90g", "02", "Khutorok Instant Noodles, Spicy Chicken with Vegetables & Herbs 90 g", "Fideos instantáneos Khutorok, pollo picante con verduras y hierbas 90 g", "Noodles istantanei Khutorok, pollo piccante con verdure ed erbe 90 g"),
          item("khutorok-instant-noodles", "33_khutorok_instant_noodles_bag_90g", "03", "Khutorok Instant Noodles, Chicken with Vegetables & Herbs 90 g", "Fideos instantáneos Khutorok, pollo con verduras y hierbas 90 g", "Noodles istantanei Khutorok, pollo con verdure ed erbe 90 g"),
          item("khutorok-instant-noodles", "33_khutorok_instant_noodles_bag_90g", "04", "Khutorok Instant Noodles, Dried Mushrooms, Onions & Herbs 90 g", "Fideos instantáneos Khutorok, hongos secos, cebolla y hierbas 90 g", "Noodles istantanei Khutorok, funghi secchi, cipolla ed erbe 90 g"),
        ],
      },
    ],
  },
  {
    slug: "kitto-instant-egg-noodles",
    name: loc("Kitto Instant Egg Noodles", "Fideos de huevo instantáneos Kitto", "Noodles all'uovo istantanei Kitto"),
    description: loc(
      "Kitto instant egg noodles in 130 g trays, each with its own sauce. Open the family for every flavor.",
      "Fideos de huevo instantáneos Kitto en bandejas de 130 g, cada uno con su salsa. Entre para ver cada sabor.",
      "Noodles all'uovo istantanei Kitto in vaschette da 130 g, ciascuno con la propria salsa. Clicchi per ogni gusto.",
    ),
    cover: cover("kitto-instant-egg-noodles"),
    brand: "Kitto",
    groups: [
      {
        id: "egg-noodles",
        label: loc("Egg noodle trays, 130 g", "Bandejas de fideos de huevo, 130 g", "Vaschette di noodles all'uovo, 130 g"),
        products: [
          item("kitto-instant-egg-noodles", "34_kitto_instant_egg_noodles_130g", "01", "Kitto Egg Noodles, Mushroom with Sweet Chili Sauce 130 g", "Fideos de huevo Kitto, champiñones con salsa Sweet Chili 130 g", "Noodles all'uovo Kitto, funghi con salsa Sweet Chili 130 g"),
          item("kitto-instant-egg-noodles", "34_kitto_instant_egg_noodles_130g", "02", "Kitto Egg Noodles, Spicy Chicken with Tomato Spicy Sauce 130 g", "Fideos de huevo Kitto, pollo picante con salsa Tomato Spicy 130 g", "Noodles all'uovo Kitto, pollo piccante con salsa Tomato Spicy 130 g"),
          item("kitto-instant-egg-noodles", "34_kitto_instant_egg_noodles_130g", "03", "Kitto Egg Noodles, Meat with Tomato Yaki Sauce 130 g", "Fideos de huevo Kitto, carne con salsa Tomato Yaki 130 g", "Noodles all'uovo Kitto, carne con salsa Tomato Yaki 130 g"),
        ],
      },
    ],
  },
  {
    slug: "khutorok-pickled-vegetables",
    name: loc("Khutorok Pickled Vegetables", "Encurtidos Khutorok", "Sottaceti Khutorok"),
    description: loc(
      "Khutorok marinated tomatoes, cucumbers, mixes, zucchini, peppers and plums, from 410 g jars to 3 kg.",
      "Tomates, pepinos, mezclas, calabacín, pimientos y ciruelas marinados Khutorok, de frascos de 410 g a 3 kg.",
      "Pomodori, cetrioli, misti, zucchine, peperoni e prugne marinati Khutorok, da vasetti da 410 g a 3 kg.",
    ),
    cover: cover("khutorok-pickled-vegetables"),
    brand: "Khutorok",
    groups: [
      {
        id: "jars",
        label: loc("Jars, 410–770 g", "Frascos, 410–770 g", "Vasetti, 410–770 g"),
        products: [
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "01", "Khutorok Pickled Tomatoes 680 g", "Tomates marinados Khutorok 680 g", "Pomodori marinati Khutorok 680 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "02", "Khutorok Pickled Cucumbers 680 g", "Pepinos marinados Khutorok 680 g", "Cetrioli marinati Khutorok 680 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "03", "Khutorok Assorted No. 2 (Cucumbers & Tomatoes) 680 g", "Surtido n.º 2 Khutorok (pepinos y tomates) 680 g", "Assortito n. 2 Khutorok (cetrioli e pomodori) 680 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "04", "Khutorok Pickled Cucumbers in Adjika 680 g", "Pepinos marinados en adjika Khutorok 680 g", "Cetrioli marinati in adjika Khutorok 680 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "05", "Khutorok Pickled Cherry Tomatoes 700 g", "Tomates cherry marinados Khutorok 700 g", "Pomodorini marinati Khutorok 700 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "06", "Khutorok Pickled Plums 770 g", "Ciruelas marinadas Khutorok 770 g", "Prugne marinate Khutorok 770 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "07", "Khutorok Pickled Hot Peppers “Hellfire Berry” 630 g", "Chiles picantes marinados «Hellfire Berry» Khutorok 630 g", "Peperoncini piccanti marinati «Hellfire Berry» Khutorok 630 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "08", "Khutorok Pickled Zucchini 630 g", "Calabacín marinado Khutorok 630 g", "Zucchine marinate Khutorok 630 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "09", "Khutorok Pickled Zucchini with Curry “Piquant” 410 g", "Calabacín marinado con curry «Picante» Khutorok 410 g", "Zucchine marinate al curry «Piccanti» Khutorok 410 g"),
        ],
      },
      {
        id: "large-jars",
        label: loc("Large jars, 1.85–3.15 kg", "Frascos grandes, 1,85–3,15 kg", "Vasi grandi, 1,85–3,15 kg"),
        products: [
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "10", "Khutorok Pickled Tomatoes 1850 g", "Tomates marinados Khutorok 1850 g", "Pomodori marinati Khutorok 1850 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "11", "Khutorok Pickled Cucumbers “Kherson Style” 1850 g", "Pepinos marinados «estilo Jersón» Khutorok 1850 g", "Cetrioli marinati «stile Cherson» Khutorok 1850 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "12", "Khutorok Pickled Vegetable Mix “Kherson Style” 1850 g", "Mezcla de verduras marinadas «estilo Jersón» Khutorok 1850 g", "Misto di verdure marinate «stile Cherson» Khutorok 1850 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "13", "Khutorok Pickled Cucumbers “Kherson Style” 3100 g", "Pepinos marinados «estilo Jersón» Khutorok 3100 g", "Cetrioli marinati «stile Cherson» Khutorok 3100 g"),
          item("khutorok-pickled-vegetables", "05_khutorok_pickled_vegetables", "14", "Khutorok Pickled Tomatoes 3150 g", "Tomates marinados Khutorok 3150 g", "Pomodori marinati Khutorok 3150 g"),
        ],
      },
    ],
  },
  {
    slug: "khutorok-beans-sauces-preserves",
    name: loc("Khutorok Beans, Sauces & Preserves", "Frijoles, salsas y conservas Khutorok", "Fagioli, salse e conserve Khutorok"),
    description: loc(
      "Khutorok canned beans, tomato paste, adjika, lecho, vegetable spreads and salads, and fruit jams.",
      "Frijoles enlatados, pasta de tomate, adjika, lecho, untables y ensaladas de verduras, y mermeladas Khutorok.",
      "Fagioli in scatola, concentrato di pomodoro, adjika, lecsó, creme e insalate di verdure e confetture Khutorok.",
    ),
    cover: cover("khutorok-beans-sauces-preserves"),
    brand: "Khutorok",
    groups: [
      {
        id: "beans",
        label: loc("Canned beans, 410 g", "Frijoles enlatados, 410 g", "Fagioli in scatola, 410 g"),
        products: [
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "01", "Khutorok Beans in White Sauce 410 g", "Frijoles en salsa blanca Khutorok 410 g", "Fagioli in salsa bianca Khutorok 410 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "02", "Khutorok Beans in Tomato Sauce 410 g", "Frijoles en salsa de tomate Khutorok 410 g", "Fagioli al pomodoro Khutorok 410 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "03", "Khutorok Beans with Mushrooms & Vegetables in Tomato Sauce 410 g", "Frijoles con champiñones y verduras en salsa de tomate Khutorok 410 g", "Fagioli con funghi e verdure al pomodoro Khutorok 410 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "04", "Khutorok Bulgarian-Style Beans in Tomato Sauce 410 g", "Frijoles a la búlgara en salsa de tomate Khutorok 410 g", "Fagioli alla bulgara al pomodoro Khutorok 410 g"),
        ],
      },
      {
        id: "tomato-sauces",
        label: loc("Tomato products & sauces", "Productos de tomate y salsas", "Prodotti al pomodoro e salse"),
        products: [
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "05", "Khutorok Tomato Paste “Classic” 25% 300 g", "Pasta de tomate «Clásica» 25% Khutorok 300 g", "Concentrato di pomodoro «Classico» 25% Khutorok 300 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "06", "Khutorok Tomato Paste 25% 460 g", "Pasta de tomate 25% Khutorok 460 g", "Concentrato di pomodoro 25% Khutorok 460 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "07", "Khutorok Tomato Purée 15% 460 g", "Puré de tomate 15% Khutorok 460 g", "Passata di pomodoro 15% Khutorok 460 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "08", "Khutorok Spicy Adjika 300 g", "Adjika picante Khutorok 300 g", "Adjika piccante Khutorok 300 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "09", "Khutorok Lecho 400 g", "Lecho Khutorok 400 g", "Lecsó Khutorok 400 g"),
        ],
      },
      {
        id: "spreads-salads",
        label: loc("Vegetable spreads & salads", "Untables y ensaladas de verduras", "Creme e insalate di verdure"),
        products: [
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "10", "Khutorok Zucchini Vegetable Spread 410 g", "Untable de calabacín Khutorok 410 g", "Crema di zucchine Khutorok 410 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "11", "Khutorok Carrot Salad 420 g", "Ensalada de zanahoria Khutorok 420 g", "Insalata di carote Khutorok 420 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "12", "Khutorok Ukrainian-Style Vegetable Salad “Naddnipryansky” 420 g", "Ensalada de verduras estilo ucraniano «Naddnipryansky» Khutorok 420 g", "Insalata di verdure all'ucraina «Naddnipryansky» Khutorok 420 g"),
        ],
      },
      {
        id: "jams",
        label: loc("Fruit jams, 600 g", "Mermeladas, 600 g", "Confetture, 600 g"),
        products: [
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "13", "Khutorok Plum Jam 600 g", "Mermelada de ciruela Khutorok 600 g", "Confettura di prugne Khutorok 600 g"),
          item("khutorok-beans-sauces-preserves", "06_khutorok_beans_sauces_preserves", "14", "Khutorok Apple Jam 600 g", "Mermelada de manzana Khutorok 600 g", "Confettura di mele Khutorok 600 g"),
        ],
      },
    ],
  },
  {
    slug: "khutorok-juices",
    name: loc("Khutorok Juices", "Jugos Khutorok", "Succhi Khutorok"),
    description: loc(
      "Khutorok tomato, apple, apple-carrot and birch juices in 1.85 L and 3 L glass jars.",
      "Jugos Khutorok de tomate, manzana, manzana-zanahoria y abedul en frascos de vidrio de 1,85 L y 3 L.",
      "Succhi Khutorok di pomodoro, mela, mela-carota e betulla in vasi di vetro da 1,85 L e 3 L.",
    ),
    cover: cover("khutorok-juices"),
    brand: "Khutorok",
    groups: [
      {
        id: "juices",
        label: loc("Juices in glass jars", "Jugos en frascos de vidrio", "Succhi in vasi di vetro"),
        products: [
          item("khutorok-juices", "07_khutorok_juices", "01", "Khutorok Tomato Juice 1.85 L", "Jugo de tomate Khutorok 1,85 L", "Succo di pomodoro Khutorok 1,85 L"),
          item("khutorok-juices", "07_khutorok_juices", "02", "Khutorok Tomato Juice 3 L", "Jugo de tomate Khutorok 3 L", "Succo di pomodoro Khutorok 3 L"),
          item("khutorok-juices", "07_khutorok_juices", "03", "Khutorok Birch Sap with Rosehip 3 L", "Savia de abedul con escaramujo Khutorok 3 L", "Linfa di betulla con rosa canina Khutorok 3 L"),
          item("khutorok-juices", "07_khutorok_juices", "04", "Khutorok Birch Sap 3 L", "Savia de abedul Khutorok 3 L", "Linfa di betulla Khutorok 3 L"),
          item("khutorok-juices", "07_khutorok_juices", "05", "Khutorok Apple Juice 3 L", "Jugo de manzana Khutorok 3 L", "Succo di mela Khutorok 3 L"),
          item("khutorok-juices", "07_khutorok_juices", "06", "Khutorok Apple-Carrot Juice 3 L", "Jugo de manzana y zanahoria Khutorok 3 L", "Succo di mela e carota Khutorok 3 L"),
        ],
      },
    ],
  },
  {
    slug: "the-banka-vegetables",
    name: loc("The Banka Peppers, Pickles & Beans", "Pimientos, encurtidos y frijoles The Banka", "Peperoni, sottaceti e fagioli The Banka"),
    description: loc(
      "The Banka hot peppers, gherkins, kimchi cucumbers, vegetable mixes, green beans and beans in sauce.",
      "Chiles picantes, pepinillos, pepinos kimchi, mezclas de verduras, ejotes y frijoles en salsa The Banka.",
      "Peperoncini piccanti, cetriolini, cetrioli kimchi, misti di verdure, fagiolini e fagioli in salsa The Banka.",
    ),
    cover: cover("the-banka-vegetables"),
    brand: "The Banka",
    groups: [
      {
        id: "peppers",
        label: loc("Hot peppers", "Chiles picantes", "Peperoncini piccanti"),
        products: [
          item("the-banka-vegetables", "08_the_banka_vegetables", "01", "The Banka Hot Peppers “Peruvian Style” 300 g", "Chiles picantes «estilo peruano» The Banka 300 g", "Peperoncini piccanti «stile peruviano» The Banka 300 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "02", "The Banka Hot Peppers “Mexican Style” 300 g", "Chiles picantes «estilo mexicano» The Banka 300 g", "Peperoncini piccanti «stile messicano» The Banka 300 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "03", "The Banka Hot Peppers “Pepperoni” 400 g", "Chiles picantes «Pepperoni» The Banka 400 g", "Peperoncini piccanti «Pepperoni» The Banka 400 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "04", "The Banka Hot Peppers “Jalapeño” 470 g", "Chiles «Jalapeño» The Banka 470 g", "Peperoncini «Jalapeño» The Banka 470 g"),
        ],
      },
      {
        id: "pickles",
        label: loc("Pickles & vegetable mixes", "Encurtidos y mezclas de verduras", "Sottaceti e misti di verdure"),
        products: [
          item("the-banka-vegetables", "08_the_banka_vegetables", "05", "The Banka Pickled Baby Cucumbers (Pikuli) 300 g", "Pepinillos baby marinados (pikuli) The Banka 300 g", "Cetriolini baby marinati (pikuli) The Banka 300 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "06", "The Banka Marinated Gherkins 460 g", "Pepinillos marinados The Banka 460 g", "Cetriolini marinati The Banka 460 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "07", "The Banka Sliced Cucumbers in Kimchi Sauce 470 g", "Pepinos en rodajas en salsa kimchi The Banka 470 g", "Cetrioli a fette in salsa kimchi The Banka 470 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "08", "The Banka Assorted Vegetables “Quartet” 470 g", "Surtido de verduras «Cuarteto» The Banka 470 g", "Assortito di verdure «Quartetto» The Banka 470 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "09", "The Banka Assorted Vegetables “Trio” 470 g", "Surtido de verduras «Trío» The Banka 470 g", "Assortito di verdure «Trio» The Banka 470 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "10", "The Banka Sliced Green Beans 300 g", "Ejotes en trozos The Banka 300 g", "Fagiolini a pezzi The Banka 300 g"),
        ],
      },
      {
        id: "beans",
        label: loc("Beans in sauce, 500 g", "Frijoles en salsa, 500 g", "Fagioli in salsa, 500 g"),
        products: [
          item("the-banka-vegetables", "08_the_banka_vegetables", "11", "The Banka Beans in a Tender Sauce 500 g", "Frijoles en salsa suave The Banka 500 g", "Fagioli in salsa delicata The Banka 500 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "12", "The Banka Beans in Tomato Sauce 500 g", "Frijoles en salsa de tomate The Banka 500 g", "Fagioli al pomodoro The Banka 500 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "13", "The Banka Bulgarian-Style Beans in Tomato Sauce 500 g", "Frijoles a la búlgara en salsa de tomate The Banka 500 g", "Fagioli alla bulgara al pomodoro The Banka 500 g"),
          item("the-banka-vegetables", "08_the_banka_vegetables", "14", "The Banka Beans with Mushrooms & Vegetables in Tomato Sauce 500 g", "Frijoles con champiñones y verduras en salsa de tomate The Banka 500 g", "Fagioli con funghi e verdure al pomodoro The Banka 500 g"),
        ],
      },
    ],
  },
  {
    slug: "the-banka-juices",
    name: loc("The Banka Juices & Birch Sap", "Jugos y savia de abedul The Banka", "Succhi e linfa di betulla The Banka"),
    description: loc(
      "The Banka birch sap with natural infusions, fruit and vegetable juices and nectars in 1 L and 250 ml glass bottles.",
      "Savia de abedul con infusiones naturales, jugos y néctares de frutas y verduras The Banka en botellas de vidrio de 1 L y 250 ml.",
      "Linfa di betulla con infusi naturali, succhi e nettari di frutta e verdura The Banka in bottiglie di vetro da 1 L e 250 ml.",
    ),
    cover: cover("the-banka-juices"),
    brand: "The Banka",
    groups: [
      {
        id: "birch-sap",
        label: loc("Birch sap, 1 L", "Savia de abedul, 1 L", "Linfa di betulla, 1 L"),
        products: [
          item("the-banka-juices", "09_the_banka_juices", "01", "The Banka Birch Sap 1 L", "Savia de abedul The Banka 1 L", "Linfa di betulla The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "02", "The Banka Birch Sap with Lime & Mint 1 L", "Savia de abedul con lima y menta The Banka 1 L", "Linfa di betulla con lime e menta The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "03", "The Banka Birch Sap with Blueberry Infusion 1 L", "Savia de abedul con infusión de arándano The Banka 1 L", "Linfa di betulla con infuso di mirtillo The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "04", "The Banka Birch Sap with Rosehip Infusion 1 L", "Savia de abedul con infusión de escaramujo The Banka 1 L", "Linfa di betulla con infuso di rosa canina The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "05", "The Banka Birch Sap with Green Tea Infusion 1 L", "Savia de abedul con infusión de té verde The Banka 1 L", "Linfa di betulla con infuso di tè verde The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "06", "The Banka Birch Sap with Cranberry 1 L", "Savia de abedul con arándano rojo The Banka 1 L", "Linfa di betulla con mirtillo rosso The Banka 1 L"),
        ],
      },
      {
        id: "juices-1l",
        label: loc("Juices & nectars, 1 L", "Jugos y néctares, 1 L", "Succhi e nettari, 1 L"),
        products: [
          item("the-banka-juices", "09_the_banka_juices", "07", "The Banka Pomegranate Nectar 1 L", "Néctar de granada The Banka 1 L", "Nettare di melograno The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "08", "The Banka Peach Nectar 1 L", "Néctar de durazno The Banka 1 L", "Nettare di pesca The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "09", "The Banka Tomato Juice 1 L", "Jugo de tomate The Banka 1 L", "Succo di pomodoro The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "10", "The Banka Pumpkin Juice 1 L", "Jugo de calabaza The Banka 1 L", "Succo di zucca The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "11", "The Banka Apple-Carrot Juice 1 L", "Jugo de manzana y zanahoria The Banka 1 L", "Succo di mela e carota The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "12", "The Banka Multifruit Juice 1 L", "Jugo multifrutas The Banka 1 L", "Succo multifrutti The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "13", "The Banka Apple Juice 1 L", "Jugo de manzana The Banka 1 L", "Succo di mela The Banka 1 L"),
          item("the-banka-juices", "09_the_banka_juices", "14", "The Banka Apple-Pear Juice 1 L", "Jugo de manzana y pera The Banka 1 L", "Succo di mela e pera The Banka 1 L"),
        ],
      },
      {
        id: "juices-250ml",
        label: loc("Juices, 250 ml", "Jugos, 250 ml", "Succhi, 250 ml"),
        products: [
          item("the-banka-juices", "09_the_banka_juices", "15", "The Banka Tomato Juice 250 ml", "Jugo de tomate The Banka 250 ml", "Succo di pomodoro The Banka 250 ml"),
          item("the-banka-juices", "09_the_banka_juices", "16", "The Banka Pumpkin Juice 250 ml", "Jugo de calabaza The Banka 250 ml", "Succo di zucca The Banka 250 ml"),
          item("the-banka-juices", "09_the_banka_juices", "17", "The Banka Carrot Juice 250 ml", "Jugo de zanahoria The Banka 250 ml", "Succo di carota The Banka 250 ml"),
          item("the-banka-juices", "09_the_banka_juices", "18", "The Banka Apple Juice 250 ml", "Jugo de manzana The Banka 250 ml", "Succo di mela The Banka 250 ml"),
          item("the-banka-juices", "09_the_banka_juices", "19", "The Banka Apple-Pumpkin Juice 250 ml", "Jugo de manzana y calabaza The Banka 250 ml", "Succo di mela e zucca The Banka 250 ml"),
          item("the-banka-juices", "09_the_banka_juices", "20", "The Banka Apple-Carrot Juice 250 ml", "Jugo de manzana y zanahoria The Banka 250 ml", "Succo di mela e carota The Banka 250 ml"),
          item("the-banka-juices", "09_the_banka_juices", "21", "The Banka Multifruit Juice 250 ml", "Jugo multifrutas The Banka 250 ml", "Succo multifrutti The Banka 250 ml"),
        ],
      },
    ],
  },
  {
    slug: "la-pasta-pasta",
    name: loc("La Pasta Durum Wheat Pasta", "Pasta de trigo duro La Pasta", "Pasta di grano duro La Pasta"),
    description: loc(
      "La Pasta 100% durum wheat pasta in 400 g and 700–750 g packs, plus the Protein+ bronze-cut line.",
      "Pasta La Pasta 100% trigo duro en empaques de 400 g y 700–750 g, más la línea Protein+ trefilada al bronce.",
      "Pasta La Pasta 100% grano duro in confezioni da 400 g e 700–750 g, più la linea Protein+ trafilata al bronzo.",
    ),
    cover: cover("la-pasta-pasta"),
    brand: "La Pasta",
    groups: [
      {
        id: "protein",
        label: loc("Protein+, 300 g", "Protein+, 300 g", "Protein+, 300 g"),
        products: [
          item("la-pasta-pasta", "10_la_pasta_pasta", "01", "La Pasta Protein+ Fusillini 300 g", "La Pasta Protein+ Fusillini 300 g", "La Pasta Protein+ Fusillini 300 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "02", "La Pasta Protein+ Rigatoni 300 g", "La Pasta Protein+ Rigatoni 300 g", "La Pasta Protein+ Rigatoni 300 g"),
        ],
      },
      {
        id: "400g",
        label: loc("400 g packs", "Empaques de 400 g", "Confezioni da 400 g"),
        products: [
          item("la-pasta-pasta", "10_la_pasta_pasta", "03", "La Pasta Love Pasta (Hearts) 400 g", "La Pasta Love Pasta (corazones) 400 g", "La Pasta Love Pasta (cuori) 400 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "04", "La Pasta Conchiglie 400 g", "La Pasta Conchiglie 400 g", "La Pasta Conchiglie 400 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "05", "La Pasta Fusilli 400 g", "La Pasta Fusilli 400 g", "La Pasta Fusilli 400 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "06", "La Pasta Stortelli 400 g", "La Pasta Stortelli 400 g", "La Pasta Stortelli 400 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "07", "La Pasta Penne Rigate 400 g", "La Pasta Penne Rigate 400 g", "La Pasta Penne Rigate 400 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "08", "La Pasta Vermicelli 400 g", "La Pasta Vermicelli 400 g", "La Pasta Vermicelli 400 g"),
        ],
      },
      {
        id: "large",
        label: loc("700–750 g packs", "Empaques de 700–750 g", "Confezioni da 700–750 g"),
        products: [
          item("la-pasta-pasta", "10_la_pasta_pasta", "09", "La Pasta Spaghetti 700 g", "La Pasta Spaghetti 700 g", "La Pasta Spaghetti 700 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "10", "La Pasta Fusilli 750 g", "La Pasta Fusilli 750 g", "La Pasta Fusilli 750 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "11", "La Pasta Penne Rigate 750 g", "La Pasta Penne Rigate 750 g", "La Pasta Penne Rigate 750 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "12", "La Pasta Stortelli 750 g", "La Pasta Stortelli 750 g", "La Pasta Stortelli 750 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "13", "La Pasta Vermicelli 750 g", "La Pasta Vermicelli 750 g", "La Pasta Vermicelli 750 g"),
          item("la-pasta-pasta", "10_la_pasta_pasta", "14", "La Pasta Conchiglie 750 g", "La Pasta Conchiglie 750 g", "La Pasta Conchiglie 750 g"),
        ],
      },
    ],
  },
  {
    slug: "la-pasta-perfetto",
    name: loc("La Pasta Perfetto", "La Pasta Perfetto", "La Pasta Perfetto"),
    description: loc(
      "Perfetto by La Pasta: semola di grano duro specialty shapes in 400 g packs.",
      "Perfetto de La Pasta: formatos especiales de sémola de trigo duro en empaques de 400 g.",
      "Perfetto di La Pasta: formati speciali di semola di grano duro in confezioni da 400 g.",
    ),
    cover: cover("la-pasta-perfetto"),
    brand: "La Pasta",
    groups: [
      {
        id: "perfetto",
        label: loc("Perfetto, 400 g", "Perfetto, 400 g", "Perfetto, 400 g"),
        products: [
          item("la-pasta-perfetto", "11_la_pasta_perfetto", "01", "La Pasta Perfetto Lumache Rigate No. 728 400 g", "La Pasta Perfetto Lumache Rigate n.º 728 400 g", "La Pasta Perfetto Lumache Rigate n. 728 400 g"),
          item("la-pasta-perfetto", "11_la_pasta_perfetto", "02", "La Pasta Perfetto Stortelli No. 929/35 400 g", "La Pasta Perfetto Stortelli n.º 929/35 400 g", "La Pasta Perfetto Stortelli n. 929/35 400 g"),
          item("la-pasta-perfetto", "11_la_pasta_perfetto", "03", "La Pasta Perfetto Rigatoni No. 626 400 g", "La Pasta Perfetto Rigatoni n.º 626 400 g", "La Pasta Perfetto Rigatoni n. 626 400 g"),
          item("la-pasta-perfetto", "11_la_pasta_perfetto", "04", "La Pasta Perfetto Fusillini No. 766 400 g", "La Pasta Perfetto Fusillini n.º 766 400 g", "La Pasta Perfetto Fusillini n. 766 400 g"),
        ],
      },
    ],
  },
  {
    slug: "la-pasta-flour",
    name: loc("La Pasta Flour & Semolina", "Harinas y sémola La Pasta", "Farine e semola La Pasta"),
    description: loc(
      "La Pasta durum wheat semola, rice and chickpea flour, and durum semolina for porridge.",
      "Sémola de trigo duro, harina de arroz y de garbanzo, y sémola para papilla La Pasta.",
      "Semola di grano duro, farina di riso e di ceci e semolino di grano duro La Pasta.",
    ),
    cover: cover("la-pasta-flour"),
    brand: "La Pasta",
    groups: [
      {
        id: "flour",
        label: loc("Flour & semolina", "Harinas y sémola", "Farine e semola"),
        products: [
          item("la-pasta-flour", "12_la_pasta_flour", "01", "La Pasta Semola Rimacinata di Grano Duro Type “0” 1 kg", "La Pasta sémola rimacinata de trigo duro tipo «0» 1 kg", "La Pasta semola rimacinata di grano duro tipo «0» 1 kg"),
          item("la-pasta-flour", "12_la_pasta_flour", "02", "La Pasta Semola di Grano Duro Type “1” 1 kg", "La Pasta sémola de trigo duro tipo «1» 1 kg", "La Pasta semola di grano duro tipo «1» 1 kg"),
          item("la-pasta-flour", "12_la_pasta_flour", "03", "La Pasta Rice Flour 1 kg", "La Pasta harina de arroz 1 kg", "La Pasta farina di riso 1 kg"),
          item("la-pasta-flour", "12_la_pasta_flour", "04", "La Pasta Chickpea Flour 800 g", "La Pasta harina de garbanzo 800 g", "La Pasta farina di ceci 800 g"),
          item("la-pasta-flour", "12_la_pasta_flour", "05", "La Pasta Durum Wheat Semolina Grade “T” 400 g", "La Pasta sémola de trigo duro grado «T» 400 g", "La Pasta semolino di grano duro grado «T» 400 g"),
        ],
      },
    ],
  },
  {
    slug: "kitto-sauces",
    name: loc("Kitto Soy & Asian Sauces", "Salsas de soya y asiáticas Kitto", "Salse di soia e asiatiche Kitto"),
    description: loc(
      "Kitto soy sauce in 200 ml, 500 ml and 1 L, plus sweet chili, teriyaki, unagi, cranberry, balsamic and pomegranate sauces.",
      "Salsa de soya Kitto en 200 ml, 500 ml y 1 L, más salsas chile dulce, teriyaki, unagi, arándano, balsámico y granada.",
      "Salsa di soia Kitto da 200 ml, 500 ml e 1 L, più salse chili dolce, teriyaki, unagi, mirtillo rosso, balsamico e melograno.",
    ),
    cover: cover("kitto-sauces"),
    brand: "Kitto",
    groups: [
      {
        id: "soy",
        label: loc("Soy sauce", "Salsa de soya", "Salsa di soia"),
        products: [
          item("kitto-sauces", "13_kitto_sauces", "01", "Kitto Classic Soy Sauce 500 ml", "Salsa de soya clásica Kitto 500 ml", "Salsa di soia classica Kitto 500 ml"),
          item("kitto-sauces", "13_kitto_sauces", "02", "Kitto Classic Soy Sauce 1 L", "Salsa de soya clásica Kitto 1 L", "Salsa di soia classica Kitto 1 L"),
          item("kitto-sauces", "13_kitto_sauces", "03", "Kitto Classic Soy Sauce 200 ml", "Salsa de soya clásica Kitto 200 ml", "Salsa di soia classica Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "04", "Kitto Soy Sauce with Ginger 200 ml", "Salsa de soya con jengibre Kitto 200 ml", "Salsa di soia allo zenzero Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "05", "Kitto Soy Sauce with Garlic 200 ml", "Salsa de soya con ajo Kitto 200 ml", "Salsa di soia all'aglio Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "06", "Kitto Soy Sauce with Mushroom 200 ml", "Salsa de soya con champiñón Kitto 200 ml", "Salsa di soia ai funghi Kitto 200 ml"),
        ],
      },
      {
        id: "sauces",
        label: loc("Sauces, 200 ml", "Salsas, 200 ml", "Salse, 200 ml"),
        products: [
          item("kitto-sauces", "13_kitto_sauces", "07", "Kitto Sweet Chili Sauce 200 ml", "Salsa de chile dulce Kitto 200 ml", "Salsa chili dolce Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "08", "Kitto Sweet & Sour Sauce 200 ml", "Salsa agridulce Kitto 200 ml", "Salsa agrodolce Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "09", "Kitto Unagi Sauce 200 ml", "Salsa unagi Kitto 200 ml", "Salsa unagi Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "10", "Kitto Teriyaki Sauce 200 ml", "Salsa teriyaki Kitto 200 ml", "Salsa teriyaki Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "11", "Kitto Cranberry Sauce 200 ml", "Salsa de arándano rojo Kitto 200 ml", "Salsa al mirtillo rosso Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "12", "Kitto Balsamic Dressing Sauce 200 ml", "Aderezo balsámico Kitto 200 ml", "Condimento balsamico Kitto 200 ml"),
          item("kitto-sauces", "13_kitto_sauces", "13", "Kitto Pomegranate Sauce 200 ml", "Salsa de granada Kitto 200 ml", "Salsa al melograno Kitto 200 ml"),
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

