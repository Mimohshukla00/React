import React from "react";
import { useState } from "react";

function App() {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    comments:false,
    candidates:false,
    offers:fals
  });
  // console.log(formdata.firstName)
  function handleClick(event) {
    console.log(formdata);
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
          value={formdata.email}
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
        <label htmlFor="street">street Address</label>
        <br></br>
        <input
          id="street"
          type="text"
          placeholder="1234 Main building"
          name="streetAddress"
          onChange={handleClick}
          value={formdata.streetAddress}
        ></input>
        <br></br>

        <label htmlFor="city">City</label>
        <br></br>
        <input
          id="city"
          type="text"
          placeholder="City"
          name="city"
          onChange={handleClick}
          value={formdata.city}
        ></input>
        <br></br>
        <label htmlFor="state">State/Province</label>
        <br></br>
        <input
          id="state"
          type="text"
          placeholder="Uttar Pradesh"
          name="state"
          onChange={handleClick}
          value={formdata.state}
        ></input>
        <br></br>
        <label htmlFor="zip-code">Pincode</label>
        <br></br>
        <input
          id="zip-code"
          type="text"
          placeholder="242042"
          name="zipCode"
          onChange={handleClick}
          value={formdata.zipCode}
        ></input>
        <br></br>
        <fieldset>
          <legend>BY Email</legend>
          <input
          id="comments"
          name="comments"
          type="checkbox"
          value={formdata.comments}
          ></input>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
