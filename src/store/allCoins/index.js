import { combineReducers } from "redux";
import coins from "./allCoinsReducer";
import selectCoin from "./allCoinsActions";

export default combineReducers({
  coins,
  selectCoin,
});
