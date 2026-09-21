import { loc, type Loc } from "@/i18n/t";

export const ameriqualMilitaryAssets = {
  logo: "/ameriqual-military/aqf-logo.jpg",
  seals: "/ameriqual-military/us-military-seals.png",
  flag: "/ameriqual-military/us-flag-bg.jpg",
  certifications: [
    { src: "/ameriqual-military/sqf-haccp.png", alt: "SQF 2000 HACCP — NSF International" },
    { src: "/ameriqual-military/fda.png", alt: "FDA" },
    { src: "/ameriqual-military/usda.png", alt: "USDA" },
    { src: "/ameriqual-military/usda-organic.png", alt: "USDA Organic" },
    { src: "/ameriqual-military/gma.png", alt: "GMA — Grocery Manufacturers Association" },
  ],
} as const;

export type MilitaryRationFact = {
  label: Loc;
  value: Loc;
};

export type MilitaryRationExample = {
  slug: string;
  name: Loc;
  image: string;
  detail?: Loc;
};

export type MilitaryRation = {
  slug: string;
  name: Loc;
  group: "individual" | "group";
  description: Loc;
  whatIsIt?: Loc;
  facts?: MilitaryRationFact[];
  examples?: MilitaryRationExample[];
};

export const ameriqualMilitaryRations: MilitaryRation[] = [
  {
    slug: "mre",
    name: loc("MRE (Meals, Ready-to-Eat)", "MRE (comidas listas para comer)", "MRE (pasti pronti al consumo)"),
    group: "individual",
    description: loc(
      "Individual packaged operational rations for Warfighters when activity, combat intensity or unstable tactical conditions preclude field kitchens.",
      "Raciones operacionales individuales cuando la actividad, la intensidad de combate o una situación táctica inestable impiden usar cocinas de campaña.",
      "Razioni operative individuali confezionate per i combattenti quando l’attività, l’intensità del combattimento o condizioni tattiche instabili precludono l’uso delle cucine da campo.",
    ),
    whatIsIt: loc(
      "The Meal, Ready-To-Eat (MRE) is designed to sustain an individual engaged in heavy activity such as military training or during actual military operations when normal food service facilities are not available. The MRE is a totally self-contained operational ration consisting of a full meal packed in a flexible meal bag. The full bag is lightweight and fits easily into military field clothing pockets. Each meal bag contains an entrée and a variety of other components, as shown in the table of menus.",
      "El Meal, Ready-To-Eat (MRE) está diseñado para sostener a una persona en actividad intensa —entrenamiento militar u operaciones reales— cuando no hay servicio de alimentación normal. El MRE es una ración operacional totalmente autónoma: una comida completa empacada en una bolsa flexible. La bolsa es ligera y cabe fácilmente en los bolsillos del uniforme de campaña. Cada bolsa contiene un plato principal y otros componentes, como se indica en la tabla de menús.",
      "Il Meal, Ready-To-Eat (MRE) è progettato per sostenere una persona impegnata in attività intensa — addestramento militare o operazioni reali — quando non sono disponibili servizi di ristorazione normali. L’MRE è una razione operativa completamente autonoma: un pasto completo confezionato in una busta flessibile. La busta è leggera e entra facilmente nelle tasche dell’uniforme da campo. Ogni busta contiene un piatto principale e altri componenti, come indicato nella tabella dei menu.",
    ),
    facts: [
      {
        label: loc("Case A", "Caja A", "Cassa A"),
        value: loc("Menus 1–12", "Menús 1–12", "Menu 1–12"),
      },
      {
        label: loc("Case B", "Caja B", "Cassa B"),
        value: loc("Menus 13–24", "Menús 13–24", "Menu 13–24"),
      },
      {
        label: loc("Pallet mix", "Composición del palé", "Composizione del pallet"),
        value: loc("24 A cases + 24 B cases", "24 cajas A + 24 cajas B", "24 casse A + 24 casse B"),
      },
      {
        label: loc("Case", "Caja", "Cassa"),
        value: loc("Approx. 22 lbs · 1.02 cu ft", "Aprox. 22 lb · 1,02 pies³", "Circa 22 lb · 1,02 ft³"),
      },
      {
        label: loc("Pallet", "Palé", "Pallet"),
        value: loc("1,098 lbs · approx. 56.1 cu ft", "1.098 lb · aprox. 56,1 pies³", "1.098 lb · circa 56,1 ft³"),
      },
    ],
    examples: [
      {
        slug: "menu-01-chili-with-beans",
        name: loc("Menu 1 — Chili with Beans", "Menú 1 — Chili con frijoles", "Menu 1 — Chili con fagioli"),
        image: "/ameriqual-military/mre-examples/menu-01-chili-with-beans.jpg",
      },
      {
        slug: "menu-02-beef-shredded-bbq",
        name: loc(
          "Menu 2 — Beef Shredded in Barbecue Sauce",
          "Menú 2 — Res deshebrada en salsa barbacoa",
          "Menu 2 — Manzo sfilacciato in salsa barbecue",
        ),
        image: "/ameriqual-military/mre-examples/menu-02-beef-shredded-bbq.jpg",
      },
      {
        slug: "menu-03-chicken-noodles-and-vegetables",
        name: loc(
          "Menu 3 — Chicken, Noodles and Vegetables in Sauce",
          "Menú 3 — Pollo, fideos y vegetales en salsa",
          "Menu 3 — Pollo, noodles e verdure in salsa",
        ),
        image: "/ameriqual-military/mre-examples/menu-03-chicken-noodles-and-vegetables.jpg",
      },
      {
        slug: "menu-14-mexican-style-rice-and-bean-bowl",
        name: loc(
          "Menu 14 — Mexican Style Rice and Bean Bowl",
          "Menú 14 — Bowl de arroz y frijoles estilo mexicano",
          "Menu 14 — Bowl di riso e fagioli stile messicano",
        ),
        image: "/ameriqual-military/mre-examples/menu-14-mexican-style-rice-and-bean-bowl.jpg",
      },
    ],
  },
  {
    slug: "hdr",
    name: loc("HDR (Humanitarian Daily Rations)", "HDR (raciones humanitarias diarias)", "HDR (razioni umanitarie giornaliere)"),
    group: "individual",
    description: loc(
      "Humanitarian daily rations for government and non-governmental disaster and relief feeding, produced alongside AmeriQual’s military programs.",
      "Raciones humanitarias diarias para alimentación de desastre y alivio de gobiernos y ONG, producidas junto a los programas militares de AmeriQual.",
      "Razioni umanitarie giornaliere per l’alimentazione in caso di calamità e soccorso di governi e organizzazioni non governative, prodotte insieme ai programmi militari di AmeriQual.",
    ),
  },
  {
    slug: "emergency-drinking-water",
    name: loc("Emergency Drinking Water", "Agua potable de emergencia", "Acqua potabile di emergenza"),
    group: "individual",
    description: loc(
      "Operational emergency drinking water for individual or small-group feeding when field water support is not available.",
      "Agua potable de emergencia operacional para alimentación individual o de grupos pequeños cuando no hay apoyo de agua en el terreno.",
      "Acqua potabile di emergenza operativa per l’alimentazione individuale o di piccoli gruppi quando non è disponibile il supporto idrico sul campo.",
    ),
  },
  {
    slug: "first-strike",
    name: loc("First Strike", "First Strike", "First Strike"),
    group: "individual",
    description: loc(
      "First Strike rations — compact individual feeding for high-intensity missions where a full MRE is not practical.",
      "Raciones First Strike: alimentación individual compacta para misiones de alta intensidad cuando un MRE completo no es práctico.",
      "Razioni First Strike: alimentazione individuale compatta per missioni ad alta intensità quando un MRE completo non è praticabile.",
    ),
  },
  {
    slug: "heat-and-serve",
    name: loc("Heat & Serve", "Heat & Serve", "Heat & Serve"),
    group: "group",
    description: loc(
      "Heat & Serve group modules that feed more than one Warfighter at a time, configured for small or large group feeding.",
      "Módulos grupales Heat & Serve que alimentan a más de un combatiente a la vez, configurados para grupos pequeños o grandes.",
      "Moduli di gruppo Heat & Serve che alimentano più di un combattente alla volta, configurati per gruppi piccoli o grandi.",
    ),
  },
  {
    slug: "a-rations",
    name: loc("A-Rations", "A-Rations", "A-Rations"),
    group: "group",
    description: loc(
      "A-Ration modules integrated with Heat & Serve and brand-name commercial foods for complete group meals, from remote self-heating to field-kitchen support.",
      "Módulos A-Ration integrados con Heat & Serve y alimentos comerciales de marca para comidas grupales completas, desde auto-calentado remoto hasta apoyo de cocina de campaña.",
      "Moduli A-Ration integrati con Heat & Serve e alimenti commerciali di marca per pasti di gruppo completi, dal riscaldamento autonomo in remoto al supporto della cucina da campo.",
    ),
  },
];
