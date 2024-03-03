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
    comment:"",
    isvisible:true,
  });
  function changeHandle(event) {
    console.log(formData);
    const {name,value,Checked,type}=event.target;
    setFormData((prevformData) => {
      // console.log(...prevformData);
      // console.log(event.target.value)
      
      return {
        ...prevformData,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ?Checked : value
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
          value={formData.FirstName}
        />
        <br></br>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="second name"
          onChange={changeHandle}
          name="lastname"
          value={formData.LastName}
        />
        <br></br>
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="enter your email"
          onChange={changeHandle}
          name="email"
          value={formData.Email}
        />
      </form>


      <br></br>
      <br></br>
      <br></br>
      <textarea placeholder="enter your comments here " onChange={changeHandle} value={formData.comment} name="comment"></textarea>

      <br></br>
      <br></br>
      <br></br>
      <input  id="isvisible"  onClick={changeHandle} type="checkbox" name="isvisible" checked={formData.isvisible}></input>
      <label htmlFor="isvisible">Am i visible</label>
      
    </div>
  );
}

export default App;
