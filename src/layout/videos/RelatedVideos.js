import React from "react";
import { Row, Col } from "reactstrap";
import RelatedVideoItem from "./RelatedVideoItem";

export default class Relatedvideos extends React.Component {
  state = {
    relatedvideonew: [],
    relatedvideo: [
      {
        id: 1,
        heading: "chelsea v liverpool | super cup final",
        time: "5 days",
        duration: "00:14:01",
        poster: "chelsea_vs_liverpool.jpg",
        video: "chelsea-vs-liverpool.mp4",
        uploaddate: "Tue 03 Sep 2019, 6:00 PM"
      },
      {
        id: 2,
        heading: "highlights: chelsea 2-0 west ham",
        time: "10 days",
        duration: "00:10:46",
        poster: "chelsea_vs_westham.jpg",
        video: "chelsea-vs-westham.mp4",
        uploaddate: "Mon 02 Sep 2019, 4:20 PM"
      },
      {
        id: 3,
        heading: "chelsea vs everton 0-2: highlights",
        time: "17 days",
        duration: "00:01:59",
        poster: "chelsea_vs_everton.jpg",
        video: "chelsea-vs-everton.mp4",
        uploaddate: "Sat 31 Aug 2019, 1:10 PM"
      },
      {
        id: 4,
        heading: "highlights: chelsea 2-1 barcelona | friendly",
        time: "24 days",
        duration: "00:10:00",
        poster: "chelsea_vs_barcelona.jpg",
        video: "chelsea-vs-barcelona.mp4",
        uploaddate: "Thu 29 Aug 2019, 7:48 AM"
      }
    ]
  };

  componentDidMount() {
    this.setState({
      relatedvideonew: this.state.relatedvideo
    });
  }

  render() {
    return (
      <div className="section-wrapper">
        <Row className="section-title section-head-outer">
          <Col md="12">
            <h2 className="section-title section-head">related videos</h2>
          </Col>
        </Row>
        <Row>
          {this.state.relatedvideonew.map(item => (
            <Col md="3" key={item.id}>
              <RelatedVideoItem item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
