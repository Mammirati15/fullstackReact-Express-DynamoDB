import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import { inputChange, onAppSubmit } from '../actions'


const TopNav = (props) => (
 <div>
  <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
    <Navbar.Brand
        href="#"
        onClick={(e) => props.onLinkClick(e, '/')}
    >
        Fenimore Ventures
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link
          className="application-btn"
          onClick={(e) => props.onLinkClick(e, '/application')}
        >Application
        </Nav.Link>
        <Nav.Link
          className="approach-btn"
          onClick={(e) => props.onLinkClick(e, '/approach')}
        >Approach
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  {props.appMsg &&
    <div class="alert alert-success" role="alert">
      {props.appMsg}
    </div>
  }
</div>
)

export const mapStateToProps = (state) => ({
  appMsg: state.appMsg
})

export default connect(mapStateToProps)(withRouter(TopNav))
