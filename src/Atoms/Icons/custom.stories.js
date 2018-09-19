import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { Icon } from './index'

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

storiesOf('Atoms/Icons/Icon', module)
  .add('list', () => (
    <Layout>
      <IconContainer>
        <Icon.Bitcoin size="40px" />
        <IconName>Bitcoin</IconName>
      </IconContainer>
      <IconContainer>
        <Icon.BitcoinCash size="40px" />
        <IconName>BitcoinCash</IconName>
      </IconContainer>
      <IconContainer>
        <Icon.Blocks size="40px" />
        <IconName>Blocks</IconName>
      </IconContainer>
      <IconContainer>
        <Icon.Ethereum size="40px" />
        <IconName>Ethereum</IconName>
      </IconContainer>
      <IconContainer>
        <Icon.Transactions size="40px" />
        <IconName>Transactions</IconName>
      </IconContainer>
    </Layout>
  ))
  .add('with size', () => <Icon.Bitcoin size="80px" />)
