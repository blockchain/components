// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFasEllipsisH = (props) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />
  </svg>
)

export const FasEllipsisH = withStyle(SvgFasEllipsisH, 'FasEllipsisH', false)
