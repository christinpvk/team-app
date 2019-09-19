import React from "react";
import { Row, Col } from "reactstrap";
import QuickLinkItem from "./QuickLinkItem";

export default class Quicklinks extends React.Component {
  state = {
    quicklinknew: [],
    quicklink: [
      {
        id: 1,
        category: "gallery",
        heading: "Willian,s magic blue moments",
        time: "2 hours",
        banner: "gallery-01.jpg"
      },
      {
        id: 2,
        category: "article",
        heading: "Kepa Arrizabalaga praised by spain",
        time: "4 hours",
        banner: "article-01.jpg"
      }
    ]
  };

  componentDidMount() {
    this.setState({
      quicklinknew: this.state.quicklink
    });
  }

  render() {
    return (
      <div className="news-section">
        <Row>
          {this.state.quicklinknew.map(item => (
            <Col md="12" key={item.id}>
              <QuickLinkItem item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
