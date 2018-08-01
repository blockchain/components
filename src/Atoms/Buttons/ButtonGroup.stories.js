import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import ButtonGroup from './ButtonGroup'

const Button1 = () => <Button>Button1</Button>
const Button2 = () => <Button>Button2</Button>
const Button3 = () => <Button>Button3</Button>

storiesOf('Atoms/Buttons/ButtonGroup', module).add('default', () => (
  <ButtonGroup>
    <Button1 />
    <Button2 />
    <Button3 />
  </ButtonGroup>
))
