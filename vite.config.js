import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  optimizeDeps: {
    include: ['three', 'gsap', 'gsap/ScrollTrigger']
  },
  resolve: {
    alias: {
      'three': 'three',
      'gsap': 'gsap'
    }
  }
});
