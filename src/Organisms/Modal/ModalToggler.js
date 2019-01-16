// @flow strict
import React from 'react'
import { FasTimes } from '../../Atoms/Icons'

export type PropsType = {}

const ModalToggler = ({ ...props }: PropsType) => (
  <FasTimes size="28px" {...props} />
)

export default ModalToggler
