# Product image replacement list

Audit of every image under `public/products/` and `public/categories/` that the site shows.
Paths are relative to the project root. Product cards show images in a **square (1:1)** frame, so
replacements should be **square, at least 1200×1200 px, JPG**, with the product centred and filling
roughly 70–80% of the frame, on the same warm stone-podium background style as the Star Grocery
staged shots (see `public/products/star-grocery/flavors/`).

Keep the same filename and format so no code changes are needed.

## Priority 1: low resolution (blurry when enlarged) and bad crops

### AmeriQual (`public/products/ameriqual/`)
Every image is 470×430 or smaller. They are tight crops of a bowl with the "Dairy Free / Gluten Free"
badge half cut off at the right edge. Blurry, crowded, and the product pouch is never shown.
Replace each with a clean staged image of the plated meal or the retort pouch.

| File | Size | Problem |
|---|---|---|
| bbq-sauce-with-beef.jpg | 490×348 | low-res, dark plate, cropped badge |
| bbq-white-chicken.jpg | 490×348 | low-res, cropped badge |
| buffalo-chicken.jpg | 490×348 | low-res, cropped badge |
| cheesy-mac.jpg | 470×430 | extreme crop, blurry |
| chicken-noodle-soup.jpg | 470×430 | extreme crop, blurry, badge cut off |
| chicken-salad.jpg | 490×348 | low-res, badge cut off |
| chicken-sausage-quinoa.jpg | 470×430 | blurry, badge cut off |
| chili-with-bean.jpg | 470×430 | blurry, badges cut off |
| cream-of-mushroom.jpg | 470×430 | blurry, looks unappetising |
| hearty-beef-stew.jpg | 470×430 | blurry, badges cut off |
| hearty-beef-stew-7oz.jpg | 470×430 | same (currently unused) |
| hot-chili.jpg | 470×430 | blurry, badges cut off |
| marinara-mac.jpg | 470×430 | blurry |
| mediterranean-chicken-orzo.jpg | 470×430 | blurry |
| pasta-garden-vegetables.jpg | 470×430 | blurry |
| pasta-meat-sauce.jpg | 470×430 | blurry |
| pizza-mac.jpg | 470×430 | blurry |
| pollo-asado.jpg | 490×348 | low-res, grey bars when letterboxed |
| ring-o-roni.jpg | 470×430 | blurry |
| rustic-beef-stew.jpg | 500×430 | blurry |
| savory-breakfast-hash.jpg | 500×430 | blurry |
| southwestern-chicken-rice.jpg | 470×430 | blurry |
| spaghetti-meat-sauce.jpg | 470×430 | blurry |
| spaghetti-tomato-sauce.jpg | 470×430 | blurry |
| tomato-soup.jpg | 470×430 | blurry |
| vegetable-soup.jpg | 470×430 | blurry |
| white-chicken-chili.jpg | 470×430 | blurry |
| white-chicken.jpg | 490×348 | low-res |
| ready-ration.jpg | 420×430 | collage of flat pouches, hard to read, cropped text |
| elbows-pasta.jpg | 300×430 | tall narrow box on a grey background, very low-res |
| joy2-peanut-butter.jpg | 620×430 | brand logo clipped over toast, no product shown |
| joy2-yogurt-mixed-berry.jpg, joy2-yogurt-strawberry.jpg, joy2-yogurt-vanilla.jpg | 600×450 | cup cropped at the bottom, low-res |
| apack-ready-meal.jpg | 980×735 | white background, small box and loose sheets, lots of dead space |

### Star Brands (`public/products/star-brands/`) (used on the site)
| File | Size | Problem |
|---|---|---|
| flint-craft-bars.png | 359×400 | very low-res, black background |
| flint-baguette.png | 504×768 | black side bars, low-res |
| flint-grenki.png | 697×900 | black background, dead space at the sides |
| flint-wheat-rye-croutons.jpg | 588×784 | portrait, white background, dead space |
| hroom-chips.png | 900×574 | wide pack floating on black, a lot of dead space |
| san-sanych-seeds-xxl.png | 1024×1024 | black background, pack small and dim |
| chipsters-classic-sour-cream.png | 800×800 | black background |
| chipsters-bbq-wings.png | 855×900 | black background |
| do-bochkovogo-pub-grinki.png | 800×800 | black background |
| crispy-cris.jpg | 900×675 | pack small inside a beige box, dead space |

The black-background PNGs look heavy next to every other brand. Re-stage them on the light podium style.
Unused files in the same folder (`big-bob-*`, `chipsters-bbq.jpg`, `chipsters-classic.jpg`,
`do-bochkovogo.jpg`, `flint-craft.jpg`, `san-sanych-seeds.jpg`) are also low-res or have a pack floating
in a beige rectangle; only fix them if they get used.

## Priority 2: dead space and wrong shape

### Fresh Elements (`public/products/fresh-elements/`)
These are wide banners (2:1 or 3:1) placed into a square frame, so there is a lot of dead space or heavy
cropping. Replace with square single-product shots, or a tidy group shot on a square canvas.

| File | Size | Problem |
|---|---|---|
| flavored-peanuts.jpg | 1024×364 | thin strip of five tiny packs, unreadable at card size |
| platanitos.jpg | 1024×519 | two small packs in a wide image |
| margarine-traditional.jpg | 1024×512 | two identical packs side by side, wide |
| margarine-traditional-50g.jpg | 1024×512 | same (currently unused) |
| do-it-all-spread-tub-v2.jpg | 1536×1024 | two identical tubs, wide, white background |
| do-it-all-spread-v2.jpg | 1536×1024 | same (currently unused) |
| palm-oil-blend-900ml.jpg, palm-oil-blend.jpg | 768×1024 | tall bottle on white, narrow, dead space left and right |
| basmati-jasmine-rice.jpg | 1200×800 | only a texture of rice grains, no pack |

### Lasco (`public/products/lasco/`)
All 768×768 and square, but each product fills only about a third of the frame on a plain white
background, so they look small and have lots of dead space. Re-stage each one larger (pack filling
about 75% of the height) on the podium style. All files in the folder need this:
`lasco-almond-120g`, `lasco-almond-50-sachet`, `lasco-carrot-120g`, `lasco-cherryberry-120g`,
`lasco-chocolate-120g`, `lasco-creamy-malt-50-less-sugar`, `lasco-peanut-punch-120g`,
`lasco-pineapple-orange-120g`, `lasco-strawberry-120g`, `lasco-vanilla-120g`,
`lasco-vanilla-50-sachet`, `lasco-instant-chocolate-mix-mint-1oz` (a tiny sachet),
`instant-chocolate-mix-cans-6oz-12oz-20oz`, and the four display boxes
(`...caramel...`, `...french-vanilla...`, `...nutmeg...`, `...marshmallow...`).
The pouch photos also have visible compression artefacts and a grey halo on the white background.

### Quinoa Club (`public/products/quinoa-club/`)
The staged `lifestyle/` images used on the site look good. The plain pack shots in the folder root and
`packs/` are unused, and the staged files cover everything, so nothing to replace. Optional: ask for
the quinoa-snacks (`lifestyle/quinoa-snacks.jpg`) pack to be re-staged larger, since four tiny packs
are hard to read.

## Priority 3: category and banner images (`public/categories/`)
| File | Size | Problem |
|---|---|---|
| foodservice-institutional.jpg | 1024×768 | grey, blurry photo of meal trays on a rack, reads as low quality |
| shelf-stable-foods.jpg | 1024×576 | wide, a clock on a pantry shelf: confusing, not food focused |

## Star Grocery staged shots (`public/products/star-grocery/flavors/`)
Mostly good. Fix these:

| File (under `flavors/`) | Problem |
|---|---|
| fitto-soup-family-freshly-served/28_fitto_instant_oatmeal/product_07.jpg | stray text ("ce cream 4u g") baked into the top of the image |
| hutorok-pasta-family-showcase/08_hutorok_pasta_800g/product_10.jpg and product_11.jpg | thin spaghetti pack is a narrow strip, dead space on both sides |
| perfetto-pasta-family-hero/04_perfetto_premium_pasta/product_01.jpg (and other spaghetti shots in that folder) | same thin pack |
| la-pasta-family-collection-showcase/02_la_pasta_pasta_products/product_03.jpg, product_08.jpg, product_09.jpg | long spaghetti and linguine bags are narrow and small in the frame |
| hutorok-flour-family-styled-for-baking/07_hutorok_flour/ (pizza mix boxes, e.g. product_03.jpg) | very small boxes, product fills under 25% of the frame |
| hutorok-sugar-and-baking-soda-showcase/12_hutorok_sugar_and_soda/product_03.jpg | small box floating in the middle |
| kitto-soy-sauce-family-spread/24_kitto_soy_sauces/ (all, e.g. product_04.jpg, product_08.jpg) | tall thin bottles, product fills about 40% of the frame |
| kitto-specialty-sauces-elegant-trio/25_kitto_specialty_sauces/ (all, e.g. product_02.jpg) | same, thin bottles on a wide podium |

## Images I made recently
| File | Problem |
|---|---|
| public/products/star-grocery/families/kitto-instant-egg-noodles.jpg | three trays cropped into strips, text cut off ("MUSHROOMS" and "CHICKEN" truncated) |
| public/products/star-grocery/families/khutorok-instant-noodles.jpg | 2×2 collage of four crops with the packs cut at the edges |

Replace both with a properly composed family hero (all packs shown whole, same style as the other
`families/` covers, 1254×1254).

## Family cover images
All other covers in `public/products/star-grocery/families/` are fine.

## Prompt hints for the image generator
- Square 1:1, 1500×1500, JPG.
- One product, centred, the whole pack visible and not cropped, filling about 75% of the frame height.
- Warm beige travertine podium, soft window light and shadows, a few ingredient props kept to the edges
  (same look as `public/products/star-grocery/flavors/**`).
- Keep the packaging artwork, logo and text exactly as in the source image. Do not redraw or invent text.
- For wide group shots (Fresh Elements, Lasco), either make separate square shots per product or one
  square image with the group centred and well spaced.
