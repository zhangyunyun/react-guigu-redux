/* 
  根组件
*/
import React, {Component} from 'react'
import {Select,Button} from 'antd'

import PropTypes from 'prop-types'

//---------------第三步 引入redux中action对象名称
import {increment,decrement} from './redux/actions.js'

import './app.less'

/* 
   redux状态管理
*/

const Option = Select.Option

export default class App extends Component{
   //---------------第一步 接收redux中的store
   static propTypes = {
      store:PropTypes.object.isRequired
   }

   state = {
      //count:0,
      selList:['1','2','3','4','5','6','7','8','9'],
      selValue:'1'
   }

   getValue = (value) => {
      //获取被选中的值
      this.setState({
         selValue:value
      })
   }

   /* 
      增加
   */
   increments = () => {
      //1.获取当前选中的值
      const {selValue} = this.state 
      const selVal = selValue * 1
      //this.setState(state => ({count:state.count + selVal})) 

      //---------------第四步 更新state，分发action(store.dispatch(action))
      //更新store中的状态数据
      //this.props.store.dispatch({type:'INCREMENT',data:selVal})

      //更新store中的状态数据,引入store中actions.js后
      this.props.store.dispatch(increment(selVal))
   }

   /* 
      减少
   */
   decrements = () => {
      const {selValue} = this.state
      const selVal = selValue * 1 
      // this.setState(state => ({count:state.count - selVal})) 
      
      //---------------第四步 更新state，分发action(store.dispatch(action))
      //更新store中的状态数据
      //this.props.store.dispatch({type:'DECREMENT',data:selVal})

      //更新store中的状态数据,引入store中actions.js后
      this.props.store.dispatch(decrement(selVal))
   }

   /* 
      如果是奇数就增加
   */
   incrementIfOdd = () => {
      const count = this.props.store.getState() 
      const {selValue} = this.state
      const selVal = selValue * 1 
      if(count % 2 === 1){
        this.props.store.dispatch(increment(selVal))
      } 
   }

   /* 
      延迟增加
   */
   incrementAsync = () => {
      const {selValue} = this.state 
      const selVal = selValue * 1
      setTimeout(() => {
        this.props.store.dispatch(increment(selVal))
      }, 1000); 
   }

   render(){
      //---------------第二步 读取store中的初始state值
      const count = this.props.store.getState()  
      const {selList,selValue} = this.state
      return(
         <div className="senior">
            <div className="num">
               <span>click me <em>{count}</em> times</span>
               <Select className="selList" defaultValue={selValue} onChange={this.getValue}>
                  {
                     selList.map((s,index) => <Option value={s} key={index}>{s}</Option>)
                  }
               </Select>
            </div>
            <div className="btn">
               <Button type="primary" onClick={this.increments}>增加</Button>
               <Button type="primary" onClick={this.decrements}>减少</Button>
               <Button type="primary" onClick={this.incrementIfOdd}>如果是奇数就增加</Button>
               <Button type="primary" onClick={this.incrementAsync}>延迟增加</Button>
            </div>
         </div>
      )
   }
}


