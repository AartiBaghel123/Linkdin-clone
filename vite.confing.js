import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    loader: 'jsx', // Ensure JSX is correctly handled in .js files
  },
  server: {
    open: true, // Automatically open the browser
  },
});
