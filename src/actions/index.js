import * as actionTypes from '../constants/actionTypes'

export const setGame = game => ({
  type: actionTypes.SET_GAME,
  ...game
})
