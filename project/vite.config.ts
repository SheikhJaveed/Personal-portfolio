import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'], // <-- force pre-bundling
  },
  build: {
    rollupOptions: {
      external: [], // make sure lucide-react is NOT here
    }
  }
});
