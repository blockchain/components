const fa = require('./fontAwesome')

fa.res.then(() => {
  require('./crypto')
})
