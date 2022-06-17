import { NEW_USER } from "./ActionTypes";
export const user_name=()=>{
  
}
export const New_User = (payload) => {
  return {
    type: NEW_USER,
    payload,
  };
};
