import React from 'react'
import { storiesOf } from '@storybook/react'

import Toggler from './Toggler'
import TogglerItem from './TogglerItem'

storiesOf('Molecules/Togglers/Toggler', module)
  .add('default', () => (
    <Toggler>
      <TogglerItem>BTC</TogglerItem>
      <TogglerItem>BCH</TogglerItem>
      <TogglerItem>ETH</TogglerItem>
    </Toggler>
  ))
  .add('with selected', () => (
    <Toggler>
      <TogglerItem>BTC</TogglerItem>
      <TogglerItem selected>BCH</TogglerItem>
      <TogglerItem>ETH</TogglerItem>
    </Toggler>
  ))
