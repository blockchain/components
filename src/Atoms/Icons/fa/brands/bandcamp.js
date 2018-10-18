// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm48.2 326.1h-181L199.9 178h181l-84.7 156.1z"/>
  </>
)

export const FabBandcamp = withStyle(InnerSvg, 496, 512, 'FabBandcamp')
