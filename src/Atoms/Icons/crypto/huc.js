// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ffc018" r="16"/><path d="M11.5 14.5h9V10h3v16h-3v-8.5h-9V22h-3V6h3z" fill="#fff"/></g>
  </>
)

export const CryptoHuc = withStyle(InnerSvg, 32, 32, 'CryptoHuc', true)
