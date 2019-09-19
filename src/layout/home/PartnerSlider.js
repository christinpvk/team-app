import React from "react";
import Slider from "react-slick";
import PartnerSlideItem from "./PartnerSlideItem";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <i className="ti-arrow-right next-slide" onClick={onClick}></i>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <i className="ti-arrow-left prev-slide" onClick={onClick}></i>;
}

export default class PartnerSlider extends React.Component {
  state = {
    partnersnew: [],
    partners: [
      {
        id: 1,
        logo: "partner-nike-white.png"
      },
      {
        id: 2,
        logo: "partner-yokohama-white.png"
      },
      {
        id: 3,
        logo: "partner-hyundai-white.png"
      }
    ]
  };

  componentDidMount() {
    this.setState({
      partnersnew: this.state.partners
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
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider className="partner-slider" {...settings}>
          {this.state.partnersnew.map(item => (
            <div className="slide-item" key={item.id}>
              <PartnerSlideItem item={item} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
