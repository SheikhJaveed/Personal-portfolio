import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react', 'react-router-dom'], // Added react-router-dom
  },
  build: {
    rollupOptions: {
      external: [], // Keep this empty to ensure all dependencies are bundled
    }
  },
  resolve: {
    alias: {
      // Add any path aliases if needed
    }
  }
});