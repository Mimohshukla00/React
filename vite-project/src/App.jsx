// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./Pages/Layout";
// import Home from "./Pages/Home";
// import Blogs from "./Pages/Blogs";
// import Contact from "./Pages/Contact";
// // import NoPage from "./Pages/NoPage";
// import { NavLink } from "react-router-dom";
// import NoPage from "./Pages/NoPage";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (







    <div>
      <h2>Parent Component</h2>
      <nav>
        <ul>
          <li>
            <Link to="child1">Child 1</Link>
          </li>
          <li>
            <Link to="child2">Child 2</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet is a placeholder for child routes */}
      <Outlet />
    </div>

    
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink to="/">Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/Contact">Contact</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/Layout">Layout</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/Blogs">Blogs</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/Nopage">No page Found</NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="/Contact" element={<Contact />} />
    //     <Route path="/Layout" element={<Layout />} />
    //     <Route path="/Blogs" element={<Blogs />} />
    //     <Route path="/Nopage" element={<NoPage />} />
    //   </Routes>
    // </div>
  );
}

export default App;
