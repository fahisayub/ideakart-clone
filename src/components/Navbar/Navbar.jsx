import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
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
            <Link to='/signup'><p>Sign Up</p></Link>
            <Link to='/signin'><p>Sign In</p></Link>
            <Link to="/dashboard"><p>Dashboard</p></Link>
            

            </div>
            
        </div>
    );
};

export default Navbar;