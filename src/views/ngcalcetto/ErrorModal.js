import React from 'react'
import PropTypes from 'prop-types'

import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'

export default function ErrorModal({ modalVisible, setModalVisible, title, message }) {
  return (
    <CModal
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      aria-labelledby="ErrorModal"
    >
      <CModalHeader onClose={() => setModalVisible(false)}>
        <CModalTitle id="ErrorModal">{title}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>{message}</p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setModalVisible(false)}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

ErrorModal.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
}
