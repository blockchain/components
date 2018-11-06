const camelCase = require('camelcase')
const DecompressZip = require('decompress-zip')
const path = require('path')
const fs = require('fs')
const request = require('request')
const rimraf = require('rimraf')
const svgr = require('@svgr/core')

const { generateClass, generateExport } = require('./template')
const svgoConfig = require('./svgo.config')

const iconDirectory = path.resolve(__dirname, '../../src/Atoms/Icons')
const sourceDirectory = `${iconDirectory}/assets`
const destinationDirectory = `${iconDirectory}/crypto`
const version = '0.9.0'
const name = `cryptocurrency-icons-${version}`

const url = `https://github.com/atomiclabs/cryptocurrency-icons/archive/v${version}.zip`

const blacklist = ['$pac.js']

console.log('\n\n######## Building Crypto ########')
console.log('Cleanup')

if (fs.existsSync(sourceDirectory)) {
  rimraf.sync(sourceDirectory)
}

if (fs.existsSync(destinationDirectory)) {
  rimraf.sync(destinationDirectory)
}

fs.mkdirSync(sourceDirectory)
fs.mkdirSync(destinationDirectory)

console.log('Downloading font...')

request(url)
  .pipe(fs.createWriteStream(`${sourceDirectory}/crypto.zip`))
  .on('close', function() {
    console.log('Font downloaded!')
    console.log('Decompress files...')

    const unzip = new DecompressZip(`${sourceDirectory}/crypto.zip`)

    unzip.extract({ path: `${sourceDirectory}` }).on('extract', function() {
      console.log('Decompress files...')
      // Process folder to generate react components and test files
      const brand = processDirectory(`${sourceDirectory}/${name}/svg/color`)

      const exports = Promise.all(brand).then((comps) => {
        return createExportFile(comps)
      })

      Promise.all([exports]).then(() => {
        rimraf.sync(sourceDirectory)

        console.log('Icons successfully generated!')
      })
    })
  })

function processDirectory(src) {
  return fs
    .readdirSync(src)
    .filter((file) => {
      return (
        path.parse(file).ext === '.svg' &&
        !blacklist.includes(path.parse(file).base)
      )
    })
    .map((file) => path.join(src, file))
    .map(readFile)
    .map(processFile)
    .map(createClassFile)
    .map(getComponentName)
}

const readFile = (filepath) =>
  new Promise((resolve, reject) => {
    fs.readFile(filepath, 'UTF8', (err, contents) => {
      if (err) return reject(err)
      return resolve({ contents, filepath })
    })
  })

const processFile = (p) => {
  return p.then(({ contents, filepath }) => {
    const filename = path.parse(filepath).name
    const componentName = camelCase(filename, {
      pascalCase: true,
    })

    return {
      componentName,
      contents,
      filename,
      filepath,
    }
  })
}

const createClassFile = (p) => {
  return p.then(({ contents, filepath, filename, componentName }) => {
    const classFilename = filename + '.js'
    const classFullpath = path.join(destinationDirectory, classFilename)
    const classOutput = fs.createWriteStream(classFullpath)
    const name = `Crypto${componentName}`

    return svgr
      .default(
        contents,
        {
          dimensions: false,
          svgoConfig,
          svgProps: { viewBox: '0 0 32 32' },
          template: generateClass('../', true),
        },
        { componentName: name },
      )
      .then((jsCode) => {
        classOutput.end(jsCode)

        return { componentName, filename }
      })
  })
}

const createExportFile = (componentNames) => {
  console.log(`Generating React classes...`)

  const exportFilename = 'index.js'
  const exportFullpath = path.join(destinationDirectory, exportFilename)

  fs.unlink(exportFullpath, () => {
    const exportOutput = fs.createWriteStream(exportFullpath)
    const exportMarkup = generateExport(componentNames, 'Crypto')

    exportOutput.end(exportMarkup)
  })
}

const getComponentName = (p) => {
  return p.then(({ componentName, filename }) => {
    return { componentName, filename }
  })
}
