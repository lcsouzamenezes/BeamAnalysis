import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: "./src/beamAnalysis.js",
  output: { format: "iife", name: "beam", sourcemap: false, file: "./test/beamAnalysis.js" },
  plugins: [resolve(), commonjs()]
};
