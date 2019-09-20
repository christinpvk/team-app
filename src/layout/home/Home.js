import React from "react";
import { Container } from "reactstrap";
import Bannerslider from "./Bannerslider";
import Upcomingmatches from "./UpcomingMatches";
import Latestnews from "./LatestNews";
import Homebanner from "./HomeBanner";
import PreviousMatches from "./PreviousMatches";
import LatestVideos from "./LatestVideos";
import MainPartners from "./MainPartners";

class Home extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    return (
      <div>
        <Bannerslider />
        <Container>
          <div className="spacer"></div>
          <div className="section-wrapper">
            <Upcomingmatches />
          </div>
        </Container>
        <div className="section-devider"></div>
        <Container>
          <div className="section-wrapper news-section">
            <Latestnews />
          </div>
        </Container>
        <div className="section-banner">
          <Homebanner />
        </div>
        <Container>
          <div className="spacer"></div>
          <div className="section-wrapper">
            <PreviousMatches />
          </div>
        </Container>
        <div className="section-devider"></div>
        <Container>
          <div className="section-wrapper news-section">
            <LatestVideos />
          </div>
        </Container>
        <div className="section-banner">
          <MainPartners />
        </div>
      </div>
    );
  }
}

export default Home;
