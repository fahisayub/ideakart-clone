import { Button, Menu, MenuButton, MenuItem, MenuList, Select, Switch } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Valid_User } from '../../Redux/Authentication/Login/Action';
import "./Navbar.css"
import { useSelector, useDispatch } from "react-redux";

import { ChevronDownIcon } from '@chakra-ui/icons';
const Navbar = () => {
    const auth  = useSelector((store) => store.auth);


    const dispatch = useDispatch();
    
    return (
    <div id='navbar'>
            <div id='titile'>
            <Link to='/'><p id='logo'>IDEAKART</p></Link>
            <div>
            <input type="text" id='search' placeholder='Search' />
            <button id='button'>Search</button>
            </div>
            </div>          
            <div id='about'>
            <Link to="/about"><p>About</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
           
            


            </div>
        {!auth.auth ? (
        <div className="Navbar">
          <div>
            <div>
              <Link to="/login">              
                  Login               
              </Link>
              {"   "}
              <Link to="/signUp">
                  SignUp              
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <div>
                <div>
                  <Menu >
                    <MenuButton  as={Button } rightIcon={<ChevronDownIcon />}>
                    {auth.email}
                    </MenuButton>
                    <MenuList>
                      <MenuItem><Link to="/">
                      <Button colorScheme='teal' variant='link'
                        onClick={() =>
                          dispatch(Valid_User({ auth: false, email: "" }))
                        } 
                        > LogOut
                      </Button>
                      </Link></MenuItem>
                      <MenuItem> <Link to="/dashboard"><p>Dashboard</p></Link></MenuItem>                
                    </MenuList>
                  </Menu>
                </div>
                
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;



