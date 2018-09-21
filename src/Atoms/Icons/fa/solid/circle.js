import React from 'react'
import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>
  </>
)

export const FasCircle = withStyle(InnerSvg, 512, 512, 'FasCircle')
