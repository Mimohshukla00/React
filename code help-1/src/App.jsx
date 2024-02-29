// import { useState } from "react";

// import './App.css'
import Item from "./Item";
import Itemprice from "./Itemprice";

function App() {
  // const [count, setCount] = useState(0);
  const response = [{

    date:20,
    month:"july",
    year:2005
  }, 
  {
    date:10,
    month:"august",
    year:2008
  },
  {
    date:30,
    month:"feb",
    year:2015
  }
  ];

  return (
    <>
      {/* <div>mimohshukla</div> */}
      <Item name="Maggi" ></Item>
      <Itemprice  date={response[0].date} day={response[0].month} month={response[0].year} > hello its mimohshukla</Itemprice>
      <Item name="harpic" ></Item>
      <Itemprice  date={response[1].date} day={response[1].month} month={response[1].year}></Itemprice>
      <Item name="atta" ></Item>
      <Itemprice date={response[2].date} day={response[2].month} month={response[2].year}></Itemprice>
    </>
  );
}

export default App;
