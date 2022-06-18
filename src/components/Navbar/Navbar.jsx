import { Button, Menu, MenuButton, MenuItem, MenuList, } from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Valid_User } from '../../Redux/Authentication/Login/Action';
import "./Navbar.css"
import { useSelector, useDispatch } from "react-redux";

import { ChevronDownIcon } from '@chakra-ui/icons';
const Navbar = () => {
    const auth  = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    return (
    <div id='navbar' >
            <div id='titile'>
            <Link to='/'><p id='logo'>IDEAKART</p></Link>
            <div>
            <div className='search-part'>
                <input  type="text" placeholder='Search'  className="search-part" />
                <button className='button'>Search</button>
            </div>
            
            </div>
            </div> 
  <div className='all'>    
           <div className='about'><Link to="/about"><p>About</p></Link></div>
            <div className='contact'>
            <Link to="/contact"><p>Contact</p></Link>

            </div>
        {!auth.auth ? (
        
        <div >
          <div>
            <div className='signinup'>
              <Link to="/login">              
                  Sign In             
              </Link>
              {"   "}
              <Link to="/signUp" id='signup'>
                  Sign Up              
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
                    <MenuButton  as={Button } rightIcon={<ChevronDownIcon className='new-button'/> } className='new-button' color={'white'} background='none' >
                    {auth.username}
                    </MenuButton>
                    <MenuList>
                    <MenuItem> <Link to="/dashboard"><p>Dashboard</p></Link></MenuItem>                
                      <MenuItem> <Link to="/accountInfo"><p>Account info</p></Link></MenuItem>                
                      <MenuItem> <Link to="/notification"><p>Notifications</p></Link></MenuItem>      
                      <MenuItem  color='teal' fontSize='20px'
                        onClick={() =>{
                          
                          dispatch(Valid_User({ auth: false, email: "", username: "" }));
                           navigate('/');
                        }
                        } >
                      Signout
                     
                      </MenuItem>
                                
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
</div>     
  );
};
export default Navbar;



