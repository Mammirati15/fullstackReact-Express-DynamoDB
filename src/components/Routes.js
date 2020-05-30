import React from 'react'
import { Switch, Route } from 'react-router-dom';


import Home from './Home';
import Application from './Application';
import Approach from './Approach';

const Routes = (props) => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/application" render={p => <Application {...p} {...props.appProps} />} />
      <Route path="/approach" component={Approach} />
    </Switch>
)

export default Routes