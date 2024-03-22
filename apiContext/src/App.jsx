import { useState } from "react";

import "./App.css";
import { useContext } from "react";
import UserContext from "./Context/Usercontext";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
   <UserContextProvider>
    <h1>mimohshukla</h1>
    <Login></Login>
   </UserContextProvider>
  );
}

export default App;
