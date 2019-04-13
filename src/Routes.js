import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Fixture from './Component/fixture/fixture';
import HighLights from './Component/highlights/highlights';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/fixture" component={Fixture}/>
          <Route path="/highlights" component={HighLights}/>
        </Switch>
        
      </div>
    );
  }
}

export default Routes;