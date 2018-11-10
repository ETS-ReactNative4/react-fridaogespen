import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar.js";
import "./stylesheet/App.css";
/*i


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 */

/* const element = <h1>Hello World</h1>;

ReactDOM.render(element, document.getElementById("root")); */

//ReactDOM.render(<Counter />, document.getElementById("root"));
/* ReactDOM.render(<NavBar />, document.getElementById("root"));
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
