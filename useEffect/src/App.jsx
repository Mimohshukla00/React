import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [mi, setmi] = useState("")
  function mimoh(params) {
    console.log(params.target.value);
    setmi(params.target.value)
  
  }
  // Variation1 - Every Render 
  useEffect(() => {
    console.log("UI Renderer changed")
  });
    
  

  return (
    <div>
     <input type='text' placeholder='enter your name bitch' onChange={mimoh}></input>
    <h2>{mi}</h2>
    </div>

  )
}

export default App
