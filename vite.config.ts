import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: './dist/app',
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
                quietDeps: true,
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@styles': resolve(__dirname, './src/styles'),
        },
    },
})
