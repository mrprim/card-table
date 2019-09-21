import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import Component from './component'
import draw from '../../async/draw'
import { setGame } from '../../actions'
import getPileCount from '../../selectors/getPileCount'
import * as piles from '../../constants/piles'
import getGameState from '../../async/getGameState'


const DiscardPile = () => {
  const dispatch = useDispatch()
  const deckId = useSelector(s => s.game.deckId)
  const count = useSelector(getPileCount(piles.DRAW))

  const drawClick = async () => {
    await draw(deckId)
    const game = await getGameState(deckId)

    dispatch(setGame(game))
  }

  return (
    <Component
      count={count}
      drawClick={drawClick}
    />
  )
}
export default DiscardPile
