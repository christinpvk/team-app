import React, { Component } from "react";
import { Badge } from "reactstrap";

class QuickLinkItem extends Component {
  render() {
    return (
      <div className="full-block media-outer quick-view mb-3">
        <Badge
          className="badges mb-0"
          color={this.props.item.category === "gallery" ? "info" : "warning"}
        >
          {this.props.item.category}
        </Badge>
        <img src={"../images/" + this.props.item.banner}></img>
        <div className="overlay">
          <div className="content">
            <h4 className="media-head">{this.props.item.heading}</h4>
            <div className="media-details-block d-flex">
              <p className="time">{this.props.item.time}</p>
              <p className="share ml-auto">
                <i className="fa fa-share-alt"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickLinkItem;
