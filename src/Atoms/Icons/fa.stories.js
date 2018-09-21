import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { FasCheckCircle, FarCheckCircle, FabFacebook } from '.'

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

storiesOf('Atoms/Icons/font-awesome', module).add('fa', () => (
  <Layout>
    <IconContainer>
      <FasCheckCircle size="40px" />
      <IconName>Check Circle (solid)</IconName>
    </IconContainer>
    <IconContainer>
      <FarCheckCircle size="40px" />
      <IconName>Check Circle (regular)</IconName>
    </IconContainer>
    <IconContainer>
      <FabFacebook size="40px" />
      <IconName>Facebook</IconName>
    </IconContainer>
  </Layout>
))
