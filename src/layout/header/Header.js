import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let activeClass = "header-white";
      if (window.scrollY > 70) {
        activeClass = "header-white";
      } else {
        activeClass = "";
      }
      this.setState({ activeClass });
    });
  }

  render() {
    return (
      <div className={`header ${this.state.activeClass}`}>
        <Navbar light expand="md">
          <Container>
            <NavbarBrand>
              <Link to="/">
                <img src="../images/logo-chelsea.png"></img>
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Schedule" className="nav-link">
                    Schedule
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Result" className="nav-link">
                    Result
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Players" className="nav-link">
                    Players
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Table" className="nav-link">
                    standings
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Club" className="nav-link">
                    Club
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
