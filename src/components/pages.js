import React, { Component } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheet/App.css";
import Home from "../pages/home.jsx";
import Images from "../pages/images.jsx";
import WeddingWeekend from "../pages/weddingweekend.jsx";
import Wishlist from "../pages/wishlist.jsx";
import Contacts from "../pages/contacts.jsx";
import RSVP from "../pages/rsvp.js";

class Pages extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/images" component={Images} />
        <Route path="/weddingweekend" component={WeddingWeekend} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/rsvp" component={RSVP} />
      </div>
    );
  }
}

export default Pages;
