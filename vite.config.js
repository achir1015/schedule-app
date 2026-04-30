import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/schedule-app/', // 👈 這裡必須對應你的 GitHub 倉庫名稱
})
