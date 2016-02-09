import React from "react";
import AppActions from "../actions/app-actions";

  var AddToCart = React.createClass({
    handler() {
      AppActions.addItem(this.props.item);
    },
    render() {
      return (
        <button onClick={this.handler}>Add To Cart</button>
      )
    }
  });


export default AddToCart;
