import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 同一Wi‑Fi上のスマホから http://<PCのIP>:5173 で開くため（localhost のみだと接続できない）
  server: {
    host: true,
    port: 5173,
  },
})
