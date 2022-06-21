import {
  ADD_PRODUCT_REQUEST,
  TAB_CHANGE,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./Dashboard.type";
import axios from "axios";
export const tabChangeApi = (index) => (dispatch) => {
  dispatch({
    type: TAB_CHANGE,
    payload: index,
  });
};

export const addProductApi = (product) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/myProducts`, {...product,isAproved:false,isRejected:false})
    .then((res) => {
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_PRODUCT_FAILURE });
      console.log(err);
    });
};

export const getProductsApi = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/myProducts`)
    .then((res) => {
      //  console.log(res.data)

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCTS_FAILURE });
      console.log(err);
    });
};
