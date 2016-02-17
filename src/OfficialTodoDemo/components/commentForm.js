import React from "react";

var CommentForm = React.createClass({
  getInitialState() {
    return {
      author: '',
      text: ''
    }
  },
  handleAuthorChange(e) {
    this.setState({author: e.target.value})
  },
  handleTextChange(e) {
    this.setState({text: e.target.value})
  },
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if(!text || !author) {
      return; // no data passed
    }
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <div className="commentForm" onSubmit={this.handleSubmit}>
        <form className="commentForm">
          <input onChange={this.handleAuthorChange} type="text" placeholder="Your Name" />
          <input onChange={this.handleTextChange} type="text" placeholder="Say something..." />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});

export default CommentForm;
