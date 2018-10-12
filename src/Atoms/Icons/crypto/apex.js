import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#1F4C9F"/><path fill="#FFF" d="M6 19.25L16 6.5l10 12.75v4.25L16 10.75 6 23.5v-4.25zm10.5 1.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></g>
  </>
)

export const CryptoApex = withStyle(InnerSvg, 32, 32, 'CryptoApex', true)
