import { submitAppKey, submitApp } from './Api';

export const inputChange = (inputName, newValue) => {
  return (dispatch) => {
    dispatch({
      type: 'INPUT_CHANGE',
      payload: {inputName, newValue}
    })
  }
}
      
export const onAppSubmit = (history) => {
  return async (dispatch, getState) => {
    let response 
    let state = getState()
    
    try {
     response = await submitApp(
        {
          name: state.name,
          ein: state.ein,
          email: state.email,
          capitalLevel: state.capitalLevel,
          description: state.description,
        }
      )
    } catch(e) {
      console.log('error', e)
      dispatch({
        type: 'APP_SUBMIT_ERROR',
        msg: 'error occured while submitting application'
      })
      return
    }
    
    dispatch({
      type: 'APP_MSG',
      msg: `Successfully Submitted - Your ID is: ${response.data.id}`
    })
    console.log(response)
    history.push('/')
  }
}
  
export const onAppKeySubmit = (history) => {
  return async (dispatch, getState) => {
    let response 
    let state = getState()
    console.log('onAppKeySubmit')
  
    try {
      response = await submitAppKey(state.appKey);
    } catch(e) {
      console.log('error', e)
      return
    }
    console.log(response.data.Item.id)
    dispatch({
      type: 'APP_GET_SUCCESS',
      payload: response.data.Item
    })
    history.push('/appstatusdetails')
  }
}

export const onLinkClick = (e, path, history) => {
  return (dispatch) => {
    e.preventDefault();
    history.push(path)
  }
}
  
  

