/**
 * Vite は public/ を dist の直下にフラット出力するため、
 * signage 側の ../public/foo は dist では ../foo が正しい。
 * 本スクリプトで dist/signage を生成し、HTML/JS 内パスを置換する。
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(DIST, 'signage');

function rewritePublicPaths(content) {
  return content.replaceAll('../public/', '../');
}

async function main() {
  try {
    await fs.access(path.join(DIST, 'index.html'));
  } catch {
    console.error('[sync-signage-dist] dist/ が無いようです。先に vite build を実行してください。');
    process.exit(1);
  }

  await fs.mkdir(OUT, { recursive: true });
  const signageDir = path.join(ROOT, 'signage');

  const htmlSrc = await fs.readFile(path.join(signageDir, 'index.html'), 'utf8');
  await fs.writeFile(path.join(OUT, 'index.html'), rewritePublicPaths(htmlSrc), 'utf8');

  const jsSrc = await fs.readFile(path.join(signageDir, 'script.js'), 'utf8');
  await fs.writeFile(path.join(OUT, 'script.js'), rewritePublicPaths(jsSrc), 'utf8');

  await fs.copyFile(path.join(signageDir, 'style.css'), path.join(OUT, 'style.css'));
}

await main();
