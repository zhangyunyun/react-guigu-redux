/* 
   包含n个Action Creators创建的action工厂函数模块
*/
import {INCREMENT,DECREMENT} from './action-types'

//增加的同步action,返回的是一个对象 (注：type的值要和reducers中的type一致)
export const increment = (number) => ({type:INCREMENT,data:number})
//减少的同步action,返回的是一个对象 (注：type的值要和reducers中的type一致)
export const decrement = (number) => ({type:DECREMENT,data:number})

//增加的异步action,返回的是一个函数
export const incrementAsync = (number) => {
   return dispatch => {
      //1.执行异步(定时器,ajax请求,Promise)
      setTimeout(() => {
         //2.当前异步任务执行完成时，分发一个同步action
         dispatch(increment(number))
      }, 1000);
   }
}