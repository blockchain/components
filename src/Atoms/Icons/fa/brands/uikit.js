// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFabUikit = (props) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M443.9 128v256L218 512 0 384V169.7l87.6 45.1v117l133.5 75.5 135.8-75.5v-151l-101.1-57.6 87.6-53.1L443.9 128zM308.6 49.1L223.8 0l-88.6 54.8 86 47.3 87.4-53z" />
  </svg>
)

export const FabUikit = withStyle(SvgFabUikit, 'FabUikit', false)
