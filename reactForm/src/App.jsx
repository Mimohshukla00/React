import React from "react";
import { useState } from "react";

function App() {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });
  // console.log(formdata.firstName)
  function handleClick(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          <option>India</option>
          <option>Nepal</option>
          <option>Australia</option>
          <option>Japan</option>
        </select>

        <br></br>
        <label htmlFor="email">Email</label>
        <br></br>
        <input
          id="street"
          type="text"
          placeholder="1234 Main building"
          name="email"
          onChange={handleClick}
        ></input>
        <br></br>
      </form>
    </div>
  );
}

export default App;
