import React from 'react';
import Slider from "react-slick";
import Nextmatch from './Nextmatch';
import Slideitem from './Slideitem';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <i className="ti-arrow-right next" onClick={onClick}></i>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <i className="ti-arrow-left prev" onClick={onClick}></i>
    );
  }

export default class Bannerslider extends React.Component {
    state = {
        bannernew: [],
        banner: [{
            id: 1,
            heading: 'Mount makes Chelsea history - the stats',
            subhead: 'Mason Mount became the first English player to score on his first home appearance for Chelsea in the Premier League',
            image: '../images/banner-002.jpg',
            button: 'see more',
            link: './News'
        },
        {
            id: 2,
            heading: 'season started with home win',
            subhead: 'match report: chelsea 2-1 tottenham hotspur',
            image: '../images/banner-003.jpg',
            button: 'match center',
            link: './Result'
        },
        {
            id: 3,
            heading: 'first win reaction: oliver giroud',
            subhead: 'giroud on opening his chelsea account and scoring from range',
            image: '../images/banner-004.jpg',
            button: 'see more',
            link: './News'
        }
    ]
    }
    componentDidMount(){
        this.setState({
            bannernew: this.state.banner
        });
    }
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className="outer-wrapper">
                <Slider className="banner-slider" {...settings}>
                    {this.state.bannernew.map(item =>(
                        <div className="slide-item" key={item.id}>
                            <Slideitem item={item} />
                        </div>
                    ))}
                </Slider>
                <div className="bottom-layer">
                    <Nextmatch />
                </div>
            </div>
        );
    }
}