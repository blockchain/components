const camelCase = require('camelcase')
const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const SVGO = require('svgo')
const svgoConfig = require('./svgo.config')
const svgo = new SVGO(svgoConfig)
const { generateClass, generateExport, generateTest } = require('./generate')

// Variables
const viewBoxRegex = /(viewBox="[0-9.]+[ ][0-9.]+[ ]([0-9.]+)[ ]([0-9.]+))/
const pathRegex = /(<path.*?\/>)/gm
const iconDirectory = path.resolve(__dirname, '../../src/Atoms/Icons')
const sourceDirectory = `${iconDirectory}/fa/assets`
const destinationDirectory = `${iconDirectory}/fa/icons`

// Check if source folder exists
if (!fs.existsSync(sourceDirectory)) {
  return console.log(
    `Warning: Directory ${sourceDirectory} does not exist and will be ignored.`,
  )
}

// Remove destination folder and process files
rimraf(destinationDirectory, () => {
  console.log(`Info: Folder ${destinationDirectory} removed.`)
  // Recreate destination folder
  fs.mkdirSync(destinationDirectory)
  // Process folder to generate react components and test files
  const componentNames = processDirectory(sourceDirectory, destinationDirectory)
  const result = Promise.all(componentNames).then(createExportFile).then(console.log)
})

function processDirectory(sourceDirectory, destinationDirectory) {
  return fs.readdirSync(sourceDirectory)
    .filter(file => (path.parse(file).ext === '.svg'))
    .map(file => path.join(sourceDirectory, file))
    .map(readFile)
    .map(processFile)
    .map(createClassFile)
    .map(getComponentName)
}

const readFile = (filepath) => new Promise((resolve, reject) => {
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
    return { contents, filepath, componentName }
  })
}

const createClassFile = (p) => {
  return p.then(({ contents, filepath, componentName }) => {
    const classFilename = componentName + '.js'
    const classFullpath = path.join(destinationDirectory, classFilename)

    let classOutput = fs.createWriteStream(classFullpath)
    return svgo.optimize(contents).then((results) => {
      const viewBoxMatches = results.data.match(viewBoxRegex)
      const width = viewBoxMatches[2]
      const height = viewBoxMatches[3]
      const paths = results.data.match(pathRegex).join('\r\n')
      const classMarkup = generateClass(
        componentName,
        paths,
        width,
        height,
      )
      classOutput.end(classMarkup)
      return { componentName }
    })
  })
}

const getComponentName = (p) => {
  return p.then(({ componentName }) => {
    return componentName
  })
}

const createExportFile = (componentNames) => {
  const destinationDirectory = `${iconDirectory}/fa`
  const exportFilename = 'index.js'
  const exportFullpath = path.join(destinationDirectory, exportFilename)

  fs.unlink(exportFullpath, () => {
    // Create new export file
    let exportOutput = fs.createWriteStream(exportFullpath)
    const exportMarkup = generateExport(componentNames)
    exportOutput.end(exportMarkup)

  })

  return `FA Icons successfully generated !`
}
