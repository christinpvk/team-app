import React from "react";
import { Container, Row, Col } from "reactstrap";
import Pageheader from "../header/Pageheader";
import NewsList from "./NewsList";

export default class News extends React.Component {
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
                  <h2 className="page-title mb-0">news</h2>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <div className="spacer"></div>
          <div className="section-wrapper news-section">
            <Row className="section-title section-head-outer">
              <Col md="12">
                <h2 className="section-head section-head">Chelsea news</h2>
              </Col>
            </Row>
            <NewsList />
          </div>
        </Container>
      </div>
    );
  }
}
