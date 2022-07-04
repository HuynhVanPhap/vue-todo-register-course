import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({ 
      typescript: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@common': path.resolve(__dirname, 'src/components/common/'),
      '@types': path.resolve(__dirname, 'src/types/'),
    }
  },
})
