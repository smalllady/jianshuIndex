import * as actionTypes from './actionTypes'
import axios from 'axios'


const changeLogin = (value)=>({
  type:actionTypes.LOGIN,
  value:true
})

export const logout= (value)=>({
  type:actionTypes.LOGOUT,
  value:false
})
export const login = (account,password)=>{
  return (dispatch)=>{
    axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
      console.log(res.data);
      if(res.data.success){
        dispatch(changeLogin())
      }else{
        console.log("登录失败");
      }
    }).catch((err)=>{

    })
  }
}