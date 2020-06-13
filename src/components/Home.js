import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from'./Footer'

const Home = () => (
 
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
          <div className="col col-md-4 col-xl-2">
            <a className="btn btn-lg btn-outline-info" href="application.html" role="button">Apply for Partnership Here!</a>
          </div> 
        </div>
    </div>   
  </header>
  <Carousel interval={2000} pause={false}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/jorgeZapata.jpg"
        alt="First slide"
      />
      <Carousel.Caption className="text-align-center" style={{color:'black'}}>
        <h3>Fenimore Ventures</h3>
        <p>Depending on Your Needs, We Will Do Our Best.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/andrewSeaman.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption className="label2" style={{color:'white'}}>
        <h3>Everyone is Dedicated to Perfection</h3>
        <p>Our Team is Hand Selected to Provide Above and Beyond Type Service</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/nickKarvounis.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption className="label3" style={{color:'black'}}>
        <h3>Over 100 Years of Experience</h3>
        <p>With all of Our Experience no Problem will go Unsolved.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <Footer />
</div>
     
   
)

export default Home


