import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class RelatedVideoItem extends Component {
  viewVideo = key => {
    this.props.dispatch({
      type: "newValue",
      payload: key
    });
  };
  componentDidMount() {
    axios(`https://jsonplaceholder.typicode.com/todos/1`).then(
      res =>
        this.props.dispatch({
          type: "data",
          payload: res.data
        })
      // console.log(res.data)
    );
  }

  render() {
    console.log(this.props.demoData);
    return (
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
    );
  }
}

function getDatafrom(state) {
  return {
    dataCollection: state.dataCollection,
    demoData: state.demoData
  };
}

export default connect(getDatafrom)(RelatedVideoItem);
