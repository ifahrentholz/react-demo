import React from "react";
const { Component } = React;

class ButtonIconSVG extends Component {
  render() {
    return (
      <svg
        className="rplay-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        {this.props.children}
      </svg>
    )
  }
}


export class PlayIconSVG extends Component {
  render() {
    return (
      <ButtonIconSVG>
        <path d="M0 0 L32 16 L0 32 z"></path>
      </ButtonIconSVG>
    );
  }
}


export class PauseIconSVG extends Component {
  render() {
    return (
      <ButtonIconSVG>
        <path d="M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z"></path>
      </ButtonIconSVG>
    );
  }
}


