import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./stylesheet/App.css";
import NavBar from "./components/navbar.js";
import Pages from "./pages/pages.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <NavBar />
        </div>
        <div className="pageContainer">
          <Pages />
        </div>
      </div>
    );
  }
}

export default App;
