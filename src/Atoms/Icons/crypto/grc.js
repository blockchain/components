// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoGrc = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#5411B3" />
      <path
        fill="#FFF"
        d="M16.053 5c.53.319 1.056.645 1.59.956 2.535 1.47 5.07 2.938 7.608 4.402.167.096.241.203.241.408-.005 3.492-.004 6.984.008 10.476 0 .228-.104.323-.27.419-3.017 1.746-6.032 3.495-9.047 5.244-.046.027-.087.063-.13.095h-.11c-.91-.536-1.82-1.077-2.733-1.608-2.154-1.251-4.31-2.5-6.468-3.743-.183-.105-.243-.225-.242-.435.01-3.464.012-6.928.005-10.393 0-.248.085-.373.289-.49 2.989-1.724 5.973-3.454 8.958-5.184.069-.04.128-.098.191-.147h.11zm2.806 17.48c.413.283.817.58 1.233.88.023-.01.057-.024.088-.041 1.35-.781 2.703-1.56 4.049-2.35.08-.047.15-.185.15-.28.007-3.126.006-6.251-.003-9.376a.377.377 0 0 0-.156-.275c-1.33-.782-2.667-1.55-3.998-2.329-.138-.08-.215-.056-.332.035-.323.253-3.499 2.193-4.743 2.94-.972.582-1.922 1.196-2.674 2.07-1.037 1.205-1.134 2.875-.227 4.185.449.65 1.048 1.144 1.69 1.583.512.349 1.04.673 1.56 1.008-.014.02-.022.04-.036.048-.686.398-1.37.8-2.064 1.187-.067.037-.206 0-.282-.048a10.765 10.765 0 0 1-2.014-1.68c-1.73-1.814-2.082-4.787-.82-6.956a7.38 7.38 0 0 1 2.36-2.481c1.26-.824 4.77-2.907 5.235-3.192-.04-.052-.051-.08-.072-.093-.552-.322-1.1-.65-1.66-.957-.082-.045-.231-.028-.32.018-.308.159-.603.342-.902.517-.264.154-.527.31-.83.489l1.438.904c-.735.434-1.43.85-2.133 1.253-.056.032-.176.007-.237-.035a17.38 17.38 0 0 1-1.018-.74c-.145-.115-.241-.126-.403-.031a488.06 488.06 0 0 1-3.934 2.276c-.145.083-.192.18-.192.348.005 3.098.004 6.196-.001 9.293 0 .166.043.264.192.35 1.306.748 2.608 1.504 3.907 2.265.144.085.24.081.385-.016.932-.623 5.196-3.296 6.381-4.033.201-.125.37-.304.552-.458l-.03-.07h-4.426c.45-.782.87-1.52 1.305-2.249.04-.066.187-.094.285-.094 2.007-.005 4.015-.003 6.022-.003.08 0 .16.009.257.014.005.095.027.18.009.254-.132.549-.22 1.116-.42 1.64-.474 1.246-1.353 2.204-2.424 2.942-1.17.805-4.895 3-5.527 3.377.03.053.034.075.047.083.385.227.798.417 1.149.689.505.39.945.388 1.45 0 .364-.279.79-.476 1.231-.735l-1.464-.915c.04-.035.063-.063.092-.08.67-.389 1.34-.78 2.016-1.16.064-.035.194-.016.259.029zm2.894-9.337c.345.612.602 1.399.64 2.006-.678 0-1.332.004-1.987-.005-.06-.001-.154-.07-.173-.128-.32-.988-1.003-1.69-1.81-2.28-.573-.419-1.183-.788-1.776-1.18-.05-.032-.099-.067-.18-.123.135-.081.24-.146.348-.209.552-.32 1.1-.647 1.66-.955.1-.056.28-.09.361-.037 1.17.769 2.215 1.667 2.917 2.911z"
      />
    </g>
  </svg>
)

export const CryptoGrc = withStyle(SvgCryptoGrc, 'CryptoGrc', true)
