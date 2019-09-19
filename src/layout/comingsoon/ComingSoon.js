import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class ComingSoon extends Component {
  render() {
    return (
      <div className="coming-soon">
        <Container>
          <Row>
            <Col md="12">
              <h2>
                coming soon!<span className="ml-2">stay tuned!</span>
              </h2>
              <p>we are actively working on it, so check back soon!</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ComingSoon;
