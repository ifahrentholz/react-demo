import React from "react";
import Catalog from "../components/app-catalog";
import Cart from "../components/app-cart";

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Let's shop</h1>
        <Catalog />
        <h1>Cart</h1>
        <Cart />
      </div>
    )
  }
});


export default App;