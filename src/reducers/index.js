import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { products } from "./products";

export default combineReducers({
  form: formReducer,
  products
});
