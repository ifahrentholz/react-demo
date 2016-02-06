import React from "react";
import { PauseIconSVG } from "./Icons";

let { Component, PropTypes } = React;

class PauseButton extends Component {
  handleClick(e) {
    console.log("pause");
  }

  render() {
    return (
      <button className="rplay-btn rplay-btn-pause" onClick={this.handleClick.bind(this)}>
        <PauseIconSVG />
      </button>
    )
  }
}

PauseButton.propTypes = {
  className: PropTypes.string,
  seeking: PropTypes.bool,
  playing: PropTypes.bool,
  onTogglePlay: PropTypes.func,
  seekingIcon: PropTypes.node
};

PauseButton.defaultProps = {
  playing: false,
  seeking: false
};


export default PauseButton;
