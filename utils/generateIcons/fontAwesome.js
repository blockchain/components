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
const destinationDirectory = `${iconDirectory}/fa`
const faVersion = '5.6.3'
const faName = `fontawesome-free-${faVersion}-desktop`

const url = `https://github.com/FortAwesome/Font-Awesome/releases/download/${faVersion}/${faName}.zip`

const blacklist = []

console.log('######## Building FontAwesome ########')
console.log('Cleanup')

if (fs.existsSync(sourceDirectory)) {
  rimraf.sync(sourceDirectory)
}

if (fs.existsSync(destinationDirectory)) {
  rimraf.sync(destinationDirectory)
}

fs.mkdirSync(sourceDirectory)
fs.mkdirSync(destinationDirectory)
fs.mkdirSync(`${destinationDirectory}/brands`)
fs.mkdirSync(`${destinationDirectory}/regular`)
fs.mkdirSync(`${destinationDirectory}/solid`)

console.log('Downloading font...')

const promise = new Promise((resolve) => {
  request(url)
    .pipe(fs.createWriteStream(`${sourceDirectory}/fa.zip`))
    .on('close', function() {
      console.log('Font downloaded!')
      console.log('Decompress files...')

      const unzip = new DecompressZip(`${sourceDirectory}/fa.zip`)

      unzip.extract({ path: `${sourceDirectory}` }).on('extract', function() {
        // Process folder to generate react components and test files
        const brand = processDirectory(
          `${sourceDirectory}/${faName}/svgs/brands`,
          `${destinationDirectory}/brands`,
          'Fab',
        )

        const regular = processDirectory(
          `${sourceDirectory}/${faName}/svgs/regular`,
          `${destinationDirectory}/regular`,
          'Far',
        )

        const solid = processDirectory(
          `${sourceDirectory}/${faName}/svgs/solid`,
          `${destinationDirectory}/solid`,
          'Fas',
        )

        const exportsBrand = Promise.all(brand).then((comps) => {
          return createExportFile(comps, 'brands', 'Fab')
        })

        const exportsRegular = Promise.all(regular).then((comps) => {
          return createExportFile(comps, 'regular', 'Far')
        })

        const exportsSolid = Promise.all(solid).then((comps) => {
          return createExportFile(comps, 'solid', 'Fas')
        })

        Promise.all([exportsBrand, exportsRegular, exportsSolid]).then(() => {
          rimraf.sync(sourceDirectory)
          console.log('Icons successfully generated!')

          resolve()
        })
      })
    })
})

module.exports = {
  res: promise,
}

function processDirectory(src, dest, type) {
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
    .map(createClassFile(dest, type))
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

const createClassFile = (dest, type) => (p) => {
  return p.then(({ contents, filepath, filename, componentName }) => {
    const classFilename = filename + '.js'
    const classFullpath = path.join(dest, classFilename)
    const classOutput = fs.createWriteStream(classFullpath)
    const name = `${type}${componentName}`

    return svgr
      .default(
        contents,
        {
          dimensions: false,
          svgoConfig,
          template: generateClass('../../', false),
        },
        { componentName: name },
      )
      .then((jsCode) => {
        classOutput.end('// @flow strict\n' + jsCode)

        return { componentName, filename }
      })
  })
}

const createExportFile = (componentNames, category, type) => {
  console.log(`Generating React classes for ${category}...`)

  const folder = `${destinationDirectory}/${category}`
  const exportFilename = 'index.js'
  const exportFullpath = path.join(folder, exportFilename)

  fs.unlink(exportFullpath, () => {
    const exportOutput = fs.createWriteStream(exportFullpath)
    const exportMarkup = generateExport(componentNames, type)

    exportOutput.end(exportMarkup)
  })
}

const getComponentName = (p) => {
  return p.then(({ componentName, filename }) => {
    return { componentName, filename }
  })
}
