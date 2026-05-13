/**
 * Regenerates public/pricing-intro-card-full.svg with UTF-8 Japanese text and
 * an embedded data-URI for the photo (required when the SVG is shown via <img>,
 * where external <image> references are often blocked).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const webpPath = join(root, "public", "pricing-intro-card-vertical.webp");
const outPath = join(root, "public", "pricing-intro-card-full.svg");

const webp = readFileSync(webpPath);
const dataUri = `data:image/webp;base64,${webp.toString("base64")}`;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="800" viewBox="0 0 1200 800" lang="ja">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgb(239,246,255)" stop-opacity="0.98"/>
      <stop offset="55%" stop-color="#ffffff"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="1196" height="794" rx="20" ry="20" fill="url(#cardBg)" stroke="rgb(59,130,246)" stroke-opacity="0.45" stroke-width="4"/>
  <rect x="48" y="52" width="268" height="44" rx="22" fill="rgb(255,255,255)" stroke="rgb(59,130,246)" stroke-opacity="0.22" stroke-width="1.5"/>
  <text x="182" y="80" text-anchor="middle" font-family="system-ui, -apple-system, &quot;Hiragino Sans&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Noto Sans JP&quot;, Meiryo, sans-serif" font-size="22" font-weight="600" fill="rgb(30,64,175)">初回限定 / 体験価格</text>
  <text x="48" y="168" font-family="system-ui, -apple-system, &quot;Hiragino Sans&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Noto Sans JP&quot;, Meiryo, sans-serif" font-size="34" font-weight="700" fill="rgb(15,23,42)">初回体験</text>
  <text x="48" y="228" font-family="system-ui, -apple-system, &quot;Hiragino Sans&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Noto Sans JP&quot;, Meiryo, sans-serif" font-size="26" fill="rgb(100,116,139)">4,900円</text>
  <text x="148" y="228" font-family="system-ui, -apple-system, &quot;Hiragino Sans&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Noto Sans JP&quot;, Meiryo, sans-serif" font-size="26" fill="rgb(100,116,139)">→</text>
  <text x="196" y="236" font-family="system-ui, -apple-system, &quot;Hiragino Sans&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Noto Sans JP&quot;, Meiryo, sans-serif" font-size="56" font-weight="800" fill="rgb(37,99,235)">1,900円</text>
  <rect x="44" y="288" width="620" height="108" rx="54" fill="rgb(219,234,254)" stroke="rgb(147,197,253)" stroke-opacity="0.6" stroke-width="1.5"/>
  <text x="64" y="338" font-family="system-ui, -apple-system, &quot;Hiragino Sans&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Noto Sans JP&quot;, Meiryo, sans-serif" font-size="26" font-weight="600" fill="rgb(30,58,138)">所要時間：目安60分</text>
  <text x="64" y="378" font-family="system-ui, -apple-system, &quot;Hiragino Sans&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Noto Sans JP&quot;, Meiryo, sans-serif" font-size="26" font-weight="600" fill="rgb(30,58,138)">（カウンセリング込み）</text>
  <line x1="708" y1="40" x2="708" y2="760" stroke="rgb(59,130,246)" stroke-opacity="0.14" stroke-width="1"/>
  <image xlink:href="${dataUri}" href="${dataUri}" x="708" y="2" width="488" height="794" preserveAspectRatio="xMidYMid slice"/>
</svg>
`;

writeFileSync(outPath, svg, "utf8");
console.log(`Wrote ${outPath} (${svg.length} chars)`);
