import React, { Component } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheet/App.css";
import Home from "./home.jsx";
import Images from "./images.jsx";
import WeddingWeekend from "./weddingweekend.jsx";
import Wishlist from "./wishlist.jsx";
import Contacts from "./contacts.jsx";
import RSVP from "./rsvp.js";

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
