export async function getPlayers() {
  const response = await fetch('http://localhost:8000/players')
  const resData = await response.json()

  if (!response.ok) {
    throw new Error("Can't retrieve players from server, please try again later.")
  }

  return resData
}

export async function getPlayer(id) {
  const response = await fetch('http://localhost:8000/players/' + id)
  const resData = await response.json()

  if (!response.ok) {
    throw new Error(
      "Can't retrieve player with id: " + id + ' from server, please try again later.',
    )
  }

  return resData
}

export async function persistPlayer(formData) {
  const response = await fetch('http://localhost:8000/players/', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const resData = await response.json()

  if (!response.ok) {
    throw new Error("Can't persist player %s, please try again later." % formData.name)
  }

  return resData
}

export async function updatePlayer(id, formData) {
  // Serialize the request body
  const requestBody = {
    name: formData.name,
    stats: { ...formData },
  }
  delete requestBody.stats.name

  const jsonstring_body = JSON.stringify(requestBody)

  console.log('Sending PUT request with body: ' + jsonstring_body)

  const response = await fetch('http://localhost:8000/players/' + id, {
    method: 'PUT',
    body: jsonstring_body,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const resData = await response.json()

  if (!response.ok) {
    throw new Error("Can't update player %s, please try again later." % formData.name)
  }

  return resData
}
