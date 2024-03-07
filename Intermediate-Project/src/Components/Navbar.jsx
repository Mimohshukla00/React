// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { useState } from "react";

function Navbar(props) {
  // console.log(props.isLoggedIn);
  const isLoggedIn=props.isLoggedIn
  const setIsLoggedIn=props.setIsLoggedIn
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Company Logo" id="navbar-logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>

      <div>

        {
          !isLoggedIn &&
          <Link to="/login">
            <button>Login</button>
          </Link>
        }
        {
          !isLoggedIn &&
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button>Log Out</button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to="/Dashboard">
            <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
