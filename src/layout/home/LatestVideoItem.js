import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LatestVideoItem extends Component {
  viewVideo = key => {
    this.props.dispatch({
      type: "newValue",
      payload: key
    });
  };

  render() {
    return (
      <Link to="/VideoPlay">
        <div
          className="video-outer media-outer quick-view"
          onClick={() => this.viewVideo(this.props.item)}
        >
          <p className="badges bg-danger mb-0">highlights</p>
          <i className="play-icon fa fa-play"></i>
          <div className="overlay">
            <div className="video-details w-100">
              <h4 className="media-head">{this.props.item.heading}</h4>
              <div className="media-details-block d-flex align-items-center">
                <p className="time">{this.props.item.time}</p>
                <p className="duration ml-3">{this.props.item.duration}</p>
                <p className="share ml-auto">
                  <i className="fa fa-share-alt"></i>
                </p>
              </div>
            </div>
          </div>
          <img src={"../images/" + this.props.item.poster} className="cover" />
        </div>
      </Link>
    );
  }
}

function getDatafrom() {
  return {
    count: this.count
  };
}

export default connect(getDatafrom)(LatestVideoItem);
