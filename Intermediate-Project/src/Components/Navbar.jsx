// import React from 'react'
import {Link} from "react-router-dom"
import logo from  "../assets/Logo.svg";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Company Logo" id='navbar-logo'/>
      </Link>
      <ul>

        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/" >Contact</Link>
        </li>
        <li>
          <Link to="/" >About</Link>
        </li>
        
      </ul>
    
    </div>
  );
}

export default Navbar;
