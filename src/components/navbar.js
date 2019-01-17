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
        <NavLink to="/">
          <NavbarBrand id="navbarHeader">
            <strong>Frida&Espen</strong>
          </NavbarBrand>
        </NavLink>
        {!this.state.isWideEnough && (
          <NavbarToggler onClick={this.collapseOnClick} />
        )}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav center id="navbarItemlist">
            <NavItem>
              <NavLink
                className="navLink"
                to="/images"
                onClick={this.togglePages}
              >
                Bilder
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className="navLink"
                to="/weddingday"
                onClick={this.togglePages}
              >
                Bryllupshelgen
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navLink"
                to="wishlist"
                onClick={this.togglePages}
              >
                Ønskeliste
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navLink"
                to="/contacts"
                onClick={this.togglePages}
              >
                Kontakter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navLink"
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
