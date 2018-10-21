import React, { Component } from "react";
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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <Router>
        <Navbar light expand="md" scrolling style={this.styles.navbarContainer}>
          <NavbarBrand style={this.styles.header}>
            <strong>Frida❤️Espen</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav center style={this.styles.itemList}>
              <NavItem active>
                <NavLink style={this.styles.items} to="#">
                  Forside
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={this.styles.items} to="#">
                  Bilder
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={this.styles.items} to="#">
                  Bryllupsside
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={this.styles.items} to="#">
                  Ønskeliste
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={this.styles.items} to="#">
                  Kontakter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={this.styles.items} to="#">
                  RSVP
                </NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }

  styles = {
    navbarContainer: {
      marginLeft: "10%",
      marginRight: "10%",
      backgroundColor: "pink"
    },
    header: {
      color: "black"
    },
    itemList: {
        marginLeft: "10%"
    },
    items: {
    },

    
  };
}

export default NavBar;
