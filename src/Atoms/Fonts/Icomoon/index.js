import { injectGlobal } from 'styled-components'

import IcomoonWoff from './fonts/Icomoon.woff'

const FontFace = (name, woff, weight) => {
  return `
    @font-face {
      font-family: '${name}';
      src: url(${woff});
      font-weight: ${weight};
      font-style: normal;
      font-stretch: normal;
    }
  `
}

const Icomoon = FontFace('icomoon', IcomoonWoff, 'normal')

injectGlobal`
  ${Icomoon}
`
