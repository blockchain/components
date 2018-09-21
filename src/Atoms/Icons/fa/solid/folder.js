import React from 'react'
import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"/>
  </>
)

export const FasFolder = withStyle(InnerSvg, 512, 512, 'FasFolder')
