// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#3FBADF"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".4" d="M11 22.119l5-2.82v5.635l-5-2.815zm0-9l5-2.82v5.635l-5-2.815z"/><path fill-opacity=".7" d="M26 19.23l-5 2.886V16.43l5 2.8zm0-9l-5 2.886V7.43l5 2.8z"/><path fill-opacity=".8" d="M11 22.116v-5.683l5 2.87-5 2.813zm0-9V7.433l5 2.87-5 2.813z"/><path d="M21 22.116l-5-2.812 5-2.874v5.686zm0-9l-5-2.812 5-2.874v5.686z"/><path fill-opacity=".6" d="M21 22.116l-5 2.818v-5.63l5 2.812zm0-9l-5 2.818v-5.63l5 2.812z"/><path fill-opacity=".5" d="M11 16.433v5.683l-5-2.885 5-2.798zm0-9v5.683l-5-2.885 5-2.798z"/></g></g>
  </>
)

export const CryptoEla = withStyle(InnerSvg, 32, 32, 'CryptoEla', true)
