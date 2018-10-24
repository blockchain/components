// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFasBatteryEmpty = (props) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48z" />
  </svg>
)

export const FasBatteryEmpty = withStyle(
  SvgFasBatteryEmpty,
  'FasBatteryEmpty',
  false,
)
