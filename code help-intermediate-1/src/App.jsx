import { useState } from "react";
// import './App.css'

function App() {
  // const [firstname, setfirstname] = useState("")
  // const [secondname, setsecondname] = useState("")
  // function changeHandle1(params) {
  //   // console.log(params.target.value)
  //   setfirstname(params.target.value);
  //   // console.log(firstname)

  // }
  // function changeHandle2(params) {
  //   console.log(params.target.value)
  //   setsecondname(params.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email : "" ,
  });
  function changeHandle(event) {
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandle}
          name="FirstName"
        />
        <input
          type="text"
          placeholder="second name"
          onChange={changeHandle}
          name="lastname"
        />
        <input
          type="email"
          placeholder="enter your email"
          onChange={changeHandle}
          name="email"
        />
      </form>
    </div>
  );
}

export default App;
