const enzyme = require.resolve('./utils/enzyme');
const raf = require.resolve('./utils/raf');
const testFramework = require.resolve('./utils/testFramework');

const coverageEnabled = process.argv.indexOf('--coverage') !== -1;

module.exports = {
  clearMocks: true,
  collectCoverage: coverageEnabled,
  collectCoverageFrom: [
    'src/**/**.tsx',
    '!src/**/index.tsx',
    '!src/Tools/**',
    '!src/Navbar/**',
    '!src/**/*.test.tsx',
    '!src/**/*.stories.tsx',
  ],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules'],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [raf, enzyme],
  setupFilesAfterEnv: [testFramework],
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  transform: {
    '.tsx': 'ts-jest',
  },
  testURL: 'http://localhost/',
  testRegex: '.test.tsx$',
};
