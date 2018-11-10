import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./stylesheet/App.css";
import { BrowserRouter } from "react-router-dom";

/* ReactDOM.render(<App />, document.getElementById("root")); */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
