// import React from 'react'

import Item from "./Item";
import Date from "./Date";



function Cards() {

    const object=[{
        name:"Nirma",
        day:10,
        month:"sept",
        year:2001
    
       },
       {
        name:"Surf excel",
        day:20,
        month:"january",
        year:2010
    
       },
       {
        name:"tide",
        day:31,
        month:"oct",
        year:2011
    
       },]
  return (
    <>
     <div className="card">
<Date day={object[0].day} month={object[0].month} year={object[0].year}></Date>
<Item name={object[0].name}></Item>

<Date day={object[1].day} month={object[1].month} year={object[1].year}></Date>
<Item name={object[1].name}></Item>

<Date day={object[2].day} month={object[2].month} year={object[2].year}></Date>
<Item name={object[2].name}></Item>

</div>
    </>
  );
}

export default Cards;
