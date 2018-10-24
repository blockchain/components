// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoSphtx = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#00b098" r={16} />
      <path
        d="M6 12.391v-.356h8.417v.356zm0-1.035V11h8.417v.356zm3.55 10.64v-8.893h.338v8.893zm.98 0v-8.893h.337v8.893zm15.232-.728l-3.798-4.013.238-.251L26 21.016zM16.519 11l3.798 4.013-.238.251-3.798-4.012zm8.55 11l-3.798-4.013.238-.252 3.798 4.013zm-9.242-10.268l3.798 4.012-.239.252-3.798-4.012zm5.421 4.768l.239-.252 4.275-4.516.238.252-4.275 4.516-.238.252-.454.48-.239.252L16.52 22l-.238-.252 4.275-4.516.238-.252zm-.454-.984L25.07 11l.238.252-4.275 4.516-.238.252-.454.48-.239.252-4.274 4.516-.239-.252 4.275-4.516.238-.252.455-.48z"
        fill="#fff"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export const CryptoSphtx = withStyle(SvgCryptoSphtx, 'CryptoSphtx', true)
