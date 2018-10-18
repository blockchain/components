// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ff4314" r="16"/><path d="M9.171 8h13.816v1.925H9.17zm-1.54 5.641h17.073v1.945h-5.23v6.507c0 .5.217.75.67.75h2.172c.237 0 .434-.153.552-.442.139-.308.237-1.252.277-2.811l1.855.578c-.138 2.175-.395 3.465-.75 3.87-.355.384-.868.596-1.56.596h-3.137c-1.402 0-2.092-.712-2.092-2.118v-6.93h-2.922v.385c-.098 2.445-.65 4.408-1.657 5.872-.987 1.347-2.566 2.406-4.777 3.157L7 23.306c2.132-.732 3.553-1.656 4.303-2.734.75-1.194 1.144-2.715 1.223-4.601v-.385H7.632z" fill="#fff"/></g>
  </>
)

export const CryptoCny = withStyle(InnerSvg, 32, 32, 'CryptoCny', true)
