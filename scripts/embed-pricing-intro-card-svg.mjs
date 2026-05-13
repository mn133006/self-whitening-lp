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

// Layout: 1200 x 540（以前のサイズ感）+ 枠内の補足2行（ピル直下・やや小さめフォント）
const FONT = 'system-ui, -apple-system, &quot;Hiragino Sans&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Noto Sans JP&quot;, Meiryo, sans-serif';
const H = 540;
const innerH = H - 4;
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="${H}" viewBox="0 0 1200 ${H}" lang="ja">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgb(239,246,255)" stop-opacity="0.98"/>
      <stop offset="55%" stop-color="#ffffff"/>
    </linearGradient>
    <clipPath id="cardClip">
      <rect x="2" y="2" width="1196" height="${innerH}" rx="22" ry="22"/>
    </clipPath>
  </defs>
  <g clip-path="url(#cardClip)">
    <rect x="0" y="0" width="1200" height="${H}" fill="url(#cardBg)"/>
    <image xlink:href="${dataUri}" href="${dataUri}" x="780" y="0" width="420" height="${H}" preserveAspectRatio="xMidYMid slice"/>
    <line x1="780" y1="32" x2="780" y2="${H - 32}" stroke="rgb(59,130,246)" stroke-opacity="0.14" stroke-width="1"/>
  </g>
  <rect x="2" y="2" width="1196" height="${innerH}" rx="22" ry="22" fill="none" stroke="rgb(59,130,246)" stroke-opacity="0.45" stroke-width="4"/>
  <rect x="56" y="56" width="304" height="56" rx="28" fill="rgb(255,255,255)" stroke="rgb(59,130,246)" stroke-opacity="0.3" stroke-width="1.5"/>
  <text x="208" y="92" text-anchor="middle" font-family="${FONT}" font-size="26" font-weight="600" fill="rgb(30,64,175)">初回限定 / 体験価格</text>
  <text x="56" y="232" font-family="${FONT}" font-size="44" font-weight="700" fill="rgb(15,23,42)">初回体験</text>
  <g font-family="${FONT}" font-weight="700">
    <text x="248" y="232" font-size="34" fill="rgb(100,116,139)" text-decoration="line-through">4,900円</text>
    <text x="408" y="232" font-size="34" fill="rgb(100,116,139)">→</text>
    <text x="464" y="240" font-size="64" font-weight="800" fill="rgb(37,99,235)">1,900円</text>
  </g>
  <rect x="56" y="304" width="664" height="72" rx="36" fill="rgb(219,234,254)" stroke="rgb(147,197,253)" stroke-opacity="0.7" stroke-width="1.5"/>
  <text x="388" y="350" text-anchor="middle" font-family="${FONT}" font-size="28" font-weight="600" fill="rgb(30,58,138)">所要時間：目安60分（カウンセリング込み）</text>
  <text x="56" y="398" font-family="${FONT}" font-size="20" font-weight="500" fill="rgb(100,116,139)">合わなければここで終了OK、</text>
  <text x="56" y="424" font-family="${FONT}" font-size="20" font-weight="500" fill="rgb(100,116,139)">まずは気軽に1回お試しください</text>
</svg>
`;

writeFileSync(outPath, svg, "utf8");
console.log(`Wrote ${outPath} (${svg.length} chars)`);
