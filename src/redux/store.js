import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'

const store = createStore(
   reducer, 
   //applyMiddleware(thunk) //使用异步中间件
   composeWithDevTools(applyMiddleware(thunk))
)

export default store
