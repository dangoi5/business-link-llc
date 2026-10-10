import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const entries = JSON.parse(await fs.readFile('tmp/image-replacements/generated.json', 'utf8'));
const columns = 4;
const tile = 360;
const pageSize = 16;
for (let offset = 0; offset < entries.length; offset += pageSize) {
  const page = entries.slice(offset, offset + pageSize);
  const overlays = [];
  for (const [index, entry] of page.entries()) {
    const left = (index % columns) * tile;
    const top = Math.floor(index / columns) * (tile + 32);
    overlays.push({ input: await sharp(entry.source).resize(tile, tile).toBuffer(), left, top });
    const label = `${offset + index + 1}. ${path.basename(entry.target)}`.replace(/[&<>]/g, '');
    overlays.push({ input: Buffer.from(`<svg width="360" height="32"><rect width="360" height="32" fill="white"/><text x="8" y="22" font-size="13" font-family="Arial">${label}</text></svg>`), left, top: top + tile });
  }
  const output = `tmp/image-replacements/review-${Math.floor(offset / pageSize) + 1}.jpg`;
  await sharp({ create: { width: columns * tile, height: Math.ceil(page.length / columns) * (tile + 32), channels: 3, background: '#eee8df' } })
    .composite(overlays).jpeg({ quality: 90 }).toFile(output);
  console.log(output);
}
