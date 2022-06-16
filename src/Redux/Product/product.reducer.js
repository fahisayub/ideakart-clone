import { PRODUCT_FETCH_FAILURE, PRODUCT_FETCH_REQUEST, PRODUCT_FETCH_SUCCESS } from "./product.type";

const initState={
    data:{},
    loading:false,
    error:false,
}
export const productReducer=(state=initState,{type,payload})=>{
    
    switch(type){
        case PRODUCT_FETCH_REQUEST:
            return {...state,loading:true};
        case PRODUCT_FETCH_SUCCESS:
            console.log(payload,type);
            return {...state,loading:false,data:payload};
        case PRODUCT_FETCH_FAILURE:
            return {...state,loading:false,error:true};
        default:
            return state;
    }
}
