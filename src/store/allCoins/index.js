import {
  FETCH_ALL_COINS_PENDING,
  FETCH_ALL_COINS_SUCCESS,
  FETCH_ALL_COINS_ERROR,
} from "./types";

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
  filterBy: "",
};

function allCoinsReducer(state = initialState, action) {
  //console.log(state);
  switch (action.type) {
    case FETCH_ALL_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case FETCH_ALL_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case FETCH_ALL_COINS_ERROR:
      return {
        ...state,
        hasError: true,
      };
    default:
      return state;
  }
}

export default allCoinsReducer;
