import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Pageheader from "../header/Pageheader";
import Quicklinks from "../quicklink/Quicklinks";
import MatchCenterView from "./MatchCenterView";

class MatchCenter extends Component {
  componentDidMount() {
    document.title = "Schedules | Chelsea : My Favourite Club";
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="overlay"></div>
          <div className="header-bar">
            <Container>
              <Pageheader />
              <Row>
                <Col md="12">
                  <h2 className="page-title mb-0">match center</h2>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <div className="spacer"></div>
          <Row>
            <Col lg="9" md="8">
              <MatchCenterView />
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

export default MatchCenter;
