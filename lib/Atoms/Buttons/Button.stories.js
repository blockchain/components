import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Atoms/Buttons/Button', module)
  .add('default', () => <Button>My button</Button>)
  .add('with bounced', () => <Button bounced>My button</Button>)
  .add('with disabled', () => <Button disabled>My button</Button>)
  .add('with width', () => <Button width="300px">My button</Button>)
