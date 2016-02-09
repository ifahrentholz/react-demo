import React from "react";
import AppStore from "../stores/app-store";
import AddToCart from "./app-addtocart";


let getCatalog = () => {
  return {items: AppStore.getCatalog()};
};


var Catalog = React.createClass({
  getInitialState() {
    return getCatalog();
  },

  render() {
    var items = this.state.items.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.cost}</td>
          <td><AddToCart item={item} /></td>
        </tr>
      )
    });
    return (
      <table className="table table-hover">
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
});


export default Catalog;