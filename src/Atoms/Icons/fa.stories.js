import React from 'react'
import { storiesOf } from '@storybook/react'

import { infoStory as styles } from '../../../.storybook/config'
import { FasCheckCircle, FarCheckCircle, FabFacebook } from '.'

const infoStory = {
  ...styles,
  flexDirection: 'row',
}

storiesOf('Atoms/Icons/font-awesome', module)
  .addParameters({ info: { styles: { infoStory } } })
  .add('subset', () => (
    <>
      <FasCheckCircle size="40px" />
      <FarCheckCircle size="40px" />
      <FabFacebook size="40px" />
    </>
  ))
