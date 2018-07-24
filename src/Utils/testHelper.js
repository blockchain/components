import React from 'react'
import { shallow, mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../Tools/theme'

function wrapWithTheme(fn, children, options) {
  const wrapper = fn(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    options,
  )

  return wrapper[fn.name]({
    context: wrapper.instance().getChildContext(),
  })
}

export function shallowWithTheme() {
  return wrapWithTheme(shallow, ...arguments)
}

export function mountWithTheme() {
  return wrapWithTheme(mount, ...arguments)
}
