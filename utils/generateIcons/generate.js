const generateClass = (
  componentName,
  svg,
  width,
  height,
  type,
) => `import React from 'react'
import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    ${svg}
  </>
)

export const ${type}${componentName} = withStyle(InnerSvg, ${width}, ${height}, '${type}${componentName}')
`

const generateExport = (componentNames, type) => {
  return componentNames
    .map(
      ({ componentName, filename }) =>
        `export { ${type}${componentName} } from './${filename}'\r\n`,
    )
    .join('')
}

module.exports = {
  generateClass,
  generateExport,
}
