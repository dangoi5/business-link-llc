import { loc } from "@/i18n/t";
import type { PortfolioProduct } from "@/lib/content";

const brand = loc("Quinoa Club", "Quinoa Club", "Quinoa Club");
const glutenFree = loc("Gluten free", "Sin gluten", "Senza glutine");
const vegan = loc("Vegan", "Vegano", "Vegano");
const kosher = loc("Kosher Parve", "Kosher Parve", "Kosher Parve");
const probiotics = loc("With probiotics", "Con probióticos", "Con probiotici");
const shelf12 = loc("12-month shelf life", "Vida útil de 12 meses", "Durata di conservazione di 12 mesi");
const shelf9 = loc("9-month shelf life", "Vida útil de 9 meses", "Durata di conservazione di 9 mesi");

export const quinoaClubGroceryProducts: PortfolioProduct[] = [
  {
    slug: "quinoa-club-grain",
    name: loc("Quinoa Club Quinoa Grain", "Quinua en grano Quinoa Club", "Quinoa in chicchi Quinoa Club"),
    description: loc(
      "Sweet white quinoa grain from Quinoa Club. 100% quinoa, gluten free, non-GMO and certified free of pesticides and heavy metals. Doypack pouches of 250 g and 500 g, plus 25 kg sacks.",
      "Quinua blanca dulce de Quinoa Club. 100% quinua, sin gluten, no GMO y certificada libre de pesticidas y metales pesados. Doypack de 250 g y 500 g, y sacos de 25 kg.",
      "Quinoa bianca dolce di Quinoa Club. 100% quinoa, senza glutine, non OGM e certificata priva di pesticidi e metalli pesanti. Buste doypack da 250 g e 500 g, più sacchi da 25 kg.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-grain.jpg",
    details: [brand, loc("250 g / 500 g / 25 kg", "250 g / 500 g / 25 kg", "250 g / 500 g / 25 kg"), glutenFree, kosher, shelf12],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-quinoarepa",
    name: loc("Quinoa Club Quinoarepa Mix", "Mezcla Quinoarepa Quinoa Club", "Miscela Quinoarepa Quinoa Club"),
    description: loc(
      "Premix for quinoa arepas, pupusas and gorditas. Precooked white corn flour with quinoa, psyllium and probiotics. No preservatives, artificial colors or added sugar. 400 g zipper pouch.",
      "Premix para arepas, pupusas y gorditas de quinua. Harina de maíz blanco precocida con quinua, psyllium y probióticos. Sin conservantes, colorantes artificiales ni azúcar añadida. Doypack de 400 g.",
      "Premix per arepa, pupusa e gordita di quinoa. Farina di mais bianco precotta con quinoa, psillio e probiotici. Senza conservanti, coloranti artificiali né zuccheri aggiunti. Busta doypack da 400 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoarepa.jpg",
    details: [
      brand,
      loc("400 g", "400 g", "400 g"),
      loc("Arepa / pupusa / gordita", "Arepa / pupusa / gordita", "Arepa / pupusa / gordita"),
      probiotics,
      glutenFree,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-waffles",
    name: loc("Quinoa Club Waffle & Pancake Mix", "Mezcla para waffles y pancakes Quinoa Club", "Miscela per waffle e pancake Quinoa Club"),
    description: loc(
      "Premix for waffles and pancakes with rice, quinoa, oats and organic panela. Vanilla and banana flavors. Vegan, gluten free and kosher parve, in a 300 g zipper pouch.",
      "Premix para waffles y pancakes con arroz, quinua, avena y panela orgánica. Sabores vainilla y banano. Vegano, sin gluten y kosher parve, en doypack de 300 g.",
      "Premix per waffle e pancake con riso, quinoa, avena e panela biologica. Gusti vaniglia e banana. Vegano, senza glutine e kosher parve, in busta doypack da 300 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-waffles.jpg",
    details: [
      brand,
      loc("300 g", "300 g", "300 g"),
      loc("Vanilla & banana", "Vainilla y banano", "Vaniglia e banana"),
      vegan,
      glutenFree,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-spaghetti",
    name: loc("Quinoa Club Spaghetti", "Espagueti Quinoa Club", "Spaghetti Quinoa Club"),
    description: loc(
      "Spaghetti fortified with quinoa — wheat semolina and quinoa flour. Egg-free, with no preservatives, artificial colors or added sugar. 250 g folding box.",
      "Espagueti fortificado con quinua: sémola de trigo y harina de quinua. Sin huevo, sin conservantes, colorantes artificiales ni azúcar añadida. Caja de 250 g.",
      "Spaghetti fortificati con quinoa: semola di grano e farina di quinoa. Senza uova, senza conservanti, coloranti artificiali né zuccheri aggiunti. Scatola da 250 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-spaghetti.jpg",
    details: [brand, loc("250 g", "250 g", "250 g"), loc("Fortified with quinoa", "Fortificado con quinua", "Fortificato con quinoa"), kosher, shelf12],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-fusilli",
    name: loc("Quinoa Club High-Protein Fusilli", "Fusilli de proteína Quinoa Club", "Fusilli proteici Quinoa Club"),
    description: loc(
      "Plant-based high-protein fusilli with quinoa, at 24% protein. Vegan, gluten free and egg-free, designed for texture and cooking performance. 250 g pack.",
      "Fusilli vegetal de alta proteína con quinua, con 24% de proteína. Vegano, sin gluten y sin huevo, pensado para textura y cocción. Empaque de 250 g.",
      "Fusilli vegetali ad alto contenuto proteico con quinoa, al 24% di proteine. Vegani, senza glutine e senza uova, pensati per texture e resa in cottura. Confezione da 250 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-fusilli.jpg",
    details: [
      brand,
      loc("250 g", "250 g", "250 g"),
      loc("24% protein", "24% de proteína", "24% di proteine"),
      vegan,
      glutenFree,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-macaroni",
    name: loc("Quinoa Club High-Protein Macaroni", "Macarrones de proteína Quinoa Club", "Maccheroni proteici Quinoa Club"),
    description: loc(
      "Plant-based high-protein macaroni with quinoa, at 24% protein. The same vegan, gluten-free formulation as the fusilli, in a 250 g pack.",
      "Macarrones vegetales de alta proteína con quinua, con 24% de proteína. La misma fórmula vegana y sin gluten que el fusilli, en empaque de 250 g.",
      "Maccheroni vegetali ad alto contenuto proteico con quinoa, al 24% di proteine. La stessa formulazione vegana e senza glutine dei fusilli, in confezione da 250 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-macaroni.jpg",
    details: [
      brand,
      loc("250 g", "250 g", "250 g"),
      loc("24% protein", "24% de proteína", "24% di proteine"),
      vegan,
      glutenFree,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-cereal-puff",
    name: loc("Quinoa Club Cereal Puff", "Cereal Puff Quinoa Club", "Cereal Puff Quinoa Club"),
    description: loc(
      "Expanded quinoa cereal with probiotics. Natural (70 g) or sweetened with organic cane sugar / panela (100 g). Baked, gluten free and kosher parve.",
      "Cereal de quinua expandida con probióticos. Natural (70 g) o endulzado con azúcar de caña orgánica / panela (100 g). Horneado, sin gluten y kosher parve.",
      "Cereale di quinoa soffiata con probiotici. Naturale (70 g) o dolcificato con zucchero di canna biologico / panela (100 g). Cotto al forno, senza glutine e kosher parve.",
    ),
    image: "/products/quinoa-club/lifestyle/cereal-puff.jpg",
    details: [
      brand,
      loc("70 / 100 g", "70 / 100 g", "70 / 100 g"),
      loc("Natural & cane sugar", "Natural y azúcar de caña", "Naturale e zucchero di canna"),
      probiotics,
      glutenFree,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-musli",
    name: loc("Quinoa Club Müsli", "Müsli Quinoa Club", "Müsli Quinoa Club"),
    description: loc(
      "Müsli of expanded quinoa, brown rice, corn flakes and dried cranberries, with probiotics. No preservatives, artificial colors or added sugar. 130 g zipper pouch plus 15 g minis.",
      "Müsli de quinua expandida, arroz integral, hojuelas de maíz y arándanos secos, con probióticos. Sin conservantes, colorantes artificiales ni azúcar añadida. Doypack de 130 g y minis de 15 g.",
      "Müsli di quinoa soffiata, riso integrale, fiocchi di mais e mirtilli rossi essiccati, con probiotici. Senza conservanti, coloranti artificiali né zuccheri aggiunti. Busta doypack da 130 g e miniporzioni da 15 g.",
    ),
    image: "/products/quinoa-club/lifestyle/musli.jpg",
    details: [brand, loc("130 g / 15 g", "130 g / 15 g", "130 g / 15 g"), probiotics, glutenFree, kosher],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-protein-loops",
    name: loc("Quinoa Club Protein Loops", "Protein Loops Quinoa Club", "Protein Loops Quinoa Club"),
    description: loc(
      "Loop-shaped quinoa protein cereal with probiotics, at 20% protein. Pineapple and cinnamon roll. Baked, with no added sugar, artificial colors or preservatives. 120 g pouch.",
      "Cereal proteico de quinua en aros, con probióticos, al 20% de proteína. Piña y cinnamon roll. Horneado, sin azúcar añadida, colorantes artificiales ni conservantes. Doypack de 120 g.",
      "Cereale proteico di quinoa a forma di anello, con probiotici, al 20% di proteine. Ananas e cinnamon roll. Cotto al forno, senza zuccheri aggiunti, coloranti artificiali né conservanti. Busta da 120 g.",
    ),
    image: "/products/quinoa-club/lifestyle/protein-loops.jpg",
    details: [
      brand,
      loc("120 g", "120 g", "120 g"),
      loc("Pineapple & cinnamon roll", "Piña y cinnamon roll", "Ananas e cinnamon roll"),
      loc("20% protein", "20% de proteína", "20% di proteine"),
      probiotics,
      glutenFree,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-baby-quinoa",
    name: loc("BabyQuinoa Cereal Puff", "BabyQuinoa Cereal Puff", "BabyQuinoa Cereal Puff"),
    description: loc(
      "Baby quinoa cereal puffs — enzymatically hydrolyzed expanded quinoa and rice with natural fruit or vanilla flavor. Mini quinoa-rice cookies with banana and probiotics. 45 g zipper pouch.",
      "Cereal puff para bebé: quinua y arroz hidrolizados y expandidos, con sabor natural a fruta o vainilla. Mini galletas de arroz y quinua con banano y probióticos. Doypack de 45 g.",
      "Cereale puff per bambini: quinoa e riso idrolizzati ed espansi, con aroma naturale di frutta o vaniglia. Mini biscotti di riso e quinoa con banana e probiotici. Busta doypack da 45 g.",
    ),
    image: "/products/quinoa-club/lifestyle/baby-quinoa.jpg",
    details: [brand, loc("45 g", "45 g", "45 g"), loc("Baby cereal", "Cereal infantil", "Cereale infantile"), probiotics, glutenFree],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-soyquinoa",
    name: loc("SoyQuinoa Instant Soy Milk", "Leche de soya SoyQuinoa", "Latte di soia SoyQuinoa"),
    description: loc(
      "Instant powdered soy milk with quinoa, naturally cholesterol- and lactose-free, sweetened with stevia. Natural and vanilla. Mix with water — no cooking. 200 g pack.",
      "Leche de soya instantánea en polvo con quinua, de forma natural libre de colesterol y lactosa, endulzada con stevia. Natural y vainilla. Solo se mezcla con agua, sin cocción. Empaque de 200 g.",
      "Latte di soia istantaneo in polvere con quinoa, naturalmente privo di colesterolo e lattosio, dolcificato con stevia. Naturale e vaniglia. Si miscela con acqua, senza cottura. Confezione da 200 g.",
    ),
    image: "/products/quinoa-club/lifestyle/soyquinoa.jpg",
    details: [
      brand,
      loc("200 g", "200 g", "200 g"),
      loc("Natural & vanilla", "Natural y vainilla", "Naturale e vaniglia"),
      loc("Instant", "Instantánea", "Istantaneo"),
      glutenFree,
    ],
    imageFit: "cover",
  },
];

export const quinoaClubSnackProducts: PortfolioProduct[] = [
  {
    slug: "quinoa-club-crunchy-protein",
    name: loc("Quinoa Club Cronchy Protein", "Cronchy Protein Quinoa Club", "Cronchy Protein Quinoa Club"),
    description: loc(
      "Lemon-flavored mix of baked chickpeas, lentils and puffed quinoa with probiotics. Gluten free, with no preservatives, artificial colors or added sugar. 115 g zipper pouch.",
      "Mezcla sabor limón de garbanzos y lentejas horneados con quinua expandida y probióticos. Sin gluten, sin conservantes, colorantes artificiales ni azúcar añadida. Doypack de 115 g.",
      "Miscela al limone di ceci e lenticchie al forno con quinoa soffiata e probiotici. Senza glutine, senza conservanti, coloranti artificiali né zuccheri aggiunti. Busta doypack da 115 g.",
    ),
    image: "/products/quinoa-club/lifestyle/crunchy-protein.jpg",
    details: [brand, loc("115 g", "115 g", "115 g"), loc("Lemon", "Limón", "Limone"), probiotics, glutenFree, shelf9],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-toasts",
    name: loc("Quinoa Club Quinoa Toasts", "Tostadas de quinua Quinoa Club", "Toast di quinoa Quinoa Club"),
    description: loc(
      "Expanded quinoa toasts with probiotics, quinoa protein concentrate, brown rice and Himalayan salt. Natural and cheese. Allergen-free, vegan and gluten free. 130 g zipper pouch.",
      "Tostadas de quinua expandida con probióticos, concentrado de proteína de quinua, arroz integral y sal del Himalaya. Natural y queso. Sin alérgenos, vegano y sin gluten. Doypack de 130 g.",
      "Toast di quinoa soffiata con probiotici, concentrato di proteine di quinoa, riso integrale e sale dell’Himalaya. Naturale e formaggio. Senza allergeni, vegano e senza glutine. Busta doypack da 130 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-toasts.jpg",
    details: [
      brand,
      loc("130 g", "130 g", "130 g"),
      loc("Natural & cheese", "Natural y queso", "Naturale e formaggio"),
      vegan,
      glutenFree,
      shelf9,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-sacha-inchi",
    name: loc("Quinoa Club Sacha Inchi Toast", "Tostaditas Sacha Inchi Quinoa Club", "Toast Sacha Inchi Quinoa Club"),
    description: loc(
      "Expanded sacha inchi toasts with probiotics, sacha inchi protein concentrate, brown rice and Himalayan salt. Lemon and BBQ. 12 g bags and 45 g zipper pouches.",
      "Tostaditas de sacha inchi expandido con probióticos, concentrado de proteína de sacha inchi, arroz integral y sal del Himalaya. Limón y BBQ. Bolsas de 12 g y doypack de 45 g.",
      "Toast di sacha inchi soffiato con probiotici, concentrato di proteine di sacha inchi, riso integrale e sale dell’Himalaya. Limone e BBQ. Buste da 12 g e doypack da 45 g.",
    ),
    image: "/products/quinoa-club/lifestyle/sacha-inchi-toast.jpg",
    details: [
      brand,
      loc("12 g / 45 g", "12 g / 45 g", "12 g / 45 g"),
      loc("Lemon & BBQ", "Limón y BBQ", "Limone e BBQ"),
      loc("43% protein", "43% de proteína", "43% di proteine"),
      glutenFree,
      shelf9,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-rings",
    name: loc("Quinoa Club Quinoa Rings", "Aros de quinua Quinoa Club", "Anelli di quinoa Quinoa Club"),
    description: loc(
      "Baked cassava-starch quinoa rings with probiotics. Natural and hot chili. Gluten free, in 70 g zipper pouches.",
      "Aros de almidón de yuca y quinua horneados, con probióticos. Natural y picante. Sin gluten, en doypack de 70 g.",
      "Anelli di amido di manioca e quinoa cotti al forno, con probiotici. Naturale e piccante. Senza glutine, in busta doypack da 70 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-rings.jpg",
    details: [
      brand,
      loc("70 g", "70 g", "70 g"),
      loc("Natural & hot", "Natural y picante", "Naturale e piccante"),
      glutenFree,
      shelf9,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-snacks",
    name: loc("Quinoa Club Quinoa Snacks", "Snacks de quinua Quinoa Club", "Snack di quinoa Quinoa Club"),
    description: loc(
      "Baked extruded corn and quinoa snack bags with probiotics. Natural, chia and carrot, lemon, and BBQ. Gluten free and vegan. 12 g packs.",
      "Bolsas de snack extruido de maíz y quinua horneado, con probióticos. Natural, chía y zanahoria, limón y BBQ. Sin gluten y vegano. Empaques de 12 g.",
      "Buste di snack estruso di mais e quinoa cotto al forno, con probiotici. Naturale, chia e carota, limone e BBQ. Senza glutine e vegano. Confezioni da 12 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-snacks.jpg",
    details: [
      brand,
      loc("12 g", "12 g", "12 g"),
      loc("Natural, chia-carrot, lemon, BBQ", "Natural, chía-zanahoria, limón, BBQ", "Naturale, chia-carota, limone, BBQ"),
      vegan,
      glutenFree,
      shelf9,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-quinoa-puff",
    name: loc("Quinoa Club Quinoa Puff", "Quinoa Puff Quinoa Club", "Quinoa Puff Quinoa Club"),
    description: loc(
      "Extruded corn and quinoa snacks — Quinoa Puff. Natural, or quinoa with chia and carrot. Gluten free, kosher parve and vegan. 85 g metallized bags.",
      "Snacks extruidos de maíz y quinua — Quinoa Puff. Natural, o quinua con chía y zanahoria. Sin gluten, kosher parve y vegano. Bolsas metalizadas de 85 g.",
      "Snack estrusi di mais e quinoa — Quinoa Puff. Naturale, oppure quinoa con chia e carota. Senza glutine, kosher parve e vegano. Buste metallizzate da 85 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-puff.jpg",
    details: [
      brand,
      loc("85 g", "85 g", "85 g"),
      loc("Natural & chia-carrot", "Natural y chía-zanahoria", "Naturale e chia-carota"),
      vegan,
      glutenFree,
      shelf9,
    ],
    imageFit: "cover",
  },
  {
    slug: "quinoa-club-chips",
    name: loc("Quinoa Club Quinoa Chips", "Quinoa Chips Quinoa Club", "Quinoa Chips Quinoa Club"),
    description: loc(
      "Puffed quinoa and rice chips with probiotics, quinoa protein concentrate and Himalayan salt. Natural and cheddar cheese. 12 g metallized packs.",
      "Chips de quinua y arroz inflado con probióticos, concentrado de proteína de quinua y sal del Himalaya. Natural y queso cheddar. Empaques metalizados de 12 g.",
      "Chips di quinoa e riso soffiato con probiotici, concentrato di proteine di quinoa e sale dell’Himalaya. Naturale e cheddar. Confezioni metallizzate da 12 g.",
    ),
    image: "/products/quinoa-club/lifestyle/quinoa-chips.jpg",
    details: [
      brand,
      loc("12 g", "12 g", "12 g"),
      loc("Natural & cheddar", "Natural y cheddar", "Naturale e cheddar"),
      probiotics,
      glutenFree,
      shelf9,
    ],
    imageFit: "cover",
  },
];
