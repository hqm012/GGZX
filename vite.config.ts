import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => ({
  plugins: [
    vue(),
    viteMockServe({
      // default
      mockPath: 'mock',
      enable: true // command === 'serve',
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },

  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 或 "modern"，否则会出现Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
        // 引入 variable.scss 这样就可以在全局中使用 variable.scss中预定义的变量了。使用use而不使用 impart 因为新版本sass会警告。给导入的路径最后加上 ; 
        additionalData: '@use "@/styles/variable.scss" as *;'
      }
    }
  }
})
