import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

const store = createStore(
   reducer,
   applyMiddleware(thunk)  //引用上异步中间件
)

export default store
