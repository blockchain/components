// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgEthereum = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M15.9634418,11.5939634 L12.0477432,13.6478025 C12.0186645,13.6630547 11.9839508,13.6630594 11.9548679,13.647815 L8.03657207,11.5939657 C7.98765618,11.5683255 7.9687875,11.5078859 7.99442769,11.45897 C7.99540947,11.457097 7.99645042,11.4552556 7.99754896,11.4534486 L11.915832,5.00819127 C11.9445216,4.9609992 12.0060358,4.94599999 12.0532279,4.9746896 C12.0669259,4.9830171 12.0784212,4.99451574 12.0867447,5.00821623 L16.0024561,11.4534837 C16.0311319,11.5006842 16.0161147,11.562194 15.9689143,11.5908698 C15.967123,11.5919581 15.9652979,11.5929898 15.9634418,11.5939634 Z M8.14579229,12.714348 L11.9169872,18.3232742 C11.9478027,18.3691064 12.0099379,18.3812798 12.0557701,18.3504643 C12.066507,18.3432452 12.0757411,18.3340112 12.0829601,18.3232742 L15.854155,12.714348 C15.8849705,12.6685159 15.8727971,12.6063806 15.826965,12.5755651 C15.7976538,12.5558576 15.7601205,12.5530742 15.7282231,12.5682427 L11.9999736,14.3411716 L8.27172418,12.5682427 C8.22184797,12.5445246 8.162188,12.56573 8.1384699,12.6156062 C8.12330143,12.6475036 8.12608478,12.6850369 8.14579229,12.714348 Z" />
  </svg>
)

export const BcEthereum = withStyle(SvgEthereum, 'BcEthereum', false)
