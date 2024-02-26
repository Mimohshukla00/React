
import { useEffect, useState } from "react";

function App() {
  const[text,settext]=useState("")
  const[name,setname]=useState("love")
//FIRST VARIATION => every render
  // useEffect(()=>console.log("rendering "))
  //SECOND VARIATION => first render
  // useEffect(()=>{
  //   console.log("RENDERING UI");
  // },[])
  
  // dependies

  // useEffect(()=>{
  //   console.log("Change observed");
  // },[name])

//  >>>> fourth variation 
useEffect(()=>{
console.log("listener added");
  // addeventlistner

  return ()=>{
    console.log("listner removed");
  }


},[text])


  function changeHandler(e) {
    settext(e.target.value)
   console.log(text);
    
  }


  return (
    <div>
      <input type="text" onChange={changeHandler}></input>
     
    </div>
  );
}

export default App;
