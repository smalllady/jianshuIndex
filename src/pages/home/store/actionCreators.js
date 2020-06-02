import * as actionTypes from './actionTypes'
import axios from 'axios'

export const changeTopShow = (isShow)=>({
  type:actionTypes.CHANGE_TOP_SHPW,
  isShow
})
const changeHomeList = (data) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList:data.articleList,
  recommendList:data.recommendList,
  writerList:data.writerList
})
export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      if (res.data.success) {
        dispatch(changeHomeList(res.data.data))
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const addHomeList= (list,nextPage)=>({
  type:actionTypes.ADD_HOME_LIST,
  list,
  nextPage
})

export const getMoreList = (page)=>{
  return(dispatch) =>{
    axios.get('/api/homeList.json?page='+page).then((res) => {
      if (res.data.success) {
        dispatch(addHomeList(res.data.data,page+1))
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}

