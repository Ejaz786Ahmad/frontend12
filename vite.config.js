import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.REACT_APP_BASE_URL': JSON.stringify(process.env.REACT_APP_BASE_URL || "https://backend1-0ofh.onrender.com/api/v1")
  }
})

