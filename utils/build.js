const { execSync } = require('child_process')
const path = require('path')

const babel = path
  .resolve(__dirname, '../node_modules/.bin/babel')
  .replace(/ /g, '\\ ')

const babelrc = path.resolve(__dirname, '../.babelrc').replace(/ /g, '\\ ')

const exec = (command) =>
  execSync(command, {
    env: process.env,
    stdio: 'inherit',
  })

const ignoreGlobs = [
  '**/*.spec.js',
  '**/*.stories.js',
  '**/__snapshots__',
].join(',')

const baseCmd = `${babel} src/ --config-file ${babelrc} -D --ignore "${ignoreGlobs}"`

exec(`${baseCmd} -d lib/ --plugins @babel/plugin-transform-modules-commonjs`)
exec(`${baseCmd} -d esm/`)
