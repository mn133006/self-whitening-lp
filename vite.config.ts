import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-lp-build-marker',
      transformIndexHtml: {
        order: 'post',
        handler(html, ctx) {
          if (ctx.server) return html
          const stamp = new Date().toISOString()
          return html.replace(
            '</head>',
            `  <!-- LP build ${stamp} — 本番でソース表示すると配信ビルド時刻が分かります -->\n</head>`,
          )
        },
      },
    },
  ],
  // 同一Wi‑Fi上のスマホから http://<PCのIP>:5173 で開くため（localhost のみだと接続できない）
  server: {
    host: true,
    port: 5173,
  },
})
