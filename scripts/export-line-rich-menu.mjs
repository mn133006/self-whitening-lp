import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "public", "line-rich-menu-clear-routine.svg");
const outPath = join(root, "public", "line-rich-menu-clear-routine.png");

const svg = readFileSync(svgPath);

const resvg = new Resvg(svg, {
  fitTo: {
    mode: "width",
    value: 2500,
  },
  font: {
    fontDirs: [
      "/System/Library/Fonts",
      "/Library/Fonts",
      "/System/Library/Fonts/Supplemental",
    ],
    defaultFontFamily: "Hiragino Sans",
    sansSerifFamily: "Hiragino Sans",
  },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

writeFileSync(outPath, pngBuffer);

const { width, height } = pngData;
console.log(`Wrote ${outPath} (${width}x${height}, ${pngBuffer.length} bytes)`);
