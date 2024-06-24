/* 
  入口js
*/
import React from 'react'
import ReactDom from 'react-dom'

//引入根组件
import App from './App.jsx'

import store from './redux/store'

//渲染组件标签
ReactDom.render(<App store={store}/>,document.getElementById('root'))

 //---------------第五步 绑定store.subscribe(render) 状态更新的监听，重绘组件界面
//给store绑定更新状态的监听
store.subscribe(() => { //store内部的状态数据发生改变时回调
  //重新渲染组件标签
  ReactDom.render(<App store={store}/>,document.getElementById('root'))
})