import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "../stylesheet/App.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      pageImages: false,
      pageWeddingday: false,
      pageWishlist: false,
      pageContacts: false,
      pageRSVP: false
    };
    this.collapseOnClick = this.collapseOnClick.bind(this);
  }

  collapseOnClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  showPage() {}

  render() {
    return (
      <Router>
        <Navbar light expand="md" scrolling id="navbarContainer">
          <NavbarBrand id="navbarHeader">
            <strong>Frida&Espen</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && (
            <NavbarToggler onClick={this.collapseOnClick} />
          )}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav center id="navbarItemlist">
              <NavItem>
                <NavLink className="navLink" to="#">
                  Bilder
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" to="#">
                  Bryllupshelgen
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" to="#">
                  Ønskeliste
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" to="#">
                  Kontakter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" to="#">
                  RSVP
                </NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavBar;
