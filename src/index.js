import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./stylesheet/App.css";
import { BrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Italianno"
    ]
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
