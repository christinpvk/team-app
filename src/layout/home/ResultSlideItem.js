import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Badge
} from "reactstrap";

class ResultSlideItem extends Component {
  viewMatchSummary = key => {
    this.props.dispatch({
      type: "newValue",
      payload: key
    });
  };

  render() {
    return (
      <Card className="outer">
        <CardHeader className="bg-header-block d-flex justify-content-between align-items-center p-0">
          <div className="date-box">{this.props.item.date}</div>
          <div className="day-box d-flex align-items-center justify-content-between w-100">
            <div className="overlay"></div>
            <p className="text-white mb-0 zi-99">
              <span className="day">{this.props.item.day}</span>
              <span className="month ml-1">{this.props.item.month}</span>
              <span className="year ml-1">{this.props.item.year}</span>
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="match-block">
            <div className="first-team w-25">
              <img src={"../images/" + this.props.item.firstteamlogo}></img>
            </div>
            <div className="match-details w-50">
              <p className="play-time text-gray font-12 mb-0">
                <span>90'</span>
                <span className="ml-2 mr-2">+</span>
                <span className="extra-time">{this.props.item.extratime}</span>
              </p>
              <h2 className="score">
                <span className="first-team-score">
                  {this.props.item.firstteamscore}
                </span>
                <span className="seperator ml-2 mr-2">-</span>
                <span className="second-team-score">
                  {this.props.item.secondteamscore}
                </span>
              </h2>
              <h6 className="team">
                <span className="team-name">{this.props.item.firstteam}</span>
                <span className="versus font-12 ml-2 mr-2">vs</span>
                <span className="team-name">{this.props.item.secondteam}</span>
              </h6>
              <p className="stadium">{this.props.item.stadium}</p>
              <Badge
                className="ml-auto match-category league zi-99"
                color={
                  this.props.item.category === "league"
                    ? "league"
                    : this.props.item.category === "super-league"
                    ? "super-league"
                    : "friendly"
                }
              >
                {this.props.item.matchtype}
              </Badge>
            </div>
            <div className="second-team w-25">
              <img src={"../images/" + this.props.item.secondteamlogo}></img>
            </div>
          </div>
        </CardBody>
        <CardFooter className="footer-block text-center">
          <Link
            to="/MatchSummary"
            onClick={() => this.viewMatchSummary(this.props.item)}
          >
            <Button color="primary">match summary</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }
}

function getDatafrom(state) {
  return {
    dataCollection: state.dataCollection
  };
}

export default connect(getDatafrom)(ResultSlideItem);
