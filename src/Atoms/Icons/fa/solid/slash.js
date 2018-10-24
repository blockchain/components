// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFasSlash = (props) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M594.53 508.63L6.18 53.9c-6.97-5.42-8.23-15.47-2.81-22.45L23.01 6.18C28.43-.8 38.49-2.06 45.47 3.37L633.82 458.1c6.97 5.42 8.23 15.47 2.81 22.45l-19.64 25.27c-5.42 6.98-15.48 8.23-22.46 2.81z" />
  </svg>
)

export const FasSlash = withStyle(SvgFasSlash, 'FasSlash', false)
