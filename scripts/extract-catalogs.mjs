import fs from "node:fs";
import path from "node:path";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const catalogs = [
  {
    key: "bd",
    file: "C:/Users/diego/Downloads/2026 BD CATALOG-compressed.pdf",
  },
  {
    key: "sg",
    file: "C:/Users/diego/Downloads/2025_SG_catalog.pdf",
  },
];

const outRoot = path.resolve("tmp/catalogs");
fs.mkdirSync(outRoot, { recursive: true });

function extractJpegs(buf, destDir, prefix) {
  fs.mkdirSync(destDir, { recursive: true });
  let count = 0;
  for (let i = 0; i < buf.length - 2; i++) {
    if (buf[i] !== 0xff || buf[i + 1] !== 0xd8 || buf[i + 2] !== 0xff) continue;
    for (let j = i + 3; j < buf.length - 1; j++) {
      if (buf[j] === 0xff && buf[j + 1] === 0xd9) {
        const jpeg = buf.subarray(i, j + 2);
        if (jpeg.length >= 20000) {
          const name = `${prefix}-${String(count + 1).padStart(3, "0")}.jpg`;
          fs.writeFileSync(path.join(destDir, name), jpeg);
          count += 1;
        }
        i = j;
        break;
      }
    }
  }
  return count;
}

async function extractText(file) {
  const data = new Uint8Array(fs.readFileSync(file));
  const pdf = await getDocument({ data, disableWorker: true, isEvalSupported: false }).promise;
  const pages = [];
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const lines = [];
    let currentY = null;
    let current = [];
    for (const item of content.items) {
      if (!("str" in item) || !item.str) continue;
      const y = Math.round(item.transform[5]);
      if (currentY !== null && Math.abs(y - currentY) > 4) {
        lines.push(current.join(" ").replace(/\s+/g, " ").trim());
        current = [];
      }
      currentY = y;
      current.push(item.str);
    }
    if (current.length) lines.push(current.join(" ").replace(/\s+/g, " ").trim());
    pages.push(`\n----- PAGE ${pageNum} -----\n${lines.filter(Boolean).join("\n")}`);
  }
  return { numPages: pdf.numPages, text: pages.join("\n") };
}

for (const catalog of catalogs) {
  console.log(`Extracting ${catalog.key}...`);
  const buf = fs.readFileSync(catalog.file);
  const jpegCount = extractJpegs(buf, path.join(outRoot, catalog.key, "images"), catalog.key);
  console.log(`  jpegs: ${jpegCount}`);
  const { numPages, text } = await extractText(catalog.file);
  fs.writeFileSync(path.join(outRoot, catalog.key, "text.txt"), text, "utf8");
  console.log(`  pages: ${numPages}, text chars: ${text.length}`);
}
