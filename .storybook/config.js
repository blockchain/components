import React from 'react'
import { sort } from 'ramda'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '../src/Tools'
import viewports from './viewports'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  // Make sure the first story in the array is 'palette', to display it by default
  req.keys().sort(k => k.includes('palette') ? -1 : 1).forEach(filename => req(filename));
}

addDecorator(withInfo({
  header: true,
  inline: true
}));

addDecorator(
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
)


addParameters({ viewport: { viewports: viewports } });

configure(loadStories, module);
