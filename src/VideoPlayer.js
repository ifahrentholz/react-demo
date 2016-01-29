import React from "react";
import ReactDOM from "react-dom";

var Video = React.createClass({
  render() {
    return (
      <video controls>
        <source src="../../assets/videos/movie_300.mp4" type="video/mp4"></source>
        <source src="../../assets/videos/movie_300.webm" type="video/webm"></source>
      </video>
    )
  }
});

var FilePlayer = React.createClass({
  render() {
    return (
      <div>
        <Video ref="player" />
      </div>
    );
  }
});


ReactDOM.render(<FilePlayer />, document.getElementById("videoPlayer"));
