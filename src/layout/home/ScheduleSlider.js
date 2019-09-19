import React from "react";
import Slider from "react-slick";
import ScheduleSlideItem from "./Scheduleslideitem";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <i className="ti-arrow-right next-slide" onClick={onClick}></i>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <i className="ti-arrow-left prev-slide" onClick={onClick}></i>;
}

export default class Scheduleslider extends React.Component {
  state = {
    schedulenew: [],
    schedule: [
      {
        id: 1,
        category: "league",
        matchtype: "premier league",
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
        matchtype: "friendly",
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
        matchtype: "premier league",
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
        matchtype: "premier league",
        firstteam: "liverpool",
        secondteam: "chelsea",
        firstteamlogo: "logo-liverpool.png",
        secondteamlogo: "logo-chelsea.png",
        stadium: "anfield",
        time: "7:30",
        timezone: "am",
        date: "17",
        day: "friday",
        month: "sep",
        year: "2019"
      },
      {
        id: 5,
        category: "friendly",
        matchtype: "friendly",
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
      schedulenew: this.state.schedule
    });
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider className="schedule-slider" {...settings}>
          {this.state.schedulenew.map(item => (
            <div className="slide-item" key={item.id}>
              <ScheduleSlideItem item={item} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
