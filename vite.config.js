import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) return 'vendor-react'
          if (id.includes('node_modules/react') && !id.includes('node_modules/react-dom')) return 'vendor-react'
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/gsap')) return 'vendor-animation'
          if (id.includes('node_modules/three')) return 'vendor-3d'
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'es2020',
  },
})