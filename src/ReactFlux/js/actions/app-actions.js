import AppConstants from "../constants/app-constants";
import AppDispatcher from "../dispatchers/app-dispatcher";


var AppActions = {
  addItem(item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM,
      item: item
    });
  },
  removeItem(ix) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_ITEM,
      index: ix
    });
  },
  increaseItem(ix) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREASE_ITEM,
      index: ix
    });
  },
  decreaseItem(ix) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DECREASE_ITEM,
      index: ix
    });
  }
};


export default AppActions;