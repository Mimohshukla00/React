import  { useState } from "react";
import "./Item.css";

function Item(prop) {
  const [name, setname] = useState(prop.name);
  function handle() {
    setname("whomimohshukla")
  }

  return (
    <>
      <div className="item">{name}</div>
      <button className="button" onClick={handle}>Change the content</button>
    </>
  );
}

export default Item;
