import React from 'react'
import { useState } from 'react'

import PlayerTable from './PlayerTable'
import PlayerCreateModal from './PlayerCreateModal'

import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const tableExample = [
  {
    avatar: { src: avatar2 },
    user: {
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

export default function Players() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <PlayerTable
        players={tableExample}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      ></PlayerTable>
      <PlayerCreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  )
}
