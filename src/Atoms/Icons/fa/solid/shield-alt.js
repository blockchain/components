// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFasShieldAlt = (props) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 128c0 221.282-135.934 344.645-221.539 380.308a48 48 0 0 1-36.923 0C130.495 463.713 16 326.487 16 128a48 48 0 0 1 29.539-44.308l192-80a48 48 0 0 1 36.923 0l192 80A48 48 0 0 1 496 128zM256 446.313l.066.034c93.735-46.689 172.497-156.308 175.817-307.729L256 65.333v380.98z" />
  </svg>
)

export const FasShieldAlt = withStyle(SvgFasShieldAlt, 'FasShieldAlt', false)
