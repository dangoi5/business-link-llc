import fs from "node:fs";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const file = "C:/Users/diego/Downloads/Snack[1].pdf";
const data = new Uint8Array(fs.readFileSync(file));
const pdf = await getDocument({ data, disableWorker: true, isEvalSupported: false }).promise;
const dir = path.resolve("tmp/catalogs/star-brands/pages");
fs.mkdirSync(dir, { recursive: true });

for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale: 1.4 });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const ctx = canvas.getContext("2d");
  await page.render({ canvasContext: ctx, viewport }).promise;
  const out = path.join(dir, `page-${String(pageNum).padStart(2, "0")}.png`);
  fs.writeFileSync(out, canvas.toBuffer("image/png"));
  console.log(`wrote ${out}`);
}
