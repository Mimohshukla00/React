// import { useState } from 'react'
import { Route, Router } from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar></Navbar>

      <Router>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Router>
    </div>

   
    </>
  )
}

export default App
