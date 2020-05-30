import React from 'react'

const Approach = () => (
 <body>
  
       
        <header class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="row">
                  <div class="col-4 col-sm-3 col-md-2 align-self-center">
                    <img src="images/logo1.png" height="100" width="100" class="img-fluid" />
                  </div> 
                  <div class="col">
                        <h1 class="text-dark text-align-center">Fenimore Ventures</h1>
                        <h2 class="text-dark">We can help</h2>
                    </div>
                </div>
            </div>   
         </header>
        
    
     <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
        <a class="navbar-brand" href="index.html">FV</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#FVnavbar" aria-controls="FVnavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="#FVnavbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Approach</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="application.html">Application</a>
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

        <section id="approachMan" class="d-flex justify-content-center align-items-center">
            <div class="container">          
               <div class="row row-content">
                   <div class="col col-xs-6">   
                        <h1>What We Support</h1>
                        <p>We support businesses that have the intention of increasing the quality of their community as a whole.  
                            Although we are of course interested in the business side of these endeavours, we hope that the capital we
                        are investing has more than just a positive influence on our wallets but the community as a whole.</p>
                    </div>
                    <div class="col col-xs-6">   
                        <h1>Applying What We Know</h1>
                        <p>The unique aspect of our particular focal point in this market allows us to capitalize on the specializations
                            of our talent.  We have many different specialities that focus on our particular niche, they include:                            
                            <ul>
                                <li>THis and that</li>
                                <li>That and this</li>
                                <li>That and this</li>
                                <li>That and this</li>
                                <li>That and this</li>
                            </ul>
                        </p>
                        
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
  
</body>
)

export default Approach