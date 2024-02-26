import React from "react";

import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
function App() {
  return (
<div>
  <Navbar></Navbar>

  <Filter filter="Filterdata"></Filter>

  <Cards></Cards>


</div>
  );
}

export default App;
