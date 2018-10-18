// @flow strict
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ball1 = keyframes`
  0% {
    opacity: 0.35;
  }

  50% {
    top: -100%;
    left: 200%;
    opacity: 1;
  }

  100% {
    top: 50%;
    left: 100%;
    z-index: 2;
    opacity: 0.35;
  }
`

const ball2 = keyframes`
  0% {
    opacity: 0.35;
  }

  50% {
    top: 200%;
    left: 200%;
    opacity: 1;
  }

  100% {
    top: 100%;
    left: 50%;
    z-index: 1;
    opacity: 0.35;
  }
`

const ball3 = keyframes`
  0% {
    opacity: 0.35;
  }

  50% {
    top: 200%;
    left: -100%;
    opacity: 1;
  }

  100% {
    top: 50%;
    left: 0;
    z-index: 2;
    opacity: 0.35;
  }
`

const ball4 = keyframes`
  0% {
    opacity: 0.35;
  }

  50% {
    top: -100%;
    left: -100%;
    opacity: 1;
  }

  100% {
    top: 0;
    left: 50%;
    z-index: 1;
    opacity: 0.35;
  }
`

const Animation = styled.div`
  width: 8px;
  height: 8px;
  position: relative;
  box-sizing: border-box;

  & > div {
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: ${(props) => props.theme['loaderColor']};
    transform: translate(-50%, -50%);
  }

  & > div:nth-child(1) {
    top: 0;
    left: 50%;
    z-index: 1;
    animation: ${ball1} 1s 0s ease infinite;
  }

  & > div:nth-child(2) {
    top: 50%;
    left: 100%;
    z-index: 2;
    animation: ${ball2} 1s 0s ease infinite;
  }

  & > div:nth-child(3) {
    top: 100%;
    left: 50%;
    z-index: 1;
    animation: ${ball3} 1s 0s ease infinite;
  }

  & > div:nth-child(4) {
    top: 50%;
    left: 0;
    z-index: 2;
    animation: ${ball4} 1s 0s ease infinite;
  }
`

const FussionLoader = () => (
  <Wrapper>
    <Animation>
      <div />
      <div />
      <div />
      <div />
    </Animation>
  </Wrapper>
)

export default FussionLoader
