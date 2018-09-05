import { createStore, applyMiddleware, subscribe } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const options = {
  actionsBlacklist: ["redux-form"]
};

const persistedtState = loadState();
const composeEnhancers = composeWithDevTools(options);

let store = createStore(
  reducers,
  persistedtState,
  composeEnhancers(applyMiddleware())
);

store.subscribe(
  throttle(() => {
    saveState({
      products: store.getState().products
    });
  }, 1000)
);

export default store;
