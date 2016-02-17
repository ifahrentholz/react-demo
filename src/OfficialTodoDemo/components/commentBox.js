import React from "react";
import CommentForm from "./commentForm";
import CommentList from "./commentList";

var CommentBox = React.createClass({
  getInitialState() {
    return {
      data: []
    }
  },
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({data: data})
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    })
  },
  handleCommentSubmit(comment) {
    // TODO: submit the the server and refresh the list
  },
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    )
  }
});

export default CommentBox;