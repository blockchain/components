import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from './Link'

storiesOf('Atoms/Links/Link', module)
  .add('default', () => <Link>MyLink</Link>)
  .add('with size', () => <Link size="32px">MyLink</Link>)
  .add('with weight', () => <Link weight={500}>MyLink</Link>)
  .add('with uppercase', () => <Link uppercase>MyLink</Link>)
  .add('with capitalize', () => <Link capitalize>MyLink</Link>)
  .add('with italic', () => <Link italic>MyLink</Link>)
  .add('with opacity', () => <Link opacity={0.5}>MyLink</Link>)
