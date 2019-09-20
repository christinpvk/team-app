import React from "react";
import { Container, Row, Col } from "reactstrap";
import Pageheader from "../header/Pageheader";
import ComingSoon from "../comingsoon/ComingSoon";

export default class Club extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
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
                  <h2 className="page-title mb-0">club</h2>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <ComingSoon />
      </div>
    );
  }
}
