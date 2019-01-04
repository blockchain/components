// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFabArtstation = (props) => (
  <svg viewBox="0 0 508.1 512" {...props}>
    <path d="M0 377.4l43 74.3c8.5 16.8 25.8 28.3 45.9 28.3h285.4l-59.2-102.6H0zM499.8 350L333.6 59.3C325 43.1 307.9 32 288.2 32h-88.4l257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM273 304.5l-115.5-200L42 304.5h231z" />
  </svg>
)

export const FabArtstation = withStyle(SvgFabArtstation, 'FabArtstation', false)
