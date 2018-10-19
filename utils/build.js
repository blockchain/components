// @flow
const { execSync } = require('child_process')
const flowCopySource = require('flow-copy-source')
const path = require('path')
const rimraf = require('rimraf')

const babel = path
  .resolve(__dirname, '../node_modules/.bin/babel')
  .replace(/ /g, '\\ ')

const exec = (command) =>
  execSync(command, {
    env: process.env,
    stdio: 'inherit',
  })

const ignoreGlobs = [
  '"**/*.spec.js"',
  '"**/*.stories.js"',
  '"**/__snapshots__"',
].join(',')

rimraf.sync('esm')

exec(`${babel} src --env-name esm --out-dir esm  --ignore ${ignoreGlobs}`)

rimraf.sync('esm/**/*.js', {
  glob: {
    ignore: ['!__snapshots__', '!**/*.spec.js', '!**/*.stories.js'],
  },
})

flowCopySource(['src'], 'esm')
