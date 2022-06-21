
import { ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_LOADING, ALL_PRODUCTS_ERROR } from "./home.actionTypes"; 
import axios from "axios"

export const productsApi = () => (dispatch) =>{
    dispatch({type : ALL_PRODUCTS_LOADING}) 

    axios.get(`${process.env.REACT_APP_BASE_URL}/booksData`)
    .then((res)=>{
        dispatch({type : ALL_PRODUCTS_SUCCESS, payload: res.data})
    })
    .catch(()=>{
        dispatch({type : ALL_PRODUCTS_ERROR}) 
    })
}
