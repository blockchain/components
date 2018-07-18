import weights from '@ibm/plex/scripts/data/weights'
import { injectGlobal } from 'styled-components'

const weightWhitelist = [100, 200, 300, 400, 500, 600, 700]
const variants = weights
  .filter(
    ({ properties }) =>
      weightWhitelist.includes(properties.fontWeight) &&
      properties.fontStyle === 'normal',
  )
  .map(({ properties, type }) => ({
    file: require(`@ibm/plex/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-${type}-Latin1.woff`),
    type,
    weight: properties.fontWeight,
  }))

const fontFace = (file, type, weight) => `
  @font-face {
    font-family: 'IBM Plex Sans';
    src: local('IBM Plex Sans ${type}'),
      local('IBMPlexSans-${type}'),
      url('${file}') format('woff');
    font-weight: ${weight};
    font-style: normal;
    font-stretch: normal;
  }
`
const fonts = variants
  .map((font) => fontFace(font.file, font.type, font.weight))
  .join('')

injectGlobal`
  ${fonts}
`
