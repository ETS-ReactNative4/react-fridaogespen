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
import "../stylesheet/App.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.collapseOnClick = this.collapseOnClick.bind(this);
  }

  collapseOnClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <Navbar light expand="md" scrolling id="navbarContainer">
        <NavbarBrand id="navbarHeader">
          <strong>Frida&Espen</strong>
        </NavbarBrand>
        {!this.state.isWideEnough && (
          <NavbarToggler onClick={this.collapseOnClick} />
        )}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav center id="navbarItemlist">
            <NavItem active>
              <NavLink
                className="navLink"
                value="frontPage"
                to="/"
                onClick={this.togglePages}
              >
                Forside
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navLink"
                value="imagePage"
                to="/images"
                onClick={this.togglePages}
              >
                Bilder
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navLink"
                value="weddingdayPage"
                to="/weddingday"
                onClick={this.togglePages}
              >
                Bryllupsdagen
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navLink"
                value="wishlistPage"
                to="wishlist"
                onClick={this.togglePages}
              >
                Ønskeliste
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navLink"
                value="contactsPage"
                to="/contacts"
                onClick={this.togglePages}
              >
                Kontakter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navLink"
                value="rsvpPage"
                to="/rsvp"
                onClick={this.togglePages}
              >
                RSVP
              </NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
