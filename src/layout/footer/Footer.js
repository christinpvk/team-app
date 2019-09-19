import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ReactTooltip from "react-tooltip";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div className="footer">
        <Container>
          {/* <Row className="footer-links">
            <Col md="3">
              <ul className="useful-links p-0 mb-0">
                <li>
                  <Link to="">home</Link>
                </li>
                <li>
                  <Link to="">about</Link>
                </li>
              </ul>
            </Col>
          </Row> */}
          <Row className="top-bar">
            <Col md="6">
              <img
                src="../images/logo-chelsea.png"
                className="footer-logo"
              ></img>
            </Col>
            <Col md="6">
              <ul className="social-nav p-0 mb-0">
                <li>
                  <Link to="" data-tip="Facebook">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="" data-tip="Twitter">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="" data-tip="Instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="" data-tip="Youtube">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="bottom-bar mt-3">
            <Col md="6">
              <p className="mb-0 copyright">
                <span>© Copyright Chelsea FC</span> Official website of Chelsea
                FC
              </p>
            </Col>
            <Col md="6">
              <ul className="footer-nav p-0 mb-0">
                <li>
                  <Link to="">legal terms</Link>
                </li>
                <li>
                  <Link to="">privacy policy</Link>
                </li>
                <li>
                  <Link to="">cookies</Link>
                </li>
                <li>
                  <Link to="">careers</Link>
                </li>
                <li>
                  <Link to="">faqs</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <ReactTooltip />
      </div>
    );
  }
}
