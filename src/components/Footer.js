import React from 'react';


const Footer = (props) => (

    <footer className="site-footer">
        <div className="container">
            <div className="row">
              <div className="col-4 col-sm-3 col-md-2 align-self-center">
                <img src="images/logo1.png" alt="" height="100" width="100" className="img-fluid" />
              </div>
              <div className="col-6 col-sm-5 text-center">
                <h5>Social</h5>
                <a href="http://instagram.com/"
                  ><i className="fa fa-instagram"></i>Instagram</a
                >
                <a href="http://facebook.com/"
                  ><i className="fa fa-facebook"></i>Facebook</a
                >
                <a href="http://twitter.com/"
                  ><i className="fa fa-twitter"></i>Twitter</a
                >
                <a href="http://youtube.com/"
                  ><i className="fa fa-youtube"></i>YouTube</a
                >
              </div>
              <div className="col-sm-4 text-center">
                <p className="text-dark">Contact Us: </p>
                <i className="fa fa-phone fa-lg text-primary"></i> Tel: 1-222-222-2222
                <br />
                <i className="fa fa-envelope fa-lg text-primary"></i> Email:
                Fvent@gmail.co
              </div>
            </div>
        </div>
    </footer>
    
    )
    

export default Footer;