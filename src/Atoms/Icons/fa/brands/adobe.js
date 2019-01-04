// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFabAdobe = (props) => (
  <svg viewBox="0 0 460.8 512" {...props}>
    <path d="M289.9 64.3h170.9v384l-170.9-384zm-119 0H0v384l170.9-384zm59.5 142.1l107.5 241.9h-73l-30.7-76.8h-78.7l74.9-165.1z" />
  </svg>
)

export const FabAdobe = withStyle(SvgFabAdobe, 'FabAdobe', false)
