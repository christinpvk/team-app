import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class Homebanner extends React.Component {
  render() {
    return (
      <div>
        <img src="../images/giroud3.jpg"></img>
        <div className="overlay">
          <div className="content">
            <Container>
              <Row>
                <Col md="12">
                  <h2 className="content-header">
                    my football life: oliver giroud
                  </h2>
                  <div className="details">
                    <p className="time">2 Days</p>
                    <p className="badges bg-warning ml-3">article</p>
                    <p className="share ml-auto">
                      <i className="fa fa-share-alt"></i>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
