import React from 'react'

const Home = () => (
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
          <div className="col col-md-4 col-xl-2">
            <a className="btn btn-lg btn-outline-info" href="application.html" role="button">Apply for Partnership Here!</a>
          </div> 
        </div>
    </div>   
 </header>
   
)

export default Home