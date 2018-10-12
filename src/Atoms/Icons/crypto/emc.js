import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#B49FFC"/><path fill="#FFF" d="M8 8v3.2h6.4v3.2H8v3.2h9.6v-6.4h3.2v9.6H8V24h16V8z"/></g>
  </>
)

export const CryptoEmc = withStyle(InnerSvg, 32, 32, 'CryptoEmc', true)
