import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import Component from './component'
import initGame from '../../async/initGame'
import { setGame } from '../../actions'
import getGameState from '../../async/getGameState'

const Game = ({ deckId }) => {
  const dispatch = useDispatch()
  const loadedId = useSelector(s => s.game.deckId)
  const [mode, setMode] = useState('game')

  useEffect(() => {
    if (loadedId) return

    const callInitGame = async () => {
      const game = await initGame()

      console.log(game)
      dispatch(setGame(game))
      window.location.replace(game.deck_id)
    }

    const callGetGameState = async () => {
      const game = await getGameState(deckId)
      dispatch(setGame(game))
    }

    if (deckId) {
      callGetGameState()
    } else {
      callInitGame()
    }
  })

  const toggleDeckView = () => {
    if (mode === 'manageDeck') {
      setMode('game')
    } else {
      setMode('manageDeck')
    }
  }

  return (
    <Component mode={mode} toggleDeckView={toggleDeckView} />
  )
}
export default Game
