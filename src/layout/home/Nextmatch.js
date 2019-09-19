import React from "react";
import DateCountdown from "react-date-countdown-timer";
import { Row, Col } from "reactstrap";

export default class Nextmatch extends React.Component {
  render() {
    return (
      <div className="next-match">
        <div className="next">Next Match</div>
        <div className="teams">
          <Row>
            <Col md="12">
              <div className="match">
                <h6>Arsenal</h6>
                <h6 className="versus">vs</h6>
                <h6 className="mb-0">Chelsea</h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className="content ml-4">
          <Row>
            <Col md="12">
              <div className="venue">
                <span className="match-type mr-2">friendly match -</span>
                emirates stadium 8 sep 2019, 07:00 PM
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <div className="time">
                <DateCountdown
                  dateTo="2019-09-25 08:00:00 GMT+0300"
                  callback={() => alert("Match Started")}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
