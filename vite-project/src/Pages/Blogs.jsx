// import React from 'react'
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Blogs</div>
      <button onClick={() => navigate("/Contact")}>next Page </button>
      <button onClick={() => navigate(-1)}>Prvious page Page </button>
    </div>
  );
}

export default Blogs;
