import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//Test to check 3:00 PM 08/25

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separate vendor code into its own chunk
            return 'vendor';
          }
        }
      }
    }
  }
})

