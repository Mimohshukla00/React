// import React from 'react'

function Card(props) {
  // const course= props.course;
  console.log(props)
  return (
    <div>
      <div>
        <img src={props.course.Image.url} />
      </div>
    </div>
  )
}

export default Card