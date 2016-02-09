import React from "react";
import AppActions from "../actions/app-actions";

  var IncreaseItem = React.createClass({
    handler() {
      AppActions.increaseItem(this.props.index);
    },
    render() {
      return (
        <button onClick={this.handler}>+</button>
      )
    }
  });


export default IncreaseItem;
