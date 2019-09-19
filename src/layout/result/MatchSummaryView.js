import React, { Component } from "react";
import { connect } from "react-redux";

class MatchSummaryView extends Component {
  render() {
    return (
      <div className="match-preview-box">
        <div className="overlay"></div>
        <img
          src={"../images/match-preview/" + this.props.matchSummary.banner}
          className="banner"
        ></img>
        <div className="match-block">
          <div className="contents">
            <div className="first-team w-25">
              <img
                src={"../images/" + this.props.matchSummary.firstteamlogo}
                className="logo"
              ></img>
            </div>
            <div className="match-details w-50">
              <p className="text-white play-time font-12 mb-0">
                <span>90'</span>
                <span className="ml-2 mr-2">+</span>
                <span className="extra-time">
                  {this.props.matchSummary.extratime}
                </span>
                <span className="time-length ml-2">(ft)</span>
              </p>
              <h2 className="score">
                <span className="first-team-score">
                  {this.props.matchSummary.firstteamscore}
                </span>
                <span className="seperator ml-2 mr-2">-</span>
                <span className="second-team-score">
                  {this.props.matchSummary.secondteamscore}
                </span>
              </h2>
              <h6 className="team">
                <span className="team-name">
                  {this.props.matchSummary.firstteam}
                </span>
                <span className="versus font-12 ml-2 mr-2">vs</span>
                <span className="team-name">
                  {this.props.matchSummary.secondteam}
                </span>
              </h6>
              <p className="text-white stadium">
                {this.props.matchSummary.stadium}
              </p>
              <div className="goal-scorer">
                <div className="goal-box">
                  {this.props.matchSummary.team_one_goalscorer.length !== 0 ? (
                    <ul className="goal-scorer-list">
                      {this.props.matchSummary.team_one_goalscorer.map(
                        items => (
                          <li>
                            <i className="far fa-futbol mr-2"></i>
                            {items.player}
                            <span className="scoring-time ml-2">
                              {items.minute}
                            </span>
                            {items.minute_again.length !== 0 ? (
                              <span className="scoring-time">
                                {items.minute_again.map(minutes => (
                                  <li>{minutes.next_goal}</li>
                                ))}
                              </span>
                            ) : null}
                          </li>
                        )
                      )}
                    </ul>
                  ) : null}
                </div>
                <div className="devider">
                  <div className="v-line"></div>
                </div>
                <div className="goal-box no-border">
                  {this.props.matchSummary.team_two_goalscorer !== 0 ? (
                    <ul className="goal-scorer-list">
                      {this.props.matchSummary.team_two_goalscorer.map(
                        items => (
                          <li>
                            <i className="far fa-futbol mr-2"></i>
                            {items.player}
                            <span className="scoring-time ml-2">
                              {items.minute}
                            </span>
                            <span className="scoring-time ml-2">
                              {items.second_minute}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="second-team w-25">
              <img
                src={"../images/" + this.props.matchSummary.secondteamlogo}
                className="logo"
              ></img>
            </div>
          </div>
          <div className="summary">
            <h4>{this.props.matchSummary.summary}</h4>
          </div>
        </div>
      </div>
    );
  }
}

function getmatchSummaryData(state) {
  return {
    matchSummary: state.dataCollection
  };
}

export default connect(getmatchSummaryData)(MatchSummaryView);
