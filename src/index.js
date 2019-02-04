import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./stylesheet/App.css";
import { BrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Italianno"]
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
