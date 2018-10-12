import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#0155ff" r="16"/><path d="M16 6l10 10-10 10L6 16z" fill="#fff"/></g>
  </>
)

export const CryptoWaves = withStyle(InnerSvg, 32, 32, 'CryptoWaves', true)
