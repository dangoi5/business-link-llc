import { loc } from "@/i18n/t";
import type { CatalogProduct } from "@/components/ProductGrid";
import type { Loc } from "@/i18n/t";

const brand = loc("Chupa Chups", "Chupa Chups", "Chupa Chups");
const line = loc("CRNCH Popcorn", "CRNCH Popcorn", "CRNCH Popcorn");

function popcorn(flavor: string, name: Loc, description: Loc, sizes: string): CatalogProduct {
  return {
    slug: `chupa-chups-popcorn-${flavor}`,
    name,
    description,
    image: `/products/chupa-chups/chupa-chups-popcorn-${flavor}.png`,
    details: [brand, line, loc(sizes, sizes, sizes)],
    imageFit: "contain",
  };
}

/** Chupa Chups Popcorn by CRNCH Popcorn Concepts (Leiden, Netherlands). Source: crnch.chupachupspopcorn.com */
export const chupaChupsProducts: CatalogProduct[] = [
  popcorn(
    "apple",
    loc("Chupa Chups Popcorn — Apple", "Palomitas Chupa Chups — Manzana", "Popcorn Chupa Chups — Mela"),
    loc(
      "Round popcorn with a crisp, fruity green-apple glaze and a tart kick. Fun-size 90 g and classic 135 g bags.",
      "Palomitas redondas con un glaseado crujiente y afrutado de manzana verde, con un toque ácido. Bolsas fun de 90 g y clásicas de 135 g.",
      "Popcorn rotondi con una glassa croccante e fruttata alla mela verde, dal tocco aspro. Buste fun da 90 g e classiche da 135 g.",
    ),
    "90 / 135 g",
  ),
  popcorn(
    "strawberry",
    loc("Chupa Chups Popcorn — Strawberry", "Palomitas Chupa Chups — Fresa", "Popcorn Chupa Chups — Fragola"),
    loc(
      "Round popcorn glazed with sweet, summery strawberry flavour. Fun-size 90 g and classic 135 g bags.",
      "Palomitas redondas glaseadas con un dulce sabor a fresa. Bolsas fun de 90 g y clásicas de 135 g.",
      "Popcorn rotondi glassati al dolce gusto di fragola. Buste fun da 90 g e classiche da 135 g.",
    ),
    "90 / 135 g",
  ),
  popcorn(
    "cola",
    loc("Chupa Chups Popcorn — Cola", "Palomitas Chupa Chups — Cola", "Popcorn Chupa Chups — Cola"),
    loc(
      "Round popcorn with a fizzy, sweet cola-flavoured glaze, made for movie night. Fun-size 90 g and classic 135 g bags.",
      "Palomitas redondas con un glaseado dulce sabor cola, ideales para la noche de película. Bolsas fun de 90 g y clásicas de 135 g.",
      "Popcorn rotondi con una glassa dolce al gusto cola, perfetti per la serata film. Buste fun da 90 g e classiche da 135 g.",
    ),
    "90 / 135 g",
  ),
  popcorn(
    "caramel",
    loc("Chupa Chups Popcorn — Caramel", "Palomitas Chupa Chups — Caramelo", "Popcorn Chupa Chups — Caramello"),
    loc(
      "Round popcorn with a rich caramel coating and a hint of sea salt. Fun-size 110 g and classic 135 g bags.",
      "Palomitas redondas con una rica cobertura de caramelo y un toque de sal marina. Bolsas fun de 110 g y clásicas de 135 g.",
      "Popcorn rotondi con una ricca copertura al caramello e un pizzico di sale marino. Buste fun da 110 g e classiche da 135 g.",
    ),
    "110 / 135 g",
  ),
];
