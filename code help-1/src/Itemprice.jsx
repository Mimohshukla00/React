import React from "react";
import "./Itemprice.css";

function Itemprice(prop) {
  const date=prop.date
  const month=prop.month
  const year=prop.year

  return (
    <div className="itemprice">
      <div> {date} </div>
      {prop.children}
      <div> {month} </div>
      <div>{year} </div>
    </div>
  );
}

export default Itemprice;
