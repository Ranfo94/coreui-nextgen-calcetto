import React from 'react'

const Players = React.lazy(() => import('./views/ngcalcetto/Players'))
const Teams = React.lazy(() => import('./views/ngcalcetto/Teams'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Teams },
  { path: '/players', name: 'Players', element: Players, exact: true },
  { path: '/teams', name: 'Teams', element: Teams, exact: true },
]

export default routes
