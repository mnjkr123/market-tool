import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit to 1000 kB
    rollupOptions: {
      input: '/index.html', // Ensure Vite is using the correct entry point
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separate vendor code into its own chunk
            return 'vendor';
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]', // Ensure asset files are named correctly
        chunkFileNames: 'assets/[name]-[hash].js', // Ensure chunk files are named correctly
      }
    }
  }
})
