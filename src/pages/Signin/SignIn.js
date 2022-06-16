import React, { useState } from 'react'
import {
    Checkbox,
    Input,
    Link,
  
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
export default function SignIn() {
  
    
      const [signin, setSignin] = useState({
        email: "",
        password: "",
      });
    
      const navigate = useNavigate();
    
      const handleSignin = (e) => {
        const inputName = e.target.name;
        setSignin({
          ...signin,
          [inputName]: e.target.value,
        });
      };
      
      const onSigninSubmit = (e) => {
        e.preventDefault();
        let userData = JSON.parse(localStorage.getItem("userData"));
        if (
          userData.email === signin.email &&
          userData.password === signin.password
        ) {
          signin.email = "";
          signin.password = "";         
          navigate("/");
        } else {
          alert("Invalid credentials")
        }
      };
    return (
        <div>
          <div className="login-container">
            <div className="login__content-container">
              <h3 className="login__heading">Login</h3>
              <form
                onSubmit={onSigninSubmit}
                action=""
                className="login-form"
              >
                <fieldset className="login-form__input-container">
                  <div className="login-form__email login__input-field">
                    <label htmlFor="login__email">Email</label>
                   <Input height={'30px'}
                      type="email"
                      name="email"
                      value={signin.email}
                      id="login__email"
                      onChange={handleSignin}
                    />
                  </div>
                  <div className="login-form__password login__input-field">
                    <label htmlFor="login__password">Password</label>
                    <Input 
                    
                    height={'30px'}
                      type="password"
                      name="password"
                      value={signin.password}
                      id="login__password"
                      onChange={handleSignin}
                    />
                  </div>
                  <div className="rembr">
                    
                    <Checkbox></Checkbox>
                    <label>Remember me</label>
                  </div>
                 
                
                
                <input
                type="submit"
                className="submit-btn"
                value="SIGN IN"
                
                 />
                  <Link to="/signup" color={'blue.400'} fontWeight='500' marginTop={'7px'} fontSize={'13px'}>signup</Link>
                  {/* <a href=''></a> */}
                  <Link fontSize={'13px'} fontWeight='500' color={'blue.400'} marginTop={'7px'}>Forgot your password?</Link>
                </fieldset>
              </form>
            </div>
    
          </div>
        </div>
      );
    
}
