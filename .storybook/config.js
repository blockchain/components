import React from 'react'
import withBackgrounds from '@storybook/addon-backgrounds'
import { withInfo } from '@storybook/addon-info'
import { configure, addDecorator } from '@storybook/react'

import { palette, ThemeProvider } from '../src'
const req = require.context('../src', true, /stories\.js$/)

export const infoStory = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100px',
  padding: '40px 60px',
}

export const Spacer = () => <div style={{ height: '40px' }} />

const info = {
  text: 'Documentation',
  inline: true,
  header: true,
  styles: {
    infoStory,
  },
}

const colors = Object.keys(palette).map((name) => ({
  name,
  value: palette[name],
  default: name === 'white',
}))

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withInfo(info))
addDecorator(withBackgrounds(colors))
addDecorator(
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
  { info },
)

configure(loadStories, module)
