import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
import getPileCount from '../../selectors/getPileCount'
import * as piles from '../../constants/piles'
import addPileToPile from '../../async/addPileToPile'
import shufflePile from '../../async/shufflePile'
import useDropCard from '../../hooks/useDropCard'
import useRefreshGame from '../../hooks/useRefreshGame'
import * as dragTypes from '../../constants/dragTypes'
import Pile from '../Pile'

const DiscardPile = ({ count, reshuffleClick, dropRef, isOver }) =>
  <Pile className='discard' dropRef={dropRef} title={`Discard [${count}]`} isOver={isOver}>
    {
      count
        ? <img className='card' onClick={reshuffleClick} src='./cardBack.png' alt='discard pile' />
        : <img className='card' src='./noCard.png' alt='discard pile' />
    }
  </Pile>

export default () => {
  const pile = piles.DISCARD
  const refresh = useRefreshGame()
  const deckId = useSelector(s => s.game.deckId)
  const count = useSelector(getPileCount(pile))
  const { dropRef, isOver } = useDropCard({ accept: dragTypes.CARD, pile })

  const reshuffleClick = useCallback(async () => {
    await addPileToPile(deckId, piles.DISCARD, piles.DRAW)
    await shufflePile(deckId, piles.DRAW)
    await refresh()
  }, [refresh, deckId])

  return <DiscardPile dropRef={dropRef} count={count} isOver={isOver} reshuffleClick={reshuffleClick} />
}
