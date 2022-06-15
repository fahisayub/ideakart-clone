import axios from "axios";
import { PRODUCT_FETCH_FAILURE, PRODUCT_FETCH_REQUEST, PRODUCT_FETCH_SUCCESS } from "./product.type";

export const productApi = (id) =>(dispatch)=> {
    dispatch({type:PRODUCT_FETCH_REQUEST});
    axios.get(`http://localhost:3004/booksData/${id}`).then((res)=>{
        dispatch({type:PRODUCT_FETCH_SUCCESS,payload:res.data});
    }).catch((err)=>{
        dispatch({type:PRODUCT_FETCH_FAILURE});
        console.log(err);
    })
}
