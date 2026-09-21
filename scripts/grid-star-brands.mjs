import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const pages = path.resolve("tmp/catalogs/star-brands/pages");
const out = path.resolve("tmp/catalogs/star-brands/grids");
fs.mkdirSync(out, { recursive: true });

async function grid(n) {
  const src = path.join(pages, `page-${String(n).padStart(2, "0")}.png`);
  const img = sharp(src);
  const { width, height } = await img.metadata();
  let lines = "";
  for (let x = 0; x <= width; x += 50) {
    lines += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="#ff00aa" stroke-width="1" opacity="0.5"/>`;
    lines += `<text x="${x + 2}" y="14" font-size="11" fill="#c4007a" font-family="Arial">${x}</text>`;
  }
  for (let y = 0; y <= height; y += 50) {
    lines += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="#00aaff" stroke-width="1" opacity="0.5"/>`;
    lines += `<text x="4" y="${y + 12}" font-size="11" fill="#0055aa" font-family="Arial">${y}</text>`;
  }
  const svg = Buffer.from(`<svg width="${width}" height="${height}">${lines}</svg>`);
  await img.composite([{ input: svg, top: 0, left: 0 }]).png().toFile(path.join(out, `grid-${n}.png`));
  console.log(n, width, height);
}

for (const n of [2, 4, 8, 10, 12, 14, 16, 18, 20, 24, 26, 28, 30, 32]) {
  await grid(n);
}
