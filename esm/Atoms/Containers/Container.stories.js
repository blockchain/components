import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from './Container'

storiesOf('Atoms/Containers/Container', module).add('default', () => (
  <Container>MyContainer</Container>
))
