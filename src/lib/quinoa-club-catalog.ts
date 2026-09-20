import { loc } from "@/i18n/t";
import type { PortfolioProduct } from "@/lib/content";

const brand = loc("Quinoa Club", "Quinoa Club");
const glutenFree = loc("Gluten free", "Sin gluten");
const vegan = loc("Vegan", "Vegano");
const kosher = loc("Kosher Parve", "Kosher Parve");
const probiotics = loc("With probiotics", "Con probióticos");
const shelf12 = loc("12-month shelf life", "Vida útil de 12 meses");
const shelf9 = loc("9-month shelf life", "Vida útil de 9 meses");

export const quinoaClubGroceryProducts: PortfolioProduct[] = [
  {
    slug: "quinoa-club-grain",
    name: loc("Quinoa Club Quinoa Grain", "Quinua en grano Quinoa Club"),
    description: loc(
      "Sweet white quinoa grain from Quinoa Club. 100% quinoa, gluten free, non-GMO and certified free of pesticides and heavy metals. Doypack pouches of 250 g and 500 g, plus 25 kg sacks.",
      "Quinua blanca dulce de Quinoa Club. 100% quinua, sin gluten, no GMO y certificada libre de pesticidas y metales pesados. Doypack de 250 g y 500 g, y sacos de 25 kg.",
    ),
    image: "/products/quinoa-club/quinoa-grain.jpg",
    details: [brand, loc("250 g / 500 g / 25 kg", "250 g / 500 g / 25 kg"), glutenFree, kosher, shelf12],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-quinoarepa",
    name: loc("Quinoa Club Quinoarepa Mix", "Mezcla Quinoarepa Quinoa Club"),
    description: loc(
      "Premix for quinoa arepas, pupusas and gorditas. Precooked white corn flour with quinoa, psyllium and probiotics. No preservatives, artificial colors or added sugar. 400 g zipper pouch.",
      "Premix para arepas, pupusas y gorditas de quinua. Harina de maíz blanco precocida con quinua, psyllium y probióticos. Sin conservantes, colorantes artificiales ni azúcar añadida. Doypack de 400 g.",
    ),
    image: "/products/quinoa-club/quinoarepa.jpg",
    details: [
      brand,
      loc("400 g", "400 g"),
      loc("Arepa / pupusa / gordita", "Arepa / pupusa / gordita"),
      probiotics,
      glutenFree,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-waffles",
    name: loc("Quinoa Club Waffle & Pancake Mix", "Mezcla para waffles y pancakes Quinoa Club"),
    description: loc(
      "Premix for waffles and pancakes with rice, quinoa, oats and organic panela. Vanilla and banana flavors. Vegan, gluten free and kosher parve, in a 300 g zipper pouch.",
      "Premix para waffles y pancakes con arroz, quinua, avena y panela orgánica. Sabores vainilla y banano. Vegano, sin gluten y kosher parve, en doypack de 300 g.",
    ),
    image: "/products/quinoa-club/quinoa-waffles.jpg",
    details: [
      brand,
      loc("300 g", "300 g"),
      loc("Vanilla & banana", "Vainilla y banano"),
      vegan,
      glutenFree,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-spaghetti",
    name: loc("Quinoa Club Spaghetti", "Espagueti Quinoa Club"),
    description: loc(
      "Spaghetti fortified with quinoa — wheat semolina and quinoa flour. Egg-free, with no preservatives, artificial colors or added sugar. 250 g folding box.",
      "Espagueti fortificado con quinua: sémola de trigo y harina de quinua. Sin huevo, sin conservantes, colorantes artificiales ni azúcar añadida. Caja de 250 g.",
    ),
    image: "/products/quinoa-club/quinoa-spaghetti.jpg",
    details: [brand, loc("250 g", "250 g"), loc("Fortified with quinoa", "Fortificado con quinua"), kosher, shelf12],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-fusilli",
    name: loc("Quinoa Club High-Protein Fusilli", "Fusilli de proteína Quinoa Club"),
    description: loc(
      "Plant-based high-protein fusilli with quinoa, at 24% protein. Vegan, gluten free and egg-free, designed for texture and cooking performance. 250 g pack.",
      "Fusilli vegetal de alta proteína con quinua, con 24% de proteína. Vegano, sin gluten y sin huevo, pensado para textura y cocción. Empaque de 250 g.",
    ),
    image: "/products/quinoa-club/quinoa-fusilli.jpg",
    details: [
      brand,
      loc("250 g", "250 g"),
      loc("24% protein", "24% de proteína"),
      vegan,
      glutenFree,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-macaroni",
    name: loc("Quinoa Club High-Protein Macaroni", "Macarrones de proteína Quinoa Club"),
    description: loc(
      "Plant-based high-protein macaroni with quinoa, at 24% protein. The same vegan, gluten-free formulation as the fusilli, in a 250 g pack.",
      "Macarrones vegetales de alta proteína con quinua, con 24% de proteína. La misma fórmula vegana y sin gluten que el fusilli, en empaque de 250 g.",
    ),
    image: "/products/quinoa-club/quinoa-macaroni.jpg",
    details: [
      brand,
      loc("250 g", "250 g"),
      loc("24% protein", "24% de proteína"),
      vegan,
      glutenFree,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-cereal-puff",
    name: loc("Quinoa Club Cereal Puff", "Cereal Puff Quinoa Club"),
    description: loc(
      "Expanded quinoa cereal with probiotics. Natural or sweetened with organic panela. Baked, gluten free and kosher parve. Catalog packs of 100 g and 200 g.",
      "Cereal de quinua expandida con probióticos. Natural o endulzado con panela orgánica. Horneado, sin gluten y kosher parve. Empaques de 100 g y 200 g.",
    ),
    image: "/products/quinoa-club/cereal-puff.jpg",
    details: [
      brand,
      loc("100 / 200 g", "100 / 200 g"),
      loc("Natural & panela", "Natural y panela"),
      probiotics,
      glutenFree,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-musli",
    name: loc("Quinoa Club Müsli", "Müsli Quinoa Club"),
    description: loc(
      "Müsli of expanded quinoa, brown rice, corn flakes and dried cranberries, with probiotics. No preservatives, artificial colors or added sugar. 130 g zipper pouch plus 15 g minis.",
      "Müsli de quinua expandida, arroz integral, hojuelas de maíz y arándanos secos, con probióticos. Sin conservantes, colorantes artificiales ni azúcar añadida. Doypack de 130 g y minis de 15 g.",
    ),
    image: "/products/quinoa-club/musli.jpg",
    details: [brand, loc("130 g / 15 g", "130 g / 15 g"), probiotics, glutenFree, kosher],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-protein-loops",
    name: loc("Quinoa Club Protein Loops", "Protein Loops Quinoa Club"),
    description: loc(
      "Loop-shaped quinoa protein cereal with probiotics. Cinnamon roll and yellow-fruit flavors. Baked, with no added sugar, artificial colors or preservatives. 120 g pouch and 15 g minis.",
      "Cereal proteico de quinua en aros, con probióticos. Sabores cinnamon roll y frutos amarillos. Horneado, sin azúcar añadida, colorantes artificiales ni conservantes. Doypack de 120 g y minis de 15 g.",
    ),
    image: "/products/quinoa-club/protein-loops.jpg",
    details: [
      brand,
      loc("120 g / 15 g", "120 g / 15 g"),
      loc("Cinnamon roll & yellow fruit", "Cinnamon roll y frutos amarillos"),
      probiotics,
      glutenFree,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-baby-quinoa",
    name: loc("BabyQuinoa Cereal Puff", "BabyQuinoa Cereal Puff"),
    description: loc(
      "Baby quinoa cereal puffs — enzymatically hydrolyzed expanded quinoa and rice with natural fruit or vanilla flavor. Mini quinoa-rice cookies with banana and probiotics. 45 g zipper pouch.",
      "Cereal puff para bebé: quinua y arroz hidrolizados y expandidos, con sabor natural a fruta o vainilla. Mini galletas de arroz y quinua con banano y probióticos. Doypack de 45 g.",
    ),
    image: "/products/quinoa-club/baby-quinoa.jpg",
    details: [brand, loc("45 g", "45 g"), loc("Baby cereal", "Cereal infantil"), probiotics, glutenFree],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-soyquinoa",
    name: loc("SoyQuinoa Instant Soy Milk", "Leche de soya SoyQuinoa"),
    description: loc(
      "Instant powdered soy milk with quinoa, naturally cholesterol- and lactose-free, sweetened with stevia. Natural and vanilla. Mix with water — no cooking. 250 g pack, 12 per bale.",
      "Leche de soya instantánea en polvo con quinua, de forma natural libre de colesterol y lactosa, endulzada con stevia. Natural y vainilla. Solo se mezcla con agua, sin cocción. Empaque de 250 g, bulto de 12.",
    ),
    image: "/products/quinoa-club/soyquinoa.jpg",
    details: [
      brand,
      loc("250 g", "250 g"),
      loc("Natural & vanilla", "Natural y vainilla"),
      loc("Instant", "Instantánea"),
      glutenFree,
    ],
    imageFit: "contain",
  },
];

export const quinoaClubSnackProducts: PortfolioProduct[] = [
  {
    slug: "quinoa-club-crunchy-protein",
    name: loc("Quinoa Club Cronchy Protein", "Cronchy Protein Quinoa Club"),
    description: loc(
      "Lemon-flavored mix of baked chickpeas, lentils and puffed quinoa with probiotics. Gluten free, with no preservatives, artificial colors or added sugar. 115 g zipper pouch.",
      "Mezcla sabor limón de garbanzos y lentejas horneados con quinua expandida y probióticos. Sin gluten, sin conservantes, colorantes artificiales ni azúcar añadida. Doypack de 115 g.",
    ),
    image: "/products/quinoa-club/crunchy-protein.jpg",
    details: [brand, loc("115 g", "115 g"), loc("Lemon", "Limón"), probiotics, glutenFree, shelf9],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-toasts",
    name: loc("Quinoa Club Quinoa Toasts", "Tostadas de quinua Quinoa Club"),
    description: loc(
      "Expanded quinoa toasts with probiotics, quinoa protein concentrate, brown rice and Himalayan salt. Natural and cheese. Allergen-free, vegan and gluten free. 130 g zipper pouch.",
      "Tostadas de quinua expandida con probióticos, concentrado de proteína de quinua, arroz integral y sal del Himalaya. Natural y queso. Sin alérgenos, vegano y sin gluten. Doypack de 130 g.",
    ),
    image: "/products/quinoa-club/quinoa-toasts.jpg",
    details: [
      brand,
      loc("130 g", "130 g"),
      loc("Natural & cheese", "Natural y queso"),
      vegan,
      glutenFree,
      shelf9,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-sacha-inchi",
    name: loc("Quinoa Club Sacha Inchi Toast", "Tostaditas Sacha Inchi Quinoa Club"),
    description: loc(
      "Expanded sacha inchi toasts with probiotics, sacha inchi protein concentrate, brown rice and Himalayan salt. Lemon and BBQ. 12 g bags and 45 g zipper pouches.",
      "Tostaditas de sacha inchi expandido con probióticos, concentrado de proteína de sacha inchi, arroz integral y sal del Himalaya. Limón y BBQ. Bolsas de 12 g y doypack de 45 g.",
    ),
    image: "/products/quinoa-club/sacha-inchi-toast.jpg",
    details: [
      brand,
      loc("12 g / 45 g", "12 g / 45 g"),
      loc("Lemon & BBQ", "Limón y BBQ"),
      loc("43% protein", "43% de proteína"),
      glutenFree,
      shelf9,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-rings",
    name: loc("Quinoa Club Quinoa Rings", "Aros de quinua Quinoa Club"),
    description: loc(
      "Baked cassava-starch quinoa rings. Natural and spicy (dehydrated chili). Gluten free and MSG free, in 15 g metallized packs sold in 6-count bales.",
      "Aros de almidón de yuca y quinua horneados. Natural y picante (ají deshidratado). Sin gluten y sin glutamato, en empaques metalizados de 15 g, bulto de 6.",
    ),
    image: "/products/quinoa-club/quinoa-rings.jpg",
    details: [
      brand,
      loc("15 g · 6-pack", "15 g · pack de 6"),
      loc("Natural & spicy", "Natural y picante"),
      glutenFree,
      shelf9,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-quinoa-puff",
    name: loc("Quinoa Club Quinoa Puff", "Quinoa Puff Quinoa Club"),
    description: loc(
      "Extruded corn and quinoa snacks. Natural, or quinoa with chia and carrot. Gluten free, kosher parve and vegan. Metallized packs of 12 g, 40 g and 85 g.",
      "Snacks extruidos de maíz y quinua. Natural, o quinua con chía y zanahoria. Sin gluten, kosher parve y vegano. Empaques metalizados de 12 g, 40 g y 85 g.",
    ),
    image: "/products/quinoa-club/quinoa-puff.jpg",
    details: [
      brand,
      loc("12 / 40 / 85 g", "12 / 40 / 85 g"),
      loc("Natural & chia-carrot", "Natural y chía-zanahoria"),
      vegan,
      glutenFree,
      shelf9,
    ],
    imageFit: "contain",
  },
  {
    slug: "quinoa-club-chips",
    name: loc("Quinoa Club Quinoa Chips", "Quinoa Chips Quinoa Club"),
    description: loc(
      "Puffed quinoa and rice chips with probiotics, quinoa protein concentrate and Himalayan salt. Natural and cheese. 12 g metallized packs, 6 per package.",
      "Chips de quinua y arroz inflado con probióticos, concentrado de proteína de quinua y sal del Himalaya. Natural y queso. Empaques metalizados de 12 g, paquete de 6.",
    ),
    image: "/products/quinoa-club/quinoa-chips.jpg",
    details: [
      brand,
      loc("12 g · 6-pack", "12 g · pack de 6"),
      loc("Natural & cheese", "Natural y queso"),
      probiotics,
      glutenFree,
      shelf9,
    ],
    imageFit: "contain",
  },
];
