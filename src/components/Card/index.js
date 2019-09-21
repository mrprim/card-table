import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import Component from './component'
import addCardsToPile from '../../async/addCardsToPile'
import { setGame } from '../../actions'
import * as piles from '../../constants/piles'
import getGameState from '../../async/getGameState'


const Card = props => {
  const dispatch = useDispatch()
  const deckId = useSelector(s => s.game.deckId)

  const clickDiscard = async () => {
    await addCardsToPile(deckId, piles.DISCARD, props.code)


    const game = await getGameState(deckId)

    dispatch(setGame(game))
  }

  return (
    <Component {...props} clickDiscard={clickDiscard} />
  )
}
export default Card
