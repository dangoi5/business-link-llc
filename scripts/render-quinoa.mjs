import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const file = "C:/Users/diego/Downloads/quinoaclub_portfolio.pdf";
const wasmUrl = pathToFileURL(path.resolve("node_modules/pdfjs-dist/wasm")).href + "/";
const dir = path.resolve("tmp/catalogs/quinoa/pages");
fs.mkdirSync(dir, { recursive: true });

const data = new Uint8Array(fs.readFileSync(file));
const pdf = await getDocument({
  data,
  disableWorker: true,
  isEvalSupported: false,
  wasmUrl,
}).promise;
console.log("pages", pdf.numPages);

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

  const viewport = page.getViewport({ scale: 1.6 });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  try {
    await page.render({ canvasContext: ctx, viewport }).promise;
  } catch (err) {
    console.log("render error p" + pageNum, err?.message || err);
  }
  const out = path.join(dir, `page-${String(pageNum).padStart(2, "0")}.png`);
  fs.writeFileSync(out, canvas.toBuffer("image/png"));
  console.log("wrote", out, fs.statSync(out).size);
}

fs.writeFileSync(path.resolve("tmp/catalogs/quinoa/text.txt"), pages.join("\n"), "utf8");
console.log("text chars", pages.join("\n").length);
