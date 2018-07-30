import React from 'react'
import { storiesOf } from '@storybook/react'
import Cartridge from './Cartridge'

storiesOf('Molecules/Cartridges/Cartridge', module)
  .add('default', () => <Cartridge>MyCartridge</Cartridge>)
  .add('with capitalize', () => <Cartridge capitalize>MyCartridge</Cartridge>)
  .add('with italic', () => <Cartridge italic>MyCartridge</Cartridge>)
  .add('with opacity', () => <Cartridge opacity={0.5}>MyCartridge</Cartridge>)
  .add('with size', () => <Cartridge size="18px">MyCartridge</Cartridge>)
  .add('with uppercase', () => <Cartridge uppercase>MyCartridge</Cartridge>)
