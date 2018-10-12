import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { CryptoEth, CryptoEtc, CryptoBch, CryptoBtc, CryptoXlm } from '.'

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

storiesOf('Atoms/Icons/crypto', module).add('crypto', () => (
  <Layout>
    <IconContainer>
      <CryptoBtc />
      <IconName>CryptoBtc</IconName>
    </IconContainer>
    <IconContainer>
      <CryptoBch size="15px" />
      <IconName>CryptoBch</IconName>
    </IconContainer>
    <IconContainer>
      <CryptoBch />
      <IconName>CryptoBch</IconName>
    </IconContainer>
    <IconContainer>
      <CryptoEth />
      <IconName>CryptoEth</IconName>
    </IconContainer>
    <IconContainer>
      <CryptoEtc />
      <IconName>CryptoEtc</IconName>
    </IconContainer>
    <IconContainer>
      <CryptoXlm />
      <IconName>CryptoXlm</IconName>
    </IconContainer>
  </Layout>
))
