import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <div>Contact</div>
        <button
          onClick={() => {
            navigate("/Blogs");
          }}
        >
          Go to Blogs
        </button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default Contact;
