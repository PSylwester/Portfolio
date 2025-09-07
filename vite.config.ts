import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), eslintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
