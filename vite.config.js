import { defineConfig } from 'vite'
import { resolve } from 'path'

export default fefineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                sass: resolve(__dirname, 'sass.html')
            }
        }
    }
})