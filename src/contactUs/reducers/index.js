import {combineReducers} from 'redux'
import { reducer as form } from 'redux-form'

export function saved (state = false, action) {
  switch (action.type) {
    case 'SUBMIT_SUCCEEDED':
      return {...state, saved: true}
    default:
      return state
  }
}

const reducers = {
  form,
  saved
}
const reducer = combineReducers(reducers)
export default reducer
