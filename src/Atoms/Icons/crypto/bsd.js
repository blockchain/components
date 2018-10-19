// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none"><circle cx="16" cy="16" r="16" fill="#000"/><path d="M28 15.127H4l13.964-4.69L19.927 4 28 15.127zM4.11 16.655h23.78l-13.963 4.581-1.963 6.655-7.855-11.236z" fill="#FFF"/></g>
  </>
)

export const CryptoBsd = withStyle(InnerSvg, 32, 32, 'CryptoBsd', true)
