import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import Component from './component'
import getPileCards from '../../selectors/getPileCards'
import * as piles from '../../constants/piles'
import { useDrop } from 'react-dnd'
import * as dragTypes from '../../constants/dragTypes'
import draw from '../../async/draw'
import { setGame } from '../../actions'
import getGameState from '../../async/getGameState'

const HandPile = () => {
  const dispatch = useDispatch()
  const deckId = useSelector(s => s.game.deckId)
  const cards = useSelector(getPileCards(piles.HAND))
  const [{ isOver }, dropRef] = useDrop({
    accept: dragTypes.DRAW,
    drop: () => drawCard(),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  const drawCard = async () => {
    await draw(deckId)
    const game = await getGameState(deckId)

    dispatch(setGame(game))
  }

  return (
    <Component
      dropRef={dropRef}
      cards={cards}
    />
  )
}
export default HandPile
