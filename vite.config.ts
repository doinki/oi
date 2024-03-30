import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  esbuild: {
    /**
     * @link https://caniuse.com/bigint
     */
    target: ['chrome67', 'edge79', 'safari14', 'firefox68', 'opera54', 'ios14'],
  },
  plugins: [react(), tsconfigPaths()],
});
