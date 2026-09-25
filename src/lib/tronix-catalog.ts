import type { CatalogProduct } from "@/components/ProductGrid";
import { loc } from "@/i18n/t";

const brand = loc("Tronix", "Tronix", "Tronix");
const extruded = loc("Extruded corn snack", "Snack de maíz extruido", "Snack di mais estruso");
const tronixHref = "https://tronixsnacks.com/en/index.php/snacks/";

export const tronixSnackProducts: CatalogProduct[] = [
  {
    slug: "tronix-torti-chips-bbq",
    name: loc("Torti Chips BBQ", "Torti Chips BBQ", "Torti Chips BBQ"),
    description: loc(
      "Tronix Torti Chips in BBQ flavor — crispy tortilla-style corn chips with bold BBQ seasoning. Available in 75 g, 100 g and 150 g bags.",
      "Torti Chips de Tronix sabor BBQ — chips de maíz estilo tortilla crujientes con condimento BBQ. Disponibles en 75 g, 100 g y 150 g.",
      "Torti Chips Tronix gusto BBQ — chips di mais stile tortilla croccanti con condimento BBQ. Disponibili in sacchetti da 75 g, 100 g e 150 g.",
    ),
    image: "/products/tronix/torti-chips-bbq.jpg",
    details: [
      brand,
      loc("BBQ", "BBQ", "BBQ"),
      loc("75 / 100 / 150 g", "75 / 100 / 150 g", "75 / 100 / 150 g"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
  {
    slug: "tronix-torti-chips-jalapeno",
    name: loc("Torti Chips Jalapeño", "Torti Chips Jalapeño", "Torti Chips Jalapeño"),
    description: loc(
      "Tronix Torti Chips in Jalapeño flavor — tortilla-style corn chips with a spicy jalapeño kick. Available in 100 g and 150 g bags.",
      "Torti Chips de Tronix sabor Jalapeño — chips estilo tortilla con picante de jalapeño. Disponibles en 100 g y 150 g.",
      "Torti Chips Tronix gusto Jalapeño — chips stile tortilla con piccante di jalapeño. Disponibili da 100 g e 150 g.",
    ),
    image: "/products/tronix/torti-chips-jalapeno.jpg",
    details: [
      brand,
      loc("Jalapeño", "Jalapeño", "Jalapeño"),
      loc("100 / 150 g", "100 / 150 g", "100 / 150 g"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
  {
    slug: "tronix-torti-chips-limon",
    name: loc("Torti Chips Limón", "Torti Chips Limón", "Torti Chips Limón"),
    description: loc(
      "Tronix Torti Chips in Limón flavor — light and tangy lime-seasoned tortilla-style corn chips. Available in 75 g, 100 g and 150 g bags.",
      "Torti Chips de Tronix sabor Limón — chips de maíz estilo tortilla con toque de limón. Disponibles en 75 g, 100 g y 150 g.",
      "Torti Chips Tronix gusto Limón — chips di mais stile tortilla con tocco di lime. Disponibili da 75 g, 100 g e 150 g.",
    ),
    image: "/products/tronix/torti-chips-limon.jpg",
    details: [
      brand,
      loc("Limón", "Limón", "Limón"),
      loc("75 / 100 / 150 g", "75 / 100 / 150 g", "75 / 100 / 150 g"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
  {
    slug: "tronix-torti-chips-chile-limon",
    name: loc("Torti Chips Chile Limón", "Torti Chips Chile Limón", "Torti Chips Chile Limón"),
    description: loc(
      "Tronix Torti Chips in Chile Limón flavor — tortilla-style chips with spicy chile and citrus lime seasoning. Available in 100 g and 150 g bags.",
      "Torti Chips de Tronix sabor Chile Limón — chips estilo tortilla con chile picante y limón. Disponibles en 100 g y 150 g.",
      "Torti Chips Tronix gusto Chile Limón — chips stile tortilla con chile piccante e lime. Disponibili da 100 g e 150 g.",
    ),
    image: "/products/tronix/torti-chips-chile-limon.jpg",
    details: [
      brand,
      loc("Chile Limón", "Chile Limón", "Chile Limón"),
      loc("100 / 150 g", "100 / 150 g", "100 / 150 g"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
  {
    slug: "tronix-torti-chips-queso",
    name: loc("Torti Chips Queso", "Torti Chips Queso", "Torti Chips Queso"),
    description: loc(
      "Tronix Torti Chips in Queso flavor — tortilla-style corn chips with rich cheese seasoning. Available in 100 g bags.",
      "Torti Chips de Tronix sabor Queso — chips de maíz estilo tortilla con queso intenso. Disponibles en 100 g.",
      "Torti Chips Tronix gusto Queso — chips di mais stile tortilla con formaggio intenso. Disponibili da 100 g.",
    ),
    image: "/products/tronix/torti-chips-queso.jpg",
    details: [
      brand,
      loc("Queso", "Queso", "Formaggio"),
      loc("100 g", "100 g", "100 g"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
  {
    slug: "tronix-torti-chips-natural",
    name: loc("Torti Chips Natural", "Torti Chips Natural", "Torti Chips Natural"),
    description: loc(
      "Tronix Torti Chips in Natural flavor — lightly salted tortilla-style corn chips, simple and crispy. Available in 100 g bags.",
      "Torti Chips de Tronix sabor Natural — chips de maíz estilo tortilla ligeramente salados. Disponibles en 100 g.",
      "Torti Chips Tronix gusto Natural — chips di mais estilo tortilla leggermente salati. Disponibili da 100 g.",
    ),
    image: "/products/tronix/torti-chips-natural.jpg",
    details: [
      brand,
      loc("Natural", "Natural", "Natural"),
      loc("100 g", "100 g", "100 g"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
  {
    slug: "tronix-boliqueso",
    name: loc("Boliqueso", "Boliqueso", "Boliqueso"),
    description: loc(
      "Tronix Boliqueso — ball-shaped airy extruded corn puffs with bold cheese flavor. 97 g bag.",
      "Boliqueso de Tronix — bolitas de maíz extruido inflado con intenso sabor a queso. Bolsa de 97 g.",
      "Boliqueso Tronix — palline di mais estruso soffice con intenso gusto di formaggio. Sacchetto da 97 g.",
    ),
    image: "/products/tronix/boliqueso.jpg",
    details: [
      brand,
      loc("Cheese puffs", "Bolitas de queso", "Palline al formaggio"),
      loc("97 g", "97 g", "97 g"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
  {
    slug: "tronix-cebollitas",
    name: loc("Cebollitas", "Cebollitas", "Cebollitas"),
    description: loc(
      "Tronix Cebollitas — ring-shaped extruded corn snacks with savory onion flavor. A popular snack across Central America.",
      "Cebollitas de Tronix — aritos de maíz extruido con sabor a cebolla. Un snack popular en toda América Central.",
      "Cebollitas Tronix — anellini di mais estruso con gusto di cipolla. Uno snack popolare in tutta l'America Centrale.",
    ),
    image: "/products/tronix/cebollitas.jpg",
    details: [
      brand,
      loc("Onion rings snack", "Aritos de cebolla", "Anellini di cipolla"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
  {
    slug: "tronix-cheesitos",
    name: loc("Cheesitos", "Cheesitos", "Cheesitos"),
    description: loc(
      "Tronix Cheesitos — stick-shaped extruded corn snacks with a bold cheese coating. Light, crunchy and great for snacking.",
      "Cheesitos de Tronix — deditos de maíz extruido con recubrimiento de queso. Livianos, crujientes y perfectos para snackear.",
      "Cheesitos Tronix — ditalini di mais estruso con rivestimento al formaggio. Leggeri, croccanti e ottimi per lo snacking.",
    ),
    image: "/products/tronix/cheesitos.jpg",
    details: [
      brand,
      loc("Cheese sticks", "Deditos de queso", "Ditalini al formaggio"),
      extruded,
    ],
    imageFit: "contain",
    href: tronixHref,
  },
];
