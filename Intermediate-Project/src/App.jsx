// import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup.jsx";
import Dashboard from "./Components/Dashboard.jsx";
// import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import  { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        {/* <PrivateRoute isLoggedIn={isLoggedIn}>
          <Route path="/dashboard" element={<Dashboard />} />
        </PrivateRoute> */}
        <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
      </Routes>
    </div>
  );
}

export default App;
