import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Workers serves this site from the domain root. GitHub Pages sets
  // VITE_BASE_PATH=/CONTEXTUAL-TRIANGLES/ in its workflow.
  base: process.env.VITE_BASE_PATH || '/',
});
