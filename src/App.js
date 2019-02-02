import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./stylesheet/App.css";
import NavBar from "./components/navbar.js";
import Pages from "./pages/pages.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <NavBar />
        </div>
        <div id="pagesContainer">
          <Pages />
        </div>
      </div>
    );
  }
}

export default App;
