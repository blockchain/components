import React from 'react'
import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zM139.11 141.21c-2.77-4.41.4-10.14 5.6-10.14h53.08c.9 0 1.73-.46 2.21-1.22l34.4-54.76c2.6-4.13 8.61-4.13 11.21 0l34.4 54.76a2.61 2.61 0 0 0 2.21 1.22h53.08c5.2 0 8.37 5.73 5.6 10.14L314.01 184l26.88 42.79c2.77 4.4-.4 10.13-5.6 10.13h-53.08c-.9 0-1.73.46-2.21 1.22l-34.4 54.76c-2.6 4.13-8.61 4.13-11.21 0L200 238.15a2.61 2.61 0 0 0-2.21-1.22h-53.08c-5.2 0-8.37-5.73-5.6-10.13l26.88-42.8-26.88-42.79zM380.8 448H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8v64z"/>
  </>
)

export const FasTorah = withStyle(InnerSvg, 448, 512, 'FasTorah')
