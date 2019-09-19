import React, { Component } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import TablePremierLeague from "./Table_PremierLeague";
import TableChampionsLeague from "./Table_ChampionsLeague";

class PointTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Container>
          <div className="spacer"></div>
          <div className="section-wrapper news-section">
            <Row className="section-title section-head-outer">
              <Col md="12">
                <h2 className="section-head section-head">point table</h2>
              </Col>
            </Row>
          </div>
          <Row>
            <Col md="12">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    premier league
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    uefa champions league
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <TablePremierLeague />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <TableChampionsLeague />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          <div className="spacer"></div>
        </Container>
      </div>
    );
  }
}

export default PointTabs;
