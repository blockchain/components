import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import withBackgrounds from '@storybook/addon-backgrounds'
import { keysIn } from 'ramda'
import { palette, ThemeProvider } from '../src'

const req = require.context('../src', true, /stories\.js$/)

addDecorator((story, context) =>
  withInfo({
    text: 'Documentation',
    inline: true,
    header: true,
  })(story)(context),
)

const colors = keysIn(palette).map((x) => ({ name: x, value: palette[x] }))

addDecorator(withBackgrounds(colors))

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
