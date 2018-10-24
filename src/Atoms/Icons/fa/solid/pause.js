// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFasPause = (props) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
  </svg>
)

export const FasPause = withStyle(SvgFasPause, 'FasPause', false)
