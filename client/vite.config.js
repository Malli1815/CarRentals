import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👈 this fixes broken assets on Vercel
  plugins: [react()]
})
