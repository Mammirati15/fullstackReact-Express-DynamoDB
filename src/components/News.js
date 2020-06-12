import React from 'react';

const News = () => (  
  <div>
    <section id="newsMan" class="d-flex flex-column justify-content-center align-items-center">
      <div class="newsMan-container" data-aos="fade-in">          
          <div class="row row-content">
              <div class="col">    
                  <h1>News</h1>
                  <h6 class="text-light">Sign up with your email to get our news!</h6>
                  <form>
                      <div class="form-group">
                        <label for="inputEmail1">Email address</label>
                        <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                   </form>   
              </div>                    
          </div>                 
      </div>
    </section>
  </div>       
)

export default News;
    
