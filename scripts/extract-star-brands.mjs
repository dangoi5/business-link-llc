import fs from "node:fs";
import path from "path";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const file = "C:/Users/diego/Downloads/Snack[1].pdf";
const outDir = path.resolve("tmp/catalogs/star-brands");
fs.mkdirSync(outDir, { recursive: true });

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

fs.writeFileSync(path.join(outDir, "text.txt"), pages.join("\n"), "utf8");
console.log(`pages: ${pdf.numPages}, chars: ${pages.join("\n").length}`);
