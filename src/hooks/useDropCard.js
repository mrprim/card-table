import { useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import * as dragTypes from '../constants/dragTypes'
import draw from '../async/draw'
import addCardsToPile from '../async/addCardsToPile'
import useRefreshGame from './useRefreshGame'
import { useCallback } from 'react'

export default ({ pile, accept }) => {
  const refresh = useRefreshGame()
  const deckId = useSelector(s => s.game.deckId)

  const [{ isOver }, dropRef] = useDrop({
    accept,
    drop: card => handleCard(card),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  const drawCard = useCallback(async sourcePile => {
    await draw(deckId, sourcePile, pile)
    await refresh()
  }, [deckId, pile, refresh])

  const moveCard = useCallback(async code => {
    await addCardsToPile(deckId, pile, code)
    await refresh()
  }, [deckId, refresh, pile])

  const handleCard = useCallback(({ type, code, sourcePile }) => {
    switch (type) {
      case dragTypes.DRAW: return drawCard(sourcePile)
      case dragTypes.CARD: return moveCard(code)
      default: console.log(`${type} drop handling not implemented`)
    }
  }, [drawCard, moveCard])

  return { isOver, dropRef }
}
