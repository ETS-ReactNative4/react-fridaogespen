import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar style={this.styles.navbarContainer} expand="md" scrolling>
                    <NavbarBrand>
                        <strong>Frida&Espen</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Forside</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Bilder</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Bryllupsdagen</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink to="#">Ønskeliste</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink to="#">Kontakter</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink to="#">RSVP</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }

  styles = {
    navbarContainer: {},
    navbarItem: {}
  };
}

export default NavBar;
