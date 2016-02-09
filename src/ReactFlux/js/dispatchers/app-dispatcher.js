import { Dispatcher } from "flux";

var AppDispatcher = Object.assign(new Dispatcher(), {
  handleViewAction(action) {
    console.log("action", action);
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
});


export default AppDispatcher;
