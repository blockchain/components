// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z"/>
  </>
)

export const FabBlackTie = withStyle(InnerSvg, 448, 512, 'FabBlackTie')
