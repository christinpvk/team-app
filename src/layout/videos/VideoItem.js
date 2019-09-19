import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class VideoItem extends Component {
  viewVideo = key => {
    this.props.dispatch({
      type: "newValue",
      payload: key
    });
  };

  render() {
    return (
      <div>
        <Link to="/VideoPlay">
          <div
            className="video-outer-all"
            onClick={() => this.viewVideo(this.props.item)}
          >
            <div className="cover-block">
              <i className="play-icon fa fa-play"></i>
              <img
                src={"../images/" + this.props.item.poster}
                className="cover"
              />
            </div>
            <div className="content-block">
              <p className="badges bg-danger mb-0">highlights</p>
              <h4 className="mt-2">{this.props.item.heading}</h4>
              <div className="media-details-block d-flex align-items-center">
                <p className="duration-dark text-dark">
                  {this.props.item.duration}
                </p>
                <p className="time text-dark ml-3">{this.props.item.time}</p>
                <p className="share text-dark ml-auto">
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
    count: state.count
  };
}

export default connect(getDatafrom)(VideoItem);
