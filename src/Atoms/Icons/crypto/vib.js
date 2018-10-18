// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none"><circle cx="16" cy="16" fill="#ff1f43" r="16"/><path d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z" fill="#fff"/></g>
  </>
)

export const CryptoVib = withStyle(InnerSvg, 32, 32, 'CryptoVib', true)
