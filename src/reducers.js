import { combineReducers } from 'redux'

const initialState = {
  name: "",
  ein: "",
  email: "",
  capitalLevel: "",
  description: "",
  msg: "",
  appMsg: ""
}

const mainReducer = (state=initialState, action) => {
  let newState
  
  switch(action.type) {
    case 'INPUT_CHANGE':
      newState = Object.assign({}, state)
      newState[action.payload.inputName] = action.payload.newValue
      console.log('newState', newState)
      return newState
      
    case 'APP_MSG':
      newState = Object.assign({}, state)
      newState.appMsg = action.msg
      console.log('newState', newState)
      return newState 
  }
  return state;
}

const appReducer = combineReducers({
  mainReducer
})

export default mainReducer