import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#00EA90"/><path fill="#FFF" fill-opacity=".698" fill-rule="nonzero" d="M18.215 7.508l7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941l-7.777-4.068 7.493-4.594.284 8.662z"/><path fill="#FFF" fill-rule="nonzero" d="M25.992 20.679L15.179 27v-8.869l10.813-6.555v9.103zm-19.984-9.4L16.821 5v8.834L6.008 20.381v-9.103z"/></g>
  </>
)

export const CryptoUbq = withStyle(InnerSvg, 32, 32, 'CryptoUbq', true)
