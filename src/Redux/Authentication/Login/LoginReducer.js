import { VALID_USER } from "./ActionTypes";

const auth = {
  auth: false,
  email: "",
  username: "",
  
};

export const LoginReducer = (state = auth, { type, payload }) => {
  //console.log(payload);
  switch (type) {
    case VALID_USER:
      return { ...state, auth: payload.auth, email: payload.email,username:payload.username };
    default:
      return { ...state };
  }
};