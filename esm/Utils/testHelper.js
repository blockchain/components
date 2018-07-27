import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../Tools/theme';

function wrapWithTheme(fn, children, options) {
  var wrapper = fn(React.createElement(ThemeProvider, {
    theme: theme
  }, children), options);
  return wrapper[fn.name]({
    context: wrapper.instance().getChildContext()
  });
}

export function shallowWithTheme() {
  return wrapWithTheme.apply(void 0, [shallow].concat(Array.prototype.slice.call(arguments)));
}
export function mountWithTheme() {
  return wrapWithTheme.apply(void 0, [mount].concat(Array.prototype.slice.call(arguments)));
}