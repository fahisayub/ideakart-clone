import { Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router';
import {
    
    Link,
  
  } from '@chakra-ui/react';
import "./sign_up_login.css";
// import { ToastContainer, toast } from "react-toastify";
export default function SignUp() {
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
      });
    const handleSignup = (e) => {
        const inputName = e.target.name;
        setSignup({
          ...signup,
          [inputName]: e.target.value,
        });
      };
      const navigate = useNavigate();
      const onSignupSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userData", JSON.stringify(signup));
        //
        // console.log(document.getElementsById("fname"))
    
        signup.name = "";
        signup.email = "";
        signup.password = "";
        setSignup({
          ...signup,
        });
        // console.log(signup);
        navigate('/signin')
        
       
      };

    return (
    <div className="sign-up-container">
      <div className="sign-up__content-container">
        <h3 className="sign-up__heading">Sign Up</h3>
        <form
          action=""
          className="sign-up-form"
          onSubmit={onSignupSubmit}>
          <fieldset className="sign-up-form__input-container">
          <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Name</label>
              <Input height={'30px'}
                type="text"
                name="name"
                value={signup.name}
                id="sign-up__name"
                onChange={handleSignup}
              />
            </div>
            <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Mobile Number</label>
              <Input height={'30px'}
                type="number"
                name="number"
                id="sign-up__number"
                onChange={handleSignup}
              />
            </div>
            <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Email</label>
              <Input height={'30px'}
                type="email"
                name="email"
                value={signup.email}
                id="sign-up__email"
                onChange={handleSignup}
              />
            </div>
            <div className="sign-up-form__password sign-up__input-field">
                <div id='signup-password'>
                <label htmlFor="sign-uppassword">Password <span className='span'>(6 characters minimum)</span></label>
                </div>
             
              <Input height={'30px'}
                type="password"
                name="password"
                value={signup.password}
                id="sign-up__password"
                onChange={handleSignup}
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
                onChange={handleSignup}
              />
            </div>
          
            {/* {errorMessage && (
              <p className="sign-up-form__error-message">{errorMessage}</p>
            )} */}

            <button type="submit" className="sign-up__submit-btn">
              Sign Up
            </button>
            <Link 
            to="/signup" color={'#23527c'} marginTop={'7px'} fontSize={'14px'}>Log in</Link>
            
          </fieldset>
        </form>
      </div>
    </div>
  );
};

