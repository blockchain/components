import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Section from './Section'

const Text = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
`
const Sample = () => <Text>Hello !</Text>

storiesOf('Atoms/Containers/Section', module)
  .add('default', () => (
    <Section>
      <Sample />
    </Section>
  ))
  .add('with nature (blocks)', () => (
    <Section color="orient" nature="blocks">
      <Sample />
    </Section>
  ))
  .add('with nature (diamonds)', () => (
    <Section color="orient" nature="diamonds">
      <Sample />
    </Section>
  ))
  .add('with height', () => (
    <Section height="300px">
      <Sample />
    </Section>
  ))
