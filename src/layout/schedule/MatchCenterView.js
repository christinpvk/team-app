import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class MatchCenterView extends Component {
  render() {
    return (
      <div className="match-preview-box matchcenter-preview-box">
        <div className="overlay"></div>
        <img src="../images/stanford-bridge.jpg" className="banner"></img>
        <div className="match-block">
          <div className="contents">
            <div className="first-team w-25">
              <img
                src={"../images/" + this.props.matchCenter.firstteamlogo}
                className="logo"
              ></img>
            </div>
            <div className="match-details w-50">
              <p className="text-white play-time font-12 mb-0">
                <span>kickoff</span>
                <span className="ml-1 ist">(ist)</span>
              </p>
              <h2 className="time">
                {this.props.matchCenter.time}
                <span className="ml-1">{this.props.matchCenter.timezone}</span>
              </h2>
              <h6 className="team">
                <span className="team-name">
                  {this.props.matchCenter.firstteam}
                </span>
                <span className="versus font-12 ml-2 mr-2">vs</span>
                <span className="team-name">
                  {this.props.matchCenter.secondteam}
                </span>
              </h6>
              <p className="text-white stadium">
                {this.props.matchCenter.stadium}
              </p>
              <Badge
                className="ml-auto mt-2 match-category league zi-99"
                color={
                  this.props.matchCenter.category === "league"
                    ? "league"
                    : this.props.matchCenter.category === "super-league"
                    ? "super-league"
                    : "friendly"
                }
              >
                {this.props.matchCenter.category}
              </Badge>
            </div>
            <div className="second-team w-25">
              <img
                src={"../images/" + this.props.matchCenter.secondteamlogo}
                className="logo"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getmatchCenterData(state) {
  return {
    matchCenter: state.dataCollection
  };
}

export default connect(getmatchCenterData)(MatchCenterView);
