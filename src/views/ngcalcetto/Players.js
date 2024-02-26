import React from 'react'
import { useState, useEffect } from 'react'

import PlayerTable from './PlayerTable'
import PlayerCreateModal from './PlayerCreateModal'
import ErrorModal from './ErrorModal'
import { getPlayers } from 'src/http/requests'

export default function Players() {
  const [PlayerModalVisible, setPlayerModalVisible] = useState(false)
  const [ErrorModalVisible, setErrorModalVisible] = useState(false)
  const [fetchedPlayers, setFetchedPlayers] = useState([])
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchPlayers() {
      setIsLoadingPlayers(true)
      try {
        const retrievedPlayers = await getPlayers()
        setFetchedPlayers(retrievedPlayers)
        setIsLoadingPlayers(false)
      } catch (error) {
        setIsLoadingPlayers(false)
        setError({ message: error.message || 'An unknown error occurred while fetching players' })
        setErrorModalVisible(true)
      }
    }
    fetchPlayers()
  }, [])

  function addPersistedPlayer(playerData) {
    setFetchedPlayers((prevPlayers) => {
      const result = prevPlayers
      result.push(playerData)
      return result
    })
  }

  return (
    <>
      <PlayerTable
        players={fetchedPlayers}
        modalVisible={PlayerModalVisible}
        setModalVisible={setPlayerModalVisible}
        isLoadingPlayers={isLoadingPlayers}
      />
      <PlayerCreateModal
        modalVisible={PlayerModalVisible}
        setModalVisible={setPlayerModalVisible}
        addPersistedPlayer={addPersistedPlayer}
      />
      {error && (
        <ErrorModal
          modalVisible={ErrorModalVisible}
          setModalVisible={setErrorModalVisible}
          title="An error occurred!"
          message={error.message}
        />
      )}
    </>
  )
}
