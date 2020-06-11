import React from 'react';

const ContactUs = (props) => (
      
      <div className="applicationMan-container" data-aos="fade-in">
          <div className="row row-content">
              <div className="col">          
                  <h1>Contact Us</h1>
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

)

export default ContactUs;