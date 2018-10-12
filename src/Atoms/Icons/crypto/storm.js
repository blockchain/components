import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#080d98" r="16"/><path d="M23 6l-12.029 8.25 6.076 3.875L9 26l13.302-9.208-5.994-3.875z" fill="#fff"/></g>
  </>
)

export const CryptoStorm = withStyle(InnerSvg, 32, 32, 'CryptoStorm', true)
