import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'production'
    ? '/Fylo-dark-theme-landing/'
    : '/',
  plugins: [react(), tailwindcss()],
}))
