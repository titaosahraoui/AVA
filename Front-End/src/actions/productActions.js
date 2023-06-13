import axios from "axios";

import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productsConstants";

export const getProducts = () => async (disptach) => {
  try {
    disptach({
      type: ALL_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get("http://localhost:4000/api/v1/products");
    disptach({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: ALL_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};

export const clearErrors = () => async (disptach) => {
  disptach({
    type: CLEAR_ERRORS,
  });
};
