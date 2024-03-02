// import React from 'react'
import Card from "./Card"

function Cards({courses}) {
    // console.log(prop);
   

    function getCourses() {
        let allCourses=[]
        Object.values(data).forEach((element) => {
            allCourses.push(...element);
          });
          return allCourses
        }
       
        return (
            <div>
              {Object.values(prop.courses).flat().map((course) => (
                <Card key={course.id} />
              ))}
            </div>
          ); 
    }

    

          
export default Cards