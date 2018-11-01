// @flow strict
import type { ThemeType } from './theme'

const injectE2E = (props: { +e2e?: string, +theme: ThemeType }) =>
  props.theme.e2e ? props.e2e : undefined

export type E2ePropType = { e2e?: string }

export default injectE2E
