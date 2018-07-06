import React from 'react'
import { storiesOf } from '@storybook/react'
import Background from './Background'

storiesOf('Atoms/Images/Background', module)
  .add('default', () => <Background />)
  .add('with name', () => <Background name="buy-sell-sell-bch" />)
  .add('with height', () => <Background height="400px" />)
  .add('with width', () => <Background width="600px" />)
  .add('with stretch', () => <Background stretch />)
