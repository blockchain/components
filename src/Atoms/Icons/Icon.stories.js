import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { keysIn } from 'ramda'
import IcomoonMap from './IcomoonMap'
import Icon from './Icon'

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 8);
  height: 150px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
`
const IconName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
`

const renderIcon = (name) => (
  <IconContainer>
    <Icon name={name} size="40px" />
    <IconName>{name}</IconName>
  </IconContainer>
)

storiesOf('Atoms/Icons/Icon', module)
  .add('list', () => <Layout>{keysIn(IcomoonMap).map(renderIcon)}</Layout>)
  .add('default', () => <Icon />)
  .add('with name', () => <Icon name="alert-filled" />)
  .add('with color', () => <Icon color="gold" />)
  .add('with size', () => <Icon size="72px" />)
  .add('with weight', () => <Icon weight={700} />)
  .add('with selectable', () => <Icon selectable />)
