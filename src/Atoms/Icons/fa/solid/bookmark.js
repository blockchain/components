import React from 'react'
import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/>
  </>
)

export const FasBookmark = withStyle(InnerSvg, 384, 512, 'FasBookmark')
