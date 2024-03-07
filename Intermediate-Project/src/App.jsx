// import { useState } from 'react'
import { Route, Router } from "react-router-dom"
import Navbar from "./Components/Navbar"
// import Home from "../../02 - React Intermediate/react-router/router-project-studyNotation/src/Components/Home"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar></Navbar>

      <Router>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="Dashboard" element={<Dashboard></Dashboard>}></Route>
      </Router>
    </div>

   
    </>
  )
}

export default App
