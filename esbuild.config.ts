import { execSync } from 'child_process';
import esbuild from 'esbuild';

execSync('tsc -p tsconfig.build.json', { stdio: 'inherit' });

const commonConfig = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  sourcemap: true,
  minify: true,
  target: ['es2020'],

  // Keep imports like "Chakra.Menu"
  treeShaking: true,

  // Don't let esbuild split files — Chakra compound components break
  splitting: false,

  // Important for Chakra v3 (which uses modern ESM + emotion)
  supported: {
    'import-meta': true,
  },
};

// ESM build - externalize all packages for tree-shaking in bundlers
await esbuild.build({
  ...commonConfig,
  outfile: 'dist/index.js',
  format: 'esm',
  packages: 'external' as const,
});

// CJS build - bundle dependencies to avoid ESM/CJS interop issues
// Only externalize React (peer dependency)
await esbuild.build({
  ...commonConfig,
  outfile: 'dist/index.cjs',
  format: 'cjs',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
});
