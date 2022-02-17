// jest.config.js
import nextJest from 'next/jest';

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: __dirname });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.de.ts',
    '!**/*.stories.ts',
    '!**/*.stories.tsx',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/.storybook/**',
    '!**/storybook-static/**',
    '!**/src/test/**',
  ],
};

export default createJestConfig(customJestConfig);
