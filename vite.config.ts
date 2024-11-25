import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'; // Importuojame defineConfig
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as vars;`, // Pavyzdinis kintamasis visur
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src', // Alias nuorodos
    },
  },
});
