const generateClass = (componentName, svg, width, height) => `
  import React from 'react'
  import withStyle from '../../withStyle'

  const ${componentName} = () => (
    <React.Fragment>
      ${svg}
    </React.Fragment>
  )

  export default withStyle(${componentName},${width},${height})
`
const generateExport = (componentNames) => {
  return componentNames
    .map(
      (componentName) =>
        `export { default as ${componentName} } from './icons/${componentName}'\r\n`,
    )
    .join('')
}

module.exports = {
  generateClass,
  generateExport,
}
