// import React from 'react'
import "./date.css"

function Date(prop) {
  return (
    <div className="date">
      <div>{prop.day}</div>
      <div>{prop.month}</div>
      <div>{prop.year}</div>
    </div>
  );
}

export default Date;
