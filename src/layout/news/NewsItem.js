import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NewsItem extends Component {
  viewNews = key => {
    this.props.dispatch({
      type: "newValue",
      payload: key
    });
  };

  render() {
    return (
      <div>
        <Link to="/NewsView">
          <div
            className="outer-block media-outer quick-link"
            onClick={() => this.viewNews(this.props.item)}
          >
            <div className="upper-block">
              <img src={"../images/" + this.props.item.image}></img>
              <p className="badges bg-success mb-0">
                {this.props.item.category}
              </p>
            </div>
            <div className="lower-block">
              <h4 className="media-head">{this.props.item.heading}</h4>
              <div className="media-details-block d-flex">
                <p className="time text-dark">{this.props.item.time}</p>
                <p className="share ml-auto text-dark">
                  <i className="fa fa-share-alt"></i>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

function getDatafrom(state) {
  return {
    dataCollection: state.dataCollection
  };
}

export default connect(getDatafrom)(NewsItem);
