import React from 'react'
import { storiesOf } from '@storybook/react'
import ContainedButton from './ContainedButton'

storiesOf('Atoms/Buttons/ContainedButton', module)
  .add('default', () => <ContainedButton>My button</ContainedButton>)
  .add('with nature', () => <ContainedButton nature='secondary'>My button</ContainedButton>)
  .add('with width', () => <ContainedButton width='300px'>My button</ContainedButton>)
  