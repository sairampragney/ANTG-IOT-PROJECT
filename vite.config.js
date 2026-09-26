import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        manualChunks: (moduleId) => {
          if (moduleId.includes('node_modules/recharts')) return 'charts'
          if (moduleId.includes('node_modules')) return 'vendor'
          return undefined
        },
      },
    },
  },
})
