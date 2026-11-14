/**
 * Measures where the product sits inside every image under public/products and
 * writes src/lib/image-frames.json. Product cards use it to zoom pack shots that
 * sit small on a plain background so the pack fills the card, and to paint the
 * card in the photo's own background colour. Image files are never modified.
 *
 * Run after adding or replacing product images:
 *   node scripts/compute-image-frames.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public");
const OUT = path.join(process.cwd(), "src", "lib", "image-frames.json");

const files = fs
  .readdirSync(path.join(ROOT, "products"), { recursive: true })
  .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
  .sort();

const round = (value) => Math.round(value * 10000) / 10000;
const hex = (r, g, b) => `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;

const luma = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

/**
 * The photo's background as the darkest edge pixel that is still close to the typical
 * edge colour. Cards paint this colour and blend the photo with "darken", so any
 * background pixel that is the same or lighter disappears into the card seamlessly.
 */
function backgroundColour(pixels, width, height) {
  const ring = Math.max(1, Math.round(Math.min(width, height) * 0.01));
  const edge = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (x >= ring && x < width - ring && y >= ring && y < height - ring) continue;
      const i = (y * width + x) * 4;
      edge.push([pixels[i], pixels[i + 1], pixels[i + 2]]);
    }
  }
  const median = [0, 1, 2].map((c) => {
    const values = edge.map((p) => p[c]).sort((a, b) => a - b);
    return values[Math.floor(values.length / 2)];
  });
  // Ignore edge pixels that belong to the product rather than the background.
  const near = edge.filter((p) => Math.hypot(p[0] - median[0], p[1] - median[1], p[2] - median[2]) < 24);
  const pool = (near.length ? near : edge).sort((a, b) => luma(...a) - luma(...b));
  // A low percentile rather than the minimum, so a few stray dark pixels don't drive it.
  const pick = pool[Math.floor(pool.length * 0.03)];
  return hex(...pick);
}

const frames = {};
for (const file of files) {
  const abs = path.join(ROOT, "products", file);
  const key = `/products/${file.split(path.sep).join("/")}`;
  const meta = await sharp(abs).metadata();
  const width = meta.width;
  const height = meta.height;

  // Transparent top-left pixel means a cut-out with no background of its own.
  const { data: pixels, info: raw } = await sharp(abs).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const transparent = pixels[3] < 16;
  const bg = transparent ? null : backgroundColour(pixels, raw.width, raw.height);

  let box = { x: 0, y: 0, w: 1, h: 1 };
  try {
    const { info } = await sharp(abs).trim({ threshold: 18 }).toBuffer({ resolveWithObject: true });
    box = {
      x: -(info.trimOffsetLeft ?? 0) / width,
      y: -(info.trimOffsetTop ?? 0) / height,
      w: info.width / width,
      h: info.height / height,
    };
  } catch {
    // Uniform image: nothing to trim.
  }

  frames[key] = {
    aspect: round(width / height),
    x: round(box.x),
    y: round(box.y),
    w: round(box.w),
    h: round(box.h),
    bg,
  };
}

fs.writeFileSync(OUT, `${JSON.stringify(frames, null, 1)}\n`);
console.log(`Wrote ${Object.keys(frames).length} frames to ${path.relative(process.cwd(), OUT)}`);
