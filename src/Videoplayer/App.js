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
      playing: false,
      played: 0,
      api: null
    }
  },

  setApi(apiRef) {
    this.state.api = apiRef;
  },

  render() {
    return (
      <div className="rplay-container">
        <MediaEmbed setApi={this.setApi} />
      </div>
    )
  }

});


let MediaEmbed = React.createClass({
  componentDidMount() {
    this.props.setApi(this.refs.api);
  },
  render() {
    return (
      <div className="rplay-mediaembed">
        <video controls ref="api">
          <source src="../../assets/videos/movie_300.mp4" type="video/mp4"></source>
          <source src="../../assets/videos/movie_300.webm" type="video/webm"></source>
        </video>
        <Controls />
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
