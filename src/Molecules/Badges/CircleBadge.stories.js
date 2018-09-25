import React from 'react'
import { storiesOf } from '@storybook/react'

import CircleBadge from './CircleBadge'

storiesOf('Molecules/Badges/CircleBadge', module)
  .add('default', () => <CircleBadge />)
  .add('with name (linkedin)', () => <CircleBadge name="linkedin" />)
  .add('with name (twitter)', () => <CircleBadge name="twitter" />)
  .add('with size', () => <CircleBadge size="100px" />)
  .add('with url', () => <CircleBadge url="http://www.blockchain.com" />)
