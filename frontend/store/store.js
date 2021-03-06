import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

// get jim to explain later
const configureStore = (preloadedState = {}) => {
  let store = createStore(rootReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;