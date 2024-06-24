/* 
   react-redux容器组件

   (注：states.jsx应该放在containers文件夹中)
*/
import React,{Component} from 'react'
import {connect} from 'react-redux' 

import {increment,decrement} from '../redux/actions.js'

//引入UI组件
import State from '../components/state/state'

function mapStateToProps(state){
   return {
      count:state
   }
}

function mapDispatchToProps(dispatch){
   return {
      increment:(number) => dispatch(increment(number)),
      decrement:(number) => dispatch(decrement(number))
   }
}
//容器组件
/* 
   通过connect包装UI组件产生的组件
   connect()是高阶函数
   connect()返回的函数是一个高阶组件，接收一个UI组件，生成一个容器组件
   容器组件向UI组件传递特定的属性
*/
export default connect(
   mapStateToProps,  //指定一般的属性
   mapDispatchToProps  //指定函数属性
)(State)


