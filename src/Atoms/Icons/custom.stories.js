import React from 'react'
import { storiesOf } from '@storybook/react'

import { infoStory as styles } from '../../../.storybook/config'
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

const infoStory = {
  ...styles,
  flexDirection: 'row',
}

storiesOf('Atoms/Icons/custom', module)
  .addParameters({ info: { styles: { infoStory } } })
  .add('list', () => (
    <>
      <BcBitcoin size="40px" />
      <BcBitcoinCash size="40px" />
      <BcBlocks size="40px" />
      <BcEthereum size="40px" />
      <BcReceivedConfirmed size="40px" />
      <BcReceivedUnconfirmed size="40px" />
      <BcSelfConfirmed size="40px" />
      <BcSelfUnconfirmed size="40px" />
      <BcSentConfirmed size="40px" />
      <BcSentUnconfirmed size="40px" />
      <BcTransactions size="40px" />
    </>
  ))
  .add('with size', () => <BcBitcoin size="150px" />)
  .add('with selectable', () => <BcBitcoin selectable />)
