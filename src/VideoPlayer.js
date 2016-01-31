import React from "react";
import ReactDOM from "react-dom";

/**
 * App
 * <App />
 */
var App = React.createClass({
  getInitialState() {
    return {
      isPlaying: false
    }
  },


  setPlayer(video) {
    this.state.player = video.target;
  },


  play() {
    this.state.player.play();
    this.setState({
      playing: !this.state.playing
    });
  },


  pause() {
    this.state.player.pause();
    this.setState({
      playing: !this.state.playing
    });
  },


  render() {
    return (
      <div>
        <MediaEmbed setPlayer={this.setPlayer} />
        <br/><br/>
        <div>
          <button disabled={this.state.playing} onClick={this.play}>Play</button>
          <button disabled={!this.state.playing} onClick={this.pause}>Pause</button>
        </div>
      </div>
    )
  }
});


/**
 * Video
 * <Video />
 */
var MediaEmbed = React.createClass({
  render() {
    return (
      <video ref="video" controls onCanPlay={this.props.setPlayer}>
        <source src="../../assets/videos/movie_300.mp4" type="video/mp4"></source>
        <source src="../../assets/videos/movie_300.webm" type="video/webm"></source>
      </video>
    )
  }
});


Array.from(document.querySelectorAll(".rplay")).forEach(function(media) {
  let data = JSON.parse(media.dataset.rplaySetup);
  ReactDOM.render(<App sources={data.sources} poster={data.poster} />, media);
});
