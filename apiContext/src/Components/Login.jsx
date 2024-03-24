import React from "react";
import UserContext from "../Context/Usercontext";
import { useState } from "react";
// import UserContext from "../Context/Usercontext";
import { useContext } from "react";

function Login() {
  const [UserName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  function handlechange(params) {
    setUserName(params.target.value);
    console.log(params.target.value);
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={UserName}
        onChange={handlechange}
      ></input>
    </div>
  );
}

export default Login;
