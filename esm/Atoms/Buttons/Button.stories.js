import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Atoms/Buttons/Button', module)
  .add('default', () => <Button>My button</Button>)
  .add('with nature', () => <Button nature="primary">My button</Button>)
  .add('with width', () => <Button width="300px">My button</Button>)
