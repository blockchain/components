// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#7D59B5"/><path fill="#FFF" d="M21.32 22h-4.796l-3.798-7.005L9.797 22H5l5.018-12h4.797l3.945 7.276L22.203 10H27l-5.68 12z"/></g>
  </>
)

export const CryptoNav = withStyle(InnerSvg, 32, 32, 'CryptoNav', true)
