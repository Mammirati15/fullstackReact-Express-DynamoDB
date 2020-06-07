import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


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
   
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100" width="150" height="150"
        src="https://via.placeholder.com/150"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

</div>
   
)

export default Home


// <Carousel interval={2000} pause={false}>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src="/images/jorgeZapata.jpg"
//         alt="First slide"
//       />
//       <Carousel.Caption>
//         <h3>First slide label</h3>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src="/images/andrewSeaman.jpg"
//         alt="Second slide"
//       />
  
//       <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src="/images/nickKarvounis.jpg"
//         alt="Third slide"
//       />
  
//       <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
// </div>
     