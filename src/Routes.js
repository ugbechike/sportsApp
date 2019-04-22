import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import LatestPost from './Component/LatestPostScreen/LatestPost';
import Fixture from './Component/fixture/fixture';
import HighLights from './Component/highlights/highlights';
import MatchDetailCommentry from './Component/matchDetail(commentry)/matchDetail(commentry)';
import NewsContent from './Component/NewsContent/NewsContent';
import TopLeagues from './Component/TopLeagues/TopLeagues';
import ExploreLeagues from './Component/ExploreLeagues/ExploreLeagues';
import Competition from './Component/Competitons/Competition';


class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/fixture" component={Fixture}/>
          <Route path="/highlights" component={HighLights}/>
          <Route path="/match-detail-commentry" component={MatchDetailCommentry}/>
          <Route path="/home" component={Home} exact />
          <Route path="/latest" component={LatestPost} exact />
          <Route path="/fixtures" component={Fixture} exact/>
          <Route path="/highlights" component={HighLights} exact/>
          <Route path='/news-content' component={NewsContent} exact />
          {/* <Route path="/competitions" component={TopLeagues} exact /> */}
          <Route path="/explore-league/:id" component={ExploreLeagues} exact />
          <Route path="/competitions" component={Competition} exact />

        </Switch>
        
      </div>
    );
  }
}

export default Routes;