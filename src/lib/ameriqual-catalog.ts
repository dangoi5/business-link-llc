import { loc } from "@/i18n/t";
import type { NutritionFacts, PortfolioProduct } from "@/lib/content";

function nf(
  servingEn: string,
  servingEs: string,
  servingIt: string,
  calories: string,
  extras: {
    servingsEn?: string;
    servingsEs?: string;
    servingsIt?: string;
    protein?: string;
    fat?: string;
    carbs?: string;
    sodium?: string;
  } = {},
): NutritionFacts {
  return {
    servingSize: loc(servingEn, servingEs, servingIt),
    ...(extras.servingsEn && extras.servingsEs && extras.servingsIt
      ? { servingsPerContainer: loc(extras.servingsEn, extras.servingsEs, extras.servingsIt) }
      : {}),
    calories,
    protein: extras.protein,
    totalFat: extras.fat,
    totalCarbohydrate: extras.carbs,
    sodium: extras.sodium,
  };
}

const flb = loc("Food Life Balanced", "Food Life Balanced", "Food Life Balanced");
const flbPlus = loc("Food Life Balanced+", "Food Life Balanced+", "Food Life Balanced+");
const shelf4 = loc("4-year shelf life", "Vida útil de 4 años", "Durata di conservazione di 4 anni");
const dairyFree = loc("Dairy free", "Sin lácteos", "Senza latticini");
const glutenFree = loc("Gluten free", "Sin gluten", "Senza glutine");
const noMsg = loc("No MSG", "Sin glutamato", "Senza glutammato");
const vegan = loc("Vegan", "Vegano", "Vegano");
const easyTear = loc("Easy-tear pouch", "Sobre de fácil apertura", "Busta a strappo facile");

export const ameriqualShelfStableProducts: PortfolioProduct[] = [
  {
    slug: "premium-white-chicken",
    name: loc("Premium White Chicken", "Pollo blanco premium", "Pollo bianco premium"),
    description: loc(
      "Fully cooked pouched white chicken from Food Life Balanced. Ready to eat or heat, with a 4-year shelf life from production.",
      "Pollo blanco cocido en sobre de Food Life Balanced. Listo para comer o calentar, con 4 años de vida útil desde la producción.",
      "Pollo bianco cotto in busta di Food Life Balanced. Pronto da consumare o da riscaldare, con 4 anni di durata di conservazione dalla produzione.",
    ),
    image: "/products/ameriqual/white-chicken.jpg",
    details: [flb, loc("2.6 oz pouch", "Sobre de 2.6 oz", "Busta da 2.6 oz"), shelf4, dairyFree, glutenFree],
  },
  {
    slug: "premium-chicken-salad",
    name: loc("Premium Chicken Salad", "Ensalada de pollo premium", "Insalata di pollo premium"),
    description: loc(
      "Fully cooked chicken salad in an easy-tear pouch. Available in 2.6 oz and 4.5 oz packs for retail, foodservice and institutional distribution.",
      "Ensalada de pollo cocida en sobre de fácil apertura. Disponible en 2.6 oz y 4.5 oz para retail, foodservice y distribución institucional.",
      "Insalata di pollo cotta in busta a strappo facile. Disponibile in formati da 2.6 oz e 4.5 oz per retail, foodservice e distribuzione istituzionale.",
    ),
    image: "/products/ameriqual/chicken-salad.jpg",
    details: [flb, loc("2.6 / 4.5 oz", "2.6 / 4.5 oz", "2.6 / 4.5 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("2 oz (56g)", "2 oz (56 g)", "2 oz (56 g)", "80", {
      servingsEn: "About 2 servings (4.5 oz pouch)",
      servingsEs: "Aprox. 2 porciones (sobre de 4.5 oz)",
      servingsIt: "Circa 2 porzioni (busta da 4.5 oz)",
      protein: "7g",
      fat: "2.5g",
      carbs: "2g",
      sodium: "260mg",
    }),
  },
  {
    slug: "buffalo-style-chicken",
    name: loc("Buffalo Style Chicken", "Pollo estilo búfalo", "Pollo stile buffalo"),
    description: loc(
      "Fully cooked buffalo-style chicken. No MSG, dairy free and gluten free, in 2.6 oz and 4.5 oz easy-tear pouches with a 4-year shelf life.",
      "Pollo estilo búfalo cocido. Sin glutamato, sin lácteos y sin gluten, en sobres de 2.6 oz y 4.5 oz de fácil apertura, con 4 años de vida útil.",
      "Pollo stile buffalo cotto. Senza glutammato, senza latticini e senza glutine, in buste a strappo facile da 2.6 oz e 4.5 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/buffalo-chicken.jpg",
    details: [flb, loc("2.6 / 4.5 oz", "2.6 / 4.5 oz", "2.6 / 4.5 oz"), shelf4, noMsg, dairyFree, glutenFree],
    nutrition: nf("2 oz (56g)", "2 oz (56 g)", "2 oz (56 g)", "90", {
      servingsEn: "About 2 servings (4.5 oz pouch)",
      servingsEs: "Aprox. 2 porciones (sobre de 4.5 oz)",
      servingsIt: "Circa 2 porzioni (busta da 4.5 oz)",
      protein: "9g",
      fat: "3.5g",
      carbs: "3g",
      sodium: "210mg",
    }),
  },
  {
    slug: "bbq-style-white-chicken",
    name: loc("BBQ Style White Chicken", "Pollo blanco estilo BBQ", "Pollo bianco stile BBQ"),
    description: loc(
      "Fully cooked BBQ-style white chicken in 2.6 oz and 4.5 oz shelf-stable pouches for sandwiches, plates and emergency feeding.",
      "Pollo blanco estilo BBQ cocido en sobres de 2.6 oz y 4.5 oz de larga duración, para sándwiches, platos y alimentación de emergencia.",
      "Pollo bianco stile BBQ cotto in buste a lunga conservazione da 2.6 oz e 4.5 oz, per panini, piatti e alimentazione di emergenza.",
    ),
    image: "/products/ameriqual/bbq-white-chicken.jpg",
    details: [flb, loc("2.6 / 4.5 oz", "2.6 / 4.5 oz", "2.6 / 4.5 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("2 oz (56g)", "2 oz (56 g)", "2 oz (56 g)", "90", {
      servingsEn: "About 2 servings (4.5 oz pouch)",
      servingsEs: "Aprox. 2 porciones (sobre de 4.5 oz)",
      servingsIt: "Circa 2 porzioni (busta da 4.5 oz)",
      protein: "11g",
      fat: "3.5g",
      carbs: "3g",
      sodium: "410mg",
    }),
  },
  {
    slug: "pollo-asado",
    name: loc("Pollo Asado", "Pollo asado", "Pollo Asado"),
    description: loc(
      "Fully cooked mild and smoky citrus marinated chicken. Dairy free and gluten free, in a 4.5 oz easy-tear pouch with a 4-year shelf life.",
      "Pollo cocido con marinada cítrica suave y ahumada. Sin lácteos y sin gluten, en sobre de 4.5 oz de fácil apertura, con 4 años de vida útil.",
      "Pollo cotto con marinatura agrumata delicata e affumicata. Senza latticini e senza glutine, in busta a strappo facile da 4.5 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/pollo-asado.jpg",
    details: [flb, loc("4.5 oz pouch", "Sobre de 4.5 oz", "Busta da 4.5 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("2 oz (56g)", "2 oz (56 g)", "2 oz (56 g)", "90", {
      servingsEn: "About 2 servings",
      servingsEs: "Aprox. 2 porciones",
      servingsIt: "Circa 2 porzioni",
      protein: "11g",
      fat: "3.5g",
      carbs: "3g",
      sodium: "310mg",
    }),
  },
  {
    slug: "bbq-style-sauce-with-beef",
    name: loc("BBQ Style Sauce with Beef", "Salsa BBQ con res", "Salsa BBQ con manzo"),
    description: loc(
      "Fully cooked beef in BBQ-style sauce. Dairy free and gluten free, in a 4.5 oz easy-tear pouch with a 4-year shelf life.",
      "Res cocida en salsa estilo BBQ. Sin lácteos y sin gluten, en sobre de 4.5 oz de fácil apertura, con 4 años de vida útil.",
      "Manzo cotto in salsa stile BBQ. Senza latticini e senza glutine, in busta a strappo facile da 4.5 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/bbq-sauce-with-beef.jpg",
    details: [flb, loc("4.5 oz pouch", "Sobre de 4.5 oz", "Busta da 4.5 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("2 oz (56g)", "2 oz (56 g)", "2 oz (56 g)", "70", {
      servingsEn: "About 2 servings",
      servingsEs: "Aprox. 2 porciones",
      servingsIt: "Circa 2 porzioni",
      protein: "8g",
      fat: "1.5g",
      carbs: "7g",
      sodium: "180mg",
    }),
  },
  {
    slug: "hearty-beef-stew",
    name: loc("Hearty Beef Stew", "Estofado de res", "Stufato di manzo"),
    description: loc(
      "Fully cooked beef stew with vegetables in a shelf-stable pouch. Available in 7 oz and 15 oz packs, ready to heat and serve.",
      "Estofado de res con verduras, cocido en sobre de larga duración. Disponible en 7 oz y 15 oz, listo para calentar y servir.",
      "Stufato di manzo con verdure, cotto in busta a lunga conservazione. Disponibile in formati da 7 oz e 15 oz, pronto da riscaldare e servire.",
    ),
    image: "/products/ameriqual/hearty-beef-stew.jpg",
    details: [flb, loc("7 / 15 oz", "7 / 15 oz", "7 / 15 oz"), shelf4, dairyFree],
    nutrition: nf("1 cup (270g)", "1 taza (270 g)", "1 tazza (270 g)", "170", {
      servingsEn: "About 2 servings (15 oz pouch)",
      servingsEs: "Aprox. 2 porciones (sobre de 15 oz)",
      servingsIt: "Circa 2 porzioni (busta da 15 oz)",
      protein: "6g",
      fat: "3.5g",
      carbs: "27g",
      sodium: "590mg",
    }),
  },
  {
    slug: "cheesy-mac",
    name: loc("Cheesy Mac", "Cheesy Mac", "Cheesy Mac"),
    description: loc(
      "Fully cooked macaroni and cheese dinner. Heat and serve from an easy-tear pouch with a 4-year shelf life.",
      "Macarrones con queso cocidos. Caliente y sirva desde un sobre de fácil apertura, con 4 años de vida útil.",
      "Maccheroni al formaggio cotti. Da riscaldare e servire dalla busta a strappo facile, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/cheesy-mac.jpg",
    details: [flb, loc("7 oz pouch", "Sobre de 7 oz", "Busta da 7 oz"), shelf4, easyTear],
    nutrition: nf("1 pouch (198g)", "1 sobre (198 g)", "1 busta (198 g)", "160", {
      protein: "8g",
      fat: "2.5g",
      carbs: "24g",
      sodium: "470mg",
    }),
  },
  {
    slug: "spaghetti-tomato-sauce",
    name: loc("Spaghetti in Tomato Sauce", "Espagueti en salsa de tomate", "Spaghetti in salsa di pomodoro"),
    description: loc(
      "Fully cooked spaghetti in tomato sauce. Dairy free, in a 7 oz easy-tear pouch with a 4-year shelf life.",
      "Espagueti cocido en salsa de tomate. Sin lácteos, en sobre de 7 oz de fácil apertura, con 4 años de vida útil.",
      "Spaghetti cotti in salsa di pomodoro. Senza latticini, in busta a strappo facile da 7 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/spaghetti-tomato-sauce.jpg",
    details: [flb, loc("7 oz pouch", "Sobre de 7 oz", "Busta da 7 oz"), shelf4, dairyFree],
    nutrition: nf("1 pouch (198g)", "1 sobre (198 g)", "1 busta (198 g)", "150", {
      protein: "5g",
      fat: "2.5g",
      carbs: "28g",
      sodium: "470mg",
    }),
  },
  {
    slug: "chili-with-bean",
    name: loc("Chili with Bean", "Chili con frijol", "Chili con fagioli"),
    description: loc(
      "Fully cooked chili with beans. Dairy free and gluten free, in 7 oz and 15 oz easy-tear pouches with a 4-year shelf life.",
      "Chili cocido con frijoles. Sin lácteos y sin gluten, en sobres de 7 oz y 15 oz de fácil apertura, con 4 años de vida útil.",
      "Chili cotto con fagioli. Senza latticini e senza glutine, in buste a strappo facile da 7 oz e 15 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/chili-with-bean.jpg",
    details: [flb, loc("7 / 15 oz", "7 / 15 oz", "7 / 15 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("1 cup (230g)", "1 taza (230 g)", "1 tazza (230 g)", "260", {
      servingsEn: "About 2 servings (15 oz pouch)",
      servingsEs: "Aprox. 2 porciones (sobre de 15 oz)",
      servingsIt: "Circa 2 porzioni (busta da 15 oz)",
      protein: "14g",
      fat: "5g",
      carbs: "41g",
      sodium: "330mg",
    }),
  },
  {
    slug: "pasta-garden-vegetables",
    name: loc("Pasta with Garden Vegetables", "Pasta con verduras de jardín", "Pasta con verdure dell’orto"),
    description: loc(
      "Fully cooked pasta with garden vegetables in tomato sauce. Dairy free, in an 8 oz easy-tear pouch with a 4-year shelf life.",
      "Pasta cocida con verduras de jardín en salsa de tomate. Sin lácteos, en sobre de 8 oz de fácil apertura, con 4 años de vida útil.",
      "Pasta cotta con verdure dell’orto in salsa di pomodoro. Senza latticini, in busta a strappo facile da 8 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/pasta-garden-vegetables.jpg",
    details: [flb, loc("8 oz pouch", "Sobre de 8 oz", "Busta da 8 oz"), shelf4, dairyFree],
    nutrition: nf("1 pouch (227g)", "1 sobre (227 g)", "1 busta (227 g)", "380", {
      protein: "11g",
      fat: "15g",
      carbs: "46g",
      sodium: "300mg",
    }),
  },
  {
    slug: "southwestern-chicken-rice",
    name: loc("Southwestern Chicken with Beans & Rice", "Pollo sureño con frijoles y arroz", "Pollo sudoccidentale con fagioli e riso"),
    description: loc(
      "Fully cooked southwestern-style chicken with beans and rice. Dairy free, in 8 oz and 15 oz easy-tear pouches with a 4-year shelf life.",
      "Pollo estilo sureño cocido con frijoles y arroz. Sin lácteos, en sobres de 8 oz y 15 oz de fácil apertura, con 4 años de vida útil.",
      "Pollo stile sudoccidentale cotto con fagioli e riso. Senza latticini, in buste a strappo facile da 8 oz e 15 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/southwestern-chicken-rice.jpg",
    details: [flb, loc("8 / 15 oz", "8 / 15 oz", "8 / 15 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("1 cup (275g)", "1 taza (275 g)", "1 tazza (275 g)", "220", {
      servingsEn: "About 2 servings (15 oz pouch)",
      servingsEs: "Aprox. 2 porciones (sobre de 15 oz)",
      servingsIt: "Circa 2 porzioni (busta da 15 oz)",
      protein: "14g",
      fat: "3.5g",
      carbs: "42g",
      sodium: "480mg",
    }),
  },
  {
    slug: "white-chicken-chili",
    name: loc("White Chicken Chili", "Chili blanco de pollo", "Chili bianco di pollo"),
    description: loc(
      "Fully cooked white chicken chili. Dairy free and gluten free, in 8 oz and 15 oz easy-tear pouches with a 4-year shelf life.",
      "Chili blanco de pollo cocido. Sin lácteos y sin gluten, en sobres de 8 oz y 15 oz de fácil apertura, con 4 años de vida útil.",
      "Chili bianco di pollo cotto. Senza latticini e senza glutine, in buste a strappo facile da 8 oz e 15 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/white-chicken-chili.jpg",
    details: [flb, loc("8 / 15 oz", "8 / 15 oz", "8 / 15 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("1 cup (275g)", "1 taza (275 g)", "1 tazza (275 g)", "200", {
      servingsEn: "About 2 servings (15 oz pouch)",
      servingsEs: "Aprox. 2 porciones (sobre de 15 oz)",
      servingsIt: "Circa 2 porzioni (busta da 15 oz)",
      protein: "17g",
      fat: "5g",
      carbs: "28g",
      sodium: "480mg",
    }),
  },
  {
    slug: "spaghetti-meat-sauce",
    name: loc("Spaghetti with Meat Sauce", "Espagueti con salsa de carne", "Spaghetti con sugo di carne"),
    description: loc(
      "Fully cooked spaghetti with meat sauce. Dairy free, in an 8 oz easy-tear pouch with a 4-year shelf life.",
      "Espagueti cocido con salsa de carne. Sin lácteos, en sobre de 8 oz de fácil apertura, con 4 años de vida útil.",
      "Spaghetti cotti con sugo di carne. Senza latticini, in busta a strappo facile da 8 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/spaghetti-meat-sauce.jpg",
    details: [flb, loc("8 oz pouch", "Sobre de 8 oz", "Busta da 8 oz"), shelf4, dairyFree],
    nutrition: nf("1 pouch (227g)", "1 sobre (227 g)", "1 busta (227 g)", "210", {
      protein: "8g",
      fat: "6g",
      carbs: "32g",
      sodium: "480mg",
    }),
  },
  {
    slug: "pizza-mac",
    name: loc("Pizza Mac", "Pizza Mac", "Pizza Mac"),
    description: loc(
      "Fully cooked pasta in pepperoni pizza flavored sauce. A 15 oz easy-tear entrée pouch with a 4-year shelf life.",
      "Pasta cocida en salsa con sabor a pizza de pepperoni. Entrada de 15 oz en sobre de fácil apertura, con 4 años de vida útil.",
      "Pasta cotta in salsa al gusto pizza pepperoni. Piatto principale da 15 oz in busta a strappo facile, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/pizza-mac.jpg",
    details: [flb, loc("15 oz pouch", "Sobre de 15 oz", "Busta da 15 oz"), shelf4, easyTear],
    nutrition: nf("1 cup (260g)", "1 taza (260 g)", "1 tazza (260 g)", "170", {
      servingsEn: "About 2 servings",
      servingsEs: "Aprox. 2 porciones",
      servingsIt: "Circa 2 porzioni",
      protein: "5g",
      fat: "1.5g",
      carbs: "35g",
      sodium: "310mg",
    }),
  },
  {
    slug: "pasta-traditional-meat-sauce",
    name: loc("Pasta with Traditional Meat Sauce", "Pasta con salsa de carne tradicional", "Pasta con sugo di carne tradizionale"),
    description: loc(
      "Fully cooked pasta in a traditional meat sauce. A 15 oz entrée pouch built for long-life storage and distribution.",
      "Pasta cocida en salsa de carne tradicional. Entrada de 15 oz en sobre, pensada para almacenamiento y distribución de larga duración.",
      "Pasta cotta in sugo di carne tradizionale. Piatto principale da 15 oz in busta, pensato per stoccaggio e distribuzione a lunga conservazione.",
    ),
    image: "/products/ameriqual/pasta-meat-sauce.jpg",
    details: [flb, loc("15 oz pouch", "Sobre de 15 oz", "Busta da 15 oz"), shelf4, dairyFree],
    nutrition: nf("1 cup (270g)", "1 taza (270 g)", "1 tazza (270 g)", "210", {
      servingsEn: "About 2 servings",
      servingsEs: "Aprox. 2 porciones",
      servingsIt: "Circa 2 porzioni",
      protein: "8g",
      fat: "2.5g",
      carbs: "38g",
      sodium: "480mg",
    }),
  },
  {
    slug: "marinara-mac",
    name: loc("Marinara Mac", "Marinara Mac", "Marinara Mac"),
    description: loc(
      "Fully cooked pasta in tomato sauce. Dairy free and vegan, in a 15 oz easy-tear pouch with a 4-year shelf life.",
      "Pasta cocida en salsa de tomate. Sin lácteos y vegana, en sobre de 15 oz de fácil apertura, con 4 años de vida útil.",
      "Pasta cotta in salsa di pomodoro. Senza latticini e vegana, in busta a strappo facile da 15 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/marinara-mac.jpg",
    details: [flb, loc("15 oz pouch", "Sobre de 15 oz", "Busta da 15 oz"), shelf4, dairyFree, vegan],
    nutrition: nf("1 cup (260g)", "1 taza (260 g)", "1 tazza (260 g)", "170", {
      servingsEn: "About 2 servings",
      servingsEs: "Aprox. 2 porciones",
      servingsIt: "Circa 2 porzioni",
      protein: "5g",
      fat: "0.5g",
      carbs: "35g",
      sodium: "310mg",
    }),
  },
  {
    slug: "hot-chili",
    name: loc("Hot Chili", "Chili picante", "Chili piccante"),
    description: loc(
      "Fully cooked hot chili in a 15 oz entrée pouch. Dairy free and gluten free, with a 4-year shelf life from production.",
      "Chili picante cocido en sobre de 15 oz. Sin lácteos y sin gluten, con 4 años de vida útil desde la producción.",
      "Chili piccante cotto in busta da 15 oz. Senza latticini e senza glutine, con 4 anni di durata di conservazione dalla produzione.",
    ),
    image: "/products/ameriqual/hot-chili.jpg",
    details: [flb, loc("15 oz pouch", "Sobre de 15 oz", "Busta da 15 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("1 cup (275g)", "1 taza (275 g)", "1 tazza (275 g)", "210", {
      servingsEn: "About 2 servings",
      servingsEs: "Aprox. 2 porciones",
      servingsIt: "Circa 2 porzioni",
      protein: "12g",
      fat: "4.5g",
      carbs: "38g",
      sodium: "480mg",
    }),
  },
  {
    slug: "ring-o-roni",
    name: loc("Ring-O-Roni", "Ring-O-Roni", "Ring-O-Roni"),
    description: loc(
      "Fully cooked pasta rings in tomato sauce. A familiar, long-life entrée for retail and high-volume feeding programs.",
      "Aros de pasta cocidos en salsa de tomate. Una entrada familiar de larga duración para retail y programas de alimentación de alto volumen.",
      "Anelli di pasta cotti in salsa di pomodoro. Un piatto principale familiare a lunga conservazione per il retail e i programmi di alimentazione ad alto volume.",
    ),
    image: "/products/ameriqual/ring-o-roni.jpg",
    details: [flb, loc("15 oz pouch", "Sobre de 15 oz", "Busta da 15 oz"), shelf4],
    nutrition: nf("1 cup (260g)", "1 taza (260 g)", "1 tazza (260 g)", "170", {
      servingsEn: "About 2 servings",
      servingsEs: "Aprox. 2 porciones",
      servingsIt: "Circa 2 porzioni",
      protein: "5g",
      fat: "1g",
      carbs: "35g",
      sodium: "480mg",
    }),
  },
  {
    slug: "condensed-chicken-noodle-soup",
    name: loc("Condensed Chicken Noodle Soup", "Sopa condensada de pollo con fideos", "Zuppa condensata di pollo con noodles"),
    description: loc(
      "Shelf-stable condensed chicken noodle soup in a 10 oz pouch. Dairy free, with a 4-year shelf life from production.",
      "Sopa condensada de pollo con fideos en sobre de 10 oz. Sin lácteos, con 4 años de vida útil desde la producción.",
      "Zuppa condensata di pollo con noodles in busta da 10 oz. Senza latticini, con 4 anni di durata di conservazione dalla produzione.",
    ),
    image: "/products/ameriqual/chicken-noodle-soup.jpg",
    details: [flb, loc("10 oz pouch", "Sobre de 10 oz", "Busta da 10 oz"), shelf4, dairyFree],
    nutrition: nf("1/2 cup condensed (140g)", "1/2 taza condensada (140 g)", "1/2 tazza condensata (140 g)", "70", {
      servingsEn: "About 2 servings",
      servingsEs: "Aprox. 2 porciones",
      servingsIt: "Circa 2 porzioni",
      protein: "3g",
      fat: "1g",
      carbs: "12g",
      sodium: "340mg",
    }),
  },
  {
    slug: "condensed-cream-of-mushroom-soup",
    name: loc("Condensed Cream of Mushroom Soup", "Sopa condensada crema de champiñones", "Zuppa condensata crema di funghi"),
    description: loc(
      "Shelf-stable condensed cream of mushroom soup in a 10 oz easy-tear pouch. Four-year shelf life from production.",
      "Sopa condensada crema de champiñones en sobre de 10 oz de fácil apertura. 4 años de vida útil desde la producción.",
      "Zuppa condensata crema di funghi in busta a strappo facile da 10 oz. 4 anni di durata di conservazione dalla produzione.",
    ),
    image: "/products/ameriqual/cream-of-mushroom.jpg",
    details: [flb, loc("10 oz pouch", "Sobre de 10 oz", "Busta da 10 oz"), shelf4, easyTear],
    nutrition: nf("1/2 cup condensed (110g)", "1/2 taza condensada (110 g)", "1/2 tazza condensata (110 g)", "90", {
      servingsEn: "About 2.5 servings",
      servingsEs: "Aprox. 2.5 porciones",
      servingsIt: "Circa 2.5 porzioni",
      protein: "3g",
      fat: "5g",
      carbs: "9g",
      sodium: "340mg",
    }),
  },
  {
    slug: "condensed-tomato-soup",
    name: loc("Condensed Tomato Soup", "Sopa condensada de tomate", "Zuppa condensata di pomodoro"),
    description: loc(
      "Shelf-stable condensed tomato soup. Dairy free and vegan, in a 10 oz easy-tear pouch with a 4-year shelf life.",
      "Sopa condensada de tomate de larga duración. Sin lácteos y vegana, en sobre de 10 oz de fácil apertura, con 4 años de vida útil.",
      "Zuppa condensata di pomodoro a lunga conservazione. Senza latticini e vegana, in busta a strappo facile da 10 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/tomato-soup.jpg",
    details: [flb, loc("10 oz pouch", "Sobre de 10 oz", "Busta da 10 oz"), shelf4, dairyFree, vegan],
    nutrition: nf("1/2 cup condensed (110g)", "1/2 taza condensada (110 g)", "1/2 tazza condensata (110 g)", "80", {
      servingsEn: "About 2.5 servings",
      servingsEs: "Aprox. 2.5 porciones",
      servingsIt: "Circa 2.5 porzioni",
      protein: "2g",
      fat: "0g",
      carbs: "17g",
      sodium: "150mg",
    }),
  },
  {
    slug: "condensed-vegetable-soup",
    name: loc("Condensed Vegetable Soup", "Sopa condensada de verduras", "Zuppa condensata di verdure"),
    description: loc(
      "Shelf-stable condensed vegetable soup. Dairy free, in a 10 oz easy-tear pouch with a 4-year shelf life.",
      "Sopa condensada de verduras de larga duración. Sin lácteos, en sobre de 10 oz de fácil apertura, con 4 años de vida útil.",
      "Zuppa condensata di verdure a lunga conservazione. Senza latticini, in busta a strappo facile da 10 oz, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/vegetable-soup.jpg",
    details: [flb, loc("10 oz pouch", "Sobre de 10 oz", "Busta da 10 oz"), shelf4, dairyFree],
    nutrition: nf("1/2 cup condensed (102g)", "1/2 taza condensada (102 g)", "1/2 tazza condensata (102 g)", "60", {
      servingsEn: "About 2.5 servings",
      servingsEs: "Aprox. 2.5 porciones",
      servingsIt: "Circa 2.5 porzioni",
      protein: "2g",
      fat: "0g",
      carbs: "11g",
      sodium: "135mg",
    }),
  },
  {
    slug: "rustic-beef-stew",
    name: loc("Rustic Beef Stew with Vegetables", "Estofado rústico de res con verduras", "Stufato rustico di manzo con verdure"),
    description: loc(
      "Food Life Balanced+ fully cooked rustic beef stew with vegetables. A Food as Medicine solution — dairy free, gluten free, with a 4-year shelf life.",
      "Estofado rústico de res con verduras de Food Life Balanced+. Solución de alimento como medicina: sin lácteos, sin gluten, con 4 años de vida útil.",
      "Stufato rustico di manzo con verdure di Food Life Balanced+. Soluzione Food as Medicine: senza latticini, senza glutine, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/rustic-beef-stew.jpg",
    details: [flbPlus, loc("14 oz pouch", "Sobre de 14 oz", "Busta da 14 oz"), shelf4, dairyFree, glutenFree],
    nutrition: nf("1 pouch (397g)", "1 sobre (397 g)", "1 busta (397 g)", "580", {
      protein: "48g",
      fat: "19g",
      carbs: "57g",
      sodium: "590mg",
    }),
  },
  {
    slug: "savory-breakfast-hash",
    name: loc("Savory Breakfast Hash", "Hash salado de desayuno", "Hash salato da colazione"),
    description: loc(
      "Food Life Balanced+ fully cooked savory breakfast hash with chicken sausage, potatoes and vegetables. Gluten free, ready to eat or heat.",
      "Hash salado de desayuno Food Life Balanced+ con salchicha de pollo, papas y verduras. Sin gluten, listo para comer o calentar.",
      "Hash salato da colazione Food Life Balanced+ con salsiccia di pollo, patate e verdure. Senza glutine, pronto da consumare o da riscaldare.",
    ),
    image: "/products/ameriqual/savory-breakfast-hash.jpg",
    details: [flbPlus, loc("14 oz pouch", "Sobre de 14 oz", "Busta da 14 oz"), shelf4, glutenFree],
    nutrition: nf("1 pouch (397g)", "1 sobre (397 g)", "1 busta (397 g)", "500", {
      protein: "21g",
      fat: "24g",
      carbs: "60g",
      sodium: "550mg",
    }),
  },
  {
    slug: "mediterranean-chicken-mushroom-orzo",
    name: loc("Mediterranean Chicken Mushroom Orzo", "Pollo mediterráneo con hongos y orzo", "Pollo mediterraneo con funghi e orzo"),
    description: loc(
      "Food Life Balanced+ fully cooked entrée with chicken, mushrooms and orzo. A Food as Medicine solution with a 4-year shelf life.",
      "Entrada cocida Food Life Balanced+ con pollo, hongos y orzo. Una solución de alimento como medicina, con 4 años de vida útil.",
      "Piatto principale cotto Food Life Balanced+ con pollo, funghi e orzo. Una soluzione Food as Medicine, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/mediterranean-chicken-orzo.jpg",
    details: [flbPlus, loc("14 oz pouch", "Sobre de 14 oz", "Busta da 14 oz"), shelf4],
    nutrition: nf("1 pouch (397g)", "1 sobre (397 g)", "1 busta (397 g)", "510", {
      protein: "38g",
      fat: "18g",
      carbs: "49g",
      sodium: "590mg",
    }),
  },
  {
    slug: "chicken-sausage-quinoa",
    name: loc("Chicken Sausage & Quinoa", "Salchicha de pollo y quinua", "Salsiccia di pollo e quinoa"),
    description: loc(
      "Food Life Balanced+ fully cooked chicken sausage and quinoa. Gluten free, ready to eat or heat, with a 4-year shelf life.",
      "Salchicha de pollo y quinua cocidas de Food Life Balanced+. Sin gluten, lista para comer o calentar, con 4 años de vida útil.",
      "Salsiccia di pollo e quinoa cotte di Food Life Balanced+. Senza glutine, pronta da consumare o da riscaldare, con 4 anni di durata di conservazione.",
    ),
    image: "/products/ameriqual/chicken-sausage-quinoa.jpg",
    details: [flbPlus, loc("14 oz pouch", "Sobre de 14 oz", "Busta da 14 oz"), shelf4, glutenFree],
    nutrition: nf("1 pouch (397g)", "1 sobre (397 g)", "1 busta (397 g)", "540", {
      protein: "23g",
      fat: "26g",
      carbs: "54g",
      sodium: "500mg",
    }),
  },
  {
    slug: "joy2-peanut-butter",
    name: loc("Joy2 Peanut Butter", "Mantequilla de maní Joy2", "Burro di arachidi Joy2"),
    description: loc(
      "Single-serve peanut butter pouch from Joy2. Easy-tear format with a 3-year shelf life — no refrigeration required.",
      "Sobre individual de mantequilla de maní Joy2. Formato de fácil apertura, 3 años de vida útil y sin refrigeración.",
      "Busta monodose di burro di arachidi Joy2. Formato a strappo facile, 3 anni di durata di conservazione e senza refrigerazione.",
    ),
    image: "/products/ameriqual/joy2-peanut-butter.jpg",
    details: [loc("Joy2", "Joy2", "Joy2"), loc("1.10 oz pouch", "Sobre de 1.10 oz", "Busta da 1.10 oz"), loc("3-year shelf life", "Vida útil de 3 años", "Durata di conservazione di 3 anni")],
    nutrition: nf("1 pouch (31g)", "1 sobre (31 g)", "1 busta (31 g)", "170", {
      protein: "7g",
      fat: "15g",
      carbs: "6g",
      sodium: "115mg",
    }),
  },
  {
    slug: "joy2-yo-2-go-mixed-berry",
    name: loc("Joy2 Yo-2-Go Mixed Berry Yogurt", "Yogur Joy2 Yo-2-Go frutos rojos", "Yogurt Joy2 Yo-2-Go frutti di bosco"),
    description: loc(
      "Shelf-stable mixed berry yogurt cup from Joy2 Yo-2-Go. No artificial dyes, no live and active cultures, and no refrigeration needed until opened. 3.5 oz cups packed 48 per case.",
      "Vaso de yogur de frutos rojos de larga duración Joy2 Yo-2-Go. Sin colorantes artificiales, sin cultivos vivos y sin refrigeración hasta abrirse. Vasos de 3.5 oz, 48 por caja.",
      "Vasetto di yogurt ai frutti di bosco a lunga conservazione Joy2 Yo-2-Go. Senza coloranti artificiali, senza colture vive e senza refrigerazione fino all’apertura. Vasetti da 3.5 oz, 48 per cartone.",
    ),
    image: "/products/ameriqual/joy2-yogurt-mixed-berry.jpg",
    details: [
      loc("Joy2 Yo-2-Go", "Joy2 Yo-2-Go", "Joy2 Yo-2-Go"),
      loc("3.5 oz cup", "Vaso de 3.5 oz", "Vasetto da 3.5 oz"),
      loc("48 cups / case", "48 vasos / caja", "48 vasetti / cartone"),
      loc("No refrigeration until opened", "Sin refrigeración hasta abrirse", "Senza refrigerazione fino all’apertura"),
      loc("No artificial dyes", "Sin colorantes artificiales", "Senza coloranti artificiali"),
    ],
    nutrition: nf("1 cup (99g)", "1 vaso (99 g)", "1 vasetto (99 g)", "120", {
      protein: "2g",
      fat: "4g",
      carbs: "18g",
      sodium: "40mg",
    }),
  },
  {
    slug: "joy2-yo-2-go-strawberry",
    name: loc("Joy2 Yo-2-Go Strawberry Yogurt", "Yogur Joy2 Yo-2-Go de fresa", "Yogurt Joy2 Yo-2-Go alla fragola"),
    description: loc(
      "Shelf-stable strawberry yogurt cup from Joy2 Yo-2-Go. No artificial dyes, no live and active cultures, and no refrigeration needed until opened. 3.5 oz cups packed 48 per case.",
      "Vaso de yogur de fresa de larga duración Joy2 Yo-2-Go. Sin colorantes artificiales, sin cultivos vivos y sin refrigeración hasta abrirse. Vasos de 3.5 oz, 48 por caja.",
      "Vasetto di yogurt alla fragola a lunga conservazione Joy2 Yo-2-Go. Senza coloranti artificiali, senza colture vive e senza refrigerazione fino all’apertura. Vasetti da 3.5 oz, 48 per cartone.",
    ),
    image: "/products/ameriqual/joy2-yogurt-strawberry.jpg",
    details: [
      loc("Joy2 Yo-2-Go", "Joy2 Yo-2-Go", "Joy2 Yo-2-Go"),
      loc("3.5 oz cup", "Vaso de 3.5 oz", "Vasetto da 3.5 oz"),
      loc("48 cups / case", "48 vasos / caja", "48 vasetti / cartone"),
      loc("No refrigeration until opened", "Sin refrigeración hasta abrirse", "Senza refrigerazione fino all’apertura"),
      loc("No artificial dyes", "Sin colorantes artificiales", "Senza coloranti artificiali"),
    ],
    nutrition: nf("1 cup (99g)", "1 vaso (99 g)", "1 vasetto (99 g)", "120", {
      protein: "2g",
      fat: "4g",
      carbs: "18g",
      sodium: "40mg",
    }),
  },
  {
    slug: "joy2-yo-2-go-vanilla",
    name: loc("Joy2 Yo-2-Go Vanilla Yogurt", "Yogur Joy2 Yo-2-Go de vainilla", "Yogurt Joy2 Yo-2-Go alla vaniglia"),
    description: loc(
      "Shelf-stable vanilla yogurt cup from Joy2 Yo-2-Go. No artificial dyes, no live and active cultures, and no refrigeration needed until opened. 3.5 oz cups packed 48 per case.",
      "Vaso de yogur de vainilla de larga duración Joy2 Yo-2-Go. Sin colorantes artificiales, sin cultivos vivos y sin refrigeración hasta abrirse. Vasos de 3.5 oz, 48 por caja.",
      "Vasetto di yogurt alla vaniglia a lunga conservazione Joy2 Yo-2-Go. Senza coloranti artificiali, senza colture vive e senza refrigerazione fino all’apertura. Vasetti da 3.5 oz, 48 per cartone.",
    ),
    image: "/products/ameriqual/joy2-yogurt-vanilla.jpg",
    details: [
      loc("Joy2 Yo-2-Go", "Joy2 Yo-2-Go", "Joy2 Yo-2-Go"),
      loc("3.5 oz cup", "Vaso de 3.5 oz", "Vasetto da 3.5 oz"),
      loc("48 cups / case", "48 vasos / caja", "48 vasetti / cartone"),
      loc("No refrigeration until opened", "Sin refrigeración hasta abrirse", "Senza refrigerazione fino all’apertura"),
      loc("No artificial dyes", "Sin colorantes artificiales", "Senza coloranti artificiali"),
    ],
    nutrition: nf("1 cup (99g)", "1 vaso (99 g)", "1 vasetto (99 g)", "120", {
      protein: "2g",
      fat: "4g",
      carbs: "18g",
      sodium: "40mg",
    }),
  },
  {
    slug: "elbows-pasta",
    name: loc("Food Life Balanced Elbows", "Coditos Food Life Balanced", "Gomiti Food Life Balanced"),
    description: loc(
      "Domestic enriched elbow macaroni from Food Life Balanced. 1 lb retail carton, with additional shapes and a whole-grain option available.",
      "Coditos enriquecidos de producción nacional de Food Life Balanced. Caja retail de 1 lb, con otros formatos y opción integral disponibles.",
      "Gomiti arricchiti di produzione nazionale di Food Life Balanced. Scatola retail da 1 lb, con altri formati e opzione integrale disponibili.",
    ),
    image: "/products/ameriqual/elbows-pasta.jpg",
    details: [
      flb,
      loc("1 lb carton", "Caja de 1 lb", "Scatola da 1 lb"),
      loc("Domestic product", "Producto nacional", "Prodotto nazionale"),
      loc("Enriched macaroni", "Macarrón enriquecido", "Maccheroni arricchiti"),
    ],
    imageFit: "contain",
    nutrition: nf("2 oz (55g)", "2 oz (55 g)", "2 oz (55 g)", "190", {
      servingsEn: "8 servings per container",
      servingsEs: "8 porciones por envase",
      servingsIt: "8 porzioni per confezione",
      protein: "7g",
      fat: "1g",
      carbs: "40g",
      sodium: "0mg",
    }),
  },
];

export const ameriqualFoodserviceProducts: PortfolioProduct[] = [
  {
    slug: "ready-ration",
    name: loc("Ready Ration Self-Heating Meal Kit", "Kit Ready Ration auto-calentable", "Kit Ready Ration autoriscaldante"),
    description: loc(
      "Self-heating emergency meal kit. Each lightweight case holds 12 meals across six varieties. The entrée is ready in 10–12 minutes; two meals cover a full day’s calories. Menus may include chicken stir fry, chili with beans, beef taco filling, chicken noodle, beef patty jalapeño, chicken burrito bowl and spaghetti with meat sauce.",
      "Kit de comida de emergencia auto-calentable. Cada caja liviana trae 12 comidas en seis variedades. La entrada está lista en 10–12 minutos; dos comidas cubren las calorías de un día. Los menús pueden incluir salteado de pollo, chili con frijoles, relleno de taco de res, pollo con fideos, hamburguesa jalapeño, bowl burrito de pollo y espagueti con salsa de carne.",
      "Kit pasto di emergenza autoriscaldante. Ogni cartone leggero contiene 12 pasti in sei varietà. Il piatto principale è pronto in 10–12 minuti; due pasti coprono le calorie di una giornata. I menù possono includere pollo saltato, chili con fagioli, ripieno taco di manzo, pollo con noodles, hamburger jalapeño, bowl burrito di pollo e spaghetti con sugo di carne.",
    ),
    image: "/products/ameriqual/ready-ration.jpg",
    details: [
      loc("Ready Ration", "Ready Ration", "Ready Ration"),
      loc("Self-heating", "Auto-calentable", "Autoriscaldante"),
      loc("12 meals / case", "12 comidas / caja", "12 pasti / cartone"),
      loc("895–1,025 cal / meal", "895–1,025 cal / comida", "895–1,025 cal / pasto"),
    ],
    nutrition: nf("1 complete meal kit", "1 kit de comida completo", "1 kit pasto completo", "895–1,025", {
      protein: "29–46g",
    }),
  },
  {
    slug: "apack-ready-meal",
    name: loc(
      "APack Ready Meals — Disaster Relief",
      "APack Ready Meals — socorro en desastres",
      "APack Ready Meals — soccorso in caso di disastro",
    ),
    description: loc(
      "AmeriQual APack™ Ready Meals — a series of six self-heating emergency meals for disaster relief and emergency feeding. Individually packaged with durable, easy-open packaging. Each lightweight case holds 12 meals with an extended shelf life; the entrée is ready in 10–12 minutes, and two meals meet a full day’s caloric needs. Available for institutional and commercial purchase, including a FEMA-oriented low-sodium format.",
      "APack™ Ready Meals de AmeriQual: una serie de seis comidas de emergencia auto-calentables para socorro en desastres y alimentación de emergencia. Empaque individual durable de fácil apertura. Cada caja liviana trae 12 comidas de larga duración; la entrada está lista en 10–12 minutos, y dos comidas cubren las calorías de un día. Disponible para compra institucional y comercial, incluido un formato bajo en sodio orientado a FEMA.",
      "APack™ Ready Meals di AmeriQual: una serie di sei pasti di emergenza autoriscaldanti per il soccorso in caso di disastro e l’alimentazione di emergenza. Confezione individuale resistente ad apertura facile. Ogni cartone leggero contiene 12 pasti a lunga conservazione; il piatto principale è pronto in 10–12 minuti e due pasti coprono le calorie di una giornata. Disponibile per acquisto istituzionale e commerciale, compreso un formato a basso contenuto di sodio orientato FEMA.",
    ),
    image: "/products/ameriqual/apack-ready-meal.jpg",
    details: [
      loc("APack Ready Meals", "APack Ready Meals", "APack Ready Meals"),
      loc("Disaster relief", "Socorro en desastres", "Soccorso in caso di disastro"),
      loc("Self-heating · 10–12 min", "Auto-calentable · 10–12 min", "Autoriscaldante · 10–12 min"),
      loc("12 meals / case", "12 comidas / caja", "12 pasti / cartone"),
      loc("6 varieties", "6 variedades", "6 varietà"),
    ],
    nutrition: nf("1 complete meal kit", "1 kit de comida completo", "1 kit pasto completo", "1,050–1,190", {
      protein: "25–36g",
    }),
  },
];
