import fs from "node:fs";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const targets = [
  {
    key: "bd",
    file: "C:/Users/diego/Downloads/2026 BD CATALOG-compressed.pdf",
    pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
  },
  {
    key: "sg",
    file: "C:/Users/diego/Downloads/2025_SG_catalog.pdf",
    pages: [1, 2, 3, 4, 5, 6, 11, 13, 15, 17, 18, 20, 24, 25, 26, 27],
  },
];

async function renderPdf({ key, file, pages }) {
  const data = new Uint8Array(fs.readFileSync(file));
  const pdf = await getDocument({ data, disableWorker: true, isEvalSupported: false }).promise;
  const dir = path.resolve("tmp/catalogs", key, "pages");
  fs.mkdirSync(dir, { recursive: true });
  for (const pageNum of pages) {
    if (pageNum > pdf.numPages) continue;
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    const ctx = canvas.getContext("2d");
    await page.render({ canvasContext: ctx, viewport }).promise;
    const out = path.join(dir, `page-${String(pageNum).padStart(2, "0")}.png`);
    fs.writeFileSync(out, canvas.toBuffer("image/png"));
    console.log(`wrote ${out}`);
  }
}

for (const target of targets) {
  console.log(`Rendering ${target.key} (${target.pages.length} pages)...`);
  await renderPdf(target);
}
