// import React from 'react'
// import Card from "./Card";

function Cards(prop) {
  let courses = prop.courses;
  console.log(courses);

  function getCourses() {
    let allcourses = [];
    Object.values(courses).forEach((item) => {
      // console.log(item);
      if (item.isArray(item)) {
        item.forEach((element) => {
            // Your code here
            console.log(element);
        });
    } else {
        console.error("item is not an array");
    }
    

      // item.forEach((e) => {
      //   console.log(e);
      // });
    });
    return allcourses;
  }
  getCourses();

  return <div>mimohshukla</div>;
}

export default Cards;
