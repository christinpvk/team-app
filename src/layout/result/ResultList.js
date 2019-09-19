import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ResultListItem from "./ResultListItem";
import Quicklinks from "../quicklink/Quicklinks";

class ResultList extends Component {
  state = {
    resultlistnew: [],
    resultlist: [
      {
        id: 1,
        category: "league",
        matchtype: "premier league",
        firstteam: "Chelsea",
        secondteam: "leicester-city",
        firstteamlogo: "logo-chelsea.png",
        secondteamlogo: "logo-leicester.png",
        stadium: "stamford bridge",
        firstteamscore: "1",
        secondteamscore: "1",
        extratime: "4",
        date: "15",
        day: "thursday",
        month: "aug",
        year: "2019",
        summary: "chelsea tied leicester 1-1",
        banner: "match-preview-01.jpg",
        team_one_goalscorer: [
          {
            player: "m. mount",
            minute: "7'",
            minute_again: []
          }
        ],
        team_two_goalscorer: [
          {
            player: "w. ndidi",
            minute: "67'",
            minute_again: []
          }
        ]
      },
      {
        id: 2,
        category: "super-league",
        matchtype: "uefa cup",
        firstteam: "Liverpool",
        secondteam: "Chelsea",
        firstteamlogo: "logo-liverpool.png",
        secondteamlogo: "logo-chelsea.png",
        stadium: "vodafone park",
        firstteamscore: "2",
        secondteamscore: "2",
        extratime: "4",
        date: "10",
        day: "saturday",
        month: "aug",
        year: "2019",
        summary: "liverpool tied chelsea 2-2",
        banner: "match-preview-02.jpg",
        team_one_goalscorer: [
          {
            player: "mane",
            minute: "48'",
            minute_again: [
              {
                next_goal: "95'"
              }
            ]
          }
        ],
        team_two_goalscorer: [
          {
            player: "o. giroud",
            minute: "36'",
            minute_again: []
          },
          {
            player: "jorginho",
            minute: "101'",
            minute_again: []
          }
        ]
      },
      {
        id: 3,
        category: "league",
        matchtype: "premier league",
        firstteam: "manchester united",
        secondteam: "chelsea",
        firstteamlogo: "logo-m-united.png",
        secondteamlogo: "logo-chelsea.png",
        stadium: "old trafford",
        firstteamscore: "4",
        secondteamscore: "0",
        extratime: "1",
        date: "7",
        day: "wednesday",
        month: "aug",
        year: "2019",
        summary: "manchester united beat chelsea 4-0",
        banner: "match-preview-03.jpg",
        team_one_goalscorer: [
          {
            player: "rashford",
            minute: "18'",
            minute_again: [
              {
                next_goal: "67'"
              }
            ]
          },
          {
            player: "martial",
            minute: "65'",
            minute_again: []
          },
          {
            player: "james",
            minute: "81'",
            minute_again: []
          }
        ],
        team_two_goalscorer: []
      },
      {
        id: 4,
        category: "league",
        matchtype: "premier league",
        firstteam: "Chelsea",
        secondteam: "everton",
        firstteamlogo: "logo-chelsea.png",
        secondteamlogo: "logo-everton.png",
        stadium: "stamford bridge",
        firstteamscore: "2",
        secondteamscore: "1",
        extratime: "2",
        date: "4",
        day: "sunday",
        month: "aug",
        year: "2019",
        summary: "chelsea beat everton 2-1",
        banner: "match-preview-04.jpg",
        team_one_goalscorer: [
          {
            player: "o. giroud",
            minute: "22'",
            minute_again: []
          },
          {
            player: "willian",
            minute: "88'",
            minute_again: []
          }
        ],
        team_two_goalscorer: [
          {
            player: "d. lewin",
            minute: "90'",
            minute_again: []
          }
        ]
      },
      {
        id: 5,
        category: "league",
        matchtype: "premier league",
        firstteam: "westham united",
        secondteam: "Chelsea",
        firstteamlogo: "logo-west-ham.png",
        secondteamlogo: "logo-chelsea.png",
        stadium: "london stadium",
        firstteamscore: "0",
        secondteamscore: "1",
        extratime: "1",
        date: "30",
        day: "tuesday",
        month: "jul",
        year: "2019",
        summary: "chelsea beat westham 1-0",
        banner: "match-preview-05.jpg",
        team_one_goalscorer: [],
        team_two_goalscorer: [
          {
            player: "willian",
            minute: "48'",
            minute_again: []
          }
        ]
      }
    ]
  };

  componentDidMount() {
    this.setState({
      resultlistnew: this.state.resultlist
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md="9">
            {this.state.resultlistnew.map(item => (
              <div className="mb-3 pb-2" key={item.id}>
                <ResultListItem item={item} />
              </div>
            ))}
          </Col>
          <Col md="3">
            <Quicklinks />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultList;
