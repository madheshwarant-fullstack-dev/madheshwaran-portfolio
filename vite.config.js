import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'gsap-vendor': ['gsap'],
          'motion-vendor': ['framer-motion'],
          'lucide-icons': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1200
  }
});
