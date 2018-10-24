// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFasStop = (props) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
  </svg>
)

export const FasStop = withStyle(SvgFasStop, 'FasStop', false)
