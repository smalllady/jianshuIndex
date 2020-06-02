import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  login:false
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set('login',fromJS(action.value))
    case actionTypes.LOGOUT:
      return state.set('login',fromJS(action.value))
  
    default:
      return state;
  }

}