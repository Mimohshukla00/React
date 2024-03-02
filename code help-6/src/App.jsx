// import { useState } from 'react'
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
// import './App.css'
import { apiUrl, filterData } from "./Data";

import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true)
   try {
    const response= await fetch(apiUrl)
   const responseData=await response.json();
   console.log(responseData);
   setCourses(responseData)
    
   } catch (error) {
toast.error( "Error Occured while Fetching Data");
    
   }
setLoading(false)

  }
  
 useEffect(()=>{
  fetchData()
 },[])





  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterData={filterData}></Filter>
      </div>
      <div>
        {
          loading?()
        }
      </div>
    </>
  );
}

export default App;
