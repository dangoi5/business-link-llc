import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

sharp.cache(false);

const root = process.cwd();
const manifestPath = path.join(root, 'tmp/image-replacements/generated.json');
const entries = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const backupRoot = path.join(root, 'tmp/image-replacements/originals');
const report = [];
for (const entry of entries) {
  const destination = path.resolve(root, entry.target);
  if (!destination.startsWith(path.join(root, 'public') + path.sep)) {
    throw new Error(`Destination outside public: ${entry.target}`);
  }
  const original = path.join(backupRoot, entry.target);
  await fs.mkdir(path.dirname(original), { recursive: true });
  try { await fs.copyFile(destination, original, 1); }
  catch (error) { if (error.code !== 'EEXIST') throw error; }
  const family = entry.target.includes('/families/');
  let image = sharp(entry.source).resize(family ? 1254 : 1500, family ? 1254 : 1500, { fit: 'contain' });
  image = destination.endsWith('.png') ? image.png() : image.jpeg({ quality: 94, mozjpeg: true });
  const buffer = await image.toBuffer();
  const current = await fs.readFile(destination);
  if (!current.equals(buffer)) {
    for (let attempt = 0; ; attempt++) {
      try { await fs.writeFile(destination, buffer); break; }
      catch (error) {
        if (attempt === 5) throw error;
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  }
  const metadata = await sharp(destination).metadata();
  const expected = destination.endsWith('.png') ? 'png' : 'jpeg';
  if (metadata.width !== metadata.height || metadata.width < 1200 || metadata.format !== expected) {
    throw new Error(`Invalid replacement: ${entry.target}`);
  }
  report.push({ ...entry, width: metadata.width, height: metadata.height, format: metadata.format,
    bytes: buffer.length, sha256: crypto.createHash('sha256').update(buffer).digest('hex') });
}
await fs.writeFile(path.join(root, 'tmp/image-replacements/verified.json'), JSON.stringify(report, null, 2) + '\n');
console.log(`Installed and verified ${report.length} square image replacements. Originals saved under tmp/image-replacements/originals.`);
