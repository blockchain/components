import React from 'react'
import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M512 512H0V0h512v512z"/>
  </>
)

export const FasSquareFull = withStyle(InnerSvg, 512, 512, 'FasSquareFull')
