import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { keysIn } from 'ramda'
import { FaIcon } from './index'

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

const renderIcon = (key) => {
  const Component = FaIcon[key]
  return <Component size="40px" />
}

storiesOf('Atoms/Icons/FaIcon', module).add('list', () => (
  <Layout>
    {keysIn(FaIcon).map((key) => (
      <IconContainer key={key}>
        {renderIcon(key)}
        <IconName>{key}</IconName>
      </IconContainer>
    ))}
  </Layout>
))
