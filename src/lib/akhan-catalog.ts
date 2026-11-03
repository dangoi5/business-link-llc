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
          "The classic long pasta, with a smooth, firm bite for tomato, meat and oil-based sauces.",
          "La pasta larga clásica, de textura lisa y firme para salsas de tomate, carne o aceite.",
          "La classica pasta lunga, liscia e soda, per sughi al pomodoro, di carne o all’olio.",
        ),
      ),
      pasta(
        "spaghettini",
        loc("Spaghettini", "Spaghettini", "Spaghettini"),
        loc(
          "A finer cut than classic spaghetti, made for light sauces and seafood.",
          "Un corte más fino que el espagueti clásico, ideal para salsas ligeras y mariscos.",
          "Un taglio più sottile degli spaghetti classici, per sughi leggeri e frutti di mare.",
        ),
      ),
      pasta(
        "fettuccine",
        loc("Fettuccine", "Fettuccine", "Fettuccine"),
        loc(
          "Broad ribbons that pair well with rich cream and butter sauces.",
          "Cintas anchas que combinan con salsas cremosas y de mantequilla.",
          "Nastri larghi che si sposano con sughi ricchi alla panna e al burro.",
        ),
      ),
      pasta(
        "linguine",
        loc("Linguine", "Linguine", "Linguine"),
        loc(
          "A slightly flattened long pasta suited to seafood and olive-oil sauces.",
          "Pasta larga ligeramente aplanada, ideal para mariscos y salsas de aceite de oliva.",
          "Pasta lunga leggermente schiacciata, adatta a frutti di mare e sughi all’olio d’oliva.",
        ),
      ),
      pasta(
        "bucatini",
        loc("Bucatini", "Bucatini", "Bucatini"),
        loc(
          "Thick strands, hollow at the centre to trap sauce inside; a favourite for baked dishes.",
          "Hebras gruesas, huecas en el centro para atrapar la salsa; favoritas para platos al horno.",
          "Spaghettoni forati al centro che trattengono il sugo; ideali anche al forno.",
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
          "Tight spirals that hold sauce in every twist.",
          "Espirales que retienen la salsa en cada vuelta.",
          "Spirali che trattengono il sugo in ogni giro.",
        ),
      ),
      pasta(
        "penne-rigate",
        loc("Penne Rigate", "Penne Rigate", "Penne Rigate"),
        loc(
          "Ridged quills cut on the angle — one of the most popular shapes in Italian cooking.",
          "Plumas estriadas con corte diagonal, una de las formas más populares de la cocina italiana.",
          "Penne rigate tagliate in diagonale, tra i formati più amati della cucina italiana.",
        ),
      ),
      pasta(
        "pennine",
        loc("Pennine", "Pennine", "Pennette"),
        loc(
          "A smaller, more delicate penne, good with lighter sauces.",
          "Una penne más pequeña y delicada, ideal para salsas ligeras.",
          "Penne più piccole e delicate, ideali con sughi leggeri.",
        ),
      ),
      pasta(
        "rigatoni",
        loc("Rigatoni", "Rigatoni", "Rigatoni"),
        loc(
          "Wide ridged tubes suited to hearty meat and rich sauces.",
          "Tubos anchos y estriados para salsas de carne y salsas robustas.",
          "Tubi larghi e rigati, adatti a ragù e sughi corposi.",
        ),
      ),
      pasta(
        "rotini",
        loc("Rotini", "Rotini", "Rotini"),
        loc(
          "A short double spiral that children and adults enjoy alike.",
          "Una espiral corta y doble que gusta a niños y adultos.",
          "Una corta doppia spirale amata da grandi e piccoli.",
        ),
      ),
      pasta(
        "sedani-rigati",
        loc("Sedani Rigati", "Sedani Rigati", "Sedani Rigati"),
        loc(
          "A gently curved ridged tube that holds sauce well.",
          "Un tubo estriado ligeramente curvo que retiene bien la salsa.",
          "Un tubo rigato leggermente curvo che trattiene bene il sugo.",
        ),
      ),
      pasta(
        "sedanini-rigati",
        loc("Sedanini Rigati", "Sedanini Rigati", "Sedanini Rigati"),
        loc(
          "The slender, bite-sized member of the sedani family; cooks quickly.",
          "El miembro más delgado y pequeño de la familia sedani; se cuece rápido.",
          "Il formato più sottile e piccolo della famiglia dei sedani; cuoce in fretta.",
        ),
      ),
      pasta(
        "cornetto-lisci",
        loc("Cornetto Lisci (Smooth Elbows)", "Cornetto Lisci (codos lisos)", "Chifferi lisci"),
        loc(
          "Small smooth elbows, the classic choice for mac and cheese and pasta salads.",
          "Codos pequeños y lisos, el clásico para macarrones con queso y ensaladas de pasta.",
          "Piccoli gomiti lisci, la scelta classica per mac and cheese e insalate di pasta.",
        ),
      ),
      pasta(
        "cornetto-rigati",
        loc("Cornetto Rigati (Ridged Elbows)", "Cornetto Rigati (codos estriados)", "Chifferi rigati"),
        loc(
          "Ridged elbows that add body to generously sauced and meat-based dishes.",
          "Codos estriados que dan cuerpo a platos con mucha salsa o carne.",
          "Gomiti rigati che danno corpo a piatti ricchi di sugo o di carne.",
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
          "Small thimble-shaped tubes for soups, stews and cold salads.",
          "Pequeños tubos en forma de dedal para sopas, guisos y ensaladas frías.",
          "Piccoli tubetti a forma di ditale per minestre, stufati e insalate fredde.",
        ),
      ),
      pasta(
        "vermicelli",
        loc("Vermicelli", "Fideo cabello de ángel", "Vermicelli"),
        loc(
          "Fine golden strands, the traditional choice for pilafs and soups.",
          "Hebras doradas muy finas, tradicionales en pilafs y sopas.",
          "Fili dorati sottilissimi, tradizionali per pilaf e minestre.",
        ),
      ),
      pasta(
        "orzo",
        loc("Orzo (Risoni)", "Orzo (risoni)", "Orzo (risoni)"),
        loc(
          "Plump barley-shaped grains for chicken broth soups and pilafs.",
          "Granos con forma de cebada para sopas de caldo de pollo y pilafs.",
          "Chicchi a forma d’orzo per brodi di pollo e pilaf.",
        ),
      ),
      pasta(
        "acini-di-pepe",
        loc("Acini di Pepe", "Acini di Pepe", "Acini di pepe"),
        loc(
          "Tiny bead-like grains for soups and easy everyday dishes.",
          "Granos diminutos como perlas para sopas y platos sencillos del día a día.",
          "Minuscoli granelli per minestre e piatti semplici di tutti i giorni.",
        ),
      ),
      pasta(
        "couscous",
        loc("Couscous", "Cuscús", "Couscous"),
        loc(
          "Tiny pearl grains bringing a traditional flavour to modern tables.",
          "Pequeños granos perlados que llevan un sabor tradicional a la mesa moderna.",
          "Piccoli granelli perlati che portano un sapore tradizionale sulla tavola moderna.",
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
          "Small bows with fluted edges that bring an elegant look to the plate.",
          "Pequeños moños de bordes ondulados que dan un toque elegante al plato.",
          "Piccoli fiocchetti dai bordi ondulati che danno eleganza al piatto.",
        ),
      ),
      pasta(
        "farfalle",
        loc("Farfalle", "Farfalle (moñitos)", "Farfalle"),
        loc(
          "The Italian butterfly shape, which gathers sauce at its pinched centre.",
          "La clásica forma de mariposa italiana, que recoge la salsa en su centro.",
          "La classica farfalla italiana, che raccoglie il sugo al centro.",
        ),
      ),
    ],
  },
];

export const akhanProducts: CatalogProduct[] = akhanGroups.flatMap((group) => group.products);
