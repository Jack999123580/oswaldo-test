import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: "./dist/app"
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': resolve(__dirname, './src/styles')
    }
  }
})
