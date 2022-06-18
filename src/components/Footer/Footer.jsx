import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='footer'>
      <div>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
       <Link to="/search"><p>Search</p></Link> 
      </div>
      <div>
       <Link to="/privacy"><p>Privacy Policy</p></Link> 
      <Link to="/refund"><p>Refund Policy</p></Link>  
        <Link to="/earn"><p>Earn Money Online</p></Link>
      </div>
      <div>
        <p>QuickBuyer</p>
      </div>
    </div>
  )
}

export default Footer