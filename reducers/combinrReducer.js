import { combineReducers } from "redux";
import loginreducer from "./loginreducer";
import messagereducer from "./messagereducer";
import productReducer from "./productReducer"; 
export default combineReducers({
  loginreducer,
  messagereducer,
  productReducer
});