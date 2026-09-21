import { loc } from "@/i18n/t";
import type { CatalogProduct } from "@/components/ProductGrid";
import type { Loc } from "@/i18n/t";

export type LascoGroup = {
  id: string;
  label: Loc;
  products: CatalogProduct[];
};

const brand = loc("Lasco", "Lasco", "Lasco");
const foodDrinkLine = loc("Food Drink", "Food Drink", "Food Drink");
const chocolateLine = loc("Instant Chocolate", "Chocolate instantáneo", "Cioccolato istantaneo");

function drink(
  slug: string,
  en: string,
  es: string,
  it: string,
  size: string | null,
  image: string,
): CatalogProduct {
  return {
    slug,
    name: loc(en, es, it),
    description: loc(
      `${en} — a Jamaican fortified powdered food drink. Add water or milk.`,
      `${es} — bebida alimenticia en polvo fortificada de Jamaica. Se mezcla con agua o leche.`,
      `${it} — bevanda alimentare in polvere fortificata giamaicana. Da miscelare con acqua o latte.`,
    ),
    image,
    details: [
      brand,
      ...(size ? [loc(size, size, size)] : []),
      foodDrinkLine,
    ],
    imageFit: "contain",
  };
}

function chocolate(
  slug: string,
  en: string,
  es: string,
  it: string,
  size: string | null,
  image: string,
): CatalogProduct {
  return {
    slug,
    name: loc(en, es, it),
    description: loc(
      `${en} from Lasco — instant chocolate drink mix for retail and wholesale distribution.`,
      `${es} de Lasco — mezcla de chocolate instantáneo para distribución retail y mayoreo.`,
      `${it} di Lasco — miscela di cioccolato istantaneo per la distribuzione retail e all'ingrosso.`,
    ),
    image,
    details: [
      brand,
      ...(size ? [loc(size, size, size)] : []),
      chocolateLine,
    ],
    imageFit: "contain",
  };
}

export const lascoGroups: LascoGroup[] = [
  {
    id: "food-drinks",
    label: loc("Food Drink", "Food Drink", "Food Drink"),
    products: [
      drink(
        "lasco-vanilla-120g",
        "Lasco Food Drink — Vanilla",
        "Lasco Food Drink — Vainilla",
        "Lasco Food Drink — Vaniglia",
        "120 g",
        "/products/lasco/lasco-vanilla-120g.jpg",
      ),
      drink(
        "lasco-vanilla-50-sachet",
        "Lasco Food Drink — Vanilla, 50% Less Sugar",
        "Lasco Food Drink — Vainilla, 50% menos azúcar",
        "Lasco Food Drink — Vaniglia, 50% meno zucchero",
        null,
        "/products/lasco/lasco-vanilla-50-sachet.jpg",
      ),
      drink(
        "lasco-chocolate-120g",
        "Lasco Food Drink — Chocolate",
        "Lasco Food Drink — Chocolate",
        "Lasco Food Drink — Cioccolato",
        "120 g",
        "/products/lasco/lasco-chocolate-120g.jpg",
      ),
      drink(
        "lasco-strawberry-120g",
        "Lasco Food Drink — Strawberry",
        "Lasco Food Drink — Fresa",
        "Lasco Food Drink — Fragola",
        "120 g",
        "/products/lasco/lasco-strawberry-120g.jpg",
      ),
      drink(
        "lasco-pineapple-orange-120g",
        "Lasco Food Drink — Pineapple Orange",
        "Lasco Food Drink — Piña naranja",
        "Lasco Food Drink — Ananas arancia",
        "120 g",
        "/products/lasco/lasco-pineapple-orange-120g.jpg",
      ),
      drink(
        "lasco-peanut-punch-120g",
        "Lasco Food Drink — Peanut Punch",
        "Lasco Food Drink — Punch de maní",
        "Lasco Food Drink — Punch di arachidi",
        "120 g",
        "/products/lasco/lasco-peanut-punch-120g.jpg",
      ),
      drink(
        "lasco-creamy-malt-50-less-sugar",
        "Lasco Food Drink — Creamy Malt, 50% Less Sugar",
        "Lasco Food Drink — Malta cremosa, 50% menos azúcar",
        "Lasco Food Drink — Malto cremoso, 50% meno zucchero",
        null,
        "/products/lasco/lasco-creamy-malt-50-less-sugar.jpg",
      ),
      drink(
        "lasco-carrot-120g",
        "Lasco Food Drink — Carrot",
        "Lasco Food Drink — Zanahoria",
        "Lasco Food Drink — Carota",
        "120 g",
        "/products/lasco/lasco-carrot-120g.jpg",
      ),
      drink(
        "lasco-cherryberry-120g",
        "Lasco Food Drink — Cherryberry",
        "Lasco Food Drink — Cherryberry",
        "Lasco Food Drink — Cherryberry",
        "120 g",
        "/products/lasco/lasco-cherryberry-120g.jpg",
      ),
      drink(
        "lasco-almond-120g",
        "Lasco Food Drink — Almond",
        "Lasco Food Drink — Almendra",
        "Lasco Food Drink — Mandorla",
        "120 g",
        "/products/lasco/lasco-almond-120g.jpg",
      ),
      drink(
        "lasco-almond-50-sachet",
        "Lasco Food Drink — Almond, 50% Less Sugar",
        "Lasco Food Drink — Almendra, 50% menos azúcar",
        "Lasco Food Drink — Mandorla, 50% meno zucchero",
        null,
        "/products/lasco/lasco-almond-50-sachet.jpg",
      ),
    ],
  },
  {
    id: "instant-chocolate",
    label: loc("Instant Chocolate Drink", "Chocolate instantáneo", "Cioccolato istantaneo"),
    products: [
      chocolate(
        "instant-chocolate-mix-cans-6oz-12oz-20oz",
        "Lasco Instant Chocolate Mix",
        "Mezcla de chocolate instantáneo Lasco",
        "Miscela di cioccolato istantaneo Lasco",
        "6 oz / 12 oz / 20 oz",
        "/products/lasco/instant-chocolate-mix-cans-6oz-12oz-20oz.jpg",
      ),
      chocolate(
        "lasco-instant-chocolate-mix-mint-1oz",
        "Lasco Instant Chocolate Mix — Mint",
        "Mezcla de chocolate instantáneo Lasco — Menta",
        "Miscela di cioccolato istantaneo Lasco — Menta",
        "1 oz",
        "/products/lasco/lasco-instant-chocolate-mix-mint-1oz.jpg",
      ),
      chocolate(
        "lasco-marshmallow-instant-chocolate-display-box",
        "Lasco Instant Chocolate Mix — Marshmallow",
        "Mezcla de chocolate instantáneo Lasco — Malvavisco",
        "Miscela di cioccolato istantaneo Lasco — Marshmallow",
        null,
        "/products/lasco/lasco-marshmallow-instant-chocolate-display-box.jpg",
      ),
      chocolate(
        "lasco-caramel-instant-chocolate-display-box",
        "Lasco Instant Chocolate Mix — Caramel",
        "Mezcla de chocolate instantáneo Lasco — Caramelo",
        "Miscela di cioccolato istantaneo Lasco — Caramello",
        null,
        "/products/lasco/lasco-caramel-instant-chocolate-display-box.jpg",
      ),
      chocolate(
        "lasco-instant-chocolate-mix-nutmeg-display-box",
        "Lasco Instant Chocolate Mix — Nutmeg",
        "Mezcla de chocolate instantáneo Lasco — Nuez moscada",
        "Miscela di cioccolato istantaneo Lasco — Noce moscata",
        null,
        "/products/lasco/lasco-instant-chocolate-mix-nutmeg-display-box.jpg",
      ),
      chocolate(
        "lasco-instant-chocolate-mix-french-vanilla-display-box",
        "Lasco Instant Chocolate Mix — French Vanilla",
        "Mezcla de chocolate instantáneo Lasco — Vainilla francesa",
        "Miscela di cioccolato istantaneo Lasco — Vaniglia francese",
        null,
        "/products/lasco/lasco-instant-chocolate-mix-french-vanilla-display-box.jpg",
      ),
    ],
  },
];

export const lascoGroceryProducts: CatalogProduct[] = lascoGroups.flatMap((group) => group.products);
