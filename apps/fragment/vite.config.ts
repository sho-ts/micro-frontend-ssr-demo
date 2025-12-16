import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  build: {
    outDir: 'static/client',
    lib: {
      entry: path.resolve(__dirname, 'src/entries/client.ts'),
      formats: ['es'],
      fileName: () => 'main.js',
    },
  },
  define: {
    process: {
      env: {},
    },
  },
});
