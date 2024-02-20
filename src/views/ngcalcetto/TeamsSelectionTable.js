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
import { cilPeople } from '@coreui/icons'

export default function TeamsSelectionTable({ players, selectedPlayers, onPlayerSelect }) {
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Select Player for Team Sorting</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12} md={6} xl={6}>
                <CRow>
                  <CCol sm={6}>
                    <div className="border-start border-start-4 border-start-info py-1 px-3">
                      <div className="text-medium-emphasis small">Your Team Players</div>
                      <div className="fs-5 fw-semibold">4</div>
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
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {players.map((item, index) => (
                  <CTableRow
                    v-for="item in tableItems"
                    key={index}
                    onClick={() => onPlayerSelect(item.user.id, item.user.name, item.user.score)}
                  >
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src={item.avatar.src} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.user.name}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <strong>{item.pref_role}</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>{item.score.value}</strong>
                        </div>
                      </div>
                      <CProgress thin color={item.score.color} value={item.score.value} />
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

TeamsSelectionTable.propTypes = {
  players: PropTypes.array,
  selectedPlayers: PropTypes.array,
  onPlayerSelect: PropTypes.func,
}
