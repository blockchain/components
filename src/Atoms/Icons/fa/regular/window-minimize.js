// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
  </>
)

export const FarWindowMinimize = withStyle(InnerSvg, 512, 512, 'FarWindowMinimize')
