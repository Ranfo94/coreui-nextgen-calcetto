import React, { useState } from 'react'

import TeamsSelectionTable from './TeamsSelectionTable'

import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const tableExample = [
  {
    avatar: { src: avatar2 },
    user: {
      id: 1,
      name: 'Ranfo',
      new: false,
      registered: '1 March, 2016',
    },
    pref_role: 'DEF',
    score: {
      value: 50,
      color: 'info',
    },
    last_game: '1 Month ago',
  },
  {
    avatar: { src: avatar3 },
    user: {
      id: 2,
      name: 'DiFi',
      new: false,
      registered: '1 March, 2020',
    },
    pref_role: 'MID',
    score: {
      value: 50,
      color: 'info',
    },
    last_game: '1 Week ago',
  },
  {
    avatar: { src: avatar6 },
    user: {
      id: 3,
      name: 'Khalid',
      new: false,
      registered: '1 March, 2017',
    },
    pref_role: 'ATT',
    score: {
      value: 65,
      color: 'success',
    },
    last_game: '5 Days ago',
  },
  {
    avatar: { src: avatar6 },
    user: {
      id: 4,
      name: 'Pier',
      new: true,
      registered: '23 November, 2023',
    },
    pref_role: 'GK',
    score: {
      value: 30,
      color: 'warning',
    },
    last_game: '1 Month ago',
  },
]

export default function Teams() {
  const [selectedPlayers, setSelectedPlayers] = useState([])

  function onPlayerSelect(id, name, score) {
    let alreadyInList = false
    for (let i = 0; i < selectedPlayers.length; i++) {
      if (selectedPlayers[i].id === id) {
        //player is already selected, then deselect it
        alreadyInList = true
        console.log('Player %s is already selected', name)
      }
    }
    if (!alreadyInList) {
      let newSelectedPlayers = selectedPlayers
      newSelectedPlayers.push({ id: id, name: name, score: score })
      setSelectedPlayers(newSelectedPlayers)
      console.log(selectedPlayers)
    }
  }

  return (
    <TeamsSelectionTable
      players={tableExample}
      selectedPlayers={selectedPlayers}
      onPlayerSelect={onPlayerSelect}
    />
  )
}
