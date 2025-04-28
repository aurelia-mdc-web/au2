import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import aurelia from '@aurelia/vite-plugin';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        loadPaths: [path.resolve(__dirname, 'node_modules')],
        quietDeps: true,
        silenceDeprecations: ['mixed-decls', 'import', 'global-builtin', 'color-functions']
      }
    }
  },
  server: {
    open: !process.env.CI,
    port: 9000,
  },
  esbuild: {
    target: 'es2022',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.html': 'text',
      },
    },
  },
  plugins: [
    aurelia({ useDev: true }),
    nodePolyfills()
  ]
});
