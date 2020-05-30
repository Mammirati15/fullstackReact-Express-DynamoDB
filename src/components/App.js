import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import TopNav from './TopNav'
import Routes from './Routes';
import { submitApp } from '../Api'

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
    
    this.onLinkClick = this.onLinkClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
  }
  
  onLinkClick(e, path) {
    e.preventDefault();
    this.props.history.push(path)
  }
  
  async onSubmit(e) {
    e.preventDefault();
    let response 
   
    try {
     response = await submitApp(
        {
          name: this.state.name,
          ein: this.state.ein,
          email: this.state.email,
          capitalLevel: this.state.capitalLevel,
          description: this.state.description
        }
      )
    } catch(e) {
      this.setState({msg: 'error occured while submitting application'})
      return
    }
    
    
    this.setState({appMsg: 'Successfully Submitted'})
    console.log(response)
    this.props.history.push('/')
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
      onSubmit: this.onSubmit,
      onLinkClick: this.onLinkClick,
      onTextChange: this.onTextChange
    }
      
    return (
      <Container fluid>
        <TopNav appMsg={this.state.appMsg} onLinkClick={this.onLinkClick} />
        <Routes appProps={appProps} />
      </Container>
    );
  }
}

export default withRouter(App);