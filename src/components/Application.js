import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Application = (props) => (
    <div>
      
    
     <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
        <a class="navbar-brand" href="index.html">FV</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#FVnavbar" aria-controls="FVnavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="#FVnavbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="approach.html">Approach</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Application</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="appStatus.html">Application Status</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="ourPortfolio.html">Our Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
              </li>
            </ul>
        </div>
    </nav>

    <section id="applicationMan" class="d-flex flex-column justify-content-center align-items-center">
      <div class="applicationMan-container" data-aos="fade-in">
          <div class="row row-content">
              <div class="col">          
                  <h1>Submit Your Application</h1>
                  {props.msg &&
                  <div class="alert alert-warning" role="alert">
                    {props.msg}
                  </div>
                  }
                  <form onSubmit={props.onSubmit} id="formInputA">
                    <div class="form-group row">
                      <label class="text-light" for="businessName">Business Name</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        placeholder="Business Name"
                        onChange={props.onTextChange}  
                      />
                    </div>
                    <div class="form-group row">
                      <label class="text-light" for="ein">EIN</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="ein" 
                        placeholder="EIN" 
                        value={props.ein}
                        onChange={props.onTextChange}
                      />
                    </div>
                    <div class="form-group row">
                      <label class="text-light" for="email">Email</label>
                      <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        placeholder="Email" 
                        value={props.email}
                        onChange={props.onTextChange}  
                      />
                    </div>
                    <div class="form-group row">
                      <label class="text-light" for="ammountDropDown">Ammount of Capital Requesting</label>
                      <select 
                        class="form-control" 
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
                    <div class="form-group row">
                      <label class="text-light" for="textArea">Explain Your Business</label>
                      <textarea 
                        type="text" 
                        class="form-control" 
                        id="description" rows="7" 
                        placeholder="Briefly Explain Your Business"
                        value={props.bodyText}
                        onChange={props.onTextChange}
                      >
                      </textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>           
                  </div>
                </div>
              
      </div>
    </section>
  


    
    
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-3 col-md-2 align-self-center">
            <img src="images/logo1.png" height="100" width="100" class="img-fluid" />
          </div>
          <div class="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a href="http://instagram.com/"
              ><i class="fa fa-instagram"></i>Instagram</a
            >
            <a href="http://facebook.com/"
              ><i class="fa fa-facebook"></i>Facebook</a
            >
            <a href="http://twitter.com/"
              ><i class="fa fa-twitter"></i>Twitter</a
            >
            <a href="http://youtube.com/"
              ><i class="fa fa-youtube"></i>YouTube</a
            >
          </div>
          <div class="col-sm-4 text-center">
            <p class="text-dark">Contact Us: </p>
            <i class="fa fa-phone fa-lg text-primary"></i> Tel: 1-222-222-2222
            <br />
            <i class="fa fa-envelope fa-lg text-primary"></i> Email:
            Fvent@gmail.co
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default Application