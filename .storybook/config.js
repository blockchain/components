import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '../src'

const req = require.context('../src', true, /stories\.js$/)

addDecorator((story, context) => withInfo({ text: 'Documentation', inline: true })(story)(context))

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
