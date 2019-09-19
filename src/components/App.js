import React from 'react'
import RouterView from '../routes/RouterView'
import { routes } from '../routes/routes'
const App = ({ history }) => {
  return <RouterView routes={routes} history={history}></RouterView>
}

export default App
