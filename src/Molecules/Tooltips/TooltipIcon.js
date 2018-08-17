import React from 'react'
import styled from 'styled-components'

import Icon from '../../Atoms/Icons/Icon'

const CustomIcon = styled(Icon).attrs({
  size: (props) => props.size || '20px',
})`
  display: inline-flex;
  margin-left: 5px;
`

const TooltipIcon = (props) => <CustomIcon {...props} />

export default TooltipIcon
