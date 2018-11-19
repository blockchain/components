// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgSelfConfirmed = (props) => (
  <svg viewBox="0 0 20 21" {...props}>
    <path d="M17.8570982,0.500046492 C18.4523346,0.500046492 18.9582862,0.708379531 19.3749516,1.12504493 C19.791617,1.54171033 19.99995,2.0476619 19.99995,2.64289828 L19.99995,18.3571447 C19.99995,18.9523811 19.791617,19.4583327 19.3749516,19.8749981 C18.9582862,20.2916635 18.4523346,20.4999965 17.8570982,20.4999965 L2.14285179,20.4999965 C1.54761541,20.4999965 1.04166384,20.2916635 0.624998437,19.8749981 C0.20833304,19.4583327 0,18.9523811 0,18.3571447 L0,2.64289828 C0,2.0476619 0.20833304,1.54171033 0.624998437,1.12504493 C1.04166384,0.708379531 1.54761541,0.500046492 2.14285179,0.500046492 L17.8570982,0.500046492 Z M4.10713259,12.2857313 L15.8928174,12.2857313 C16.0416263,12.2857313 16.1681146,12.2336479 16.2722807,12.1294817 C16.3764469,12.0253155 16.4285304,11.8988273 16.4285304,11.7500184 L16.4285304,9.25002462 C16.4285304,9.10121569 16.3764469,8.97472746 16.2722807,8.87056128 C16.1681146,8.7663951 16.0416263,8.71431167 15.8928174,8.71431167 L4.10713259,8.71431167 C3.95832366,8.71431167 3.83183543,8.7663951 3.72766925,8.87056128 C3.62350307,8.97472746 3.57141964,9.10121569 3.57141964,9.25002462 L3.57141964,11.7500184 C3.57141964,11.8988273 3.62350307,12.0253155 3.72766925,12.1294817 C3.83183543,12.2336479 3.95832366,12.2857313 4.10713259,12.2857313 Z" />
  </svg>
)

export const BcSelfConfirmed = withStyle(
  SvgSelfConfirmed,
  'BcSelfConfirmed',
  false,
)
