const enzyme = require.resolve('./utils/enzyme')
const preprocessMock = require.resolve('./utils/preprocessor')
const raf = require.resolve('./utils/raf')
const testFramework = require.resolve('./utils/testFramework')
const ignorePropTypeErrors = require.resolve('./utils/ignorePropTypeErrors')

const assetExt = [
  'css',
  'eot',
  'gif',
  'jpeg',
  'jpg',
  'png',
  'svg',
  'ttf',
  'otf',
  'woff',
  'woff2',
]

const codeExt = ['js']

const getTransformString = (extensions) =>
  extensions
    .reduce((acc, val) => `${acc}^.+\\\\*${val}|`, '')
    .replace(/.$/, '$')

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
  moduleFileExtensions: [codeExt],
  roots: ['<rootDir>/src/'],
  setupFiles: [raf, enzyme, ignorePropTypeErrors],
  setupTestFrameworkScriptFile: testFramework,
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  testPathIgnorePatterns: ['/node_modules/', '.*.ignore.spec.*'],
  testURL: 'http://localhost/',
  transform: {
    [getTransformString(codeExt)]: 'babel-jest',
    [getTransformString(assetExt)]: preprocessMock,
  },
  transformIgnorePatterns: ['node_modules/'],
}
