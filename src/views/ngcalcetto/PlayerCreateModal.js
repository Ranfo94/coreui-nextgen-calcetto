import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'

import PlayerCreateForm from './PlayerCreateForm'
import { persistPlayer } from 'src/http/requests'
import ErrorModal from './ErrorModal'

export default function PlayerCreateModal({ modalVisible, setModalVisible, addPersistedPlayer }) {
  const [error, setError] = useState({})
  const [errorModalVisible, setErrorModalVisible] = useState(false)
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
    async function sendPostData() {
      try {
        const persisted_player = await persistPlayer(formData)
        addPersistedPlayer(persisted_player)
        setModalVisible(false)
      } catch (error) {
        setError({ message: error.message || 'An unknown error occurred while fetching players' })
        setErrorModalVisible(true)
      }
    }
    console.log(formData)
    sendPostData()
  }

  return (
    <>
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
      {error && (
        <ErrorModal
          modalVisible={errorModalVisible}
          setModalVisible={setErrorModalVisible}
          title="An error occurred!"
          message={error.message}
        />
      )}
    </>
  )
}

PlayerCreateModal.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  addPersistedPlayer: PropTypes.func,
}
