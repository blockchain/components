// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#302C2C" fill-rule="nonzero"/><circle cx="16" cy="16" r="11" fill="#FFF"/></g>
  </>
)

export const CryptoGbyte = withStyle(InnerSvg, 32, 32, 'CryptoGbyte', true)
