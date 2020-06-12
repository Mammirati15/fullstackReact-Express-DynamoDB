import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { inputChange, onAppKeySubmit } from '../actions'


const AppStatusKey = (props) => {

  return (
    <Fragment>
    <section id="appStatusMan" className="d-flex flex-column justify-content-center align-items-center">
        <div className="appStatusMan-container" data-aos="fade-in">          
            <div className="row row-content">
                <div className="col">      
                    <form 
                      onSubmit={e => {
                        e.preventDefault()
                        props.onSubmit(props.history)
                      }} 
                      id="formInputA"
                    >
                        <div className="form-group row">
                      <label className="text-light"  htmlFor="appKey"><h2>Enter Your Application Key</h2></label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="appKey" 
                        placeholder="Enter Your Key"
                        onChange={props.onTextChange}  
                      />
                    </div>                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </Fragment>

  )
}

export const mapStateToProps = (state) => ({
  appKey: state.appKey,
})

export const mapDispatchToProps = (dispatch) => ({
  onTextChange: (e) => {
    e.preventDefault()
    dispatch( inputChange(e.target.id, e.target.value) )
  },
  onSubmit: (history) => {
    dispatch( onAppKeySubmit(history) )
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppStatusKey)

