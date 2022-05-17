import {
  FETCH_GLOBAL_COINS_DATA_ERROR,
  FETCH_GLOBAL_COINS_DATA_SUCCESS,
  FETCH_GLOBAL_COINS_DATA_PENDING,
} from "./types";

const initialState = {
  globalCoinsData: [],
  currencyIcon: "",
  totalMarketCap: 0,
  todayTotalMarketCap: 0,
  todayPercentageMarketCap: 0,
  btcPercentageMarketCap: 0,
  ethPercentageMarketCap: 0,
  isLoading: false,
  hasError: false,
};

function globalCoinsDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GLOBAL_COINS_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case FETCH_GLOBAL_COINS_DATA_SUCCESS:
      return {
        ...state,
        globalCoinsData: action.payload,
        currencyIcon: "$",
        isLoading: false,
        hasError: false,
      };

    case FETCH_GLOBAL_COINS_DATA_ERROR:
      return {
        ...state,
        hasError: true,
      };
    default:
      return state;
  }
}
export default globalCoinsDataReducer;
