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
const generateTest = (componentName) => `
  import React from 'react'
  import { mountWithTheme } from '../../../../Utils/testHelper'

  import ${componentName} from './${componentName}'

  describe('${componentName}', () => {
    it('should render correctly', () => {
      const tree = mountWithTheme(<${componentName} />)
      expect(tree.find(${componentName})).toMatchSnapshot()
    })
  })
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
  generateTest,
}
