import {
  FETCH_ALL_COINS_PENDING,
  FETCH_ALL_COINS_SUCCESS,
  FETCH_ALL_COINS_ERROR,
} from "./types";

import axios from "axios";

const baseUrl = process.env.REACT_APP_ENDPOINT;
export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_ALL_COINS_PENDING,
    });
    const { data } = await axios(`${baseUrl}/search`);
    dispatch({
      type: FETCH_ALL_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_COINS_ERROR,
      payload: "Something went wrong " + err,
    });
  }
};
