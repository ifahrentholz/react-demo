import React from "react";
import AppActions from "../actions/app-actions";

  var RemoveFromCart = React.createClass({
    handler() {
      AppActions.removeItem(this.props.index);
    },
    render() {
      return (
        <button onClick={this.handler}>x</button>
      )
    }
  });


export default RemoveFromCart;
