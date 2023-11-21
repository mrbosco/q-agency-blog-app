import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import { fileURLToPath } from 'url';

const currentDir = (metaUrl: string): string => {
  return path.dirname(fileURLToPath(metaUrl));
};

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(currentDir(import.meta.url), 'src'),
      },
    ],
  },
});
