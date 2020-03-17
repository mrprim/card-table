import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getGameState from '../async/getGameState'
import { setGame } from '../actions'

export default () => {
  const dispatch = useDispatch()
  const deckId = useSelector(s => s.game.deckId)

  const refresh = useCallback(async () => {
    const game = await getGameState(deckId)

    return dispatch(setGame(game))
  }, [deckId, dispatch])

  return refresh
}
