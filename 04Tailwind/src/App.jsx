import { useState } from "react";
import Card from "./Card";

import "./App.css";

function App() {
 
  const myObject = {
    name: "John",
    age: 30
  };
  return (
    <>
    
      <h2 className="text-red-700 bore">Whomimohshukla</h2>
      <div className="border-double border-4 border-sky-500 ..."></div>
      <Card  myobject="mimohshukla"/>
      <Card username="prashant"/>
      <Card button="mujhedabao"/>
     

    </>
  );
}

export default App;
