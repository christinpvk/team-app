import React from "react";
import { Row, Col } from "reactstrap";
import LatestVideoItem from "./LatestVideoItem";

export default class LatestVideos extends React.Component {
  state = {
    latestvideonew: [],
    latestvideo: [
      {
        id: 1,
        heading: "CHELSEA PL2 V LIVERPOOL PL2 (H)",
        time: "2 hours",
        duration: "00:10:15",
        poster: "chelsea-vs-leicester.jpg",
        video: "highlights-chelse_vs_leicester-city.mp4",
        uploaddate: "Tue 03 Sep 2019, 6:00 PM"
      },
      {
        id: 2,
        heading: "HIGHLIGHTS: MAN UNITED V CHELSEA(A)",
        time: "3 days",
        duration: "00:10:30",
        poster: "m-united_vs_chelsea.jpg",
        video: "highlights-m_united_vs-chelsea.mp4",
        uploaddate: "Mon 02 Sep 2019, 4:20 PM"
      }
    ]
  };

  componentDidMount() {
    this.setState({
      latestvideonew: this.state.latestvideo
    });
  }

  render() {
    return (
      <div>
        <Row>
          {this.state.latestvideonew.map(item => (
            <Col md="6" key={item.id}>
              <LatestVideoItem item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
