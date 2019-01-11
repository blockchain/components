import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Tooltip from './Tooltip'

const Text = styled.div`
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  ${({ active }) => (active ? 'color: rebeccapurple' : 'color: black')};
  padding: 1rem;
  font-weight: 600;
`

const CustomTooltip = styled(Tooltip)`
  background: rebeccapurple;
`

const renderTrigger = (active) => <Text active={active}>Custom trigger!</Text>

storiesOf('Molecules/Tooltips/Tooltip', module).add('default', () => (
  <>
    <Tooltip text="Hover me!">This is the tooltip content.</Tooltip>

    <Tooltip placement="left" text="Left">
      This is the tooltip content.
    </Tooltip>

    <Tooltip placement="bottom" text="Bottom">
      This is the tooltip content.
    </Tooltip>

    <Tooltip placement="bottom" renderTrigger={renderTrigger}>
      Custom renderTrigger prop
    </Tooltip>

    <CustomTooltip text="Custom tooltip!">
      This is the tooltip content.
    </CustomTooltip>
  </>
))
