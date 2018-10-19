// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#2ab6f6" r="16"/><path d="M16 6l9 12.533L16 26l-9-7.467zm-1.174 6.667L10.913 18l3.913 3.2zm2.348 0V21.2l3.913-3.2z" fill="#fff"/></g>
  </>
)

export const CryptoLrc = withStyle(InnerSvg, 32, 32, 'CryptoLrc', true)
