import React from 'react'
import PropTypes from 'prop-types'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilPlus } from '@coreui/icons'

import DEFAULT_AVATAR from 'src/assets/images/avatars/unknown.png'

const DEFAULT_REGISTERED = '20 February, 2024'
const DEFAULT_NEW = true
const DEFAULT_SCORE_COLOR = 'success'

export default function PlayerTable({ players, modalVisible, setModalVisible, isLoadingPlayers }) {
  const tableBody = (
    <CTableBody>
      {players.map((item, index) => (
        <CTableRow v-for="item in tableItems" key={index}>
          <CTableDataCell className="text-center">
            <CAvatar size="md" src={item.avatar || DEFAULT_AVATAR} />
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.name}</div>
            <div className="small text-medium-emphasis">
              <span>{{ DEFAULT_NEW } ? 'New' : 'Recurring'}</span> | Registered:{' '}
              {DEFAULT_REGISTERED}
            </div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <strong>ATT</strong>
          </CTableDataCell>
          <CTableDataCell>
            <div className="clearfix">
              <div className="float-start">
                <strong>{item.score}</strong>
              </div>
            </div>
            <CProgress thin color={DEFAULT_SCORE_COLOR} value={item.score} />
          </CTableDataCell>
          <CTableDataCell>
            <div className="small text-medium-emphasis">Last Game</div>
            <strong>{DEFAULT_REGISTERED}</strong>
          </CTableDataCell>
          <CTableDataCell />
        </CTableRow>
      ))}
    </CTableBody>
  )

  let playersCount = 0
  if (players !== null) {
    playersCount = players.length
  }

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Players Management</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12} md={6} xl={6}>
                <CRow>
                  <CCol sm={6}>
                    <div className="border-start border-start-4 border-start-info py-1 px-3">
                      <div className="text-medium-emphasis small">Your Team Players</div>
                      <div className="fs-5 fw-semibold">{playersCount}</div>
                    </div>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>

            <br />

            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Preferred Role</CTableHeaderCell>
                  <CTableHeaderCell>Score</CTableHeaderCell>
                  <CTableHeaderCell>Last Game</CTableHeaderCell>
                  <CTableHeaderCell>
                    <button
                      type="button"
                      style={{ border: 'none' }}
                      onClick={() => setModalVisible(!modalVisible)}
                    >
                      {<CIcon icon={cilPlus} />}
                    </button>
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {!isLoadingPlayers && tableBody}
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

PlayerTable.propTypes = {
  players: PropTypes.array,
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  isLoadingPlayers: PropTypes.bool,
}
