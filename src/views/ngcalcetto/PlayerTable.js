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

export default function PlayerTable({ players, modalVisible, setModalVisible }) {
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
              <CTableBody>
                {players.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src={item.avatar.src} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.user.name}</div>
                      <div className="small text-medium-emphasis">
                        <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                        {item.user.registered}
                      </div>
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
                    <CTableDataCell>
                      <div className="small text-medium-emphasis">Last Game</div>
                      <strong>{item.last_game}</strong>
                    </CTableDataCell>
                    <CTableDataCell />
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

PlayerTable.propTypes = {
  players: PropTypes.array,
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
}
