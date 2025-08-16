// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'Juweriah' // <-- REPLACE with your repo name (e.g. 'Juweriah')

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
})
