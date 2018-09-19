import React from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './Tooltip'
import TooltipHost from './TooltipHost'

storiesOf('Molecules/Tooltips/Tooltip', module).add('default', () => (
  <React.Fragment>
    <Tooltip id="storybook.tooltip">
      <span>This is a tooltip of a component.</span>
    </Tooltip>
    <TooltipHost id="storybook.tooltip">Hover me !</TooltipHost>
  </React.Fragment>
))
