
import { ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_LOADING, ALL_PRODUCTS_ERROR } from "./home.actionTypes"; 

const initialState = {
    loading: false,
    error : false,
    data : []
} 

export const productsReducer = (state = initialState , { type , payload}) =>{

    switch(type){
        case ALL_PRODUCTS_LOADING : {
            return {
                ...state,
                loading: true,
                error : false
            }
        }

        case ALL_PRODUCTS_SUCCESS : {
            return {
                ...state,
                loading: false,
                error : false,
                data :  payload
            }
        }

        case ALL_PRODUCTS_ERROR : {
            return {
                ...state,
                loading: false,
                error : true,
            }
        }
        default : {
            return state
        }

    }
}