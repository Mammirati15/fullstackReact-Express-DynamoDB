
import React from 'react'

const Portfolio = (props) => {
    <head>
        <!-- Required meta tags always come first -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
        <!--Additional CSS-->
        <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Catamaran" />        
        <link rel="stylesheet" href="css/style.css" />
        

        <title>Portfolio</title>
    </head>

    <body>
        <!--jumbotron-->
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
     
    <!--Navbar Section-->
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
                <a class="nav-link" href="approach.html">Approach</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="application.html">Application</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="appStatus.html">Application Status</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Our Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
              </li>              
        </div>
    </nav>
   
    <section id="portfolioMan" class="d-flex flex-column justify-content-center align-items-center">
      <div >          
            
        <h1>Our Partners</h1>
        
            
      </div>
    </section>
 
    <section id="images">
    <div class="container">
      <div class="row ">
        <div class="col col-md-4 text-center">
          <img src="/images/fiveguys.jpg" onmouseover="fiveguysb(this)" onmouseout="fiveguys(this)" id="fiveguys">
        <div class="col col-md-4 text-center" >
          <img src="/images/portillos.jpg"  onmouseover="portillosb(this)" onmouseout="portillos(this)" class="image-responsive" id="portillos">
        </div>
        <div class="col col-md-4 text-center">
          <img src="/images/chilli's.jpg"  onmouseover="chillisb(this)" onmouseout="chillis(this)" class="image-responsive" id="chillis">
        </div>
      </div>
        <div class="row">
          <div class="col col-md-4 text-center">
            <img src="/images/appleb.png" onmouseover="appleb(this)" onmouseout="apple(this)"  id="apple">
          <div class="col col-md-4 text-center">
            <img src="/images/tgif.png" onmouseover="tgifb(this)" onmouseout="tgif(this)" id="tgif">
          </div>
          <div class="col col-md-4 text-center">
            <img src="/images/chipotle.png" onmouseover="chipotleb(this)" onmouseout="chipotle(this)" id="chipotle">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col col-md-4 text-center">
            <img src="/images/bw3.jpg" onmouseover="bw3b(this)" onmouseout="bw3(this)" id="bw3">
          <div class="col col-md-4 text-center">
            <img src="/images/rosebud.jpg" onmouseover="rosebudb(this)" onmouseout="rosebud(this)" id="rosebud">
          </div>
          <div class="col col-md-4 text-center">
            <img src="/images/giopza.jpg" onmouseover="giopzab(this)" onmouseout="giopza(this)" id="giopza">
          </div>
        </div>
        </div>
        
        </div>
      </div>
    </div>
  </section>



    <!-- Footer -->
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

      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
      <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
      <script src="js/scripts.js"></script>
  

    </body>
    
}    
    