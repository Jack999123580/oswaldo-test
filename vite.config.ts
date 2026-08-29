import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: './dist/app',
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@styles': resolve(__dirname, './src/styles'),
        },
    },
})
