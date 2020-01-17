// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

export type PropsType = {
  +size: string,
}

const Wrapper = styled.svg`
  height: ${(props: PropsType) => props.size};
  width: ${(props: PropsType) => props.size};
`

const BrandLogoBlack = (props: PropsType) => (
  <Wrapper {...props} viewBox="0 0 500.000000 500.000000">
    <g
      fill="#000000"
      stroke="none"
      transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
    />
    <path
      d="M0 2500 l0 -2500 2500 0 2500 0 0 2500 0 2500 -2500 0 -2500 0 0
-2500z m2559 1999 c127 -20 152 -39 444 -328 147 -145 267 -270 267 -275 0 -6
-172 -183 -383 -394 l-382 -382 -390 390 -390 390 240 241 c132 132 267 260
300 283 58 42 128 71 190 79 17 2 32 5 35 5 3 1 34 -3 69 -9z m1216 -1069
l330 -330 -388 -388 -387 -387 -332 333 -333 332 385 385 c212 212 387 385
390 385 3 0 154 -149 335 -330z m-1795 -66 l384 -385 -627 -627 -627 -627
-270 270 c-328 328 -335 337 -335 505 0 99 2 109 34 175 31 65 73 109 535 573
275 276 505 502 511 502 5 0 183 -174 395 -386z m2363 -533 c106 -111 142
-173 156 -273 13 -96 -6 -191 -57 -273 -14 -22 -141 -157 -283 -300 l-259
-260 -220 220 -219 219 382 383 c210 210 387 383 393 383 6 0 54 -45 107 -99z
m-593 -1246 c0 -6 -226 -236 -502 -512 -470 -468 -508 -504 -573 -535 -65 -31
-77 -33 -175 -33 -177 0 -149 -22 -743 572 l-508 509 628 627 627 627 623
-623 c342 -342 623 -627 623 -632z"
    />
  </Wrapper>
)

BrandLogoBlack.propTypes = {
  size: PropTypes.string,
}

BrandLogoBlack.defaultProps = {
  size: '100px',
}

export default BrandLogoBlack
