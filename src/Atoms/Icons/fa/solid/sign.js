// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M496 64H128V16c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16v48H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h48v368c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V128h368c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM160 384h320V160H160v224z"/>
  </>
)

export const FasSign = withStyle(InnerSvg, 512, 512, 'FasSign')
