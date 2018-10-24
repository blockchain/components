const svgr = require('@svgr/core')

const generateClass = (depth, withColor = false) => (code, config, state) => {
  const props = svgr.getProps(config)
  let result = `// @flow strict
import React from 'react'

import withStyle from '${depth}withStyle'\n\n`
  result += `const Svg${state.componentName} = (${props}) => ${code}\n\n`
  result += `export const ${state.componentName} = withStyle(Svg${
    state.componentName
  }, '${state.componentName}', ${withColor})`
  return result
}

const generateExport = (componentNames, type = '') => {
  const exports = componentNames.map(
    ({ componentName, filename }) =>
      `export { ${type}${componentName} } from './${filename}'\r\n`,
  )

  return ['// @flow strict\r\n', ...exports].join('')
}

module.exports = {
  generateClass,
  generateExport,
}
