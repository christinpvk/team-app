import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Topheader from "./layout/header/Topheader";
import Footer from "./layout/footer/Footer";
import Schedule from "./layout/schedule/Schedule";
import Home from "./layout/home/Home";
import Result from "./layout/result/Result";
import Players from "./layout/players/Players";
import Club from "./layout/club/Club";
import About from "./layout/about/About";
import News from "./layout/news/News";
import Photos from "./layout/photos/Photos";
import Video from "./layout/videos/Videos";
import Stadium from "./layout/stadium/Stadium";
import Partners from "./layout/partners/Partners";
import Contact from "./layout/contact/Contact";
import Table from "./layout/table/Table";
import ComingSoon from "./layout/comingsoon/ComingSoon";
import VideoPlay from "./layout/videos/VideoPlay";
import NewsView from "./layout/news/NewsView";
import MatchSummary from "./layout/result/MatchSummary";
import MatchCenter from "./layout/schedule/MatchCenter";
import PrivateRoute from "./Auth";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={this.history}>
          <Topheader />
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                component={Home}
                title="Home | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Result"
            render={props => (
              <Result
                {...props}
                component={Result}
                title="Results | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Schedule"
            render={props => (
              <Schedule
                {...props}
                component={Schedule}
                title="Schedules | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Players"
            render={props => (
              <Players
                {...props}
                component={Players}
                title="Players | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Club"
            render={props => (
              <Club
                {...props}
                component={Club}
                title="Club | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/About"
            render={props => (
              <About
                {...props}
                component={About}
                title="About | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/News"
            render={props => (
              <News
                {...props}
                component={News}
                title="News | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Photos"
            render={props => (
              <Photos
                {...props}
                component={Photos}
                title="gallery | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Videos"
            render={props => (
              <Video {...props} component={Video} title="Index Page" />
            )}
          />
          <Route
            path="/Stadium"
            render={props => (
              <Stadium
                {...props}
                component={Stadium}
                title="Stadium | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Partners"
            render={props => (
              <Partners
                {...props}
                component={Partners}
                title="Partners | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Contact"
            render={props => (
              <Contact
                {...props}
                component={Contact}
                title="Contact | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route
            path="/Table"
            render={props => (
              <Table
                {...props}
                component={Table}
                title="Point Table | Chelsea : My Favourite Club"
              />
            )}
          />
          <Route path="/ComingSoon" component={ComingSoon} />
          <PrivateRoute path="/VideoPlay" component={VideoPlay} />
          <PrivateRoute path="/NewsView" component={NewsView} />
          <PrivateRoute path="/MatchSummary" component={MatchSummary} />
          <PrivateRoute path="/MatchCenter" component={MatchCenter} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default Routes;
