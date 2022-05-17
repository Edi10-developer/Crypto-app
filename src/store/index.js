import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import allCoins from "./allCoins";
import globalCoinsData from "./globalCoinsData";

const reducers = combineReducers({
  allCoins,
  globalCoinsData,
});

export const store = createStore(reducers, applyMiddleware(thunk));
