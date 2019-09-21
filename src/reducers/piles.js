import * as actionTypes from '../constants/actionTypes'

const initialState = {
}

export default (store = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GAME:
      return setGame(store, action)
    default:
      return store
  }
}

const setGame = (store, action) => ({
  ...store,
  ...action.piles

})
