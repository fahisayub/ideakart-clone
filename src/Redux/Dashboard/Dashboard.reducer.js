import {
    ADD_PRODUCT_REQUEST,
    TAB_CHANGE,
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
  } from "./Dashboard.type";
const initState={
    tabIndex:0,
    add:{
        isLoading:false,
        error:false,
    },
    get:{
        isLoading:false,
        error:false,
    },
    data:[],

}

export const dashboardReducer = (state=initState, {type,payload}) => {
    switch (type) {
        case TAB_CHANGE:
        return {
            ...state,
            tabIndex: payload
        };
        case ADD_PRODUCT_REQUEST:
        return {
            ...state,
            add:{
                isLoading:true,
                error:false,
            }
        };
        case ADD_PRODUCT_SUCCESS:
        return {
            ...state,
            add:{
                isLoading:false,
                error:false,
            },
            data:[...state.data,payload],
        };
        case ADD_PRODUCT_FAILURE:
        return {
            ...state,
            add:{
                isLoading:false,
                error:true,
            }   };
        case GET_PRODUCTS_REQUEST:
        return {
            ...state,
            get:{
                isLoading:true,
                error:false,
            }
        };
        case GET_PRODUCTS_SUCCESS:
        return {
            ...state,
            get:{
                isLoading:false,
                error:false,
            },
            data:payload,
        };
        case GET_PRODUCTS_FAILURE:
        return {
            ...state,
            get:{
                isLoading:false,
                error:true,
            }   };
            
        default:
        return state;
    }
    }