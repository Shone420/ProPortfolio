import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ProPortfolio/',  // Adjust base URL if necessary
  build: {
    outDir: 'dist',  // Output to public folder
  },
})
