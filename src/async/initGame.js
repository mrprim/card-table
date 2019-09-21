import getNewDeck from './getNewDeck'
import drawFromDeck from './drawFromDeck'
import addCardsToPile from './addCardsToPile'
import shufflePile from './shufflePile'
import * as piles from '../constants/piles'
import getGameState from './getGameState'

export default async () => {
  const deck = await getNewDeck()
  const drawn = await drawFromDeck(deck.deck_id, deck.remaining)
  const cardCodes = drawn.cards.map(c => c.code)

  addCardsToPile(deck.deck_id, piles.DRAW, ...cardCodes)
  shufflePile(deck.deck_id, piles.DRAW)
  return getGameState(deck.deck_id)
}
