import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate()
  return;

  <div>
    <div>Home</div>
    <button onClick={() => navigate("/")}>next Page </button>
    <button onClick={() => navigate(-1)}>Prvious page Page </button>
  </div>;
}

export default Home;
