import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import TopNav from './TopNav'
import Routes from './Routes';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: "",
      ein: "",
      email: "",
      capitalLevel: "",
      description: "",
      msg: "",
      appMsg: ""
    }
    
    this.onTextChange = this.onTextChange.bind(this)
  }
  
  onTextChange(e) {
    const value = e.target.value
    const id = e.target.id
    this.setState({[id]: value}, () => {
      console.log('state', this.state)  
    })
  }
  
  render() {
    const appProps = {
      email: this.state.email,
      msg: this.state.msg,
      onLinkClick: this.onLinkClick,
      onTextChange: this.onTextChange
    }
      
    return (
      <Container fluid>
        <TopNav appMsg={this.state.appMsg} onLinkClick={this.onLinkClick} />
        <Routes appProps={appProps} />
        {/*<Footer />*/}
      </Container>
    );
  }
}

export default withRouter(App);