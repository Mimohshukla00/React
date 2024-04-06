import React, { useState } from "react";
import AppContext from "./AppContext";
function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);



  // data
  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

  async  function fetchData() {
    setLoading(true)
    try {
      const result = await fetch(baseUrl)
      const data=await result.json();
      console.log(data)
    }
    catch(error){
      alert("Error Fetching Data")
    }finally{
      setLoading(false)


    }
  }
      







  const value={
    posts,
    loading,
    page,
    totalPages,
    setLoading,setPage,
    setPosts,
    setTotalPages
  }

  return <div>AppContextProvider</div>;
}

export default AppContextProvider;
