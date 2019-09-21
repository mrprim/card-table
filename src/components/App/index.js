import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import './index.scss'
import Game from '../Game'
import { useRoutes } from 'hookrouter'

const routes = {
  '/:deckId': ({ deckId }) => <Game deckId={deckId} />,
  '/': () => <Game />
}

const App = () => {
  const routeResult = useRoutes(routes)

  return (
    <Provider store={store}>
      {routeResult}
    </Provider>
  )
}

export default App
