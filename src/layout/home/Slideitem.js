import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default class Slideitem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img
          className="banner-image"
          src={"../images/" + this.props.item.image}
        ></img>
        <div className="overlay">
          <div className="title-block">
            <h2 className="headline">{this.props.item.heading}</h2>
            <p className="sub-head">{this.props.item.subhead}</p>
            <Link to={"./" + this.props.item.link}>
              <Button color="primary" className="mt-4">
                {this.props.item.button}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
