import {
  Input,
  InputGroup,


} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { New_User } from "../../Redux/Authentication/SignUp/Actions";

const signUp = {
  email: "",
  password: "",
  mobileNum: "",
  is18: "false",
};
export const SignUp = () => {
  const [SignUpCredentails, setSignUpCredentials] = useState(signUp);
  const dispatch = useDispatch();
  const { new_user } = useSelector((store) => store.SignUp);
  const handleInput = (e) => {
    let { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      value = checked ? "true" : "false";
    }
    setSignUpCredentials({ ...SignUpCredentails, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/users").then(({ data }) => {
      for (let i = 0; i < data.length; i++) {
        if (SignUpCredentails.email === data[i].email) {
          alert("User Already Exits , Please Login");
          return;
        }
      }
      axios
        .post("http://localhost:8080/users", { ...SignUpCredentails })
        .then((res) => {
          alert("SignUp Sucessful");
          dispatch(New_User(true));
          <Navigate to="/login" />
        });
    });
  };

  if (new_user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="sign-up-container">
      <div className="sign-up__content-container">
        <h3 className="sign-up__heading">Sign Up</h3>
        <form
          action=""
          className="sign-up-form"
          >
          <fieldset className="sign-up-form__input-container">
          <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Name</label>
              <Input height={'30px'}
                type="text"
                name="username"
                placeholder="Enter Name"
                onChange={handleInput}
                required
              />
            </div>
            <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Mobile Number</label>
              <InputGroup>
            
            <Input height={'30px'}
              type="number"
              placeholder="phone number"
              name="mobileNum"
              onChange={handleInput}
            />
          </InputGroup>
            </div>
            <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Email</label>
              <Input height={'30px'}
               
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={handleInput}
                required
             />
            </div>
            <div className="sign-up-form__password sign-up__input-field">
                <div id='signup-password'>
                <label htmlFor="sign-uppassword">Password <span className='span'>(6 characters minimum)</span></label>
                </div>
             
                <Input height={'30px'}
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={handleInput}
                required
            />
            </div>
            <div className="sign-up-form__confirm-password sign-up__input-field">
              <label htmlFor="sign-up__confirm-password">
                Confirm Password
              </label>
              <Input height={'30px'}
                type="text"
                name="confirmPassword"
                id="sign-up__confirm-password"
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="sign-up__submit-btn"
            onClick={handleSignUp}>
              Sign Up
            </button>
            <Link 
            to="/signup" color={'#23527c'} MarginTop={'7px'} fontSize={'14px'}>Log in</Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
