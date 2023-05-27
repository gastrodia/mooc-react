import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import unoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/mooc-react',
  plugins: [
    react(),
    unoCSS()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
