/**
 * Builds and refreshes the Obsidian "brain" vault for Business Link LLC.
 *
 *   npm run brain:sync              -> vault in ./brain
 *   node scripts/sync-brain.mjs --out "D:/MyVault"
 *
 * What it does
 *  - Scaffolds the vault (folders, Home, templates, Obsidian settings) if missing.
 *  - Generates Company, Brand and Market notes from the website's own data
 *    (src/lib/*.ts) so the site and the vault never drift apart.
 *  - Only rewrites the block between the SITE-SYNC markers in generated notes.
 *    Everything you type outside that block is yours and is never touched.
 *  - Never overwrites an existing file that has no markers.
 *
 * The vault is gitignored on purpose: the repo is public and the vault will
 * hold pricing, contacts and deal terms.
 */
import fs from "node:fs";
import path from "node:path";
import { register } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(repoRoot, "src");

// --- Resolve the site's "@/..." alias and extensionless .ts imports ----------
const hookSource = `
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
let srcRoot;
export function initialize(data) { srcRoot = data.srcRoot; }
const EXTS = [".ts", ".tsx", "/index.ts", "/index.tsx"];
function tryFile(base) {
  if (fs.existsSync(base) && fs.statSync(base).isFile()) return base;
  for (const ext of EXTS) if (fs.existsSync(base + ext)) return base + ext;
  return null;
}
export async function resolve(specifier, context, next) {
  let base = null;
  if (specifier.startsWith("@/")) base = path.join(srcRoot, specifier.slice(2));
  else if ((specifier.startsWith("./") || specifier.startsWith("../")) && context.parentURL?.startsWith("file:"))
    base = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier);
  if (base) {
    const file = tryFile(base);
    if (file) return next(pathToFileURL(file).href, context);
  }
  return next(specifier, context);
}
`;
register("data:text/javascript," + encodeURIComponent(hookSource), import.meta.url, {
  data: { srcRoot },
});

const load = (rel) => import(pathToFileURL(path.join(srcRoot, rel)).href);
const [content, brandsMod, marketsMod] = await Promise.all([
  load("lib/content.ts"),
  load("lib/brands.ts"),
  load("lib/markets.ts"),
]);
const catalogs = {
  ameriqual: await load("lib/ameriqual-catalog.ts"),
  quinoa: await load("lib/quinoa-club-catalog.ts"),
  starGrocery: await load("lib/star-grocery-catalog.ts"),
  lasco: await load("lib/lasco-catalog.ts"),
  tronix: await load("lib/tronix-catalog.ts"),
  starkist: await load("lib/starkist-catalog.ts"),
};

// --- Options ----------------------------------------------------------------
const outArgIdx = process.argv.indexOf("--out");
const vault = path.resolve(
  outArgIdx > -1 ? process.argv[outArgIdx + 1] : path.join(repoRoot, "brain"),
);

const START = "<!-- SITE-SYNC:START — generated from the website; edit outside this block -->";
const END = "<!-- SITE-SYNC:END -->";

const D = {
  inbox: "00 Inbox",
  company: "01 Company",
  brands: "02 Brands",
  markets: "03 Markets",
  contacts: "04 Contacts",
  deals: "05 Deals",
  shipments: "06 Shipments",
  compliance: "07 Compliance",
  playbooks: "08 Playbooks",
  meetings: "09 Meetings",
  daily: "10 Daily",
  templates: "Templates",
  attachments: "Attachments",
};

// --- Helpers ----------------------------------------------------------------
const en = (v) => (typeof v === "string" ? v : v?.en ?? "");
const cell = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\s*\n\s*/g, " ").trim();
const today = new Date().toISOString().slice(0, 10);
const counts = { created: 0, updated: 0, unchanged: 0, skipped: 0 };

function ensureDir(rel) {
  fs.mkdirSync(path.join(vault, rel), { recursive: true });
}

/** Write a file only if it does not exist yet (user-owned scaffolding). */
function writeIfMissing(rel, body) {
  const file = path.join(vault, rel);
  if (fs.existsSync(file)) {
    counts.skipped++;
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body);
  counts.created++;
}

/** Create a note, or refresh only its SITE-SYNC block if the note exists. */
function syncNote(rel, { frontmatter, title, generated, ownerSections }) {
  const file = path.join(vault, rel);
  const block = `${START}\n${generated.trim()}\n${END}`;
  fs.mkdirSync(path.dirname(file), { recursive: true });

  if (!fs.existsSync(file)) {
    const fm = `---\n${frontmatter.trim()}\nsynced: ${today}\n---\n`;
    fs.writeFileSync(file, `${fm}\n# ${title}\n\n${block}\n\n${ownerSections.trim()}\n`);
    counts.created++;
    return;
  }

  const current = fs.readFileSync(file, "utf8");
  const s = current.indexOf("<!-- SITE-SYNC:START");
  const e = current.indexOf(END);
  if (s === -1 || e === -1 || e < s) {
    counts.skipped++; // user rewrote the note; leave it alone
    return;
  }
  const next = current.slice(0, s) + block + current.slice(e + END.length);
  const stamped = next.replace(/^synced: .*$/m, `synced: ${today}`);
  if (stamped === current) counts.unchanged++;
  else {
    fs.writeFileSync(file, stamped);
    counts.updated++;
  }
}

const bullets = (items) => items.map((i) => `- ${i}`).join("\n");

// --- Brand → product mapping -------------------------------------------------
const slugsOf = (arr) => new Set(arr.map((p) => p.slug));
const uniq = (arr) => [...new Map(arr.map((p) => [p.slug, p])).values()];

const fresh = brandsMod.freshElementsBrand.products;
const ameriqual = uniq([
  ...catalogs.ameriqual.ameriqualShelfStableProducts,
  ...catalogs.ameriqual.ameriqualFoodserviceProducts,
]);
const quinoa = uniq([
  ...catalogs.quinoa.quinoaClubGroceryProducts,
  ...catalogs.quinoa.quinoaClubSnackProducts,
]);
const starGrocery = catalogs.starGrocery.starGroceryFamilyCovers;
const lasco = catalogs.lasco.lascoGroceryProducts;
const tronix = catalogs.tronix.tronixSnackProducts;
const starkist = catalogs.starkist.starKistProducts;

const claimed = new Set(
  [fresh, ameriqual, quinoa, starGrocery, lasco, tronix, starkist].flatMap((a) => [...slugsOf(a)]),
);
const snackCategory = content.portfolioCategories.find((c) => c.slug === "snacks-nuts");
const starBrands = snackCategory.products.filter((p) => !claimed.has(p.slug));

const productsByBrand = {
  "fresh-elements": fresh,
  ameriqual,
  "star-grocery": starGrocery,
  "star-brands": starBrands,
  "quinoa-club": quinoa,
  tronix,
  lasco,
  starkist,
  camaguey: [],
};

// Which website category each product shows up in (for the table).
const categoryOf = new Map();
for (const cat of content.portfolioCategories)
  for (const p of cat.products) if (!categoryOf.has(p.slug)) categoryOf.set(p.slug, en(cat.title));

// --- Scaffold: folders + settings --------------------------------------------
for (const d of Object.values(D)) ensureDir(d);

writeIfMissing(
  ".obsidian/app.json",
  JSON.stringify(
    {
      newFileLocation: "folder",
      newFileFolderPath: D.inbox,
      attachmentFolderPath: D.attachments,
      useMarkdownLinks: false,
      alwaysUpdateLinks: true,
      showUnsupportedFiles: false,
      defaultViewMode: "preview",
    },
    null,
    2,
  ),
);
writeIfMissing(".obsidian/templates.json", JSON.stringify({ folder: D.templates }, null, 2));
writeIfMissing(
  ".obsidian/daily-notes.json",
  JSON.stringify({ folder: D.daily, template: `${D.templates}/Daily`, format: "YYYY-MM-DD" }, null, 2),
);
writeIfMissing(
  ".obsidian/core-plugins.json",
  JSON.stringify(
    [
      "file-explorer", "global-search", "switcher", "graph", "backlinks", "outgoing-links",
      "tag-pane", "properties", "page-preview", "daily-notes", "templates", "note-composer",
      "command-palette", "outline", "word-count", "bases",
    ],
    null,
    2,
  ),
);

// --- Scaffold: templates -----------------------------------------------------
const T = (name, body) => writeIfMissing(`${D.templates}/${name}.md`, body.trimStart());

T("Daily", `
---
type: daily
date: {{date:YYYY-MM-DD}}
tags: [daily]
---
# {{date:dddd, MMMM D, YYYY}}

## Priorities
- [ ]

## Conversations / calls


## Decisions made


## Follow-ups
- [ ]
`);

T("Contact", `
---
type: contact
name:
company: ""
role:
roles: []        # buyer | importer | distributor | manufacturer | broker | freight | customs | other
country:
email:
phone:          # WhatsApp
language: en    # en | es | it
status: active  # lead | active | dormant
last-contact:
tags: [contact]
---
# {{title}}

## Who they are


## What they want / buy


## History
- {{date:YYYY-MM-DD}} —

## Related
- Deals:
- Brands:
- Markets:
`);

T("Company", `
---
type: organization
org-kind: importer   # importer | distributor | retailer | manufacturer | logistics | agent | other
country:
markets: []
brands: []
website:
status: prospect     # prospect | active | dormant
tags: [organization]
---
# {{title}}

## Overview


## Contacts
-

## Channels & volumes


## Payment / credit terms


## Notes
`);

T("Deal", `
---
type: deal
stage: lead          # lead | quoted | negotiating | confirmed | shipped | delivered | paid | lost
buyer: ""
supplier: ""
brand: ""
market: ""
products: []
incoterm:            # EXW | FCA | FOB | CIF | CFR | DAP | DDP
currency: USD
value:
margin-pct:
opened: {{date:YYYY-MM-DD}}
next-action:
next-action-date:
tags: [deal]
---
# {{title}}

## Request
(what the buyer asked for — volumes, destination, timeline)

## Quote
| Product | Pack / case | Qty (cases) | Unit price | Total |
|---|---|---|---|---|
| | | | | |

## Terms
- Payment:
- Lead time:
- Shelf life on arrival:
- Documents needed:

## Log
- {{date:YYYY-MM-DD}} —

## Outcome / lessons
`);

T("Shipment", `
---
type: shipment
deal: ""
status: planned       # planned | booked | in-transit | at-port | cleared | delivered | issue
origin:
destination:
incoterm:
container:            # 20ft | 40ft | LCL | air | truck
forwarder: ""
booking-no:
bl-no:
etd:
eta:
tags: [shipment]
---
# {{title}}

## Contents
| Product | Cases | Pallets | Lot / best-by |
|---|---|---|---|
| | | | |

## Documents checklist
- [ ] Commercial invoice
- [ ] Packing list
- [ ] Bill of lading / AWB
- [ ] Certificate of origin
- [ ] Health / phytosanitary certificate
- [ ] Import permit (destination)
- [ ] Insurance certificate

## Tracking log
- {{date:YYYY-MM-DD}} —

## Costs
| Item | Amount | Notes |
|---|---|---|
| Freight | | |
| Insurance | | |
| Duties / taxes | | |
`);

T("Meeting", `
---
type: meeting
date: {{date:YYYY-MM-DD}}
with: []
deal: ""
tags: [meeting]
---
# {{title}}

## Agenda


## Notes


## Decisions


## Action items
- [ ]
`);

T("Compliance", `
---
type: compliance
scope: market      # market | product | brand | company
applies-to: []
authority:         # FDA | USDA | local ministry | customs ...
expires:
tags: [compliance]
---
# {{title}}

## Requirement


## How we satisfy it


## Documents & where they live


## Renewal / expiry
`);

T("Playbook", `
---
type: playbook
owner:
last-reviewed: {{date:YYYY-MM-DD}}
tags: [playbook]
---
# {{title}}

## When to use this


## Steps
1.

## Pitfalls
-
`);

T("Product Spec", `
---
type: product-spec
brand: ""
sku:
upc:
hs-code:
pack:               # e.g. 24 x 100 g
case-weight-kg:
cases-per-pallet:
cases-per-20ft:
shelf-life-months:
min-order-cases:
cost-fob:
tags: [product-spec]
---
# {{title}}

## Notes
`);

// --- Company note -------------------------------------------------------------
const c = content.company;
const companyGenerated = `
**${en(c.tagline)}**

*${en(c.subtitle)}*

${en(c.description)}

${en(c.role)}

- Email: ${c.email}${c.phone ? `\n- Phone: ${c.phone}` : ""}

### What we do for manufacturers
${bullets(content.manufacturerServices.map((s) => `**${en(s.title)}** — ${en(s.description)}`))}

### What we do for buyers
${bullets(content.buyerServices.map((s) => `**${en(s.title)}** — ${en(s.description)}`))}

### Capabilities
${bullets(content.capabilities.map((s) => `**${en(s.title)}** — ${en(s.summary)}`))}

### How we work
${content.processSteps.map((s) => `${s.step}. **${en(s.label)}** — ${en(s.description)}`).join("\n")}

### Distribution models
${bullets(content.distributionPoints.map((s) => `**${en(s.title)}** — ${en(s.description)}`))}

### Catalog PDFs on the site
${bullets(content.catalogDocs.map((d) => `${d.brand} — ${en(d.title)} (\`public${d.href}\`, ${d.sizeMb} MB)`))}
`;

syncNote(`${D.company}/Business Link LLC.md`, {
  title: "Business Link LLC",
  frontmatter: `type: company\naliases: [Business Link, BL]\ntags: [company]`,
  generated: companyGenerated,
  ownerSections: `
## Legal & admin
- Entity / registration:
- Bank & payment instructions:
- Insurance:
- Accountant / lawyer:

## Strategy & goals


## Pricing philosophy / margin targets


## Operating rules
-
`,
});

// --- Brand notes --------------------------------------------------------------
const brandLinks = [];
for (const b of brandsMod.representedBrands) {
  const products = productsByBrand[b.slug] ?? [];
  const isOwn = b.slug === "fresh-elements";
  const name = b.name;
  brandLinks.push({ slug: b.slug, name, own: isOwn, count: products.length });

  const lines = (b.productLines ?? []).map(
    (l) => `**${en(l.label)}**${l.detail ? ` — ${en(l.detail)}` : ""}`,
  );
  const extra = (b.extraLinks ?? []).map((l) => `${en(l.label)} → \`${l.href}\``);
  const catalog = b.catalogHref ? `Catalog: \`${b.catalogHref}\`` : null;
  const catalogEs = b.catalogHrefEs ? `Catalog (ES): \`${b.catalogHrefEs}\`` : null;

  const rows = products.map((p) => {
    const details = (p.details ?? []).map(en).join(" · ");
    const status = p.unavailableForExport ? "⚠ not available for export" : "";
    return `| ${cell(en(p.name))} | ${cell(details)} | ${cell(categoryOf.get(p.slug) ?? "")} | ${status} |`;
  });

  const generated = `
${b.note ? en(b.note) : "_No description on the website yet._"}

- Relationship: **${isOwn ? "Own brand" : "Represented brand"}**
${b.subBrands?.length ? `- Sub-brands: ${b.subBrands.join(", ")}` : ""}
${catalog ? `- ${catalog}` : ""}${catalogEs ? `\n- ${catalogEs}` : ""}
${extra.length ? extra.map((x) => `- ${x}`).join("\n") : ""}

### Product lines
${lines.length ? bullets(lines) : "_None listed._"}

### Products on the website (${products.length})
${
  rows.length
    ? `| Product | Details | Site category | Export |\n|---|---|---|---|\n${rows.join("\n")}`
    : "_No product pages yet._"
}
`
    .replace(/\n{3,}/g, "\n\n");

  syncNote(`${D.brands}/${name}.md`, {
    title: name,
    frontmatter: `type: brand\nbrand-slug: ${b.slug}\nrelationship: ${isOwn ? "own-brand" : "represented"}\nstatus: active\ntags: [brand]`,
    generated,
    ownerSections: `
## Commercial terms
- Agreement type (exclusive / non-exclusive / territory):
- Supplier contact:
- Pricing list location:
- Payment terms:
- Min. order:
- Lead time:
- Incoterms offered:

## Compliance & certifications
- Plant / registration numbers:
- Certifications (SQF, HACCP, Organic, Kosher, Halal …):

## Logistics
- Ships from:
- Pallet / container configuration:

## Where we sell it
- Markets:
- Active deals:

\`\`\`dataview
TABLE stage, buyer, market, value
FROM "${D.deals}"
WHERE contains(brand, this.file.link)
SORT opened DESC
\`\`\`

## Notes
`,
  });
}

// --- Market notes -------------------------------------------------------------
const marketList = [];
for (const m of marketsMod.markets) {
  const name = en(m.name);
  marketList.push({ name, region: m.region, status: m.status });
  const generated = `
- Region: **${m.region}**
- Status on the website: **${m.status === "active" ? "Active market" : "In development"}**
- Country codes: ${m.mapIds.map((i) => i.toUpperCase()).join(", ")}
`;
  syncNote(`${D.markets}/${name}.md`, {
    title: name,
    frontmatter: `type: market\nregion: ${m.region}\nstatus: ${m.status}\ntags: [market]`,
    generated,
    ownerSections: `
## Why this market


## Channels & how products reach shelves


## Import requirements
- Importer of record needed?:
- Permits / registrations:
- Labeling (language, nutrition format):
- Duties / taxes:
- Restricted ingredients / shelf-life rules:

## Logistics
- Main port(s):
- Typical transit time:
- Forwarders we trust:

## Key partners
-

## What sells here


## Active deals

\`\`\`dataview
TABLE stage, buyer, brand, value
FROM "${D.deals}"
WHERE contains(market, this.file.link)
SORT opened DESC
\`\`\`
`,
  });
}

// --- Home dashboard & guides --------------------------------------------------
const own = brandLinks.filter((b) => b.own);
const rep = brandLinks.filter((b) => !b.own);
const byStatus = (s) => marketList.filter((m) => m.status === s);

writeIfMissing(
  "Home.md",
  `
---
type: home
tags: [home]
---
# Business Link — Brain

> ${en(c.tagline)}

## Jump in
- [[${D.company}/Business Link LLC|Company]]
- Capture something fast → drop it in **${D.inbox}**
- Today → open the daily note (calendar icon / \`Ctrl+P\` → *Open today's daily note*)
- New deal / contact / shipment → \`Ctrl+P\` → *Templates: Insert template*

## Brands
**Own:** ${own.map((b) => `[[${D.brands}/${b.name}|${b.name}]]`).join(", ")}

**Represented:** ${rep.map((b) => `[[${D.brands}/${b.name}|${b.name}]]`).join(", ")}

## Markets
**Active:** ${byStatus("active").map((m) => `[[${D.markets}/${m.name}|${m.name}]]`).join(", ")}

**In development:** ${byStatus("developing").map((m) => `[[${D.markets}/${m.name}|${m.name}]]`).join(", ")}

## Live views
*(need the free **Dataview** community plugin — Settings → Community plugins → Browse → "Dataview")*

### Open deals
\`\`\`dataview
TABLE stage, buyer, brand, market, value, next-action, next-action-date
FROM "${D.deals}"
WHERE type = "deal" AND stage != "delivered" AND stage != "paid" AND stage != "lost"
SORT next-action-date ASC
\`\`\`

### Shipments in motion
\`\`\`dataview
TABLE status, origin, destination, etd, eta
FROM "${D.shipments}"
WHERE type = "shipment" AND status != "delivered"
SORT eta ASC
\`\`\`

### Compliance expiring
\`\`\`dataview
TABLE authority, expires, applies-to
FROM "${D.compliance}"
WHERE expires
SORT expires ASC
\`\`\`

### Contacts gone quiet
\`\`\`dataview
TABLE company, country, last-contact
FROM "${D.contacts}"
WHERE type = "contact" AND status = "active"
SORT last-contact ASC
LIMIT 15
\`\`\`

See [[README]] for how this vault is organised and kept in sync with the website.
`,
);

writeIfMissing(
  "README.md",
  `
---
type: guide
tags: [guide]
---
# How this vault works

## Folders
| Folder | What goes in it |
|---|---|
| ${D.inbox} | Anything new, unsorted. New notes land here by default. Triage weekly. |
| ${D.company} | Business Link itself: strategy, legal/admin, operating rules. |
| ${D.brands} | One note per brand (own + represented). Terms, certs, logistics, products. |
| ${D.markets} | One note per country/region: import rules, channels, partners, ports. |
| ${D.contacts} | People **and** organizations (buyers, importers, suppliers, forwarders). |
| ${D.deals} | One note per opportunity/order, from first inquiry to payment. |
| ${D.shipments} | One note per shipment: documents, tracking, costs. |
| ${D.compliance} | FDA/USDA/customs/labeling requirements, certificates, expiry dates. |
| ${D.playbooks} | Repeatable how-tos: quoting, onboarding a buyer, booking freight … |
| ${D.meetings} | Meeting and call notes. |
| ${D.daily} | Daily notes. |
| ${D.templates} | Note templates. |

## Conventions
- Every note has a \`type:\` property (deal, contact, shipment …) — the dashboards depend on it.
- Link generously. Put a deal's buyer, brand and market in its properties as \`[[links]]\`; the brand and market notes then list their deals automatically.
- File names: deals \`YYYY-MM Buyer – Product\`, shipments \`YYYY-MM Buyer – Destination\`.
- Dates are ISO \`YYYY-MM-DD\`.

## Sync with the website
Brand, market and company notes are generated from the site's data
(\`src/lib/*.ts\`). Refresh them any time the website changes:

\`\`\`
npm run brain:sync
\`\`\`

Only the block between \`SITE-SYNC:START\` and \`SITE-SYNC:END\` is rewritten.
Write your own notes **below** the block.

## Privacy
This vault is **not** committed to git (the website repo is public).
It lives in \`brain/\` inside the project folder, which OneDrive already backs up.

## Suggested plugins
- **Dataview** — powers the dashboards on [[Home]].
- **Templater** (optional) — richer templates.
- **Obsidian Git** is *not* recommended here (public repo).
`,
);

writeIfMissing(
  `${D.inbox}/Start here.md`,
  `
# Inbox
Drop quick captures here: a WhatsApp from a buyer, a price you heard, a lead from the website contact form.
Move each one to its proper folder (or turn it into a Deal / Contact) when you triage.

Website contact-form submissions arrive at **${c.email}** — paste promising ones here as a **Lead**, then promote to a Deal.
`,
);

console.log(
  `Vault: ${vault}\n` +
    `  created ${counts.created}, updated ${counts.updated}, unchanged ${counts.unchanged}, skipped ${counts.skipped}\n` +
    `  brands: ${brandLinks.map((b) => `${b.name} (${b.count})`).join(", ")}\n` +
    `  markets: ${marketList.length}`,
);
