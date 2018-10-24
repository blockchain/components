// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoEmc = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#B49FFC" />
      <path
        fill="#FFF"
        d="M8 8v3.2h6.4v3.2H8v3.2h9.6v-6.4h3.2v9.6H8V24h16V8z"
      />
    </g>
  </svg>
)

export const CryptoEmc = withStyle(SvgCryptoEmc, 'CryptoEmc', true)
