// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoArdr = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#3C87C7" />
      <path
        fill="#FFF"
        d="M15.883 17.19l1.769 2.312L12.5 23l3.383-5.81zM16 6l2.727 4.474L11.455 23H6L16 6zm0 9.842l3.636-2.684L26 23h-4.545L16 15.842z"
      />
    </g>
  </svg>
)

export const CryptoArdr = withStyle(SvgCryptoArdr, 'CryptoArdr', true)
