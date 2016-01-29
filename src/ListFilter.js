import React from "react";
import ReactDOM from "react-dom";

var Filter = React.createClass({
  handleFilterChange() {
    let value = this.refs.filterInput.value;
    this.props.updateFilter(value);
  },

  render() {
    return <input type="text" ref="filterInput" onChange={this.handleFilterChange} placeholder="Filter"/>;
  }
});


var List = React.createClass({
  render() {
    let content;
    if(this.props.items.length > 0) {
      let i = 0;
      let items = this.props.items.map(function(item) {
        i++;
        return <li key={i}>{item}</li>
      });
      content = <ul>{items}</ul>
    } else {
      content = <p>No matched items</p>
    }
    return (
      <div className="results">
        <h1>Results</h1>
        {content}
      </div>
    )
  }
});


var ListContainer = React.createClass({
  getInitialState() {
    return {
      listItems: ['Chicago', 'New York', 'Tokyo', 'London', 'San Francisco', 'Amsterdam', 'Hong Kong'],
      nameFilter: ''
    };
  },


  handleFilterUpdate(filterValue) {
    this.setState({
      nameFilter: filterValue
    });
  },

  render() {
    var displayedItems = this.state.listItems.filter(function(item) {
      var match = item.toLowerCase().indexOf(this.state.nameFilter.toLowerCase());
      return (match !== -1);
    }.bind(this));

    return (
      <div>
        <Filter updateFilter={this.handleFilterUpdate}/>
        <List items={displayedItems}/>
      </div>
    );
  }
});


// ReactDOM.render(<ListContainer />, document.getElementById("listFilter"));

