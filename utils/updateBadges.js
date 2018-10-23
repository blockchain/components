const fs = require('fs')
const rimraf = require('rimraf')
const { get } = require('https')

fs.createReadStream('flow-coverage/flow-coverage-badge.svg').pipe(
  fs.createWriteStream('artifacts/flow-coverage-badge.svg'),
)

rimraf.sync('flow-coverage')

const getColour = (coverage) => {
  if (coverage < 80) {
    return 'red'
  }

  if (coverage < 90) {
    return 'yellow'
  }

  return 'brightgreen'
}

const getBadge = (report) => {
  if (!(report && report.total && report.total.statements)) {
    throw new Error('malformed coverage report')
  }

  const coverage = report.total.statements.pct
  const colour = getColour(coverage)

  return `https://img.shields.io/badge/Coverage-${coverage}${encodeURI(
    '%',
  )}-${colour}.svg`
}

const download = (url, cb) => {
  get(url, (res) => {
    let file = ''

    res.on('data', (chunk) => (file += chunk))
    res.on('end', () => cb(null, file))
  }).on('error', (err) => cb(err))
}

fs.readFile('./coverage/coverage-summary.json', 'utf8', (err, res) => {
  if (err) throw err

  const report = JSON.parse(res)
  const url = getBadge(report)

  download(url, (err, res) => {
    if (err) throw err

    fs.writeFile('./artifacts/test-coverage-badge.svg', res, 'utf8', (err) => {
      if (err) throw err
    })
  })
})

rimraf.sync('coverage')
