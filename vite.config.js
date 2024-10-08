import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [],
    },
  },
  server: {
    port: 3000,
    open: true
  }
})
