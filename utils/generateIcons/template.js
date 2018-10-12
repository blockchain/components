const generateClass = (
  componentName,
  svg,
  width,
  height,
  type = '',
  depth,
  withColor,
) => {
  const color = typeof withColor !== 'undefined' ? `, ${withColor}` : ''

  return `import React from 'react'
import withStyle from '${depth}withStyle'

const InnerSvg = (
  <>
    ${svg}
  </>
)

export const ${type}${componentName} = withStyle(InnerSvg, ${width}, ${height}, '${type}${componentName}'${color})
`
}

const generateExport = (componentNames, type = '') => {
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
