import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import LatestNewsItem from "./LatestNewsItem";

export default class Latestnews extends React.Component {
  state = {
    latestnewsnew: [],
    latestnews: [
      {
        id: 1,
        image: "news-01.jpg",
        category: "news",
        heading: "watching our american star",
        time: "3 hours",
        uploaddate: "Tue 03 Sep 2019, 6:00 PM"
      },
      {
        id: 2,
        image: "news-02.jpg",
        category: "news",
        heading: "kurt zouma proud of fearless",
        time: "5 hours",
        uploaddate: "Mon 02 Sep 2019, 4:20 PM"
      },
      {
        id: 3,
        image: "news-03.jpg",
        category: "news",
        heading: "cesar azpilicueta on learning lessons",
        time: "9 hours",
        uploaddate: "Sat 31 Aug 2019, 1:10 PM"
      }
    ]
  };

  componentDidMount() {
    this.setState({
      latestnewsnew: this.state.latestnews
    });
  }

  render() {
    return (
      <div>
        <Row>
          {this.state.latestnewsnew.map(item => (
            <Col lg="3" md="6" sm="6" key={item.id}>
              <LatestNewsItem item={item} />
            </Col>
          ))}
          <Col lg="3" md="6" sm="6">
            <Link to="/Photos">
              <div className="full-block media-outer quick-view">
                <p className="badges bg-info mb-0">gallery</p>
                <img src="../images/gallery-01.jpg"></img>
                <div className="overlay">
                  <div className="content">
                    <h4 className="media-head">Willian,s magic blue moments</h4>
                    <div className="media-details-block d-flex">
                      <p className="time">2 hours</p>
                      <p className="share ml-auto">
                        <i className="fa fa-share-alt"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
