import * as actionTypes from './actionTypes'
import axios from 'axios'


const detailInfo = (data)=>({
  type:actionTypes.GET_DETAIL_INFO,
  data
})

export const getDetailInfo = (id)=>{
  return (dispatch)=>{
    axios.get('/api/detail.json?id='+id).then((res)=>{
      if(res.data.success){
        dispatch(detailInfo(res.data.data))
      }
    }).catch((err)=>{

    })
  }
}