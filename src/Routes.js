import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Fixture from './Component/fixture/fixture';
import HighLights from './Component/highlights/highlights';
import MatchDetailCommentry from './Component/matchDetail(commentry)/matchDetail(commentry)';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/fixture" component={Fixture}/>
          <Route path="/highlights" component={HighLights}/>
          <Route path="/match-detail-commentry" component={MatchDetailCommentry}/>
        </Switch>
        
      </div>
    );
  }
}

export default Routes;