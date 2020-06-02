import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList:[],
  writerList:[],
  articalPage:1,
  showScroll:false
})
const changeHomeData = (state,action)=>{
  return state.merge({
    topicList:fromJS(action.topicList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList),
    writerList:fromJS(action.writerList),
  })
  
}

const addArticalList = (state,action)=>{
  return state.merge({
    articleList:state.get('articleList').concat(fromJS(action.list)),
    articalPage:action.nextPage
  })
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state,action)
    case actionTypes.ADD_HOME_LIST:
      return addArticalList(state,action)
    case actionTypes.CHANGE_TOP_SHPW:
      return state.set("showScroll",action.isShow)
    default:
      return state;
  }
}