import { mount } from 'enzyme'
import { ThemeConsumer } from 'styled-components'
import theme from '../Tools/theme'

export const mountWithTheme = (children) => {
  ThemeConsumer._currentValue = theme
  return mount(children)
}
