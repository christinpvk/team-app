import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ScheduleListItem from "./ScheduleListItem";
import Quicklinks from "../quicklink/Quicklinks";

class ScheduleList extends Component {
  state = {
    schedulelistnew: [],
    schedulelist: [
      {
        id: 1,
        category: "league",
        firstteam: "arsenal",
        secondteam: "chelsea",
        firstteamlogo: "logo-arsenal.png",
        secondteamlogo: "logo-chelsea.png",
        stadium: "emirates stadium",
        time: "7:00",
        timezone: "pm",
        date: "8",
        day: "wednesday",
        month: "sep",
        year: "2019"
      },
      {
        id: 2,
        category: "friendly",
        firstteam: "barcelona",
        secondteam: "chelsea",
        firstteamlogo: "logo-barcelona.png",
        secondteamlogo: "logo-chelsea.png",
        stadium: "camp nou",
        time: "8:00",
        timezone: "pm",
        date: "11",
        day: "saturday",
        month: "sep",
        year: "2019"
      },
      {
        id: 3,
        category: "league",
        firstteam: "chelsea",
        secondteam: "manchester city",
        firstteamlogo: "logo-chelsea.png",
        secondteamlogo: "logo-m-city.png",
        stadium: "stamford bridge",
        time: "9:30",
        timezone: "pm",
        date: "15",
        day: "wednesday",
        month: "sep",
        year: "2019"
      },
      {
        id: 4,
        category: "league",
        firstteam: "liverpool",
        secondteam: "chelsea",
        firstteamlogo: "logo-liverpool.png",
        secondteamlogo: "logo-chelsea.png",
        stadium: "anfield",
        time: "7:00",
        timezone: "am",
        date: "17",
        day: "friday",
        month: "sep",
        year: "2019"
      },
      {
        id: 5,
        category: "friendly",
        firstteam: "chelsea",
        secondteam: "real madrid",
        firstteamlogo: "logo-chelsea.png",
        secondteamlogo: "logo-real-madrid.png",
        stadium: "stamford bridge",
        time: "5:00",
        timezone: "pm",
        date: "22",
        day: "wednesday",
        month: "sep",
        year: "2019"
      }
    ]
  };

  componentDidMount() {
    this.setState({
      schedulelistnew: this.state.schedulelist
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md="9">
            {this.state.schedulelistnew.map(item => (
              <div className="mb-3 pb-2" key={item.id}>
                <ScheduleListItem item={item} />
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

export default ScheduleList;
