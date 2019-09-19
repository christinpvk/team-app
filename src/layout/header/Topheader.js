import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class Topheader extends React.Component {
  render() {
    return (
      <div className="top-header">
        <Container>
          <Row>
            <Col md="6" sm="12">
              <ul className="menu-list">
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/News">News</Link>
                </li>
                <li>
                  <Link to="/Videos">Videos</Link>
                </li>
                <li>
                  <Link to="/Photos">Photos</Link>
                </li>
                <li>
                  <Link to="/Stadium">Stadium</Link>
                </li>
                <li>
                  <Link to="/Partners">Partners</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col md="6" sm="12">
              <ul className="social-list">
                <li>
                  <Link to="">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
