// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none"><circle cx="16" cy="16" fill="#09547d" r="16"/><g fill="#fff"><path d="M22.985 21.007V8.08l-6.312 6.449z" opacity=".5"/><path d="M9 7l.304.312 8.467 8.675L9 24.985z"/></g></g>
  </>
)

export const CryptoMod = withStyle(InnerSvg, 32, 32, 'CryptoMod', true)
