import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Pageheader from "../header/Pageheader";
import Quicklinks from "../quicklink/Quicklinks";
import { connect } from "react-redux";

class NewsView extends Component {
  componentDidMount() {
    document.title = "News | Chelsea : My Favourite Club";
  }
  render() {
    console.log(this.props.news);
    return (
      <div>
        <div className="page-header">
          <div className="overlay"></div>
          <div className="header-bar">
            <Container>
              <Pageheader />
              <Row>
                <Col md="12">
                  <h2 className="page-title mb-0">news</h2>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <div className="spacer"></div>
          <Row>
            <Col lg="9" md="8">
              <div className="news-view">
                <p class="badges bg-success mb-0">{this.props.news.category}</p>
                <h2 className="title">{this.props.news.heading}</h2>
                <p class="date text-gray">
                  {this.props.news.uploaddate}
                  <span class="ml-2 mr-2">|</span>
                  <i class="share fa fa-share-alt"></i>
                </p>
                <img
                  src={"../images/" + this.props.news.image}
                  className="w-100"
                ></img>
                <h4 className="sub-title mt-4">
                  Mason Mount has reflected on his first Chelsea appearance as
                  well as his maiden goal for the club after being presented
                  with a commemorative Premier League Debut Ball by Frank
                  Lampard.
                </h4>
                <p className="description mt-4">
                  The initiative recognises homegrown players and the journey
                  they have undertaken to reach the milestone of their first
                  team debut, which 20-year-old Mount did against Manchester
                  United on the opening weekend of the season. Mount joined
                  Chelsea as an Under-9, and after successful loan spells at
                  Vitesse Arnhem and Derby, has emerged as a regular under Frank
                  Lampard this season. He has started our next three league
                  games as well, scoring twice including on his home debut
                  against Leicester.
                </p>
              </div>
            </Col>
            <Col lg="3" md="4">
              <Quicklinks />
            </Col>
          </Row>
          <div className="spacer"></div>
        </Container>
      </div>
    );
  }
}
function getnewsData(state) {
  return {
    news: state.dataCollection
  };
}

export default connect(getnewsData)(NewsView);
