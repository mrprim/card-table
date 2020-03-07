import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import Component from './component'
import getAllCardCodes from '../../util/getAllCardCodes'
import getCardFromCode from '../../util/getCardFromCode'

const DeckView = () => {
  // const dispatch = useDispatch()
  // const deckId = useSelector(s => s.game.deckId)
  const cards = getAllCardCodes().map(getCardFromCode)

  const toggleActiveCard = code => async () => {
    // await addToPile(deckId, piles.TRASH, card.code)
    // const game = await getGameState(deckId)
    // dispatch(setGame(game))
  }

  return (
    <Component
      cards={cards}
      toggleActiveCard={toggleActiveCard}
    />
  )
}
export default DeckView
