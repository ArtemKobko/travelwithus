import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/travelwithus/',
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setupTests.js',
  },
  coverage: {
    provider: 'v8',
    reporter: ['text', 'json', 'html'],
  },
});
