<!DOCTYPE html>
<html lang="en">

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
        
        
        <title>appStatus</title>
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
                  <!--<div class="col col-md-4 col-xl-2">
                    <button onClick="doRedirect()" class="btn btn-lg btn-info"  id="applyButton" >Apply for Partnership</button>
                  </div> -->
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
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="approach.html">Approach</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="application.html">Application</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Application Status</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="ourPortfolio.html">Our Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
              </li>              
        </div>
    </nav>

        <section id="appStatusMan" class="d-flex flex-column justify-content-center align-items-center">
            <div class="appStatusMan-container" data-aos="fade-in">          
                <div class="row row-content">
                    <div class="col">      
                        <form>
                            <div class="form-group">
                              <h1>Check On Your Application</h1>
                                <label for="business name">Business Name</label>
                                <input type="text" class="form-control" id="businessName" aria-describedby="emailHelp" placeholder="Business Name">                            
                            </div>
                            <div class="form-group">
                                <label for="ein">EIN</label>
                                <input type="password" class="form-control" id="ein" placeholder="EIN">
                            </div>                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
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

<!-- Footer -->

    
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>



</body>

</html>