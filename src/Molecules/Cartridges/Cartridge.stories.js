import React from 'react'
import { storiesOf } from '@storybook/react'
import Cartridge from './Cartridge'

storiesOf('Atoms/Cartridges/Cartridge', module)
  .add('default', () => <Cartridge>MyCartridge</Cartridge>)
  .add('with color', () => <Cartridge nature='secondary'>MyCartridge</Cartridge>)
