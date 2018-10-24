// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFasSquareFull = (props) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M512 512H0V0h512v512z" />
  </svg>
)

export const FasSquareFull = withStyle(SvgFasSquareFull, 'FasSquareFull', false)
