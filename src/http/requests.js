export async function getPlayers() {
  const response = await fetch('http://localhost:8000/players')
  const resData = await response.json()

  if (!response.ok) {
    throw new Error("Can't retrieve players from server, please try again later.")
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
