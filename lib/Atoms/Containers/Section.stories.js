import React from 'react'
import { storiesOf } from '@storybook/react'
import Section from './Section'

storiesOf('Atoms/Containers/Section', module)
  .add('default', () => <Section height="200px" />)
  .add('with color', () => <Section color="gold" height="200px" />)
  .add('with height', () => <Section height="400px" />)
