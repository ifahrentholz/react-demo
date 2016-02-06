import React from "react";
import ReactDOM from "react-dom";
import PlayButton from "./components/PlayButton";
import PauseButton from "./components/PauseButton";

require("./stylesheets/main.scss");

let App = React.createClass({
  getInitialState() {
    return {
      volume: 0.8,
      sources: null,
      isReady: false,
      loaded: 0,
      duration: 0,
      player: null,
      playing: false,
      played: 0
    }
  },

  render() {
    return (
      <div className="rplay-container">
        <MediaEmbed />
      </div>
    )
  }

});


let MediaEmbed = React.createClass({
  render() {
    return (
      <div className="rplay-mediaembed">
        <video controls ref="player">
          <source src="../../assets/videos/movie_300.mp4" type="video/mp4"></source>
          <source src="../../assets/videos/movie_300.webm" type="video/webm"></source>
        </video>
        <Controls player={this.refs.player}/>
      </div>
    )
  }
});


let Controls = React.createClass({
  render() {
    return (
      <div className="rplay-controls">
        <PlayButton />
        <PauseButton />
      </div>
    )
  }
});


Array.from(document.querySelectorAll(".rplay")).forEach(function(media) {
  let data = JSON.parse(media.dataset.rplaySetup);
  ReactDOM.render(<App sources={data.sources} poster={data.poster}/>, media);
});
