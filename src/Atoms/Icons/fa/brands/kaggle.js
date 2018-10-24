// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFabKaggle = (props) => (
  <svg viewBox="0 0 291.72 512" {...props}>
    <path d="M291.72 508.98c-.51 2.01-2.51 3.01-6.01 3.01h-66.92c-4.02 0-7.51-1.75-10.52-5.27L97.74 366.14l-30.82 29.32v109.02c0 5.02-2.51 7.52-7.52 7.52H7.52C2.5 512 0 509.5 0 504.48V7.51C0 2.51 2.5 0 7.52 0H59.4c5.01 0 7.52 2.51 7.52 7.51v306l132.32-133.82c3.51-3.5 7.02-5.26 10.52-5.26h69.18c6.96 0 7.9 7.87 5.26 10.52L144.35 320.26l145.86 181.2" />
  </svg>
)

export const FabKaggle = withStyle(SvgFabKaggle, 'FabKaggle', false)
