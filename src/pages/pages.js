import React, { Component } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheet/App.css";
import Weddingday from "./weddingday.jsx";
import Home from "./home.jsx";

class Pages extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} />
        {/* <Route path="/images" component={Images} /> */}
        <Route path="/weddingday" component={Weddingday} />
        {/* <Route path="/wishlist" component={Wishlist} /> */}
        {/* <Route path="/contacts" component={Contacts} /> */}
        {/* <Route path="/rsvp" component={RSVP} /> */}
      </div>
    );
  }
}

export default Pages;
