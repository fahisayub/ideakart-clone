import { Input, Stack, Checkbox  ,Link} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Valid_User } from "../../Redux/Authentication/Login/Action";
import "./Login.css";
import { New_User } from "../../Redux/Authentication/SignUp/Actions";
import {  Navigate } from "react-router-dom";

const login = {
  email: "",
  password: "",
};
export const Login = () => {
  const [loginCredentails, setLoginCredentials] = useState(login);
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentails, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    emailRef.current.value = "";
    passwordRef.current.value = "";
    axios.get(`${process.env.REACT_APP_BASE_URL}/users`).then(({ data }) => {
     
     
      for (let i = 0; i < data.length; i++) {
        if (
          loginCredentails.email === data[i].email &&
          loginCredentails.password === data[i].password
        ) {
          let user=data.filter((user)=>loginCredentails.email===user.email && loginCredentails.password===user.password);
          dispatch(Valid_User({ auth: true, email: loginCredentails.email,username:user[0].username  }));
          break;
        }

        if (i === data.length - 1) {
          dispatch(Valid_User({ auth: false, email: "" }));
          alert("Invalid Credentails");
        }
      }
    });
  };

  useEffect(() => {
    dispatch(New_User(false));
  }, [dispatch]);
  if (auth.auth) {
    return <Navigate to="/" />;
  }
  return (
    <div >
       <div className="login-container">
            <div className="login__content-container">
              <h3 className="login__heading">Login</h3>
         <form>
        <Stack spacing={3} className="login-form__input-container">
        <div className="login-form__email login__input-field">
          <label htmlFor="login__email">Email</label>
          <Input   height={'30px'}      
            ref={emailRef}          
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInput}
            required
          />
          </div>
          <div className="login-form__password login__input-field">
                    <label htmlFor="login__password">Password</label>
          <Input height={'30px'}
            ref={passwordRef}
          
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleInput}
            required
          />
          </div>
          <div className="rembr">
                    
                    <Checkbox></Checkbox>
                    <label>Remember me</label>
          </div>
          <button type="submit" className="sign-up__submit-btn"
            onClick={handleLogin}>
              Log in
            </button>        
        </Stack>
        <Link to="/signup" color={'blue.400'} fontWeight='500' marginTop={'7px'} fontSize={'13px'}>signup</Link>
        <br/>
                  {/* <a href=''></a> */}
                  <Link fontSize={'13px'} fontWeight='500' color={'blue.400'} marginTop={'7px'}>Forgot your password?</Link>
      </form>
      </div>
      </div>
    </div>
  );
};
