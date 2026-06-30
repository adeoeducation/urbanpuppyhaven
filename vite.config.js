import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: { port: 5173, open: true },
  // Production preview server used by Railway: bind to 0.0.0.0 and the
  // platform-provided PORT, and accept the Railway-assigned host header.
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    allowedHosts: true
  }
})
