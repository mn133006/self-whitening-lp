/**
 * 店内モニター用: プロジェクトルートを静的配信（既定ポート 4174、0.0.0.0）。
 * テレビ: http://<このPCのLAN IP>:4174/signage/index.html
 */
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.env.SIGNAGE_PORT || 4174);
const HOST = process.env.SIGNAGE_HOST || '0.0.0.0';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function safeResolve(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const rel = path.normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, '');
  const full = path.join(ROOT, rel);
  if (!full.startsWith(ROOT)) {
    return null;
  }
  return full;
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const raw = req.url === '/' ? '/index.html' : req.url;
  const basePath = safeResolve(raw);
  if (!basePath) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(basePath, (err, st) => {
    if (!err && st.isFile()) {
      sendFile(res, basePath);
      return;
    }
    if (!err && st.isDirectory()) {
      const indexPath = path.join(basePath, 'index.html');
      fs.stat(indexPath, (e2, st2) => {
        if (!e2 && st2.isFile()) {
          sendFile(res, indexPath);
        } else {
          res.writeHead(404);
          res.end('Not found');
        }
      });
      return;
    }
    res.writeHead(404);
    res.end('Not found');
  });
});

function listLanUrls() {
  const out = [];
  const ifaces = os.networkInterfaces();
  for (const name of Object.keys(ifaces)) {
    const addrs = ifaces[name];
    if (!addrs) continue;
    for (const a of addrs) {
      const fam = a.family;
      const isV4 = fam === 'IPv4' || fam === 4;
      if (isV4 && !a.internal) {
        out.push(`http://${a.address}:${PORT}/signage/index.html`);
      }
    }
  }
  return out;
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    // eslint-disable-next-line no-console
    console.error(`\nポート ${PORT} はすでに使われています（前回のサーバーが動いたままの可能性があります）。\n`);
    // eslint-disable-next-line no-console
    console.error(`止める例（ターミナルにそのまま貼り付け）:`);
    // eslint-disable-next-line no-console
    console.error(`  kill $(lsof -t -iTCP:${PORT} -sTCP:LISTEN)\n`);
    // eslint-disable-next-line no-console
    console.error(`別ポートで起動する例:`);
    // eslint-disable-next-line no-console
    console.error(`  SIGNAGE_PORT=4175 npm run signage\n`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`\n  このMac上:  http://127.0.0.1:${PORT}/signage/index.html`);
  const lan = listLanUrls();
  if (lan.length) {
    // eslint-disable-next-line no-console
    console.log('  店内テレビ（同じWi‑Fi）に打ち込むURL:');
    for (const u of lan) {
      // eslint-disable-next-line no-console
      console.log(`    ${u}`);
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('  （LANのIPv4が見つかりませんでした。Wi‑Fiに接続してから再度起動してください。）');
  }
  // eslint-disable-next-line no-console
  console.log('');
});
