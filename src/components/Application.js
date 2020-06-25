import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import { connect } from 'react-redux';
import { inputChange, onAppSubmit } from '../actions';
import './App.css';

const Application = (props) => (
    <div>
     
    <section id="applicationMan" className="d-flex flex-column justify-content-center align-items-center">
      <div className="container" data-aos="fade-in">
          <div className="row row-content">
              <div className="col">          
                  <h1>Submit Your Application</h1>
                  {props.msg &&
                  <div className="alert alert-warning" role="alert">
                    {props.msg}
                  </div>
                  }
                  <Form 
                    onSubmit={e => {
                      e.preventDefault()
                      props.onSubmit(props.history)
                    }} 
                    id="formInputA"
                  >
                    <div className="form-group row">
                      <label className="text-light" for="businessName">Business Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Business Name"
                        onChange={props.onTextChange}  
                      />
                    </div>
                    <div className="form-group row">
                      <label className="text-light" for="ein">EIN</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="ein" 
                        placeholder="EIN" 
                        value={props.ein}
                        onChange={props.onTextChange}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="text-light" for="email">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Email" 
                        value={props.email}
                        onChange={props.onTextChange}  
                      />
                    </div>
                    <div className="form-group row">
                      <label className="text-light" for="ammountDropDown">Ammount of Capital Requesting</label>
                      <select 
                        className="form-control" 
                        id="capitalLevel"
                        value={props.select}
                        onChange={props.onTextChange}
                      >
                        <option value="1">$10,000-$25,000</option>
                        <option value="2">$25,000-$50,000</option>
                        <option value="3">$50,000-$75,000</option>
                        <option value="4">$75,000-$150,000</option>
                        <option value="5">$150,000+</option>
                      </select>
                    </div>                          
                    <div className="form-group row">
                      <label className="text-light" for="textArea">Explain Your Business</label>
                      <textarea 
                        type="text" 
                        className="form-control" 
                        id="description" rows="7" 
                        placeholder="Briefly Explain Your Business"
                        value={props.bodyText}
                        onChange={props.onTextChange}
                      >
                      </textarea>
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                  </Form>           
                  </div>
                </div>
              
      </div>
    </section>
    <Footer />
  </div>

)


export const mapStateToProps = (state) => ({
  name: state.name,
  ein: state.ein,
  email: state.email,
  capitalLevel: state.capitalLevel,
  description: state.description
})

export const mapDispatchToProps = (dispatch) => ({
  onTextChange: (e) => {
    e.preventDefault()
    dispatch( inputChange(e.target.id, e.target.value) )
  },
  onSubmit: (history) => {
    dispatch( onAppSubmit(history) )
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Application)
