import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  root: './client',
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: false,  // set false to see what is packed into the bundle
  },
  plugins:[ visualizer() ],
});

