import { execSync } from 'child_process';
import esbuild from 'esbuild';

execSync('tsc -p tsconfig.build.json', { stdio: 'inherit' });

await esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  sourcemap: true,
  minify: true,
  target: ['es2020'],
  format: 'esm',
  outfile: 'dist/index.js',
  packages: 'external' as const,
  splitting: false,
  treeShaking: true,
  supported: {
    'import-meta': true,
  },
});
