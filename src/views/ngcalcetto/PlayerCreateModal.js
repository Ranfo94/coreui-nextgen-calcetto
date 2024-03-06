import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'

import PlayerCreateForm from './PlayerCreateForm'
import { persistPlayer, updatePlayer, getPlayer, deletePlayer } from 'src/http/requests'
import ErrorModal from './ErrorModal'

export default function PlayerCreateModal({
  modalVisible,
  setModalVisible,
  addPersistedPlayer,
  mode,
  playerToFetch,
}) {
  const [error, setError] = useState({})
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const [isLoadingPlayer, setIsLoadingPlayer] = useState(false)
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

  function updatePlayerState(playerData) {
    setFormData(() => {
      return {
        name: playerData.name,
        acceleration: playerData.stats.acceleration,
        aggression: playerData.stats.aggression,
        bravery: playerData.stats.bravery,
        concentration: playerData.stats.concentration,
        defending: playerData.stats.defending,
        determination: playerData.stats.determination,
        dribbling: playerData.stats.dribbling,
        finishing: playerData.stats.finishing,
        first_touch: playerData.stats.first_touch,
        passing: playerData.stats.passing,
        shots: playerData.stats.shots,
        speed: playerData.stats.speed,
        stamina: playerData.stats.stamina,
        strenght: playerData.stats.strenght,
        team_work: playerData.stats.teamwork,
        vision: playerData.stats.vision,
      }
    })
    console.log(formData)
  }

  useEffect(() => {
    //fetch player with player.id
    async function fetchPlayer(player_id) {
      setIsLoadingPlayer(true)
      try {
        console.log('loading player ' + player_id)
        const fetchedPlayer = await getPlayer(player_id)
        updatePlayerState(fetchedPlayer)
      } catch (error) {
        setError({ message: error.message || 'An unknown error occurred while fetching player' })
        setErrorModalVisible(true)
      } finally {
        setIsLoadingPlayer(false)
      }
    }

    console.log(mode, playerToFetch)

    if (playerToFetch && mode === 'UPDATE') {
      fetchPlayer(playerToFetch)
    }
  }, [mode, playerToFetch])

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
        console.log('sending post data...')
        const persisted_player = await persistPlayer(formData)
        addPersistedPlayer(mode, persisted_player)
        setModalVisible(false)
      } catch (error) {
        setError({
          message: error.message || 'An unknown error occurred while creating new player',
        })
        setErrorModalVisible(true)
      }
    }
    async function sendPutData() {
      try {
        console.log('sending put data: ' + JSON.stringify(formData))
        const updated_player = await updatePlayer(playerToFetch, formData)
        addPersistedPlayer(mode, updated_player)
        setModalVisible(false)
      } catch (error) {
        setError({ message: error.message || 'An unknown error occurred while updating player' })
        setErrorModalVisible(true)
      }
    }
    console.log(formData)
    if (mode === 'CREATE') {
      sendPostData()
    } else {
      //send PUT request
      sendPutData()
    }
  }

  function handlePlayerDelete() {
    async function sendPlayerDelete() {
      try {
        console.log('Deleting player ' + playerToFetch)
        await deletePlayer(playerToFetch)
        const deletedPlayer = { id: playerToFetch }
        addPersistedPlayer('DELETE', deletedPlayer)
        setModalVisible(false)
      } catch (error) {
        setError({ message: error.message || 'An unknown error occurred while deleting player' })
        setErrorModalVisible(true)
      }
    }

    sendPlayerDelete()
  }

  function getFormButtonString() {
    let result = ''
    switch (mode) {
      case 'CREATE':
        result = 'Submit'
        break
      case 'UPDATE':
        result = 'Update'
        break
      default:
        break
    }
    return result
  }

  function getModalTitle() {
    let result = ''
    switch (mode) {
      case 'CREATE':
        result = 'Create new player'
        break
      case 'UPDATE':
        result = 'Update player'
        break
      default:
        break
    }
    return result
  }

  return (
    <>
      <CModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setModalVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">{getModalTitle()}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {isLoadingPlayer ? (
            <p>Loading Player data ...</p>
          ) : (
            <PlayerCreateForm formData={formData} formDataChanged={handleFormDataChanged} />
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Close
          </CButton>
          <CButton color="primary" onClick={() => handleFormDataSubmit()}>
            {getFormButtonString()}
          </CButton>
          {!isLoadingPlayer && mode === 'UPDATE' && (
            <CButton color="danger" onClick={() => handlePlayerDelete()}>
              Delete
            </CButton>
          )}
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
  mode: PropTypes.string,
  playerToFetch: PropTypes.number,
}
