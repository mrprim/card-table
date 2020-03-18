import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
import draw from '../../async/draw'
import getPileCount from '../../selectors/getPileCount'
import * as piles from '../../constants/piles'
import { useDrag } from 'react-dnd'
import * as dragTypes from '../../constants/dragTypes'
import Pile from '../Pile'
import useRefreshGame from '../../hooks/useRefreshGame'

const DrawPile = ({ count, dragRef, drawClick }) =>
  <Pile className='draw' title={`Draw [${count}]`}>
    {
      count
        ? <img className='card' ref={dragRef} onClick={drawClick} src='./cardBack.png' alt='draw pile' />
        : <img className='card' src='./noCard.png' alt='discard pile' />
    }
  </Pile>

const DiscardPile = () => {
  const refresh = useRefreshGame()
  const deckId = useSelector(s => s.game.deckId)
  const count = useSelector(getPileCount(piles.DRAW))

  const [, dragRef] = useDrag({
    item: { type: dragTypes.DRAW },
    collect: monitor => ({
      opacity: !!monitor.isDragging()
    })
  })

  const drawClick = useCallback(async () => {
    await draw(deckId)
    refresh()
  }, [refresh, deckId])

  return <DrawPile count={count} drawClick={drawClick} dragRef={dragRef} />
}
export default DiscardPile
