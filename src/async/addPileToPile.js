import getPileInfo from './getPileInfo'
import addCardsToPile from './addCardsToPile'

export default async (deckId, pileIdFrom, pileIdTo) => {
  const game = await getPileInfo(deckId, pileIdFrom)
  const cards = game.piles[pileIdFrom].cards.map(c => c.code)

  return addCardsToPile(deckId, pileIdTo, cards)
}
