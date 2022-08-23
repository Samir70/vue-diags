import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// copied from https://vitejs.dev/guide/build.html#library-mode

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'q-show',
      fileName: (format) => `q-show.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
