// import { useState } from "react";

import Mimoh from "./Mimoh";

function App() {
  // const [count, setCount] = useState(0);

  const intro={
    name:"whomimohshukla",
    number:723309199,
    colledge:"IIMT University"
  }

  return (
    <>
      <Mimoh name={intro.name} number={intro.number} colledge={intro.colledge}></Mimoh>
    </>
  );
}

export default App;
