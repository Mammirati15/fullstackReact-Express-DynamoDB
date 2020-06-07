import { submitApp } from './Api';

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
      msg: 'Successfully Submitted'
    })
    console.log(response)
    history.push('/')
  }
}
  
  
  
  

