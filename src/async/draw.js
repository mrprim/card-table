import drawFromPile from './drawFromPile'
import addCardsToPile from './addCardsToPile'
import * as piles from '../constants/piles'

export default async (deckId, fromPileId = piles.DRAW, toPileId = piles.HAND, count = 1) => {
  const drawn = await drawFromPile(deckId, fromPileId, count)

  return addCardsToPile(deckId, toPileId, ...drawn.cards.map(c => c.code))
}
