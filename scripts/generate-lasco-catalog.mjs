import fs from "node:fs";
import path from "node:path";

const manifest = JSON.parse(fs.readFileSync("tmp/lasco-manifest.json", "utf8"));

const phrasePairs = [
  [/Food Drink/gi, ["Food Drink", "Food Drink", "Food Drink"]],
  [/Infant Formula/gi, ["Infant Formula", "Fórmula infantil", "Formula infantile"]],
  [/Milk Food Formula/gi, ["Milk Food Formula", "Fórmula láctea", "Formula a base di latte"]],
  [/Infant Cereal/gi, ["Infant Cereal", "Cereal infantil", "Cereale infantile"]],
  [/Enriched Milk Powder/gi, ["Enriched Milk Powder", "Leche en polvo enriquecida", "Latte in polvere arricchito"]],
  [/Readi Milk/gi, ["Readi-Milk", "Readi-Milk", "Readi-Milk"]],
  [/Instant Chocolate Mix/gi, ["Instant Chocolate Mix", "Mezcla de chocolate instantáneo", "Miscela di cioccolato istantaneo"]],
  [/Instant Chocolate/gi, ["Instant Chocolate", "Chocolate instantáneo", "Cioccolato istantaneo"]],
  [/Display Box/gi, ["Display Box", "Exhibidor", "Espositore"]],
  [/Frosted Flakes/gi, ["Frosted Flakes", "Copos azucarados", "Fiocchi glassati"]],
  [/Raisin Bran/gi, ["Raisin Bran", "Salvado con pasas", "Crusca con uvetta"]],
  [/Corn Flakes/gi, ["Corn Flakes", "Copos de maíz", "Fiocchi di mais"]],
  [/Choco Munchies/gi, ["Choco Munchies", "Choco Munchies", "Choco Munchies"]],
  [/Choco Craze/gi, ["Choco Craze", "Choco Craze", "Choco Craze"]],
  [/Macaroni Shells/gi, ["Macaroni Shells", "Conchas de macarrón", "Conchiglie di maccheroni"]],
  [/Mac & Cheese Dinner/gi, ["Mac & Cheese Dinner", "Macarrones con queso", "Maccheroni al formaggio"]],
  [/Instant Rolled Oats/gi, ["Instant Rolled Oats", "Avena laminada instantánea", "Avena laminata istantanea"]],
  [/Rolled Oats/gi, ["Rolled Oats", "Avena laminada", "Avena laminata"]],
  [/Oats Porridge Mix/gi, ["Oats Porridge Mix", "Mezcla para avena", "Miscela per porridge d'avena"]],
  [/Pineapple Slices/gi, ["Pineapple Slices", "Rebanadas de piña", "Fette di ananas"]],
  [/Jack Mackerel/gi, ["Jack Mackerel", "Jurel", "Sgombro"]],
  [/Hot & Spicy in Tomato Sauce/gi, ["Hot & Spicy in Tomato Sauce", "Picante en salsa de tomate", "Piccante in salsa di pomodoro"]],
  [/with Tomato Sauce/gi, ["with Tomato Sauce", "con salsa de tomate", "con salsa di pomodoro"]],
  [/in Brine/gi, ["in Brine", "en salmuera", "in salamoia"]],
  [/Corned Beef/gi, ["Corned Beef", "Carne enlatada", "Carne in scatola"]],
  [/Chicken Vienna Sausage/gi, ["Chicken Vienna Sausage", "Salchicha Vienna de pollo", "Wurstel Vienna di pollo"]],
  [/Vienna Sausage/gi, ["Vienna Sausage", "Salchicha Vienna", "Wurstel Vienna"]],
  [/Mixed Vegetables Low Sodium/gi, ["Mixed Vegetables Low Sodium", "Vegetales mixtos bajo en sodio", "Verdure miste a basso contenuto di sodio"]],
  [/Mixed Vegetables/gi, ["Mixed Vegetables", "Vegetales mixtos", "Verdure miste"]],
  [/Gungo Peas - Green Pigeon Peas/gi, ["Gungo Peas (Green Pigeon Peas)", "Guandú (gandules)", "Piselli gungo"]],
  [/Green Peas/gi, ["Green Peas", "Chícharos verdes", "Piselli verdi"]],
  [/Red Kidney Beans/gi, ["Red Kidney Beans", "Frijoles rojos", "Fagioli rossi"]],
  [/Butter Beans/gi, ["Butter Beans", "Judías de manteca", "Fagioli di Spagna"]],
  [/Broad Beans/gi, ["Broad Beans", "Habas", "Fave"]],
  [/Baked Beans/gi, ["Baked Beans", "Frijoles horneados", "Fagioli al forno"]],
  [/Soft Margarine/gi, ["Soft Margarine", "Margarina blanda", "Margarina morbida"]],
  [/Hot Pepper Sauce/gi, ["Hot Pepper Sauce", "Salsa de chile picante", "Salsa al peperoncino"]],
  [/Gourmet Fish and Meat Sauce/gi, ["Gourmet Fish & Meat Sauce", "Salsa gourmet para pescado y carne", "Salsa gourmet per pesce e carne"]],
  [/Vegetable Oil/gi, ["Vegetable Oil", "Aceite vegetal", "Olio vegetale"]],
  [/White Vinegar/gi, ["White Vinegar", "Vinagre blanco", "Aceto bianco"]],
  [/Energy Drink/gi, ["Energy Drink", "Bebida energética", "Energy drink"]],
  [/Flavoured Water Products/gi, ["Flavoured Water", "Agua saborizada", "Acqua aromatizzata"]],
  [/Reduced Sugar/gi, ["Reduced Sugar", "Azúcar reducida", "Zucchero ridotto"]],
  [/50% less sugar sachet/gi, ["50% less sugar sachet", "Sobre 50% menos azúcar", "Bustina 50% meno zucchero"]],
  [/50% less sugar/gi, ["50% less sugar", "50% menos azúcar", "50% meno zucchero"]],
  [/Peanut Punch/gi, ["Peanut Punch", "Punch de maní", "Punch di arachidi"]],
  [/Creamy Malt/gi, ["Creamy Malt", "Malta cremosa", "Malto cremoso"]],
  [/Pineapple Orange/gi, ["Pineapple Orange", "Piña naranja", "Ananas arancia"]],
  [/Cherryberry/gi, ["Cherryberry", "Cereza-berry", "Cherryberry"]],
  [/Mayonnaise/gi, ["Mayonnaise", "Mayonesa", "Maionese"]],
  [/Ketchup/gi, ["Ketchup", "Ketchup", "Ketchup"]],
  [/New Look/gi, ["New Look", "Nuevo look", "Nuovo look"]],
  [/Plain pack/gi, ["Plain", "Natural", "Naturale"]],
  [/Cinnamon pack/gi, ["Cinnamon", "Canela", "Cannella"]],
  [/Banana pack/gi, ["Banana", "Banano", "Banana"]],
  [/French Vanilla/gi, ["French Vanilla", "Vainilla francesa", "Vaniglia francese"]],
  [/Marshmallow/gi, ["Marshmallow", "Malvavisco", "Marshmallow"]],
  [/Caramel/gi, ["Caramel", "Caramelo", "Caramello"]],
  [/Nutmeg/gi, ["Nutmeg", "Nuez moscada", "Noce moscata"]],
  [/Mint/gi, ["Mint", "Menta", "Menta"]],
  [/Vanilla/gi, ["Vanilla", "Vainilla", "Vaniglia"]],
  [/Strawberry/gi, ["Strawberry", "Fresa", "Fragola"]],
  [/Chocolate/gi, ["Chocolate", "Chocolate", "Cioccolato"]],
  [/Almond/gi, ["Almond", "Almendra", "Mandorla"]],
  [/Carrot/gi, ["Carrot", "Zanahoria", "Carota"]],
  [/Original/gi, ["Original", "Original", "Originale"]],
  [/Malt/gi, ["Malt", "Malta", "Malto"]],
  [/Pineapple/gi, ["Pineapple", "Piña", "Ananas"]],
  [/Ginger Beer/gi, ["Ginger Beer", "Cerveza de jengibre", "Ginger beer"]],
  [/Kola Champagne/gi, ["Kola Champagne", "Kola Champagne", "Kola Champagne"]],
  [/Bubble Gum/gi, ["Bubble Gum", "Chicle", "Bubble gum"]],
  [/Grape/gi, ["Grape", "Uva", "Uva"]],
  [/Banana/gi, ["Banana", "Banano", "Banana"]],
  [/Tangerine/gi, ["Tangerine", "Mandarina", "Mandarino"]],
  [/GuavaPine/gi, ["Guava Pine", "Guayaba piña", "Guava ananas"]],
  [/Blue Camo Bottle/gi, ["Blue Camo Bottle", "Botella camuflaje azul", "Bottiglia mimetica blu"]],
];

function translateTitle(en) {
  let es = en;
  let it = en;
  for (const [re, [, e, i]] of phrasePairs) {
    es = es.replace(re, e);
    it = it.replace(re, i);
  }
  // Ensure Lasco prefix where original had Lasco
  if (/^Lasco /i.test(en)) {
    if (!/^Lasco /i.test(es)) es = `Lasco ${es}`;
    if (!/^Lasco /i.test(it)) it = `Lasco ${it}`;
  }
  return { en, es, it };
}

function desc(category, names) {
  const labels = manifest.labels[category];
  return {
    en: `${names.en} from Lasco. Jamaican ${labels.en.toLowerCase()} for retail and wholesale distribution.`,
    es: `${names.es} de Lasco. ${labels.es} de Jamaica para distribución retail y mayoreo.`,
    it: `${names.it} di Lasco. ${labels.it} giamaicani per la distribuzione retail e all'ingrosso.`,
  };
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const lines = [];
lines.push(`import { loc } from "@/i18n/t";`);
lines.push(`import type { CatalogProduct } from "@/components/ProductGrid";`);
lines.push(`import type { Loc } from "@/i18n/t";`);
lines.push(``);
lines.push(`export type LascoCategoryId =`);
for (const c of manifest.categories) {
  lines.push(`  | "${c}"`);
}
lines.push(`;`);
lines.push(``);
lines.push(`export type LascoGroup = {`);
lines.push(`  id: LascoCategoryId;`);
lines.push(`  label: Loc;`);
lines.push(`  products: CatalogProduct[];`);
lines.push(`};`);
lines.push(``);
lines.push(`const brand = loc("Lasco", "Lasco", "Lasco");`);
lines.push(``);

const groups = [];
for (const cat of manifest.categories) {
  const products = manifest.byCat[cat] || [];
  if (!products.length) continue;
  const label = manifest.labels[cat];
  const productLines = products.map((p) => {
    const names = translateTitle(p.title);
    const d = desc(cat, names);
    const details = ["brand"];
    if (p.size) details.push(`loc("${esc(p.size)}", "${esc(p.size)}", "${esc(p.size)}")`);
    details.push(`loc("${esc(label.en)}", "${esc(label.es)}", "${esc(label.it)}")`);
    return `      {
        slug: "${p.slug}",
        name: loc("${esc(names.en)}", "${esc(names.es)}", "${esc(names.it)}"),
        description: loc(
          "${esc(d.en)}",
          "${esc(d.es)}",
          "${esc(d.it)}",
        ),
        image: "${p.image}",
        details: [${details.join(", ")}],
        imageFit: "contain" as const,
      }`;
  });
  groups.push(`  {
    id: "${cat}",
    label: loc("${esc(label.en)}", "${esc(label.es)}", "${esc(label.it)}"),
    products: [
${productLines.join(",\n")}
    ],
  }`);
}

lines.push(`export const lascoGroups: LascoGroup[] = [`);
lines.push(groups.join(",\n"));
lines.push(`];`);
lines.push(``);
lines.push(`export const lascoGroceryProducts: CatalogProduct[] = lascoGroups.flatMap((group) => group.products);`);
lines.push(``);

fs.writeFileSync(path.resolve("src/lib/lasco-catalog.ts"), lines.join("\n"));
console.log("Wrote src/lib/lasco-catalog.ts");
console.log("products", manifest.items.length);
