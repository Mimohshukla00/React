import { useState } from "react";


import "./App.css";



function App() {
  const [filterData, setfilterdata] = useState(0);

  return (
    <>
      <div>
        

        <Filter></Filter>

        <Cards></Cards>
      </div>
    </>
  );
}

export default App;
