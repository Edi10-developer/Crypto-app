import {
  FETCH_GLOBAL_COINS_DATA_ERROR,
  FETCH_GLOBAL_COINS_DATA_SUCCESS,
  FETCH_GLOBAL_COINS_DATA_PENDING,
} from "./types";

import axios from "axios";

const baseUrl = process.env.REACT_APP_ENDPOINT;
export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_GLOBAL_COINS_DATA_PENDING,
    });
    const { data } = await axios.get(`${baseUrl}/global`);
    dispatch({
      type: FETCH_GLOBAL_COINS_DATA_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_GLOBAL_COINS_DATA_ERROR,
      payload: "Something went wrong " + err,
    });
  }
};
