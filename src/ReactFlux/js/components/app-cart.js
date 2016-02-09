import React from "react";
import AppStore from "../stores/app-store";
import RemoveFromCart from "./app-removefromcart";
import Increase from "./app-increaseitem";
import Decrease from "./app-decreaseitem";


let cartItems = () => {
  return {items: AppStore.getCatalog()};
};


var Catalog = React.createClass({
  getInitialState() {
    return cartItems();
  },
  componentWillMount() {
    AppStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(cartItems());
  },
  render() {
    var total = 0;
    var items = this.state.items.map((item, i) => {
      var subtotal = item.cost * item.qty;
      total += subtotal;
      return (
        <tr key={i}>
          <td>RemoveFromCart index={i}</td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <Increase index={i} />
          </td>
          <td>
            <Decrease index={i} />
          </td>
          <td>{subtotal}</td>
        </tr>
      )
    });
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
});


export default Catalog;
