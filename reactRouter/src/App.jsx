// import React from 'react'
import {Routes,Route,NavLink} from  "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Support from "./Components/Support";
import Labs from "./Components/Labs";
import NotFound from "./Components/NotFound";
import MainHeader from "./Components/MainHeader";
import "./App.css"



function App() {
  return (
    <div>


      
    <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>














    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/support" element={<Support />} />
    <Route path="/about" element={<About />} />
    <Route path="/labs" element={<Labs />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<MainHeader />}>
      {/* Default Route 
      {/* <Route index element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
      <Route path="/labs" element={<Labs />} />
      <Route path="*" element={<NotFound />} /> */}
    </Route>
  </Routes>
    </div>


  )
}

export default App