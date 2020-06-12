import React from 'react'
import { Switch, Route } from 'react-router-dom';



import Home from './Home';
import Application from './Application';
import Approach from './Approach';
import AppStatusKey from './AppStatusKey';
import AppStatusDetails from './AppStatusDetails';
import Portfolio from './OurPortfolio';
import News from './News';
import ContactUs from './ContactUs';
import NotFound from './NotFound';

const Routes = (props) => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/application" render={p => <Application {...p} {...props.appProps} />} />
      <Route path="/approach" component={Approach} />
      <Route path="/appstatuskey" component={AppStatusKey} />
      <Route path="/appstatusdetails" component={AppStatusDetails} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/news" component={News} /> 
      <Route path="/contactus" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
    
)



export default Routes