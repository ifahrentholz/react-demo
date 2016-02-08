import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/homePage";

var App = React.createClass({
  render() {
    return(
      <Home />
    )
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
