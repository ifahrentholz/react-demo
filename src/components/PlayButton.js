import React from "react";
import { PlayIconSVG, PauseIconSVG } from "./Icons";

let { Component, PropTypes } = React;

class PlayButton extends Component {
  handleClick(e) {
    console.log("play");
  }
  render() {
    return (
      <button className="rplay-btn rplay-btn-play" onClick={this.handleClick.bind(this)}>
        <PlayIconSVG />
      </button>
    )
  }
}

PlayButton.propTypes = {
  className: PropTypes.string,
  seeking: PropTypes.bool,
  playing: PropTypes.bool,
  onTogglePlay: PropTypes.func,
  seekingIcon: PropTypes.node
};

PlayButton.defaultProps = {
  playing: false,
  seeking: false
};

export default PlayButton;
