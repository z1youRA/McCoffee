import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
      reactivityTransform: true
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
})
