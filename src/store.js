import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const options = {
  actionsBlacklist: ["redux-form"]
};

const defaultState = {};
const composeEnhancers = composeWithDevTools(options);

export const store = createStore(
  reducers,
  defaultState,
  composeEnhancers(applyMiddleware())
);
