import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import withBackgrounds from '@storybook/addon-backgrounds'
import { palette, ThemeProvider } from '../src'

const req = require.context('../src', true, /stories\.js$/)

addDecorator((story, context) =>
  withInfo({
    text: 'Documentation',
    inline: true,
    header: true,
  })(story)(context),
)

const colors = Object.keys(palette).map((x) => ({
  name: x,
  value: palette[x],
  default: x === 'gray0',
}))

addDecorator(withBackgrounds(colors))

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
