import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const file = "C:/Users/diego/Downloads/2026 BD CATALOG-compressed.pdf";
const dir = path.resolve("tmp/catalogs/bd/pages");
fs.mkdirSync(dir, { recursive: true });

const wasmUrl = pathToFileURL(path.resolve("node_modules/pdfjs-dist/wasm")).href + "/";
console.log("wasmUrl", wasmUrl);

const data = new Uint8Array(fs.readFileSync(file));
const pdf = await getDocument({
  data,
  disableWorker: true,
  isEvalSupported: false,
  wasmUrl,
}).promise;

for (const pageNum of [41, 42, 43]) {
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale: 2 });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport }).promise;
  const out = path.join(dir, `page-${String(pageNum).padStart(2, "0")}.png`);
  fs.writeFileSync(out, canvas.toBuffer("image/png"));
  console.log("wrote", out, fs.statSync(out).size);
}
