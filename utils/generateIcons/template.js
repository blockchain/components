const generateClass = (depth, withColor) => (
  { types, template },
  opts,
  { componentName, props, jsx },
) => {
  const withStyleImport = types.stringLiteral(depth + 'withStyle')
  const svgComponentName = types.identifier('Svg' + componentName.name)
  const componentNameString = types.stringLiteral(componentName.name)
  const color = types.booleanLiteral(withColor)

  return template.ast`import React from 'react';

import withStyle from '${withStyleImport}';

const ${svgComponentName} = (${props}) => ${jsx}

export const ${componentName} = withStyle(${svgComponentName}, ${componentNameString}, ${color});
  `
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
