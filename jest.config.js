const preprocessMock = require.resolve('./utils/preprocessor')
const enzyme = require.resolve('./utils/enzyme')
const raf = require.resolve('./utils/raf')

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

const coverage =
  process.argv.indexOf('--coverage') !== -1
    ? {
        collectCoverage: true,
        collectCoverageFrom: [
          'src/**/**.js',
          '!src/Tools/**',
          '!**/__snapshots__/**',
          '!**/**.stories.js',
          '!**/index.js',
        ],
        coverageDirectory: './coverage',
      }
    : {}

module.exports = {
  ...coverage,
  clearMocks: true,
  moduleFileExtensions: [codeExt],
  roots: ['<rootDir>/src/'],
  setupFiles: [raf, enzyme],
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  testPathIgnorePatterns: ['/node_modules/', '.*.ignore.spec.*'],
  transform: {
    [getTransformString(codeExt)]: 'babel-jest',
    [getTransformString(assetExt)]: preprocessMock,
  },
  transformIgnorePatterns: ['node_modules/'],
}
