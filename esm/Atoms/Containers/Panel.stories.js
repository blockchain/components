import React from 'react'
import { storiesOf } from '@storybook/react'
import Panel from './Panel'

storiesOf('Atoms/Containers/Panel', module)
  .add('default', () => <Panel />)
  .add('with height', () => <Panel height="200px" />)
  .add('with width', () => <Panel width="400px" />)
