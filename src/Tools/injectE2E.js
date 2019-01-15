// @flow strict
import type { ThemeType } from './theme'

const EMPTY = {}

const injectE2E = (props: { +e2e?: string, +theme: ThemeType }) =>
  props.theme.e2e ? { 'data-e2e': props.e2e } || '' : EMPTY

export default injectE2E
