import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react_cicd/',
  server: {
    port: 3001,
    open: true,
    cors: true,
  }
})
