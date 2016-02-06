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
    console.log("test123");
  },
  render() {
    return (
      <div>
        <img src={this.state.avatar_url} alt="" width="80"/>
        <h3>{this.state.name}</h3>
        <br/><br/>
        <button onClick={this.removeUser}>Remove</button>
        <hr/>
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
        <input ref="login" type="text" placeholder="enter github username"/>
        <button>Get User</button>
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
  removeCard(username) {
    console.log("username:" + username);
  },
  render() {
    var cards = this.state.logins.map(login => {
      return <Card key={login} login={login}/>
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