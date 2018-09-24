import React from 'react'
import { storiesOf } from '@storybook/react'
import BrandName from './BrandName'

storiesOf('Atoms/Brand/BrandName', module)
  .add('default', () => <BrandName />)
  .add('with height', () => <BrandName height="50px" />)
  .add('with width', () => <BrandName width="300px" />)
