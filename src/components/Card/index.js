import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import addCardsToPile from '../../async/addCardsToPile'
import { setGame } from '../../actions'
import * as piles from '../../constants/piles'
import getGameState from '../../async/getGameState'
import * as dragTypes from '../../constants/dragTypes'
import { useDrag } from 'react-dnd'

const Card = ({ dragRef, image, suit, value, clickDiscard, isDragging }) =>
  <div className='card' ref={dragRef} style={{ display: isDragging ? 'none' : 'inline-block' }}>
    <img src={image} alt={`${value} of ${suit}`} />

    <div className='discardButton' onClick={clickDiscard}>
      ✖
    </div>
  </div>

export default props => {
  const dispatch = useDispatch()
  const deckId = useSelector(s => s.game.deckId)

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: dragTypes.CARD, code: props.code },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const clickDiscard = async () => {
    await addCardsToPile(deckId, piles.DISCARD, props.code)

    const game = await getGameState(deckId)

    dispatch(setGame(game))
  }

  return (
    <Card {...props} dragRef={dragRef} isDragging={isDragging} clickDiscard={clickDiscard} />
  )
}
