//import axios from "axios";
import { VALID_USER } from "./ActionTypes";
export const Valid_User = (payload) => {
  //console.log(payload)
  return {
    type: VALID_USER,
    payload,
  };
};

// export const LoginApi=(payload)=>(dispatch)=>{
//   dispatch({type:'LOGIN_REQUEST'});
//   axios.get(`http://localhost:8080/users`).then((res)=>{
//     console.log(res.data)
//     if(res.data.length>0){
//       let user=res.data.filter((user)=>payload.email===user.email && payload.password===user.password);
//       console.log(user);
//      // dispatch({type:'LOGIN_SUCCESS',payload:user});

//     }
  
//   })}