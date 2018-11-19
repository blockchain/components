import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import {
  BcBitcoin,
  BcBitcoinCash,
  BcBlocks,
  BcEthereum,
  BcReceivedConfirmed,
  BcReceivedUnconfirmed,
  BcSelfConfirmed,
  BcSelfUnconfirmed,
  BcSentConfirmed,
  BcSentUnconfirmed,
  BcTransactions,
} from '.'

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

storiesOf('Atoms/Icons/custom', module)
  .add('list', () => (
    <Layout>
      <IconContainer>
        <BcBitcoin size="40px" />
        <IconName>Bitcoin</IconName>
      </IconContainer>
      <IconContainer>
        <BcBitcoinCash size="40px" />
        <IconName>BitcoinCash</IconName>
      </IconContainer>
      <IconContainer>
        <BcBlocks size="40px" />
        <IconName>Blocks</IconName>
      </IconContainer>
      <IconContainer>
        <BcEthereum size="40px" />
        <IconName>Ethereum</IconName>
      </IconContainer>
      <IconContainer>
        <BcReceivedConfirmed size="40px" />
        <IconName>ReceivedConfirmed</IconName>
      </IconContainer>
      <IconContainer>
        <BcReceivedUnconfirmed size="40px" />
        <IconName>ReceivedUnconfirmed</IconName>
      </IconContainer>
      <IconContainer>
        <BcSelfConfirmed size="40px" />
        <IconName>SelfConfirmed</IconName>
      </IconContainer>
      <IconContainer>
        <BcSelfUnconfirmed size="40px" />
        <IconName>SelfUnconfirmed</IconName>
      </IconContainer>
      <IconContainer>
        <BcSentConfirmed size="40px" />
        <IconName>SentConfirmed</IconName>
      </IconContainer>
      <IconContainer>
        <BcSentUnconfirmed size="40px" />
        <IconName>SentUnconfirmed</IconName>
      </IconContainer>
      <IconContainer>
        <BcTransactions size="40px" />
        <IconName>Transactions</IconName>
      </IconContainer>
    </Layout>
  ))
  .add('with size', () => <BcBitcoin size="150px" />)
  .add('with selectable', () => <BcBitcoin selectable />)
