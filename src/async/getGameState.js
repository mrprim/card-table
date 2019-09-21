import getPileInfo from '../async/getPileInfo'
import * as piles from '../constants/piles'

export default async deckId => getPileInfo(deckId, piles.HAND)
