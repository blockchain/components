import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { keysIn } from 'ramda'
import ImageMap from './ImageMap'
import Image from './Image'

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 8);
  height: 200px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
`
const ImageName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
`

const renderImage = (name) => (
  <ImageContainer key={name}>
    <Image name={name} width="30%" />
    <ImageName>{name}</ImageName>
  </ImageContainer>
)

storiesOf('Atoms/Images/Image', module)
  .add('list', () => <Layout>{keysIn(ImageMap).map(renderImage)}</Layout>)
  .add('default', () => <Image />)
  .add('with name', () => <Image name="app-store-badge" />)
  .add('with height', () => <Image height="50px" />)
  .add('with width', () => <Image width="200px" />)
  .add('with selectable', () => <Image selectable />)
