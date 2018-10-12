const { execSync } = require('child_process')
const path = require('path')

const fa = require('./fontAwesome')

fa.res.then(() => {
  require('./crypto')
})
