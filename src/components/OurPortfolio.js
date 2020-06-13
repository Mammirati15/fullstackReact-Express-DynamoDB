import React from 'react';
import Footer from './Footer'

const Portfolio = (props) => (
    
  <div>      
    <section id="portfolioMan" class="d-flex flex-column justify-content-center align-items-center">
      <div >          
            
        <h1>Our Partners</h1>
        
            
      </div>
    </section>
   
    <section id="images">
      <div class="container">
        <div class="row ">
          <div class="col col-md-4 text-center">
            <img src="/images/fiveguys.jpg" onmouseover="fiveguysb(this)" onmouseout="fiveguys(this)" id="fiveguys" />
            <div class="col col-md-4 text-center" >
              <img src="/images/portillos.jpg"  onmouseover="portillosb(this)" onmouseout="portillos(this)" class="image-responsive" id="portillos" />
            </div>
            <div class="col col-md-4 text-center">
              <img src="/images/chilli's.jpg"  onmouseover="chillisb(this)" onmouseout="chillis(this)" class="image-responsive" id="chillis" />
            </div>
          </div>
          <div class="row">
            <div class="col col-md-4 text-center">
              <img src="/images/appleb.png" onmouseover="appleb(this)" onmouseout="apple(this)"  id="apple" />
            <div class="col col-md-4 text-center">
              <img src="/images/tgif.png" onmouseover="tgifb(this)" onmouseout="tgif(this)" id="tgif" />
            </div>
            <div class="col col-md-4 text-center">
              <img src="/images/chipotle.png" onmouseover="chipotleb(this)" onmouseout="chipotle(this)" id="chipotle" />
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col col-md-4 text-center">
              <img src="/images/bw3.jpg" onmouseover="bw3b(this)" onmouseout="bw3(this)" id="bw3" />
              <div class="col col-md-4 text-center">
                <img src="/images/rosebud.jpg" onmouseover="rosebudb(this)" onmouseout="rosebud(this)" id="rosebud" />
              </div>
              <div class="col col-md-4 text-center">
                <img src="/images/giopza.jpg" onmouseover="giopzab(this)" onmouseout="giopza(this)" id="giopza" />
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
    <Footer />
</div>
    
)    


export default Portfolio;