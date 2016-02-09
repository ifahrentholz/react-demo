import AppDispatcher from "../dispatchers/app-dispatcher";
import AppConstants from "../constants/app-constants";
let EventEmitter = require("events").EventEmitter;

let CHANGE_EVENT = "change";
let _catalog = [];
let _cartItems = [];

for(var i = 1; i<9; i++) {
  _catalog.push({
    "id": "Widget" + i,
    "title": "Widget #" + i,
    "summary": "This is an awesome widget",
    "description": "Lorem ipsum dolores kokolores sit awesome.",
    "cost": i
  });
}

let _removeItem = (ix) => {
  _cartItems[ix].inCart = false;
  _cartItems.splice(ix, 1);
};

let _increaseItem = (ix) => {
  _cartItems[ix].qty++;
};

let _decreaseItem = (ix) => {
  if(_cartItems[ix].qty > 1) {
    _cartItems[ix].qty--;
  } else {
    _removeItem(ix);
  }
};

let _addItem = (item) => {
  if(!item.inCart) {
    item["qty"] = 1;
    item["inCart"] = true;
    _cartItems.push(item);
  } else {
    _cartItems.forEach((cartItem, i) => {
      if(cartItem.id === item.id) {
        _increaseItem(i);
      }
    });
  }
};

let _cartTotals = () => {
  let qty = 0;
  let total = 0;
  _cartItems.forEach((cartItem) => {
    qty += cartItem.qty;
    total += cartItem.qty + cartItem.cost;
  });

  return {"qty": qty, "total": total};
};

let AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getCart() {
    return _cartItems;
  },

  getCatalog() {
    return _catalog;
  },

  getCartTotals() {
    return _cartTotals();
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    let action = payload.action; // this is the action from handleViewAction
    switch(action.actionType) {
      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        _removeItem(payload.action.index);
        break;
      case AppConstants.INCREASE_ITEM:
        _increaseItem(payload.action.index);
        break;
      case AppConstants.DECREASE_ITEM:
        _decreaseItem(payload.action.index);
        break;
    }

    AppStore.emitChange();
    return true;
  })
});


export default AppStore;