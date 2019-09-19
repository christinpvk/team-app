import React, { Component } from "react";
import { Container } from "reactstrap";
import { Player } from "video-react";
import { connect } from "react-redux";
import Relatedvideos from "./RelatedVideos";

class VideoPlay extends Component {
  render() {
    return (
      <div>
        <div className="video-play-wrapper">
          <div className="overlay"></div>
          <div className="video-play-frame">
            <div className="video-frame">
              <p className="badges bg-danger mb-0">highlights</p>
              <h2 className="title">{this.props.videos.heading}</h2>
              <p className="date text-gray">
                {this.props.videos.uploaddate}
                <span className="ml-2 mr-2">|</span>
                <i className="share fa fa-share-alt"></i>
              </p>
              <div className="video-outer media-outer mt-4">
                <Player
                  playsInline
                  poster=""
                  src={"../images/videos/" + this.props.videos.video}
                />
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div className="spacer"></div>
          <Relatedvideos />
        </Container>
      </div>
    );
  }
}

function getnewsData(state) {
  return {
    videos: state.dataCollection
  };
}

export default connect(getnewsData)(VideoPlay);
