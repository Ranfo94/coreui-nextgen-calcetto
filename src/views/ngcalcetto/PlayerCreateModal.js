import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'

import PlayerCreateForm from './PlayerCreateForm'

export default function PlayerCreateModal({ modalVisible, setModalVisible }) {
  const [formData, setFormData] = useState({
    name: '',
    acceleration: 1,
    aggression: 1,
    bravery: 1,
    concentration: 1,
    defending: 1,
    determination: 1,
    dribbling: 1,
    finishing: 1,
    first_touch: 1,
    passing: 1,
    shots: 1,
    speed: 1,
    stamina: 1,
    strenght: 1,
    team_work: 1,
    vision: 1,
  })

  function handleFormDataChanged(key, value) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [key]: value,
      }
    })
  }

  function handleFormDataSubmit() {
    console.log('Form data submitted for player: %s %d', formData.name, formData.acceleration)
  }

  return (
    <CModal
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader onClose={() => setModalVisible(false)}>
        <CModalTitle id="LiveDemoExampleLabel">Create new player</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <PlayerCreateForm formData={formData} formDataChanged={handleFormDataChanged} />
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setModalVisible(false)}>
          Close
        </CButton>
        <CButton color="primary" onClick={() => handleFormDataSubmit()}>
          Sumbit
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

PlayerCreateModal.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
}
