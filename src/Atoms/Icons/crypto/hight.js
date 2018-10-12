import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none"><circle cx="16" cy="16" r="16" fill="#117FC0"/><path d="M26.496 10.332l-8.455 13.94h-5.042l3.875-6.397h-3.851l-4.49 7.404a11.905 11.905 0 0 0 17.96-14.94l.003-.007zM19.114 7.83l-3.67 6.04H19.3l4.274-7.049a11.905 11.905 0 0 0-17.96 14.94l8.452-13.93h5.047z" fill="#FFF"/></g>
  </>
)

export const CryptoHight = withStyle(InnerSvg, 32, 32, 'CryptoHight', true)
