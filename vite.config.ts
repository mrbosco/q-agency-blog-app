import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { fileURLToPath } from 'url';

const currentDir = (metaUrl: string): string => {
  return path.dirname(fileURLToPath(metaUrl));
};

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    viteStaticCopy({
      targets: [
        {
          src: './public/service-worker.js',
          dest: './',
        },
      ],
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(currentDir(import.meta.url), 'src'),
      },
    ],
  },
});
