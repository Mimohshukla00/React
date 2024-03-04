import React from "react";
import { useState } from "react";

function App() {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: ""
  });
  // console.log(formdata.firstName)
  function handleClick(event) {
    // console.log(event);
    setFormData((prevdata) => {
      console.log(formdata.country)
      // console.log(prevdata);
      return { ...prevdata, [event.target.name]: event.target.value };
    });
  }
  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name</label>
        <br></br>
        <input
          id="firstName"
          type="text"
          placeholder="Enter FirstName"
          name="firstName"
          onChange={handleClick}
          value={formdata.firstName}
        ></input>
        <br></br>
        <label htmlFor="lastName">List Name</label>
        <br></br>
        <input
          id="lastName"
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          onChange={handleClick}
        ></input>
        <br></br>
        <label htmlFor="email">Email</label>
        <br></br>
        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleClick}
        ></input>
        <br></br>
        <label htmlFor="dropDown">Country</label>
        <br></br>

        <select
          id="dropDown"
          name="country"
          value={formdata.country}
          onChange={handleClick}
        >
          <option 
          value="formdata.India">India</option>
          <option value={formdata.Nepal}>Nepal</option>
          <option value={formdata.Australia}>Australia</option>
          <option value={formdata.Japan}>Japan</option>
        </select>
      </form>
    </div>
  );
}

export default App;
