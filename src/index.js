/* 
  入口js
*/
import React from 'react'
import ReactDom from 'react-dom'

import {Provider} from 'react-redux'

//引入根组件
import App from './App.jsx'

import store from './redux/store'

//渲染组件标签
ReactDom.render(
  //Provider让所有组件都得到state数据
  <Provider store={store}>
    <App />
  </Provider>
,document.getElementById('root'))
