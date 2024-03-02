import { useState,useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState("");



  // variation-1
  // useEffect(()=>{
  //   console.log("mimohshukla");

  // })
  // variation -2      >>>>>>>>only first render  

  // useEffect(()=>{
  //   console.log("second variation");

  // },[])


// variation -3  on first render also dependent on dependency


  // useEffect(()=>{
  //   console.log("second variation");

  // },[count])

// variation -4 

  useEffect(()=>{
    console.log("second variation");

  },[count])


  function handle(event) {
    setCount(event.target.value)
    console.log(event.target.value);
    
  }

  return (
    <>
      <div>
        <input type="text" onChange={handle} />
        <div>{count}</div>
      </div>
    </>
  );
}

export default App;
