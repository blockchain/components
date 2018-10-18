// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FAC000"/><path fill="#FFF" d="M14.2 10.909h7.56V7.576H17.2V6h-1.92v1.576H10v3.454l5.28 4.546L10 20.909v3.697h5.28V26h1.92v-1.394H22v-3.333h-7.92l5.7-5.697z"/></g>
  </>
)

export const CryptoSmart = withStyle(InnerSvg, 32, 32, 'CryptoSmart', true)
