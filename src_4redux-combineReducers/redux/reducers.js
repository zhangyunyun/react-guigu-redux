/* 
   包含n个reducer方法，根据老的state和指定action，
   通过(添加，或删除、或修改计算)产生一个新的state纯函数
*/
import {combineReducers} from 'redux'
import {INCREMENT,DECREMENT} from './action-types'

function count(state=1,action){
   console.log('count()',state,action)
   switch(action.type){
      case INCREMENT:
         return state + action.data;
      case DECREMENT:
         return state - action.data;
      default:
         return state;   
   }
}

const user = {}
function initUser(state=user,action){
   console.log('count()',state,action)
   switch(action.type){
      default:
         return state;   
   }
}

export default combineReducers({
   count,
   initUser
})