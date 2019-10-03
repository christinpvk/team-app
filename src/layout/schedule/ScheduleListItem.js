import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ScheduleListItem extends Component {
  viewmatchCenter = key => {
    this.props.dispatch({
      type: "newValue",
      payload: key
    });
  };
  render() {
    return (
      <div>
        <Card className="b-radius-0 bg-header-outer">
          <CardHeader className="bg-header-block d-flex justify-content-between align-items-center p-0">
            <div className="date-box">{this.props.item.match_date}</div>
            <div className="day-box d-flex align-items-center justify-content-between w-100">
              <div className="overlay"></div>
              <p className="text-white mb-0 zi-99">
                <span className="day">{this.props.item.match_date}</span>
                {/* <span className="month ml-1">{this.props.item.month}</span>
                <span className="year ml-1">{this.props.item.year}</span> */}
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <div className="schedule-match-details">
              <div className="team-block-outer">
                <div className="logo-block">
                  <div className="logo">
                    <img
                      src="../images/logo-real-madrid.png" alt="logo-real-madrid.png"
                    ></img>
                  </div>
                </div>
                <div className="team-block">
                  <div className="teams text-center">
                    <div className="team">
                      <h6>{this.props.item.match_hometeam_name}</h6>
                    </div>
                    <div className="versus">vs</div>
                    <div className="team">
                      <h6>{this.props.item.match_awayteam_name}</h6>
                    </div>
                    <Badge
                      className="ml-auto match-category league zi-99 mt-3"
                      color={
                        this.props.item.league_name === "Europa League"
                          ? "league"
                          : this.props.item.league_name === "Premier League"
                          ? "super-league"
                          : "friendly"
                      }
                    >
                      {this.props.item.league_name}
                    </Badge>
                  </div>
                </div>
                <div className="logo-block">
                  <div className="logo">
                    <img
                      src="../images/logo-chelsea.png" alt="logo-chelsea.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="b-radius-0 bg-white">
            <div className="venue-block">
              <p>
                <span className="stadium">{this.props.item.match_hometeam_name}</span>
                <span className="ml-2 mr-2">|</span>
                <span className="time">{this.props.item.match_time}</span>
                <span className="timezone ml-1">
                  {this.props.item.timezone}
                </span>
              </p>
              <Link
                to="/MatchCenter"
                onClick={() => this.viewmatchCenter(this.props.item)}
              >
                <button class="btn btn-primary">match center</button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

function getDatafrom(state) {
  return {
    dataCollection: state.dataCollection
  };
}

export default connect(getDatafrom)(ScheduleListItem);
