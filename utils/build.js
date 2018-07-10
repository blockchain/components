const { execSync } = require('child_process')
const { inInstall } = require('in-publish')
const path = require('path')
const rimraf = require('rimraf')
const { promisify } = require('util')

if (inInstall()) {
  process.exit(0)
}

const rootDir = path.resolve(__dirname, '../')
const babelPath = path
  .resolve(__dirname, '../node_modules/.bin/babel')
  .replace(/ /g, '\\ ')
const rimrafAsync = promisify(rimraf)

const exec = (command, extraEnv) =>
  execSync(command, {
    env: Object.assign({}, process.env, extraEnv),
    stdio: 'inherit',
  })

const ignoreGlobs = [
  '**/*.spec.js',
  '**/*.stories.js',
  '**/__snapshots__',
].join(',')

console.log('Deleting old build folders...') // eslint-disable-line no-console

Promise.all([rimrafAsync(`${rootDir}/esm`), rimrafAsync(`${rootDir}/lib`)])
  .then(() => {
    exec(`${babelPath} src/ -d esm/ --copy-files --ignore "${ignoreGlobs}"`)
    exec(
      `${babelPath} src/ -d lib/ --copy-files --plugins @babel/plugin-transform-modules-commonjs --ignore "${ignoreGlobs}"`,
    )
  })
  .catch((error) => {
    console.error('One of the commands failed:', error.stack) // eslint-disable-line no-console
    process.exit(1)
  })
