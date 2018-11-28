import React from 'react'
import { storiesOf } from '@storybook/react'

import { infoStory as styles } from '../../../.storybook/config'
import { CryptoEth, CryptoEtc, CryptoBch, CryptoBtc, CryptoXlm } from '.'

const infoStory = {
  ...styles,
  flexDirection: 'row',
}

storiesOf('Atoms/Icons/crypto', module)
  .addParameters({ info: { styles: { infoStory } } })
  .add('subset', () => (
    <>
      <CryptoBtc />
      <CryptoBch size="15px" />
      <CryptoBch />
      <CryptoEth />
      <CryptoEtc />
      <CryptoXlm />
    </>
  ))
