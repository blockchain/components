// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgSelfUnconfirmed = (props) => (
  <svg viewBox="0 0 20 21" {...props}>
    <path d="M4.82141652,11.7500184 C4.67260759,11.7500184 4.54611936,11.6979349 4.44195318,11.5937688 C4.337787,11.4896026 4.28570357,11.3631143 4.28570357,11.2143054 L4.28570357,9.78573756 C4.28570357,9.63692864 4.337787,9.51044041 4.44195318,9.40627423 C4.54611936,9.30210805 4.67260759,9.25002462 4.82141652,9.25002462 L15.1785335,9.25002462 C15.3273424,9.25002462 15.4538306,9.30210805 15.5579968,9.40627423 C15.662163,9.51044041 15.7142464,9.63692864 15.7142464,9.78573756 L15.7142464,11.2143054 C15.7142464,11.3631143 15.662163,11.4896026 15.5579968,11.5937688 C15.4538306,11.6979349 15.3273424,11.7500184 15.1785335,11.7500184 L4.82141652,11.7500184 Z M19.99995,2.64289828 L19.99995,18.3571447 C19.99995,18.9523811 19.791617,19.4583327 19.3749516,19.8749981 C18.9582862,20.2916635 18.4523346,20.4999965 17.8570982,20.4999965 L2.14285179,20.4999965 C1.54761541,20.4999965 1.04166384,20.2916635 0.624998437,19.8749981 C0.20833304,19.4583327 0,18.9523811 0,18.3571447 L0,2.64289828 C0,2.0476619 0.20833304,1.54171033 0.624998437,1.12504493 C1.04166384,0.708379531 1.54761541,0.500046492 2.14285179,0.500046492 L17.8570982,0.500046492 C18.4523346,0.500046492 18.9582862,0.708379531 19.3749516,1.12504493 C19.791617,1.54171033 19.99995,2.0476619 19.99995,2.64289828 Z M17.8570982,18.0892882 L17.8570982,2.91075475 C17.8570982,2.85123132 17.8273362,2.7917072 17.7678127,2.73218377 C17.7082893,2.67266033 17.6487652,2.64289828 17.5892417,2.64289828 L2.41070826,2.64289828 C2.35118483,2.64289828 2.29166071,2.67266033 2.23213728,2.73218377 C2.17261384,2.7917072 2.14285179,2.85123132 2.14285179,2.91075475 L2.14285179,18.0892882 C2.14285179,18.1488117 2.17261384,18.2083358 2.23213728,18.2678592 C2.29166071,18.3273826 2.35118483,18.3571447 2.41070826,18.3571447 L17.5892417,18.3571447 C17.6487652,18.3571447 17.7082893,18.3273826 17.7678127,18.2678592 C17.8273362,18.2083358 17.8570982,18.1488117 17.8570982,18.0892882 Z" />
  </svg>
)

export const BcSelfUnconfirmed = withStyle(
  SvgSelfUnconfirmed,
  'BcSelfUnconfirmed',
  false,
)
