import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Button from '../../Atoms/Buttons/Button'
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

const renderButton = () => <Button>With a button</Button>

storiesOf('Molecules/Tooltips/Tooltip', module).add('default', () => (
  <>
    <Tooltip text="Hover me (short text)">This is the tooltip content.</Tooltip>

    <Tooltip text="Hover me (long text) !">
      This is the a very long tooltip content that should be displayed on
      several lines because its gonna look ugly otherwise. I am even gonna add a
      lorem ipsum now so it looks super long ! Praesent sagittis lacus consequat
      imperdiet pharetra. Nulla non auctor purus, id sollicitudin turpis.
      Integer placerat eros in ex faucibus elementum.
    </Tooltip>

    <Tooltip placement="left" text="Hover me (Left placement) !">
      This is the tooltip content.
    </Tooltip>

    <Tooltip placement="bottom" text="Hover me (Bottom placement) !">
      This is the tooltip content.
    </Tooltip>

    <Tooltip placement="bottom" renderTrigger={renderTrigger}>
      Custom renderTrigger prop
    </Tooltip>

    <CustomTooltip text="Hover me (Custom tooltip)">
      This is the tooltip content.
    </CustomTooltip>

    <Tooltip renderTrigger={renderButton}>
      This is a tooltip triggered by a button
    </Tooltip>
  </>
))
