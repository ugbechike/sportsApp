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
import DynamicComp from './Component/DynamicComp/DynamicComp';
import Transfer from './Component/Transfer/Transfer';
import MoreTransferNews from './Component/MoreTransferNews/MoreTransferNews';
import MatchPreview from './Component/MatchPreview/MatchPreview';
import ExploreTeams from './Component/ExploreTeams/ExploreTeams';
import CompetitionTeams from './Component/Competition(teams)/Competition(teams)';
import DynamicCompTeams from './Component/DynamicComp(teams)/DynamicComp(teams)';


class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/fixture" component={Fixture}/>
          {/* <Route path="/highlights" component={HighLights}/> */}
          <Route path="/match-detail-commentry" component={MatchDetailCommentry}/>
          <Route path="/home" component={Home} exact />
          <Route path="/latest" component={LatestPost} exact />
          <Route path="/comp-news/:id" component={DynamicComp} exact />
          <Route path="/fixtures" component={Fixture} exact/>
          <Route path="/comp-fixture" component={Fixture} exact/>
          <Route path="/transfer" component={Transfer} exact/>
          <Route path="/highlights" component={HighLights} exact/>
          <Route path='/news-content' component={NewsContent} exact />
          {/* <Route path="/competitions" component={TopLeagues} exact /> */}
          <Route path="/explore-league/:id" component={ExploreLeagues} exact />
          <Route path="/competitions" component={Competition} exact />
          <Route path="/more" component={MoreTransferNews} exact />
          <Route path="/preview" component={MatchPreview} exact />
          <Route path="/competion-teams" component={CompetitionTeams}/>
          <Route path="/explore-teams" component={ExploreTeams}/>
          <Route path="/team-news/:id" component={DynamicCompTeams}/>

        </Switch>
        
      </div>
    );
  }
}

export default Routes;