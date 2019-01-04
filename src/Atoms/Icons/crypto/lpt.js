// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoLpt = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#000" fillRule="nonzero" />
      <path
        d="M14.225 23.483h3.508v3.508h-3.508zm0-15.483h3.508v3.508h-3.508zm8.267 0H26v3.508h-3.508zM6 8h3.508v3.508H6zm12.358 7.742h3.508v3.508h-3.508zm-8.275 0h3.508v3.508h-3.508z"
        fill="#FFF"
      />
    </g>
  </svg>
)

export const CryptoLpt = withStyle(SvgCryptoLpt, 'CryptoLpt', true)
