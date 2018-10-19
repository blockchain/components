// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#234871" r="16"/><path d="M18.666 17.298l-1.345-.804v-3.627l-3.16-1.846V9.35l4.505 2.62zM16.83 13.63v1.534l-3.215 1.888v3.74l-1.3.778v-5.287zm-2.296 3.485l1.444-.835 3.088 1.839 3.109-1.839 1.4.837-4.524 2.664zm4.517 3.135l4.919-2.897v5.773L19.052 26l-4.919-2.89v-5.764zm-7.137-4.2v5.76L7 18.946v-5.783l4.898-2.886 4.933 2.884zM23.97 8.861v5.793l-4.904 2.885v-5.803L14.16 8.882 19.073 6z" fill="#fff" fill-rule="nonzero"/></g>
  </>
)

export const CryptoZen = withStyle(InnerSvg, 32, 32, 'CryptoZen', true)
