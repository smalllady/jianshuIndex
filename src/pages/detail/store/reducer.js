import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  detailInfo:{}
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL_INFO:
      return state.set('detailInfo',fromJS(action.data))
  
    default:
      return state;
  }

}