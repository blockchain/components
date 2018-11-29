const fs = require('fs')

fs.createReadStream('flow-coverage/flow-coverage-badge.svg').pipe(
  fs.createWriteStream('artifacts/flow-coverage-badge.svg'),
)
