import getPileInfo from '../async/getPileInfo'
import * as piles from '../constants/piles'

export default async deckId => {
  const game = await getPileInfo(deckId, piles.HAND)
  const trashGame = await getPileInfo(deckId, piles.TRASH)

  game.piles[piles.TRASH] = trashGame.piles[piles.TRASH]

  return game
}
