import React from 'react'
import { storiesOf } from '@storybook/react'
import BrandLogoBlack from './BrandLogoBlack'

storiesOf('Atoms/Brand/BrandLogoBlack', module)
  .add('default', () => <BrandLogoBlack />)
  .add('with size', () => <BrandLogoBlack size="200px" />)
