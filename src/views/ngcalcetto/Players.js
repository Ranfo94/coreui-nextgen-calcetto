import React from 'react'
import { useState, useEffect } from 'react'

import PlayerTable from './PlayerTable'
import PlayerCreateModal from './PlayerCreateModal'
import ErrorModal from './ErrorModal'
import { getPlayers } from 'src/http/requests'

export default function Players() {
  const [PlayerModalVisible, setPlayerModalVisible] = useState(false)
  const [PlayerModalMode, setPlayerModalMode] = useState('CREATE')
  const [ErrorModalVisible, setErrorModalVisible] = useState(false)
  const [fetchedPlayers, setFetchedPlayers] = useState([])

  const [playerToFetchID, setPlayerToFetchID] = useState()

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

  function updatePlayersData(operation, playerData) {
    switch (operation) {
      case 'CREATE':
        setFetchedPlayers((prevPlayers) => {
          const result = prevPlayers
          result.push(playerData)
          return result
        })
        break
      case 'UPDATE':
        setFetchedPlayers((prevPlayers) => {
          const newPlayersArray = prevPlayers.filter((player) => player.id !== playerData.id)
          newPlayersArray.push(playerData)
          return newPlayersArray
        })
        break
      case 'DELETE':
        setFetchedPlayers((prevPlayers) => {
          return prevPlayers.filter((player) => player.id !== playerData.id)
        })
        break
      default:
        break
    }
  }

  function onPlayerRowSelected(player) {
    console.log(player)

    //open the playerCreateModal in update mode
    setPlayerToFetchID(player.id)
    setPlayerModalMode('UPDATE')
    setPlayerModalVisible(true)
  }

  return (
    <>
      <PlayerTable
        players={fetchedPlayers}
        setModalVisible={setPlayerModalVisible}
        setModalMode={setPlayerModalMode}
        isLoadingPlayers={isLoadingPlayers}
        playerSelected={onPlayerRowSelected}
      />
      <PlayerCreateModal
        modalVisible={PlayerModalVisible}
        setModalVisible={setPlayerModalVisible}
        mode={PlayerModalMode}
        addPersistedPlayer={updatePlayersData}
        playerToFetch={playerToFetchID}
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