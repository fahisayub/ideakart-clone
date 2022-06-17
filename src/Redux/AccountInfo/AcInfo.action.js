import { ACCOUNT_INFO_FAILURE,ACCOUNT_INFO_REQUEST,ACCOUNT_INFO_SUCCESS } from "./AcInfo.type";
 import axios from "axios";
export const addAccountInfoApi=(payload) => (dispatch) => {
    dispatch({type:ACCOUNT_INFO_REQUEST});
    axios.post("http://localhost:8080/accountInfo",payload).then((res)=>{
        dispatch({type:ACCOUNT_INFO_SUCCESS,payload:res.data});
    }
    ).catch((err)=>{
        dispatch({type:ACCOUNT_INFO_FAILURE});
        console.log(err);
    }
    );
}