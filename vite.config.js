import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Webbshop-livs/',
  build: {
    outDir: 'build', // Ensure this points to the desired output directory
  },
})
