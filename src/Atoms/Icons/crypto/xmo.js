// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoXmo = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#F60" />
      <g fill="#FFF">
        <path d="M28 16c0 6.628-5.372 12-12 12S4 22.628 4 16c0-2.681.881-5.156 2.362-7.153l1.96 1.96A9.222 9.222 0 0 0 6.728 16c0 5.11 4.153 9.262 9.263 9.262 5.109 0 9.262-4.153 9.262-9.262a9.272 9.272 0 0 0-1.594-5.194l1.96-1.96A11.86 11.86 0 0 1 28 16" />
        <path d="M22.637 16A6.644 6.644 0 0 1 16 22.637 6.644 6.644 0 0 1 9.362 16c0-1.153.3-2.287.872-3.29L16 18.474l5.766-5.766A6.644 6.644 0 0 1 22.638 16" />
        <path d="M23.847 6.925L16 14.762l-5.981-5.971-1.866-1.866A11.907 11.907 0 0 1 16 4c3 0 5.738 1.097 7.847 2.925" />
      </g>
    </g>
  </svg>
)

export const CryptoXmo = withStyle(SvgCryptoXmo, 'CryptoXmo', true)
