import React from "react";
import ReactDOM from "react-dom";

var Card = React.createClass({
  getInitialState() {
    return {};
  },
  componentDidMount() {
    $.get(`https://api.github.com/users/${this.props.login}`, (data) => {
      this.setState(data);
    });
  },
  removeUser(e) {
    e.preventDefault();
    this.props.removeCard(this.props.login);
  },
  render() {
    var url = `https://github.com/${this.props.login}`;
    return (
      <div className="row">
        <a target="_blank" href={url}>
          <div className="col-sm-8">
            <img src={this.state.avatar_url} alt="" width="80"/>
            <h3>{this.state.name} <sup>{this.state.followers}</sup></h3>
          </div>
        </a>
        <div className="col-sm-4">
          <button className="btn btn-danger" onClick={this.removeUser}>Remove</button>
        </div>
      </div>
    )
  }
});

var Form = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var loginInput = ReactDOM.findDOMNode(this.refs.login)
    this.props.addCard(loginInput.value);
    loginInput.value = "";
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">Github Username</label>
          <input id="login" ref="login" autoComplete="off" type="text" className="form-control" placeholder="Github username" />
        </div>
      </form>
    )
  }
});

var Main = React.createClass({
  getInitialState() {
    return {
      logins: ["ifahrentholz", "cowboy"]
    }
  },
  addCard(name) {
    this.setState({logins: this.state.logins.concat(name)});
  },
  removeCard(login) {
    var newArr = this.state.logins.filter(e => e !== login);
    this.setState({logins: newArr});
  },
  render() {
    var cards = this.state.logins.map(login => {
      return <Card key={login} login={login} removeCard={this.removeCard}/>
    });
    return (
      <div>
        <Form removeCard={this.removeCard} addCard={this.addCard} />
        {cards}
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("app"));