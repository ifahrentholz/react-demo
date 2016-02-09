import React from "react";
import AppActions from "../actions/app-actions";

var DecreaseItem = React.createClass({
  handler() {
    AppActions.decreaseItem(this.props.index);
  },
  render() {
    return (
      <button onClick={this.handler}>-</button>
    )
  }
});


export default DecreaseItem;
