import { injectGlobal } from 'styled-components'

import MontserratBlackOtf from './fonts/Montserrat-Black.otf'
import MontserratBoldOtf from './fonts/Montserrat-Bold.otf'
import MontserratExtraBoldOtf from './fonts/Montserrat-ExtraBold.otf'
import MontserratExtraLightOtf from './fonts/Montserrat-ExtraLight.otf'
import MontserratLightOtf from './fonts/Montserrat-Light.otf'
import MontserratMediumOtf from './fonts/Montserrat-Medium.otf'
import MontserratRegularOtf from './fonts/Montserrat-Regular.otf'
import MontserratSemiBoldOtf from './fonts/Montserrat-SemiBold.otf'
import MontserratThinOtf from './fonts/Montserrat-Thin.otf'

const FontFace = (name, otf, weight) => `
  @font-face {
    font-family: '${name}';
    src: url('${otf}') format('opentype'),
    font-weight: ${weight};
    font-style: normal;
    font-stretch: normal;
  }
`

const MontserratThin = FontFace('Montserrat', MontserratThinOtf, '100')
const MontserratExtraLight = FontFace(
  'Montserrat',
  MontserratExtraLightOtf,
  '200',
)
const MontserratLight = FontFace('Montserrat', MontserratLightOtf, '300')
const MontserratRegular = FontFace('Montserrat', MontserratRegularOtf, '400')
const MontserratMedium = FontFace('Montserrat', MontserratMediumOtf, '500')
const MontserratSemiBold = FontFace('Montserrat', MontserratSemiBoldOtf, '600')
const MontserratExtraBold = FontFace(
  'Montserrat',
  MontserratExtraBoldOtf,
  '800',
)
const MontserratBold = FontFace('Montserrat', MontserratBoldOtf, '700')
const MontserratBlack = FontFace('Montserrat', MontserratBlackOtf, '900')

injectGlobal`
  ${MontserratThin}
  ${MontserratExtraLight}
  ${MontserratLight}
  ${MontserratMedium}
  ${MontserratRegular}
  ${MontserratSemiBold}
  ${MontserratExtraBold}
  ${MontserratBold}
  ${MontserratBlack}
`
