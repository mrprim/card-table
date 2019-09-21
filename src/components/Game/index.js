import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRedirect } from 'hookrouter'
import './index.scss'
import Component from './component'
import initGame from '../../async/initGame'
import draw from '../../async/draw'
import { setGame } from '../../actions'
import getPileCount from '../../selectors/getPileCount'
import getPileCards from '../../selectors/getPileCards'
import addPileToPile from '../../async/addPileToPile'
import shufflePile from '../../async/shufflePile'
import * as piles from '../../constants/piles'
import getGameState from '../../async/getGameState'


const Game = ({ deckId }) => {
  const dispatch = useDispatch()
  const loadedId = useSelector(s => s.game.deckId)
  const drawPileCount = useSelector(getPileCount(piles.DRAW))
  const discardPileCount = useSelector(getPileCount(piles.DISCARD))
  const handCards = useSelector(getPileCards(piles.HAND))

  useEffect(() => {
    if (loadedId) return

    const callInitGame = async () => {
      const game = await initGame()

      dispatch(setGame(game))
    }

    const callGetGameState = async () => {
      const game = await getGameState(deckId)
      dispatch(setGame(game))
    }

    if(deckId) {
      callGetGameState()
    } else {
      callInitGame()
    }
  })

  const drawClick = async () => {
    await draw(deckId)
    const game = await getGameState(deckId)

    dispatch(setGame(game))
  }

  const reshuffleClick = async () => {
    await addPileToPile(deckId, piles.DISCARD, piles.DRAW)
    await shufflePile(deckId, piles.DRAW)
    const game = await getGameState(deckId)

    dispatch(setGame(game))
  }

  useRedirect('/', '/' + loadedId)

  return (
    <Component
      drawPileCount={drawPileCount}
      discardPileCount={discardPileCount}
      handCards={handCards}
      drawClick={drawClick}
      reshuffleClick={reshuffleClick}
    />
  )
}
export default Game
