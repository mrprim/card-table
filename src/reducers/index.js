import { combineReducers } from 'redux'
import game from './game'
import piles from './piles'

const rootReducer = combineReducers({
  game,
  piles
})

export default rootReducer
