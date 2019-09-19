import React from "react";
import { Row, Col } from "reactstrap";
import NewsItem from "./NewsItem";

export default class NewsList extends React.Component {
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
      },
      {
        id: 4,
        image: "news-04.jpg",
        category: "news",
        heading: "mason mount praises chelsea academy",
        time: "12 hours",
        uploaddate: "Thu 29 Aug 2019, 7:48 AM"
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
            <Col md="3" key={item.id}>
              <NewsItem item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
