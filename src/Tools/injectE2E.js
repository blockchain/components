// @flow strict
import type { ThemeType } from './theme'

const injectE2E = (props: { +e2e?: string, +theme: ThemeType }) =>
  props.theme.e2e ? props.e2e : undefined

export default injectE2E
