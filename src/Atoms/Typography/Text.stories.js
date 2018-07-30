import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from './Text'

storiesOf('Atoms/Typography/Text', module)
  .add('default', () => <Text>MyText</Text>)
  .add('with size', () => <Text size="32px">MyText</Text>)
  .add('with weight', () => <Text weight={500}>MyText</Text>)
  .add('with uppercase', () => <Text uppercase>MyText</Text>)
  .add('with capitalize', () => <Text capitalize>MyText</Text>)
  .add('with italic', () => <Text italic>MyText</Text>)
  .add('with opacity', () => <Text opacity={0.5}>MyText</Text>)
