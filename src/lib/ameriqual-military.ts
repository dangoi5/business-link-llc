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

export type MilitaryRation = {
  slug: string;
  name: Loc;
  group: "individual" | "group";
  description: Loc;
};

export const ameriqualMilitaryRations: MilitaryRation[] = [
  {
    slug: "mre",
    name: loc("MRE (Meals, Ready-to-Eat)", "MRE (comidas listas para comer)"),
    group: "individual",
    description: loc(
      "Individual packaged operational rations for Warfighters when activity, combat intensity or unstable tactical conditions preclude field kitchens.",
      "Raciones operacionales individuales cuando la actividad, la intensidad de combate o una situación táctica inestable impiden usar cocinas de campaña.",
    ),
  },
  {
    slug: "hdr",
    name: loc("HDR (Humanitarian Daily Rations)", "HDR (raciones humanitarias diarias)"),
    group: "individual",
    description: loc(
      "Humanitarian daily rations for government and non-governmental disaster and relief feeding, produced alongside AmeriQual’s military programs.",
      "Raciones humanitarias diarias para alimentación de desastre y alivio de gobiernos y ONG, producidas junto a los programas militares de AmeriQual.",
    ),
  },
  {
    slug: "emergency-drinking-water",
    name: loc("Emergency Drinking Water", "Agua potable de emergencia"),
    group: "individual",
    description: loc(
      "Operational emergency drinking water for individual or small-group feeding when field water support is not available.",
      "Agua potable de emergencia operacional para alimentación individual o de grupos pequeños cuando no hay apoyo de agua en el terreno.",
    ),
  },
  {
    slug: "first-strike",
    name: loc("First Strike", "First Strike"),
    group: "individual",
    description: loc(
      "First Strike rations — compact individual feeding for high-intensity missions where a full MRE is not practical.",
      "Raciones First Strike: alimentación individual compacta para misiones de alta intensidad cuando un MRE completo no es práctico.",
    ),
  },
  {
    slug: "heat-and-serve",
    name: loc("Heat & Serve", "Heat & Serve"),
    group: "group",
    description: loc(
      "Heat & Serve group modules that feed more than one Warfighter at a time, configured for small or large group feeding.",
      "Módulos grupales Heat & Serve que alimentan a más de un combatiente a la vez, configurados para grupos pequeños o grandes.",
    ),
  },
  {
    slug: "a-rations",
    name: loc("A-Rations", "A-Rations"),
    group: "group",
    description: loc(
      "A-Ration modules integrated with Heat & Serve and brand-name commercial foods for complete group meals, from remote self-heating to field-kitchen support.",
      "Módulos A-Ration integrados con Heat & Serve y alimentos comerciales de marca para comidas grupales completas, desde auto-calentado remoto hasta apoyo de cocina de campaña.",
    ),
  },
];
