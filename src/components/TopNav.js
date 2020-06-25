import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import { onLinkClick } from '../actions'


const TopNav = (props) => (
 <div>
  <Navbar collapseOnSelect bg="primary" variant="light" expand="lg">
    <Navbar.Brand
        href="#"
        onClick={(e) => props.onLinkClick(e, '/')}
    >
        Home
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link
          className="application-btn"
          onClick={(e) => props.onLinkClick(e, '/application', props.history)}
        >Application
        </Nav.Link>
        <Nav.Link
          className="approach-btn"
          onClick={(e) => props.onLinkClick(e, '/approach', props.history)}
        >Approach
        </Nav.Link>
        <Nav.Link
          className="appstatus-btn"
          onClick={(e) => props.onLinkClick(e, '/appstatuskey', props.history)}
        >Application Status
        </Nav.Link>
        <Nav.Link
          className="portfolio-btn"
          onClick={(e) => props.onLinkClick(e, '/portfolio', props.history)}
        >Our Portfolio
        </Nav.Link>
        <Nav.Link
          className="news-btn"
          onClick={(e) => props.onLinkClick(e, '/news', props.history)}
        >Get News
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

export const mapDispatchToProps = (dispatch) => {
  return {
    onLinkClick(e, path, history) {
      dispatch( onLinkClick(e, path, history) )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopNav))
