import { loc } from "@/i18n/t";
import type { CatalogProduct } from "@/components/ProductGrid";
import type { Loc } from "@/i18n/t";

export type AkhanGroup = {
  id: string;
  label: Loc;
  products: CatalogProduct[];
};

const brand = loc("Akhan Makarna", "Akhan Makarna", "Akhan Makarna");
const durum = loc("100% durum wheat", "100% trigo duro", "100% grano duro");
const packSize = loc("500 g", "500 g", "500 g");

function pasta(slug: string, name: Loc, description: Loc): CatalogProduct {
  return {
    slug: `akhan-${slug}`,
    name,
    description,
    image: `/products/akhan/${slug}.jpg`,
    details: [brand, packSize, durum],
    imageFit: "contain",
  };
}

export const akhanGroups: AkhanGroup[] = [
  {
    id: "long",
    label: loc("Long pasta", "Pasta larga", "Pasta lunga"),
    products: [
      pasta(
        "spaghetti",
        loc("Spaghetti", "Espagueti", "Spaghetti"),
        loc(
          "The shelf’s best-seller, done right. Golden durum spaghetti with a firm al dente bite that keeps shoppers coming back.",
          "El clásico que más se vende, hecho como debe ser. Espagueti dorado de trigo duro, firme y al dente, que hace que el cliente vuelva.",
          "Il classico più venduto, fatto come si deve. Spaghetti dorati di grano duro, sodi e al dente, che fanno tornare il cliente.",
        ),
      ),
      pasta(
        "spaghettini",
        loc("Spaghettini", "Spaghettini", "Spaghettini"),
        loc(
          "Thinner, faster, lighter. The quick-cooking strand for seafood, garlic-and-oil and weeknight dinners.",
          "Más fino, más rápido, más ligero. Ideal para mariscos, pasta con ajo y aceite y cenas rápidas entre semana.",
          "Più sottili, più veloci, più leggeri. Ideali per frutti di mare, aglio e olio e cene veloci durante la settimana.",
        ),
      ),
      pasta(
        "fettuccine",
        loc("Fettuccine", "Fettuccine", "Fettuccine"),
        loc(
          "Restaurant-style ribbons at a supermarket price. Made for Alfredo, cream and butter sauces.",
          "Cintas de restaurante a precio de supermercado. Hechas para la salsa Alfredo y las salsas de crema y de mantequilla.",
          "Nastri da ristorante a prezzo da supermercato. Perfetti per l’Alfredo e per i sughi alla panna e al burro.",
        ),
      ),
      pasta(
        "linguine",
        loc("Linguine", "Linguine", "Linguine"),
        loc(
          "The seafood specialist. A slightly flat strand that carries olive oil, clams and pesto from fork to mouth.",
          "La especialista en mariscos. Su forma ligeramente plana es perfecta para el aceite de oliva, las almejas y el pesto.",
          "Le specialiste del mare. La forma leggermente schiacciata è perfetta per olio d’oliva, vongole e pesto.",
        ),
      ),
      pasta(
        "bucatini",
        loc("Bucatini", "Bucatini", "Bucatini"),
        loc(
          "The chef’s secret: a thick strand with a hollow centre that soaks up sauce inside and out. A premium shape that sets your shelf apart.",
          "El secreto del chef: una hebra gruesa con centro hueco que absorbe la salsa por dentro y por fuera. Un formato premium que hace destacar su góndola.",
          "Il segreto dello chef: uno spaghettone forato che assorbe il sugo dentro e fuori. Un formato premium che distingue il vostro scaffale.",
        ),
      ),
    ],
  },
  {
    id: "short",
    label: loc("Short & tubular pasta", "Pasta corta y tubular", "Pasta corta e tubolare"),
    products: [
      pasta(
        "fusilli",
        loc("Fusilli", "Fusilli", "Fusilli"),
        loc(
          "Every twist grabs the sauce. The go-to spiral for pasta salads, bakes and family dinners — a steady mover in any market.",
          "Cada vuelta atrapa la salsa. La espiral favorita para ensaladas de pasta, gratinados y comidas familiares: rotación segura en cualquier mercado.",
          "Ogni spirale cattura il sugo. Il formato preferito per insalate di pasta, pasticci al forno e cene in famiglia: una rotazione sicura in ogni mercato.",
        ),
      ),
      pasta(
        "penne-rigate",
        loc("Penne Rigate", "Penne Rigate", "Penne Rigate"),
        loc(
          "Italy’s favourite short cut. Ridged quills that hold every drop of sauce — a must-stock for retail and foodservice alike.",
          "La pasta corta favorita de Italia. Penne estriadas que retienen cada gota de salsa: imprescindibles tanto en retail como en foodservice.",
          "La pasta corta preferita dagli italiani. Penne rigate che trattengono ogni goccia di sugo: immancabili nel retail e nella ristorazione.",
        ),
      ),
      pasta(
        "pennine",
        loc("Pennine", "Pennine", "Pennette"),
        loc(
          "Penne’s smaller sibling. Cooks quickly and suits lighter sauces, kids’ plates and salads.",
          "La versión pequeña de los penne. Se cocinan rápido y van muy bien con salsas ligeras, platos infantiles y ensaladas.",
          "Le sorelle minori delle penne. Cuociono in fretta e sono perfette con sughi leggeri, piatti per bambini e insalate.",
        ),
      ),
      pasta(
        "rigatoni",
        loc("Rigatoni", "Rigatoni", "Rigatoni"),
        loc(
          "Big, bold and built for hearty sauces. Wide ridged tubes that turn ragù and baked dishes into a meal.",
          "Grandes, robustos y hechos para salsas contundentes. Tubos anchos y estriados que convierten el ragú y los gratinados en un plato completo.",
          "Grandi, decisi e fatti per sughi corposi. Tubi larghi e rigati che trasformano ragù e piatti al forno in un pasto completo.",
        ),
      ),
      pasta(
        "rotini",
        loc("Rotini", "Rotini", "Rotini"),
        loc(
          "The shape kids ask for by name. A fun, tight spiral that adults love just as much.",
          "La pasta que los niños piden por su nombre. Una espiral divertida que a los adultos les gusta igual.",
          "Il formato che i bambini chiedono per nome. Una spirale divertente che piace altrettanto agli adulti.",
        ),
      ),
      pasta(
        "sedani-rigati",
        loc("Sedani Rigati", "Sedani Rigati", "Sedani Rigati"),
        loc(
          "A gently curved, ridged tube that hugs sauce. An Italian classic that adds variety to the pasta aisle.",
          "Un tubo estriado ligeramente curvo que abraza la salsa. Un clásico italiano que aporta variedad a la sección de pastas.",
          "Un tubo rigato leggermente curvo che abbraccia il sugo. Un classico italiano che porta varietà al reparto pasta.",
        ),
      ),
      pasta(
        "sedanini-rigati",
        loc("Sedanini Rigati", "Sedanini Rigati", "Sedanini Rigati"),
        loc(
          "Bite-sized and quick to cook. The compact sedani shape for soups, salads and busy kitchens.",
          "Pequeños y de cocción rápida. La versión compacta de los sedani para sopas, ensaladas y cocinas con poco tiempo.",
          "Piccoli e veloci da cuocere. La versione compatta dei sedani per minestre, insalate e per chi ha poco tempo.",
        ),
      ),
      pasta(
        "cornetto-lisci",
        loc("Cornetto Lisci (Smooth Elbows)", "Cornetto Lisci (codos lisos)", "Chifferi lisci"),
        loc(
          "Mac and cheese starts here. Smooth elbows for the comfort food every household buys again and again.",
          "Los macarrones con queso empiezan aquí. Codos lisos para la comida reconfortante que todo hogar compra una y otra vez.",
          "Il mac and cheese comincia da qui. Chifferi lisci per il comfort food che ogni famiglia compra e ricompra.",
        ),
      ),
      pasta(
        "cornetto-rigati",
        loc("Cornetto Rigati (Ridged Elbows)", "Cornetto Rigati (codos estriados)", "Chifferi rigati"),
        loc(
          "Elbows with extra grip. Ridges that hold more sauce for meaty, saucy and baked dishes.",
          "Codos con más agarre. Estrías que retienen más salsa en platos con carne, con salsa o al horno.",
          "Chifferi con più presa. Righe che trattengono più sugo in piatti di carne, ricchi di sugo o al forno.",
        ),
      ),
    ],
  },
  {
    id: "soup",
    label: loc("Soup pasta", "Pasta para sopa", "Pastina da brodo"),
    products: [
      pasta(
        "ditalini",
        loc("Ditalini (Thimbles)", "Ditalini (dedales)", "Ditalini"),
        loc(
          "Little thimbles, big demand. The classic for minestrone, bean soups and cold pasta salads.",
          "Pequeños dedales, gran demanda. El clásico para minestrone, sopas de legumbres y ensaladas frías de pasta.",
          "Piccoli ditali, grande domanda. Il classico per minestrone, zuppe di legumi e insalate fredde di pasta.",
        ),
      ),
      pasta(
        "vermicelli",
        loc("Vermicelli", "Fideo (vermicelli)", "Vermicelli"),
        loc(
          "Fine golden strands that kitchens across Latin America, the Middle East and beyond cook every week — for sopa de fideo, pilafs and broths.",
          "Hebras doradas y finas que se cocinan cada semana en América Latina, Medio Oriente y más allá: para sopa de fideo, arroz pilaf y caldos.",
          "Fili dorati sottilissimi che in America Latina, Medio Oriente e non solo si cucinano ogni settimana: per zuppe, pilaf e brodi.",
        ),
      ),
      pasta(
        "orzo",
        loc("Orzo (Risoni)", "Orzo (risoni)", "Orzo (risoni)"),
        loc(
          "The rice-shaped pasta that is having a moment. Perfect for chicken soup, pilafs and trending orzo salads.",
          "La pasta con forma de arroz que está de moda. Perfecta para sopa de pollo, pilaf y las populares ensaladas de orzo.",
          "La pasta a forma di riso che va di moda. Perfetta per brodo di pollo, pilaf e le insalate di orzo tanto popolari.",
        ),
      ),
      pasta(
        "acini-di-pepe",
        loc("Acini di Pepe", "Acini di Pepe", "Acini di pepe"),
        loc(
          "Tiny pearls with big appeal. A family favourite for soups and simple, kid-friendly dishes.",
          "Pequeñas perlas con mucho atractivo. Las favoritas de la familia para sopas y platos sencillos que encantan a los niños.",
          "Piccole perle dal grande fascino. Le preferite in famiglia per minestre e piatti semplici amati dai bambini.",
        ),
      ),
      pasta(
        "couscous",
        loc("Couscous", "Cuscús", "Couscous"),
        loc(
          "Ready in minutes, loved everywhere. A traditional staple for modern bowls, salads and sides.",
          "Listo en minutos, querido en todas partes. Un básico tradicional para bowls, ensaladas y guarniciones modernas.",
          "Pronto in pochi minuti, amato ovunque. Un classico della tradizione per bowl, insalate e contorni moderni.",
        ),
      ),
    ],
  },
  {
    id: "specialty",
    label: loc("Specialty shapes", "Formas especiales", "Formati speciali"),
    products: [
      pasta(
        "tripolini",
        loc("Tripolini", "Tripolini", "Tripolini"),
        loc(
          "Little bows with ruffled edges. A specialty shape that brings an elegant look to the plate and a point of difference to the shelf.",
          "Pequeños moños de bordes ondulados. Un formato especial que da un toque elegante al plato y distingue su góndola.",
          "Piccoli fiocchi dai bordi ondulati. Un formato speciale che dona eleganza al piatto e distingue lo scaffale.",
        ),
      ),
      pasta(
        "farfalle",
        loc("Farfalle", "Farfalle (moñitos)", "Farfalle"),
        loc(
          "The bow-tie everyone recognises. Eye-catching in the pack and on the plate — great for salads, kids’ meals and parties.",
          "El moñito que todos reconocen. Llamativo en el empaque y en el plato: ideal para ensaladas, comidas infantiles y fiestas.",
          "La farfalla che tutti riconoscono. Accattivante in confezione e nel piatto: ideale per insalate, pasti dei bambini e feste.",
        ),
      ),
    ],
  },
];

export const akhanProducts: CatalogProduct[] = akhanGroups.flatMap((group) => group.products);
