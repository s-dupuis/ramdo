import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  plugins: [
    terser()
  ],
  output: [
    {
      name: 'listree',
      file: 'dist/listree.umd.min.js',
      format: 'umd'
    },
    {
      file: 'dist/listree.esm.min.js',
      format: 'es'
    }
  ]
};
