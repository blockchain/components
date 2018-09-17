import React from 'react'
import { storiesOf } from '@storybook/react'

import BlockchainLoader from './BlockchainLoader'

storiesOf('Atoms/Loaders/BlockchainLoader', module)
  .add('default', () => <BlockchainLoader />)
  .add('with size', () => <BlockchainLoader size="500px" />)
