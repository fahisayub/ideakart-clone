import { ACCOUNT_INFO_FAILURE,ACCOUNT_INFO_REQUEST,ACCOUNT_INFO_SUCCESS } from "./AcInfo.type";

const initState={
    isLoading:false,
    isError:false,
    data:{},
}
export const AccountInfoReducer=(state=initState,{type,payload})=>{
    switch(type){
        case ACCOUNT_INFO_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
            }
        case ACCOUNT_INFO_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                accountInfo:payload,
            }
        case ACCOUNT_INFO_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
                isSuccess:false,
            }
        default:
            return state;
    } 
}