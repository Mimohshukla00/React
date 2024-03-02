// import React from 'react'
import Card from './Card'

function Testimonial(props) {
     const reviews=props.reviews
    console.log(reviews)
    // console.log(reviews[0])
    // console.log(props);
    // const reviews=props.reviews;
  return (
    <div>
        <Card reviews={reviews[0]}></Card>
    </div>
  )
}

export default Testimonial