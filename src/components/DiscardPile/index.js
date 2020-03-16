import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import Component from './component'
import { setGame } from '../../actions'
import getPileCount from '../../selectors/getPileCount'
import * as piles from '../../constants/piles'
import getGameState from '../../async/getGameState'
import addPileToPile from '../../async/addPileToPile'
import shufflePile from '../../async/shufflePile'
import { useDrop } from 'react-dnd'
import * as dragTypes from '../../constants/dragTypes'
import addCardsToPile from '../../async/addCardsToPile'

const DiscardPile = () => {
  const dispatch = useDispatch()
  const deckId = useSelector(s => s.game.deckId)
  const count = useSelector(getPileCount(piles.DISCARD))
  const [{ isOver }, dropRef] = useDrop({
    accept: dragTypes.CARD,
    drop: ({ code }) => discardCard(code),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  const discardCard = async code => {
    await addCardsToPile(deckId, piles.DISCARD, code)
    const game = await getGameState(deckId)
    dispatch(setGame(game))
  }

  const reshuffleClick = async () => {
    await addPileToPile(deckId, piles.DISCARD, piles.DRAW)
    await shufflePile(deckId, piles.DRAW)
    const game = await getGameState(deckId)

    dispatch(setGame(game))
  }

  return (
    <Component
      dropRef={dropRef}
      count={count}
      reshuffleClick={reshuffleClick}
    />
  )
}
export default DiscardPile
