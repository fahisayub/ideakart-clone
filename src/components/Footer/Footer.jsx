import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='footer'>
      <div>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
        <p>Search</p>
      </div>
      <div>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>Earn Money Online</p>
      </div>
      <div>
        <p>QuickBuyer</p>
      </div>
    </div>
  )
}

export default Footer