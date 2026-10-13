import type { CatalogProduct } from "@/components/ProductGrid";
import { loc, type Loc } from "@/i18n/t";

export type StarKistGroup = {
  id: string;
  label: Loc;
  description: Loc;
  products: CatalogProduct[];
};

const IMG = "/products/starkist";
const brand = loc("StarKist", "StarKist", "StarKist");
const wildCaught = loc("Wild caught", "Pesca silvestre", "Pescato in natura");

/* ---------- Classic 5 oz cans ---------- */

type Cut = "chunk-light" | "chunk-white" | "solid-white";
type Medium = "water" | "oil";

const cutNames: Record<Cut, Loc> = {
  "chunk-light": loc("Chunk Light Tuna", "Atún Chunk Light", "Tonno Chunk Light"),
  "chunk-white": loc("Chunk White Albacore Tuna", "Atún blanco Albacore Chunk White", "Tonno bianco Albacore Chunk White"),
  "solid-white": loc("Solid White Albacore Tuna", "Atún blanco Albacore Solid White", "Tonno bianco Albacore Solid White"),
};

const mediumNames: Record<Medium, Loc> = {
  water: loc("in Water", "en agua", "in acqua"),
  oil: loc("in Vegetable Oil", "en aceite vegetal", "in olio vegetale"),
};

function classicCan(
  slug: string,
  cut: Cut,
  medium: Medium,
  lowSodium: boolean,
  casePack: number,
): CatalogProduct {
  const c = cutNames[cut];
  const m = mediumNames[medium];
  const sodium = lowSodium
    ? loc(" — 25% Less Sodium", " — 25% menos sodio", " — 25% di sodio in meno")
    : loc("", "", "");
  const name = loc(
    `${c.en} ${m.en}${sodium.en}`,
    `${c.es} ${m.es}${sodium.es}`,
    `${c.it} ${m.it}${sodium.it}`,
  );
  return {
    slug,
    name,
    description: loc(
      `StarKist Classics ${c.en.toLowerCase()} ${m.en.toLowerCase()}: wild-caught fish with the naturally mild flavor people expect from StarKist, ready for tuna salads and hot casseroles.${lowSodium ? " Contains 25% less sodium than the regular can." : ""} 5 oz cans, ${casePack} per case.`,
      `StarKist Classics ${c.es.toLowerCase()} ${m.es}: pescado de pesca silvestre con el sabor naturalmente suave que se espera de StarKist, ideal para ensaladas de atún y platos calientes.${lowSodium ? " Contiene 25% menos sodio que la lata regular." : ""} Latas de 5 oz, ${casePack} por caja.`,
      `StarKist Classics ${c.it.toLowerCase()} ${m.it}: pesce pescato in natura dal sapore naturalmente delicato di StarKist, ideale per insalate di tonno e piatti caldi.${lowSodium ? " Contiene il 25% di sodio in meno rispetto alla lattina regolare." : ""} Lattine da 5 oz, ${casePack} per cartone.`,
    ),
    image: `${IMG}/${slug}.webp`,
    details: [
      brand,
      loc("5 oz can", "Lata de 5 oz", "Lattina da 5 oz"),
      loc(`${casePack} cans per case`, `${casePack} latas por caja`, `${casePack} lattine per cartone`),
      wildCaught,
      ...(lowSodium ? [loc("25% less sodium", "25% menos sodio", "25% di sodio in meno")] : []),
    ],
    imageFit: "contain",
  };
}

/* ---------- 2.6 oz pouches ---------- */

function classicPouch(
  slug: string,
  medium: { en: string; es: string; it: string },
  calories: number,
  lowSodium: boolean,
): CatalogProduct {
  const name = loc(
    `Wild Caught Light Tuna ${medium.en}${lowSodium ? " — 25% Less Sodium" : ""}, 2.6 oz Pouch`,
    `Atún light de pesca silvestre ${medium.es}${lowSodium ? " — 25% menos sodio" : ""}, sobre de 2,6 oz`,
    `Tonno light pescato in natura ${medium.it}${lowSodium ? " — 25% di sodio in meno" : ""}, busta da 2,6 oz`,
  );
  return {
    slug,
    name,
    description: loc(
      `StarKist single-serve 2.6 oz (74 g) pouch of wild-caught light tuna ${medium.en.toLowerCase()}: ${calories} calories and 17 g of lean protein per pouch.${lowSodium ? " 25% less sodium than the regular light tuna pouch." : ""} No can opener or draining needed.`,
      `Sobre individual StarKist de 2,6 oz (74 g) de atún light de pesca silvestre ${medium.es}: ${calories} calorías y 17 g de proteína magra por sobre.${lowSodium ? " 25% menos sodio que el sobre regular de atún light." : ""} No requiere abrelatas ni escurrir.`,
      `Busta monodose StarKist da 2,6 oz (74 g) di tonno light pescato in natura ${medium.it}: ${calories} calorie e 17 g di proteine magre per busta.${lowSodium ? " 25% di sodio in meno rispetto alla busta regolare di tonno light." : ""} Non servono apriscatole né scolatura.`,
    ),
    image: `${IMG}/${slug}.webp`,
    details: [
      brand,
      loc("2.6 oz (74 g) pouch", "Sobre de 2,6 oz (74 g)", "Busta da 2,6 oz (74 g)"),
      loc(`${calories} calories`, `${calories} calorías`, `${calories} calorie`),
      loc("17 g protein", "17 g de proteína", "17 g di proteine"),
      wildCaught,
      ...(lowSodium ? [loc("25% less sodium", "25% menos sodio", "25% di sodio in meno")] : []),
    ],
    imageFit: "contain",
  };
}

function creationsPouch(
  slug: string,
  flavor: Loc,
  calories: number,
  protein: number,
  extra?: { bold?: boolean; spanishLabelSoon?: boolean },
): CatalogProduct {
  const bold = extra?.bold ? { en: " BOLD", es: " BOLD", it: " BOLD" } : { en: "", es: "", it: "" };
  const name = loc(
    `Tuna Creations${bold.en} — ${flavor.en}`,
    `Tuna Creations${bold.es} — ${flavor.es}`,
    `Tuna Creations${bold.it} — ${flavor.it}`,
  );
  const soon = extra?.spanishLabelSoon;
  return {
    slug,
    name,
    description: loc(
      `StarKist Tuna Creations${bold.en} ${flavor.en}: lightly seasoned premium wild-caught tuna in a 2.6 oz (74 g) single-serve pouch, with ${protein} g of protein and ${calories} calories per pouch.${soon ? " Spanish-language labeling coming soon." : ""}`,
      `StarKist Tuna Creations${bold.es} ${flavor.es}: atún premium de pesca silvestre ligeramente sazonado en sobre individual de 2,6 oz (74 g), con ${protein} g de proteína y ${calories} calorías por sobre.${soon ? " Etiquetado en español próximamente." : ""}`,
      `StarKist Tuna Creations${bold.it} ${flavor.it}: tonno premium pescato in natura leggermente condito in busta monodose da 2,6 oz (74 g), con ${protein} g di proteine e ${calories} calorie per busta.${soon ? " Etichettatura in spagnolo in arrivo." : ""}`,
    ),
    image: `${IMG}/${slug}.webp`,
    details: [
      brand,
      loc("Tuna Creations", "Tuna Creations", "Tuna Creations"),
      loc("2.6 oz (74 g) pouch", "Sobre de 2,6 oz (74 g)", "Busta da 2,6 oz (74 g)"),
      loc(`${protein} g protein`, `${protein} g de proteína`, `${protein} g di proteine`),
      loc(`${calories} calories`, `${calories} calorías`, `${calories} calorie`),
      ...(soon ? [loc("Spanish label coming soon", "Etiqueta en español próximamente", "Etichetta in spagnolo in arrivo")] : []),
    ],
    imageFit: "contain",
  };
}

/* ---------- StarKist Selects cans ---------- */

const evoo = loc(
  "in Extra Virgin Olive Oil",
  "en aceite de oliva extra virgen",
  "in olio extra vergine di oliva",
);
const yellowfinSolid = loc("Solid Yellowfin Tuna", "Atún de aleta amarilla sólido", "Tonno pinna gialla in pezzo unico");
const albacoreSolid = loc("Solid White Albacore Tuna", "Atún blanco Albacore sólido", "Tonno bianco Albacore in pezzo unico");

function selects(
  slug: string,
  title: Loc,
  summary: Loc,
  chips: Loc[],
): CatalogProduct {
  return {
    slug,
    name: loc(`Selects ${title.en}`, `Selects ${title.es}`, `Selects ${title.it}`),
    description: summary,
    image: `${IMG}/${slug}.webp`,
    details: [
      loc("StarKist Selects", "StarKist Selects", "StarKist Selects"),
      loc("Wild caught · hand selected", "Pesca silvestre · selección manual", "Pescato in natura · selezione manuale"),
      ...chips,
      loc("Easy-open lid", "Tapa de fácil apertura", "Apertura facilitata"),
    ],
    imageFit: "contain",
  };
}

function flavoredYellowfin(slug: string, flavor: Loc): CatalogProduct {
  return selects(
    slug,
    loc(
      `Yellowfin Tuna — ${flavor.en}`,
      `Atún de aleta amarilla — ${flavor.es}`,
      `Tonno pinna gialla — ${flavor.it}`,
    ),
    loc(
      `StarKist Selects solid yellowfin tuna, wild caught and hand selected, flavored with ${flavor.en.toLowerCase()} and packed in extra virgin olive oil.`,
      `StarKist Selects atún de aleta amarilla sólido, de pesca silvestre y selección manual, con sabor a ${flavor.es.toLowerCase()} y envasado en aceite de oliva extra virgen.`,
      `StarKist Selects tonno pinna gialla in pezzo unico, pescato in natura e selezionato a mano, aromatizzato con ${flavor.it.toLowerCase()} e conservato in olio extra vergine di oliva.`,
    ),
    [flavor, loc("Extra virgin olive oil", "Aceite de oliva extra virgen", "Olio extra vergine di oliva")],
  );
}

/* ---------- Groups ---------- */

export const starKistGroups: StarKistGroup[] = [
  {
    id: "classic-cans",
    label: loc("Classic Cans — 5 oz", "Latas clásicas — 5 oz", "Lattine classiche — 5 oz"),
    description: loc(
      "StarKist Classics tuna in water and oil: wild-caught fish with the naturally mild flavor consumers know, in 5 oz single cans.",
      "Atún StarKist Classics en agua y aceite: pescado de pesca silvestre con el sabor naturalmente suave que el consumidor conoce, en latas individuales de 5 oz.",
      "Tonno StarKist Classics in acqua e olio: pesce pescato in natura dal sapore naturalmente delicato che i consumatori conoscono, in lattine singole da 5 oz.",
    ),
    products: [
      classicCan("starkist-chunk-light-water", "chunk-light", "water", false, 48),
      classicCan("starkist-chunk-light-oil", "chunk-light", "oil", false, 48),
      classicCan("starkist-chunk-light-water-low-sodium", "chunk-light", "water", true, 24),
      classicCan("starkist-chunk-white-water", "chunk-white", "water", false, 12),
      classicCan("starkist-solid-white-water", "solid-white", "water", false, 24),
      classicCan("starkist-solid-white-oil", "solid-white", "oil", false, 24),
      classicCan("starkist-solid-white-water-low-sodium", "solid-white", "water", true, 24),
    ],
  },
  {
    id: "pouches",
    label: loc("Single-Serve Pouches — 2.6 oz", "Sobres individuales — 2,6 oz", "Buste monodose — 2,6 oz"),
    description: loc(
      "Classic light tuna pouches (70–140 calories and 17 g of protein per pouch) and Tuna Creations flavored pouches (70–110 calories and 14–17 g of protein per pouch).",
      "Sobres clásicos de atún light (70–140 calorías y 17 g de proteína por sobre) y sobres saborizados Tuna Creations (70–110 calorías y 14–17 g de proteína por sobre).",
      "Buste classiche di tonno light (70–140 calorie e 17 g di proteine per busta) e buste aromatizzate Tuna Creations (70–110 calorie e 14–17 g di proteine per busta).",
    ),
    products: [
      classicPouch("starkist-pouch-light-water", loc("in Water", "en agua", "in acqua"), 70, false),
      classicPouch("starkist-pouch-light-sunflower-oil", loc("in Sunflower Oil", "en aceite de girasol", "in olio di girasole"), 140, false),
      classicPouch("starkist-pouch-light-water-low-sodium", loc("in Water", "en agua", "in acqua"), 70, true),
      creationsPouch("starkist-creations-bold-jalapeno", loc("Jalapeño", "Jalapeño", "Jalapeño"), 70, 14, { bold: true }),
      creationsPouch("starkist-creations-lemon-pepper", loc("Lemon Pepper", "Limón y pimienta", "Limone e pepe"), 80, 16),
      creationsPouch("starkist-creations-herb-garlic", loc("Herb & Garlic", "Hierbas y ajo", "Erbe e aglio"), 110, 15),
      creationsPouch("starkist-creations-sweet-spicy", loc("Sweet & Spicy", "Dulce y picante", "Dolce e piccante"), 90, 16, { spanishLabelSoon: true }),
      creationsPouch("starkist-creations-hickory-smoke", loc("Hickory Smoke Flavored", "Sabor a humo de hickory", "Aroma affumicato hickory"), 110, 17, { spanishLabelSoon: true }),
      creationsPouch("starkist-creations-honey-bbq", loc("Honey BBQ", "BBQ con miel", "BBQ al miele"), 90, 14),
    ],
  },
  {
    id: "selects",
    label: loc("StarKist Selects — Specialty Cans", "StarKist Selects — Latas especiales", "StarKist Selects — Lattine speciali"),
    description: loc(
      "Wild-caught, hand-selected albacore and yellowfin in extra virgin olive oil or water, plus wild pink salmon. Easy-open lids; chunk (no salt added) and solid cuts.",
      "Albacore y aleta amarilla de pesca silvestre y selección manual en aceite de oliva extra virgen o agua, más salmón rosado silvestre. Tapas de fácil apertura; cortes en trozos (sin sal añadida) y sólidos.",
      "Albacore e pinna gialla pescati in natura e selezionati a mano in olio extra vergine di oliva o acqua, più salmone rosa selvaggio. Aperture facilitate; tagli a pezzi (senza sale aggiunto) e in pezzo unico.",
    ),
    products: [
      selects(
        "starkist-selects-yellowfin-evoo",
        loc(`${yellowfinSolid.en} ${evoo.en}`, `${yellowfinSolid.es} ${evoo.es}`, `${yellowfinSolid.it} ${evoo.it}`),
        loc(
          "StarKist Selects solid yellowfin tuna, wild caught and hand selected, packed in extra virgin olive oil.",
          "StarKist Selects atún de aleta amarilla sólido, de pesca silvestre y selección manual, envasado en aceite de oliva extra virgen.",
          "StarKist Selects tonno pinna gialla in pezzo unico, pescato in natura e selezionato a mano, conservato in olio extra vergine di oliva.",
        ),
        [loc("Yellowfin", "Aleta amarilla", "Pinna gialla"), loc("Extra virgin olive oil", "Aceite de oliva extra virgen", "Olio extra vergine di oliva")],
      ),
      selects(
        "starkist-selects-albacore-evoo",
        loc(`${albacoreSolid.en} ${evoo.en}`, `${albacoreSolid.es} ${evoo.es}`, `${albacoreSolid.it} ${evoo.it}`),
        loc(
          "StarKist Selects solid white albacore tuna, wild caught and hand selected, packed in extra virgin olive oil.",
          "StarKist Selects atún blanco Albacore sólido, de pesca silvestre y selección manual, envasado en aceite de oliva extra virgen.",
          "StarKist Selects tonno bianco Albacore in pezzo unico, pescato in natura e selezionato a mano, conservato in olio extra vergine di oliva.",
        ),
        [loc("Albacore", "Albacore", "Albacore"), loc("Extra virgin olive oil", "Aceite de oliva extra virgen", "Olio extra vergine di oliva")],
      ),
      flavoredYellowfin("starkist-selects-yellowfin-lemon-dill", loc("Lemon Dill", "Limón y eneldo", "Limone e aneto")),
      flavoredYellowfin("starkist-selects-yellowfin-roasted-garlic", loc("Roasted Garlic", "Ajo asado", "Aglio arrostito")),
      flavoredYellowfin("starkist-selects-yellowfin-basil-pesto", loc("Basil Pesto", "Pesto de albahaca", "Pesto al basilico")),
      flavoredYellowfin("starkist-selects-yellowfin-red-peppers", loc("Crushed Red Peppers", "Pimientos rojos triturados", "Peperoncino rosso tritato")),
      selects(
        "starkist-selects-yellowfin-water",
        loc("Solid Yellowfin Tuna in Water with Sea Salt", "Atún de aleta amarilla sólido en agua con sal marina", "Tonno pinna gialla in pezzo unico in acqua con sale marino"),
        loc(
          "StarKist Selects solid yellowfin tuna, wild caught and hand selected, packed in water with sea salt.",
          "StarKist Selects atún de aleta amarilla sólido, de pesca silvestre y selección manual, envasado en agua con sal marina.",
          "StarKist Selects tonno pinna gialla in pezzo unico, pescato in natura e selezionato a mano, in acqua con sale marino.",
        ),
        [loc("Yellowfin", "Aleta amarilla", "Pinna gialla"), loc("In water with sea salt", "En agua con sal marina", "In acqua con sale marino")],
      ),
      selects(
        "starkist-selects-albacore-water",
        loc("Solid White Albacore Tuna in Water with Sea Salt", "Atún blanco Albacore sólido en agua con sal marina", "Tonno bianco Albacore in pezzo unico in acqua con sale marino"),
        loc(
          "StarKist Selects solid white albacore tuna, wild caught and hand selected, packed in water with sea salt.",
          "StarKist Selects atún blanco Albacore sólido, de pesca silvestre y selección manual, envasado en agua con sal marina.",
          "StarKist Selects tonno bianco Albacore in pezzo unico, pescato in natura e selezionato a mano, in acqua con sale marino.",
        ),
        [loc("Albacore", "Albacore", "Albacore"), loc("In water with sea salt", "En agua con sal marina", "In acqua con sale marino")],
      ),
      selects(
        "starkist-selects-chunk-white-no-salt",
        loc("Chunk White Albacore Tuna in Water — No Salt Added", "Atún blanco Albacore en trozos en agua — sin sal añadida", "Tonno bianco Albacore a pezzi in acqua — senza sale aggiunto"),
        loc(
          "StarKist Selects chunk white albacore tuna, wild caught and hand selected, packed in water with no salt added.",
          "StarKist Selects atún blanco Albacore en trozos, de pesca silvestre y selección manual, envasado en agua sin sal añadida.",
          "StarKist Selects tonno bianco Albacore a pezzi, pescato in natura e selezionato a mano, in acqua senza sale aggiunto.",
        ),
        [loc("Albacore", "Albacore", "Albacore"), loc("No salt added", "Sin sal añadida", "Senza sale aggiunto")],
      ),
      selects(
        "starkist-selects-pink-salmon",
        loc("Boneless Skinless Jumbo Lump Pink Salmon in Water", "Salmón rosado jumbo sin piel y sin espinas en agua", "Salmone rosa jumbo lump senza pelle e senza lische in acqua"),
        loc(
          "StarKist Selects wild pink salmon, boneless and skinless in jumbo lumps, hand selected and packed in water.",
          "StarKist Selects salmón rosado silvestre, sin espinas ni piel en trozos jumbo, de selección manual y envasado en agua.",
          "StarKist Selects salmone rosa selvaggio, senza lische e senza pelle in pezzi jumbo, selezionato a mano e conservato in acqua.",
        ),
        [loc("Pink salmon", "Salmón rosado", "Salmone rosa"), loc("Boneless · skinless", "Sin espinas · sin piel", "Senza lische · senza pelle")],
      ),
    ],
  },
];

export const starKistProducts: CatalogProduct[] = starKistGroups.flatMap((group) => group.products);
