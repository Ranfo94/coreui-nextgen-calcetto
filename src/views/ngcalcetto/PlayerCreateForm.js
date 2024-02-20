import React, { useState } from 'react'

import PropTypes from 'prop-types'

export default function PlayerCreateForm({ formData, formDataChanged }) {
  const [showStats, setShowStats] = useState(true)

  function onDataChanged(key, event) {
    if (key === 'name') {
      formDataChanged(key, event.target.value)
    } else {
      formDataChanged(key, parseInt(event.target.value))
    }
  }

  return (
    <form className="row g-3">
      <div className="col-12">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          value={formData.name}
          onChange={(e) => onDataChanged('name', e)}
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheck"
            onChange={() => setShowStats(!showStats)}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Add Statistics
          </label>
        </div>
      </div>
      <div hidden={showStats} className="row g-3">
        <div className="col-md-4">
          <label htmlFor="inputAcceleration" className="form-label">
            Acceleration
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAcceleration"
            value={formData.acceleration}
            onChange={(e) => onDataChanged('acceleration', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputAggression" className="form-label">
            Aggression
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAggression"
            value={formData.aggression}
            onChange={(e) => onDataChanged('aggression', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputBravery" className="form-label">
            Bravery
          </label>
          <input
            type="number"
            className="form-control"
            id="inputBravery"
            value={formData.bravery}
            onChange={(e) => onDataChanged('bravery', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputConcentration" className="form-label">
            Concentration
          </label>
          <input
            type="number"
            className="form-control"
            id="inputConcentration"
            value={formData.concentration}
            onChange={(e) => onDataChanged('concentration', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputDefending" className="form-label">
            Defending
          </label>
          <input
            type="number"
            className="form-control"
            id="inputDefending"
            value={formData.defending}
            onChange={(e) => onDataChanged('defending', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputDetermination" className="form-label">
            Determination
          </label>
          <input
            type="number"
            className="form-control"
            id="inputDetermination"
            value={formData.determination}
            onChange={(e) => onDataChanged('determination', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputDribbling" className="form-label">
            Dribbling
          </label>
          <input
            type="number"
            className="form-control"
            id="inputDribbling"
            value={formData.dribbling}
            onChange={(e) => onDataChanged('dribbling', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFinishing" className="form-label">
            Finishing
          </label>
          <input
            type="number"
            className="form-control"
            id="inputFinishing"
            value={formData.finishing}
            onChange={(e) => onDataChanged('finishing', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFirstTouch" className="form-label">
            First Touch
          </label>
          <input
            type="number"
            className="form-control"
            id="inputFirstTouch"
            value={formData.first_touch}
            onChange={(e) => onDataChanged('first_touch', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputPassing" className="form-label">
            Passing
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPassing"
            value={formData.passing}
            onChange={(e) => onDataChanged('passing', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputShots" className="form-label">
            Shots
          </label>
          <input
            type="number"
            className="form-control"
            id="inputShots"
            value={formData.shots}
            onChange={(e) => onDataChanged('shots', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputSpeed" className="form-label">
            Speed
          </label>
          <input
            type="number"
            className="form-control"
            id="inputSpeed"
            value={formData.speed}
            onChange={(e) => onDataChanged('speed', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputStamina" className="form-label">
            Stamina
          </label>
          <input
            type="number"
            className="form-control"
            id="inputStamina"
            value={formData.stamina}
            onChange={(e) => onDataChanged('stamina', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputStrenght" className="form-label">
            Strenght
          </label>
          <input
            type="number"
            className="form-control"
            id="inputStrenght"
            value={formData.strenght}
            onChange={(e) => onDataChanged('strenght', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputTeamWork" className="form-label">
            Team Work
          </label>
          <input
            type="number"
            className="form-control"
            id="inputTeamWork"
            value={formData.team_work}
            onChange={(e) => onDataChanged('team_work', e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputVision" className="form-label">
            Vision
          </label>
          <input
            type="number"
            className="form-control"
            id="inputVision"
            value={formData.vision}
            onChange={(e) => onDataChanged('vision', e)}
          />
        </div>
      </div>
    </form>
  )
}

PlayerCreateForm.propTypes = {
  formData: PropTypes.object,
  formDataChanged: PropTypes.func,
}
