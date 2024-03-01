// import React from 'react'
import { useState } from "react";

function Mimoh(prop) {
  console.log(prop.name);
  console.log(prop.number);
  console.log(prop.colledge);
  const [newName, setNewName] = useState(prop.name);
  const [newNumber, setNewNumber] = useState(prop.number);
  // const [newName, setNewName] = useState(prop.name);
  function handleEvent() {
    const newName="manish"
    setNewName(newName);
  }
  function handleEvent2() {
    setNewNumber(7233091999)
    
  }

  return (
    <>
      <div>{newName}</div>
      <button onClick={handleEvent}>Change the content </button>
      <div>{newNumber}</div>
      <button onClick={handleEvent2}>change the number</button>
      <div>{prop.colledge}</div>
    </>
  );
}

export default Mimoh;
