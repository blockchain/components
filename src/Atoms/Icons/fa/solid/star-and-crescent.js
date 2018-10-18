// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M340.47 466.36c-1.45 0-6.89.46-9.18.46-116.25 0-210.82-94.57-210.82-210.82S215.04 45.18 331.29 45.18c2.32 0 7.7.46 9.18.46 7.13 0 13.33-5.03 14.75-12.07 1.46-7.25-2.55-14.49-9.47-17.09C316.58 5.54 286.39 0 256 0 114.84 0 0 114.84 0 256s114.84 256 256 256c30.23 0 60.28-5.49 89.32-16.32 5.96-2.02 10.28-7.64 10.28-14.26 0-8.09-6.39-15.06-15.13-15.06zm162.99-252.5l-76.38-11.1-34.16-69.21c-1.83-3.7-5.38-5.55-8.93-5.55s-7.1 1.85-8.93 5.55l-34.16 69.21-76.38 11.1c-8.17 1.18-11.43 11.22-5.52 16.99l55.27 53.87-13.05 76.07c-1.11 6.44 4.01 11.66 9.81 11.66 1.53 0 3.11-.36 4.64-1.17L384 335.37l68.31 35.91c1.53.8 3.11 1.17 4.64 1.17 5.8 0 10.92-5.23 9.81-11.66l-13.05-76.07 55.27-53.87c5.91-5.77 2.65-15.81-5.52-16.99z"/>
  </>
)

export const FasStarAndCrescent = withStyle(InnerSvg, 512, 512, 'FasStarAndCrescent')
