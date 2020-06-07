import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { inputChange, onAppSubmit } from '../actions'

const Application = (props) => (
    <div>
    
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
              <div className="col-4 col-sm-3 col-md-2 align-self-center">
                <img src="images/logo1.png" height="100" width="100" className="img-fluid" />
              </div> 
              <div className="col-8 text-center">
                    <h1 className="text-dark text-align-center">Fenimore Ventures</h1>
                    <h2 className="text-dark">We can help</h2>
              </div>
            </div>  
        </div>   
      </header>
    
     
    <section id="applicationMan" className="d-flex flex-column justify-content-center align-items-center">
      <div className="applicationMan-container" data-aos="fade-in">
          <div className="row row-content">
              <div className="col">          
                  <h1>Submit Your Application</h1>
                  {props.msg &&
                  <div className="alert alert-warning" role="alert">
                    {props.msg}
                  </div>
                  }
                  <form 
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>           
                  </div>
                </div>
              
      </div>
    </section>
  


    
    
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-3 col-md-2 align-self-center">
            <img src="images/logo1.png" height="100" width="100" className="img-fluid" />
          </div>
          <div className="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a href="http://instagram.com/"
              ><i className="fa fa-instagram"></i>Instagram</a
            >
            <a href="http://facebook.com/"
              ><i className="fa fa-facebook"></i>Facebook</a
            >
            <a href="http://twitter.com/"
              ><i className="fa fa-twitter"></i>Twitter</a
            >
            <a href="http://youtube.com/"
              ><i className="fa fa-youtube"></i>YouTube</a
            >
          </div>
          <div className="col-sm-4 text-center">
            <p className="text-dark">Contact Us: </p>
            <i className="fa fa-phone fa-lg text-primary"></i> Tel: 1-222-222-2222
            <br />
            <i className="fa fa-envelope fa-lg text-primary"></i> Email:
            Fvent@gmail.co
          </div>
        </div>
      </div>
    </footer>
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
