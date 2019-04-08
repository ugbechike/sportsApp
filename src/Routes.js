import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        
      </div>
    );
  }
}

export default Routes;