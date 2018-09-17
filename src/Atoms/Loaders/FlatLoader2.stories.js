import React from 'react'
import { storiesOf } from '@storybook/react'

import FlatLoader2 from './FlatLoader2'

storiesOf('Atoms/Loaders/FlatLoader2', module)
  .add('default', () => <FlatLoader2 />)
  .add('with width', () => <FlatLoader2 width="100px" />)
  .add('with height', () => <FlatLoader2 height="50px" />)
