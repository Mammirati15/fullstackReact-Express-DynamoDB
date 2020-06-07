import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers'

const storeFactory = () => {
  return applyMiddleware(thunk)(createStore)(appReducer)
}

export default storeFactory