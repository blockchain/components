const enzyme = require.resolve('./utils/enzyme')
const raf = require.resolve('./utils/raf')
const testFramework = require.resolve('./utils/testFramework')

const coverageEnabled = process.argv.indexOf('--coverage') !== -1

module.exports = {
  clearMocks: true,
  collectCoverage: coverageEnabled,
  collectCoverageFrom: [
    'src/Atoms/**/**.js',
    'src/Molecules/**/**.js',
    '!src/Tools/**',
    '!**/__snapshots__/**',
    '!**/**.stories.js',
    '!**/**Map.js',
    '!**/index.js',
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  setupFiles: [raf, enzyme],
  setupTestFrameworkScriptFile: testFramework,
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  testURL: 'http://localhost/',
  transform: { '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest' },
}
