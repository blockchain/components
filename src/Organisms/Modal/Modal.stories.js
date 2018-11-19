import React from 'react'
import { storiesOf } from '@storybook/react'

import { Modal, ModalBackground, ModalBody, ModalHeader, ModalToggler } from '.'

storiesOf('Organisms/Modal', module).add('Example 1', () => (
  <ModalBackground>
    <Modal>
      <ModalHeader>
        Modal header
        <ModalToggler />
      </ModalHeader>
      <ModalBody>Modal body</ModalBody>
    </Modal>
  </ModalBackground>
))
