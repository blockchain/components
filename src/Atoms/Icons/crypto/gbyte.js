// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoGbyte = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
      <circle cx={16} cy={16} r={11} fill="#FFF" />
    </g>
  </svg>
)

export const CryptoGbyte = withStyle(SvgCryptoGbyte, 'CryptoGbyte', true)
