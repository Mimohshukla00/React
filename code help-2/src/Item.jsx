import { useState } from "react";
// import React {useState} from 'react'
import "./item.css";

function Item(prop) {
  return (
    <>
      <div className="item">{prop.name}</div>
      <button className="button " onClick={clickhandle}>
        add to cart
      </button>
    </>
  );
}

export default Item;
