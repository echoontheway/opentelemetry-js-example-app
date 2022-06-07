import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  root: './client',
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: false,  // set false to analyze what is packed into the bundle
  },
  plugins:[ visualizer() ],
  resolve:{
    mainFields:["browser", "esm2015", "module", "main"] // set the field when enable esm2015 entry point
  }
});